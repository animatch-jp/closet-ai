// できることツアー：光の筋の中で、光るハンガーと服のガラスカードが、スクロールに合わせて並び変わる
{
const P = window.CA_PHOTOS;
const sec = document.getElementById("tour"), pin = sec.querySelector(".tpin"), stage = sec.querySelector(".tstage");
const cv = sec.querySelector(".tbeams"), cx = cv.getContext("2d");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const lerp = (a, b, t) => a + (b - a) * t;

const TX = {
  ja: [["撮るだけ", "服を撮ると、AIが種類と色を読み取って、あなたのクローゼットに並べます。"], ["AIが選ぶ", "天気と予定に合わせて、手持ちの服からいちばんいい組み合わせを。相性は点数で分かります。"], ["話しかける", "「ライブに行く服は？」「もっと明るく」。話しかけるだけで、何度でも作り直します。"], ["買う前に", "お店で撮れば、似た服を持っていないか、コーデが何通り増えるかがその場で分かります。"], ["毎日に残す", "着た服を記録して、眠っている服を起こす。旅行の荷物も、少ない服で。"]],
  en: [["Just snap", "Photograph your clothes. AI reads the type and color and hangs them in your closet."], ["AI picks", "The best combo from what you own, matched to weather and plans, with a score."], ["Just ask", "\"What do I wear to a concert?\" \"Brighter.\" Talk to it and it rebuilds the look."], ["Before you buy", "Snap it in the store: see if you own something similar and how many outfits it adds."], ["Every day", "Log what you wear, wake up forgotten pieces, and pack light for trips."]],
  chip: { ja: ["相性 <b>94</b>点", "<b>+54</b>通り", "買い度 <b>77</b>", "活用度 <b>82</b>%", "NEW"], en: ["Match <b>94</b>", "<b>+54</b> outfits", "Buy score <b>77</b>", "In use <b>82</b>%", "NEW"] },
  bub: { ja: ["ライブに行く服は？", "これでどう？ 相性 92点", "もっと明るく！"], en: ["Outfit for a concert?", "How's this? Match 92", "Brighter!"] }
};
const IDS = ["s7", "s2", "s6", "s10", "s4", "s3", "s5", "s8", "s12", "s1", "s13", "s11", "s9"];
const N = IDS.length, CAND = N - 1;
const tilesBox = sec.querySelector(".ttiles");
tilesBox.innerHTML = IDS.map((id, k) => { const s = P.SAMPLE.find(x => x.id === id); return `<div class="ttile${k === CAND ? " cand" : ""}" style="--hue:${(k * 37) % 360}"><img src="${P.U(s.photo, 240, 240)}" alt="" loading="lazy" decoding="async" style="object-position:${s.pos}" onerror="this.remove()">${k === CAND ? '<i class="ttag"></i>' : ""}</div>`; }).join("");
const tiles = [...tilesBox.children];
const steps = [...sec.querySelectorAll(".tstep")], navs = [...sec.querySelectorAll(".tnav i")];
const chips = [...sec.querySelectorAll(".tchip")], bubs = [...sec.querySelectorAll(".tbub")], hanger = sec.querySelector(".thanger");
const COLORS = [[124, 247, 255], [169, 155, 255], [255, 122, 217], [228, 255, 107], [125, 255, 176]];

// 並び方（単位 u = ステージの短い辺の1%、中心が0）
function layout(s, k, time) {
  const o = { x: 0, y: 0, sc: 1, op: 1, rz: 0, glow: 0 };
  if (s === 0) { const a = k / N * Math.PI * 2 + time * 0.18, d = (Math.sin(a) + 1) / 2; o.x = Math.cos(a) * 40; o.y = 8 + Math.sin(a) * 15; o.sc = 0.62 + 0.38 * d; o.op = 0.35 + 0.65 * d; o.rz = Math.cos(a) * 8; o.z = Math.round(d * 100); }
  else if (s === 1) { if (k < 4) { o.x = (k % 2 ? 1 : -1) * 11; o.y = (k < 2 ? 0 : 23) + 2; o.sc = 1.05; o.glow = 1; o.rz = (k % 2 ? 2 : -2); o.z = 200; } else { const a = k / N * Math.PI * 2 + time * 0.05; o.x = Math.cos(a) * 52; o.y = 10 + Math.sin(a) * 30; o.sc = 0.45; o.op = 0.16; } }
  else if (s === 2) { if (k === 4 || k === 0 || k === 6) { const j = [4, 0, 6].indexOf(k); o.x = -27 + j * 19; o.y = 10; o.sc = 0.82; o.glow = 0.6; o.z = 200; } else { const a = k / N * Math.PI * 2 + time * 0.05; o.x = Math.cos(a) * 55; o.y = 10 + Math.sin(a) * 32; o.sc = 0.4; o.op = 0.12; } }
  else if (s === 3) { if (k === CAND) { o.x = 0; o.y = 6; o.sc = 1.35; o.glow = 1.4; o.z = 300; } else { const a = (k / (N - 1)) * Math.PI * 2 - Math.PI / 2 + time * 0.1, r = 34; o.x = Math.cos(a) * r * 1.15; o.y = 6 + Math.sin(a) * r * 0.9; o.sc = 0.58; o.op = k < 8 ? 0.95 : 0.35; o.glow = k < 8 ? 0.35 : 0; } }
  else { const col = k % 7, row = Math.floor(k / 7); o.x = (col - 3) * 12.5; o.y = row * 15 + 2; o.sc = 0.6; o.op = 0.95; o.glow = 0.3; o.rz = 0; }
  if (o.z == null) o.z = 50;
  return o;
}
let target = 0, cur = 0, raf = 0, vis = false, lastLang = "", W = 0, H = 0, dpr = 1, t0 = performance.now();
function size() { const r = pin.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, innerWidth < 700 ? 1.25 : 1.6); W = r.width; H = r.height; cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); }
function read() { const r = sec.getBoundingClientRect(), total = sec.offsetHeight - innerHeight; target = clamp(-r.top / Math.max(1, total)) * 4.999; kick(); }
function kick() { if (!raf && vis) raf = requestAnimationFrame(tick); }
function tick(now) {
  raf = 0;
  cur += (target - cur) * (still || window.__snap ? 1 : 0.12);
  draw(cur, still ? 0 : (now - t0) / 1000);
  if (vis && !still) raf = requestAnimationFrame(tick);
}
function lang() { return document.documentElement.lang === "en" ? "en" : "ja"; }
function texts() {
  const L = lang(); if (L === lastLang) return; lastLang = L;
  steps.forEach((s, i) => { s.querySelector("h3").textContent = TX[L][i][0]; s.querySelector("p").textContent = TX[L][i][1]; });
  chips.forEach((c, i) => c.innerHTML = TX.chip[L][i]);
  bubs.forEach((b, i) => b.textContent = TX.bub[L][i]);
  sec.querySelector(".ttag") && (sec.querySelector(".ttag").textContent = TX.chip[L][4]);
}
function draw(p, time) {
  texts();
  const s = Math.min(4, Math.floor(p)), fr = p - s, f = s >= 4 ? 0 : ease(clamp((fr - 0.5) / 0.5));
  const phone = W / H < 0.9, sr = stage.getBoundingClientRect(), u = Math.min(sr.width, sr.height) / 100;
  // カード
  tiles.forEach((el, k) => {
    const A = layout(s, k, time), B = s < 4 ? layout(s + 1, k, time) : A;
    const x = lerp(A.x, B.x, f), y = lerp(A.y, B.y, f), sc = lerp(A.sc, B.sc, f), op = lerp(A.op, B.op, f), rz = lerp(A.rz, B.rz, f), gl = lerp(A.glow, B.glow, f);
    const bob = still ? 0 : Math.sin(time * 1.3 + k) * 0.8;
    el.style.transform = `translate(-50%,-50%) translate(${(x * u).toFixed(1)}px,${((y + bob) * u).toFixed(1)}px) rotate(${rz.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
    el.style.opacity = op.toFixed(3); el.style.zIndex = Math.round(lerp(A.z, B.z, f)); el.style.setProperty("--gl", gl.toFixed(2));
  });
  // ハンガー
  const hy = [-30, -25, -28, -30, -27], hs = [1, 0.92, 0.8, 0.85, 0.75];
  const hY = lerp(hy[s], hy[Math.min(4, s + 1)], f), hS = lerp(hs[s], hs[Math.min(4, s + 1)], f), tilt = still ? 0 : Math.sin(time * 0.7) * 3 + (f * (1 - f)) * 24;
  hanger.style.transform = `translate(-50%,-50%) translateY(${(hY * u).toFixed(1)}px) rotate(${tilt.toFixed(2)}deg) scale(${hS.toFixed(3)})`;
  // 文字・目印
  steps.forEach((el, i) => { const v = i === s ? 1 - f : i === s + 1 ? f : 0; el.style.opacity = v.toFixed(3); el.style.transform = `translateY(${((1 - v) * (i <= s ? -18 : 18)).toFixed(1)}px)`; el.style.visibility = v < 0.02 ? "hidden" : "visible"; });
  navs.forEach((el, i) => el.classList.toggle("on", i === (f > 0.5 ? s + 1 : s)));
  const vis1 = st => st === s ? 1 - f : st === s + 1 ? f : 0;
  chips[0].style.opacity = vis1(1); chips[1].style.opacity = vis1(3); chips[2].style.opacity = vis1(3); chips[3].style.opacity = vis1(4);
  bubs.forEach((b, i) => { const v = vis1(2); b.style.opacity = v; b.style.transform = `translateY(${((1 - v) * 14 + i * 0).toFixed(1)}px)`; });
  // 光の筋
  const c1 = COLORS[s], c2 = COLORS[Math.min(4, s + 1)], rgb = c1.map((v, i) => Math.round(lerp(v, c2[i], f)));
  const pr = pin.getBoundingClientRect(), ox = sr.left - pr.left + sr.width / 2, oy = sr.top - pr.top + sr.height / 2 + hY * u - 3 * u * hS;
  beams(ox, oy, rgb, time, u);
}
function beams(ox, oy, rgb, time, u) {
  const x = cx; x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, W, H);
  x.globalCompositeOperation = "lighter";
  const n = W < 700 ? 22 : 34, L = Math.hypot(W, H);
  for (let i = 0; i < n; i++) {
    const seed = Math.sin(i * 91.7) * 0.5 + 0.5, a = i / n * Math.PI * 2 + time * (0.03 + seed * 0.03) + seed;
    const len = L * (0.45 + seed * 0.6), w = (0.004 + seed * 0.022) * Math.PI, pulse = 0.55 + 0.45 * Math.sin(time * (0.6 + seed) + i);
    const g = x.createRadialGradient(ox, oy, 0, ox, oy, len);
    g.addColorStop(0, `rgba(${rgb},${(0.32 * pulse).toFixed(3)})`); g.addColorStop(0.35, `rgba(${rgb},${(0.09 * pulse).toFixed(3)})`); g.addColorStop(1, `rgba(${rgb},0)`);
    x.fillStyle = g; x.beginPath(); x.moveTo(ox, oy); x.arc(ox, oy, len, a - w, a + w); x.closePath(); x.fill();
  }
  const b = x.createRadialGradient(ox, oy, 0, ox, oy, 40 * u);
  b.addColorStop(0, `rgba(255,255,255,.55)`); b.addColorStop(0.12, `rgba(${rgb},.35)`); b.addColorStop(1, `rgba(${rgb},0)`);
  x.fillStyle = b; x.beginPath(); x.arc(ox, oy, 40 * u, 0, Math.PI * 2); x.fill();
  x.globalCompositeOperation = "source-over";
}
new IntersectionObserver(es => { vis = es[0].isIntersecting; if (vis) { size(); read(); kick(); } }, { rootMargin: "100px" }).observe(sec);
addEventListener("scroll", read, { passive: true });
addEventListener("resize", () => { size(); read(); draw(cur, (performance.now() - t0) / 1000); });
document.addEventListener("ca:lang", () => { lastLang = ""; draw(cur, (performance.now() - t0) / 1000); });
size(); read(); draw(0, 0);
}
// さいごの章：スクロールで光の向きと大きなロゴの色が動く
{
  const o = document.getElementById("outro");
  if (o && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let raf = 0;
    const upd = () => { raf = 0; const r = o.getBoundingClientRect(), vh = innerHeight; const v = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height * 0.4))); o.style.setProperty("--o", v.toFixed(3)); };
    addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(upd); }, { passive: true }); addEventListener("resize", upd); upd();
  } else if (o) o.style.setProperty("--o", "1");
}
