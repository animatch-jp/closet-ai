// なんでも話せるAI：スマホ・パソコンの中だけで動く小さな言語モデル（別スレッドで動かす）
const LIB = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/dist/transformers.min.js";
const MODEL = "onnx-community/LFM2.5-350M-ONNX";
let tf = null, gen = null, loading = null, stopper = null, device = "wasm";

async function load() {
  tf = await import(LIB);
  tf.env.allowLocalModels = false;
  try { if (self.navigator.gpu && await self.navigator.gpu.requestAdapter()) device = "webgpu"; } catch (e) { device = "wasm"; }
  const opts = d => ({
    dtype: "q4", device: d,
    progress_callback: e => { if (e.status === "progress_total" && e.total) postMessage({ type: "prog", p: e.progress, loaded: e.loaded, total: e.total }); }
  });
  try { gen = await tf.pipeline("text-generation", MODEL, opts(device)); }
  catch (e) { if (device !== "webgpu") throw e; device = "wasm"; gen = await tf.pipeline("text-generation", MODEL, opts("wasm")); }
}

self.onmessage = async ({ data }) => {
  if (data.type === "load") {
    try { if (!gen) { loading = loading || load(); await loading; } postMessage({ type: "ready", device }); }
    catch (e) { loading = null; postMessage({ type: "error", msg: String(e && e.message || e) }); }
    return;
  }
  if (data.type === "stop") { if (stopper) stopper.interrupt(); return; }
  if (data.type === "gen") {
    if (!gen) { postMessage({ type: "error", id: data.id, msg: "not ready" }); return; }
    stopper = tf.InterruptableStoppingCriteria ? new tf.InterruptableStoppingCriteria() : null;
    const streamer = new tf.TextStreamer(gen.tokenizer, { skip_prompt: true, skip_special_tokens: true, callback_function: t => postMessage({ type: "tok", id: data.id, t }) });
    try {
      const out = await gen(data.messages, { max_new_tokens: data.max || 220, do_sample: false, repetition_penalty: 1.05, streamer, ...(stopper ? { stopping_criteria: stopper } : {}) });
      const last = out[0].generated_text;
      postMessage({ type: "done", id: data.id, text: Array.isArray(last) ? last.at(-1).content : String(last) });
    } catch (e) { postMessage({ type: "error", id: data.id, msg: String(e && e.message || e) }); }
    stopper = null;
  }
};
