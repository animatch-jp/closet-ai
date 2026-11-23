// 写真で進む入口：人物写真 → AIスキャン → 手持ちの服で再現 → コーデ完成
{
const P = window.CA_PHOTOS;
const sec = document.getElementById("hero"), pin = sec.querySelector(".pin");
const frame = document.getElementById("hframe"), scan = document.getElementById("hscan");
const boxes = [...sec.querySelectorAll(".hbox")];
const PICK = [["s7", 1], ["s4"], ["s6", 1], ["s8"], ["s2", 1], ["s5"], ["s10", 1], ["s11"]];
sec.querySelector(".hprods").innerHTML = PICK.map(([id, hit]) => { const s = P.SAMPLE.find(x => x.id === id); return `<div class="hprod"${hit ? ' data-hit="1"' : ""}><img src="${P.U(s.photo, 300, 300)}" alt="" style="object-position:${s.pos}" onerror="this.style.visibility='hidden'"><i></i></div>`; }).join("");
const prods = [...sec.querySelectorAll(".hprod")];
const meter = document.getElementById("hmeter"), meterBox = sec.querySelector(".hmeter");
const caps = [...sec.querySelectorAll(".cap")], hint = sec.querySelector(".hint"), wx = sec.querySelector(".hwx");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const range = (p, a, b) => clamp((p - a) / (b - a));
const ease = t => 1 - Math.pow(1 - t, 3);
const heroImg = P.U(P.HERO.ph, 900, 1350);
sec.querySelector(".amb").style.backgroundImage = `url("${heroImg}")`;
frame.querySelector("img").src = heroImg;
const LABEL = { ja: ["ジャケット・グレー 97%", "Tシャツ・黒 94%", "パンツ・黒 96%", "スニーカー・白 98%"], en: ["JACKET · GREY 97%", "T-SHIRT · BLACK 94%", "TROUSERS · BLACK 96%", "SNEAKERS · WHITE 98%"] };
const L1 = P.LOOKS[0];
boxes.forEach((b, i) => { const [l, t, w, h] = L1.items[i].box; Object.assign(b.style, { left: l + "%", top: t + "%", width: w + "%", height: h + "%" }); b.dataset.t0 = t; });
let target = 0, cur = 0, raf = 0, lastLang = "";
function read() { const r = sec.getBoundingClientRect(), total = sec.offsetHeight - innerHeight; target = clamp(-r.top / Math.max(1, total)); if (!raf) raf = requestAnimationFrame(tick); }
function tick() {
  raf = 0;
  cur += (target - cur) * (still || window.__snap ? 1 : 0.14);
  if (Math.abs(target - cur) > 0.0005) raf = requestAnimationFrame(tick);
  draw(cur);
}
function draw(p) {
  const lang = document.documentElement.lang === "en" ? "en" : "ja";
  if (lang !== lastLang) { boxes.forEach((b, i) => b.querySelector("b").textContent = LABEL[lang][i]); lastLang = lang; }
  const phone = pin.clientWidth / pin.clientHeight < 0.9;
  // 1. 写真がゆっくり引く
  const zoom = 1.08 - 0.08 * ease(range(p, 0, 0.2));
  // 3. 写真が横（スマホは上）へよける
  const mv = ease(range(p, 0.56, 0.7));
  const tx = phone ? -22 * mv : -24 * mv, ty = phone ? -12 * mv : 0, sc = zoom * (1 - (phone ? 0.5 : 0.2) * mv);
  frame.style.transform = `translate(calc(-50% + ${tx}vw), calc(-50% + ${ty}svh)) scale(${sc.toFixed(4)})`;
  frame.style.opacity = (1 - 0.55 * range(p, 0.86, 0.98)).toFixed(3);
  // 2. スキャン
  const sp = range(p, 0.22, 0.5);
  scan.style.top = (sp * 100).toFixed(2) + "%";
  scan.style.opacity = sp > 0 && sp < 1 ? 1 : 0;
  boxes.forEach(b => { const on = sp * 100 > +b.dataset.t0 + 2 && p < 0.97; b.classList.toggle("on", on); });
  // 3. 手持ちの服のカード
  prods.forEach((c, i) => {
    const k = ease(range(p, 0.6 + i * 0.012, 0.7 + i * 0.012));
    c.style.opacity = (k * (c.dataset.hit ? 1 : 1 - 0.75 * range(p, 0.8, 0.9))).toFixed(3);
    c.style.transform = `translateY(${((1 - k) * 40).toFixed(1)}px) scale(${(0.9 + 0.1 * k + (c.dataset.hit ? 0.06 * range(p, 0.8, 0.9) : 0)).toFixed(3)})`;
    c.classList.toggle("hit", !!c.dataset.hit && p > 0.7);
  });
  const mp = range(p, 0.7, 0.82);
  meterBox.style.opacity = range(p, 0.66, 0.72).toFixed(3);
  meter.textContent = Math.round(ease(mp) * 91);
  wx.style.opacity = range(p, 0.86, 0.92).toFixed(3);
  // 字幕
  caps.forEach(c => {
    const a = +c.dataset.a, b = +c.dataset.b, f = 0.035;
    const o = Math.min(range(p, a - f, a + f), 1 - range(p, b - f, b + f));
    c.style.opacity = o.toFixed(3);
    c.style.transform = `translate(-50%, ${((1 - o) * 14).toFixed(1)}px)`;
    c.style.pointerEvents = o > 0.5 ? "auto" : "none";
  });
  hint.style.opacity = (1 - range(p, 0, 0.04)).toFixed(2);
}
addEventListener("scroll", read, { passive: true });
addEventListener("resize", read);
document.addEventListener("ca:lang", () => draw(cur));
read(); draw(0);
}
