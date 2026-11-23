// 写真（Unsplash）。Unsplashのきまりどおり、images.unsplash.com から直接表示し、撮影者を表示する。
window.CA_PHOTOS = (() => {
  const U = (id, w = 600, h) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=70`;
  // 撮影者：[名前, ユーザー名]
  const C = {
    pesce: ["Pesce Huang", "pesce"], mockupbee: ["mockupbee", "mockupbee"], valna: ["Valna Studio", "valnastudio"], laura: ["Laura Chouette", "laurachouette"],
    tuan: ["TuanAnh Blue", "blueeyeaa"], linen: ["Robert Richman", "linenese_lifestyle"], dane: ["Dane Moukao", "danafarouk"], aldo: ["Aldo Vukaj", "mystical1"],
    aymen: ["Aymen Chabani", "raymen47"], mcf: ["McFollis", "thisismcfollis"], sj: ["SJ", "uxsj_ph"], agata: ["Agata Create", "agatacreate"], ian: ["Ian Talmacs", "iantalmacs"],
    mitchell: ["Mitchell Luo", "mitchel3uo"], marcel: ["Marcel Strauß", "martzzl"], ilya: ["Ilya Mirnyy", "mirnyy"], samuel: ["Samuel Lopes", "samuelopes"], babak: ["Babak Eshaghian", "babak22ir"]
  };
  // 見本のクローゼット：id, 種類, 日本語名, 英語名, 色, 写真, 撮影者, 写真の中心
  const SAMPLE = [
    ["s1", "shirt", "ベージュのシャツ", "Tan shirt", "#c9b48e", "1776838103951-993ff1ffc916", "pesce", "50% 45%"],
    ["s2", "tshirt", "白のTシャツ", "White T-shirt", "#f1f1ef", "1651761179569-4ba2aa054997", "mockupbee", "50% 50%"],
    ["s3", "sweater", "オフホワイトのニット", "Off-white knit", "#e7e3da", "1574201635302-388dd92a4c3f", "valna", "50% 60%"],
    ["s4", "sweater", "えんじのニット", "Burgundy sweater", "#8e2a30", "1608984361471-ff566593088f", "laura", "50% 55%"],
    ["s5", "jeans", "インディゴのデニム", "Indigo jeans", "#3d5a88", "1714143136372-ddaf8b606da7", "tuan", "50% 50%"],
    ["s6", "jeans", "黒のデニム", "Black jeans", "#1e1e21", "1718252540511-e958742e4165", "tuan", "50% 50%"],
    ["s7", "blazer", "ネイビーのジャケット", "Navy jacket", "#27365c", "1740710748146-a15d840d6f40", "linen", "40% 55%"],
    ["s8", "coat", "ベージュのトレンチコート", "Beige trench coat", "#cdbb8f", "1633821879282-0c4e91f96232", "dane", "50% 60%"],
    ["s9", "down", "黒のダウンジャケット", "Black puffer jacket", "#1f1f22", "1793367890223-00dd920fbb84", "aldo", "35% 45%"],
    ["s10", "sneakers", "白のスニーカー", "White sneakers", "#f0f0ee", "1561282109-3a8f490997cc", "aymen", "50% 50%"],
    ["s11", "leather", "黒のローファー", "Black loafers", "#1b1b1d", "1784822041091-c827cb005dcd", "mcf", "50% 55%"],
    ["s12", "boots", "茶色のブーツ", "Brown boots", "#6b3d24", "1666374554013-bf9a3c00f39b", "ian", "50% 60%"],
    ["s13", "bag", "黒のバッグ", "Black bag", "#232326", "1546938576-04917ec516ee", "sj", "50% 55%"],
    ["s14", "dress", "黒のキャミワンピース", "Black slip dress", "#151517", "1547587091-d639c1c338b3", "agata", "62% 50%"]
  ].map(([id, kind, ja, en, color, ph, cr, pos]) => ({ id, kind, name_ja: ja, name_en: en, color, photo: ph, credit: cr, pos, sample: true }));
  // 見本の人物写真（憧れコーデ）：服の位置は写真の中の％
  const LOOKS = [
    { id: "L1", ph: "1581382575646-a4d90bb53a4a", credit: "mitchell", ja: "グレージャケット×オールブラック", en: "Grey jacket, all black", items: [
      { kind: "blazer", color: "#8a8986", box: [27, 21, 44, 27] }, { kind: "tshirt", color: "#1d1d20", box: [42, 22, 16, 22] },
      { kind: "trousers", color: "#1c1c1f", box: [32, 47, 37, 41] }, { kind: "sneakers", color: "#efefee", box: [29, 87, 44, 9] }] },
    { id: "L2", ph: "1599330293364-622fa6bfcf3a", credit: "marcel", ja: "黒ジャケット×ミントのトップス", en: "Black blazer, mint top", items: [
      { kind: "blazer", color: "#19191c", box: [33, 23, 44, 32] }, { kind: "tshirt", color: "#a8d6b2", box: [44, 27, 16, 10] },
      { kind: "trousers", color: "#1a1a1d", box: [37, 38, 27, 48] }, { kind: "sneakers", color: "#202024", box: [38, 84, 22, 8] }] },
    { id: "L3", ph: "1589351189946-b8eb5e170ba6", credit: "ilya", ja: "白シャツはおり×黒", en: "Open white shirt, black", items: [
      { kind: "jacket", color: "#eeeeec", box: [24, 40, 50, 40] }, { kind: "tshirt", color: "#18181b", box: [42, 48, 18, 10] },
      { kind: "jeans", color: "#161618", box: [36, 62, 30, 38] }] },
    { id: "L4", ph: "1536243298747-ea8874136d64", credit: "samuel", ja: "オールブラックの街歩き", en: "All-black city walk", items: [
      { kind: "jacket", color: "#151517", box: [30, 18, 46, 34] }, { kind: "trousers", color: "#161618", box: [30, 50, 52, 36] },
      { kind: "sneakers", color: "#1f1f22", box: [20, 84, 62, 10] }] },
    { id: "L5", ph: "1633821879282-0c4e91f96232", credit: "dane", ja: "トレンチコート×黒", en: "Trench coat, black", items: [
      { kind: "coat", color: "#cdbb8f", box: [16, 12, 70, 88] }, { kind: "tshirt", color: "#17171a", box: [38, 14, 18, 24] }] },
    { id: "L6", ph: "1770979820036-300fa34c693d", credit: "babak", ja: "チェックシャツ×ベージュ", en: "Check shirt, beige", items: [
      { kind: "shirt", color: "#dcd2c0", box: [22, 20, 46, 32] }, { kind: "chinos", color: "#c6b28d", box: [26, 50, 40, 40] }] }
  ];
  const HERO = { ph: "1581382575646-a4d90bb53a4a", credit: "mitchell" };
  return { U, C, SAMPLE, LOOKS, HERO };
})();
