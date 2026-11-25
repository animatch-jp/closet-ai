// CLOSET.AI — コーデ・天気・1週間・診断・シェア
{
const LIB = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/dist/transformers.min.js";
const MODEL = "Xenova/clip-vit-base-patch32";
const T = {
ja: {
  cap1: "あなたのクローゼットが、<br><span>AIになる。</span>", cap2: "写真1枚で、<br>服を読み取る。", cap3: "色・種類・きちんと感まで、<br>一瞬でスキャン。", cap3b: "あこがれのコーデも、<br><span>手持ちの服で再現。</span>", hRe: "手持ちの服で再現", hWx: "晴れ 16°C ・ 通勤", nav4: "再現", photos: "写真", rxTitle: "憧れコーデ再現", rxSub: "SNSや雑誌で見たコーデを、あなたの手持ちの服で再現します。見本を選ぶか、写真をアップしてください。", rxUp: "写真から再現", rxCam: "カメラで撮る", rxTap: "写真の服のところをタップしてください（上着・トップス・ボトムス・靴など）。種類は下で直せます。", rxScore: "再現度", rxNone: "合う服がまだありません", rxLow: "似た服をさがす", rxLook: "見本", rxWear: "今日これを着る", rxMine: "あなたの写真のコーデ", camTile: "カメラで撮る", camHint: "その場で撮って登録", err: "うまくいきませんでした。もう一度お試しください。", cap4: "今日の天気に合わせて、<br><span>コーデ完成。</span>", start: "はじめる", hint: "スクロール",
  nav1: "今日", nav2: "1週間", nav3: "診断",
  tourLabel: "できること", nav6: "買う前", byTitle: "買う前チェック", bySub: "お店で迷った服を撮ると、手持ちの服と合うか、似た服をもう持っていないかをAIが調べます。", byCam: "カメラで撮る", byUp: "写真から", byOr: "写真がないときは、種類と色を選んで調べられます。", byGoBtn: "調べる",
  byReading: "読み取り中", byChecked: "チェック結果", byFixHint: "種類や色がちがうときは、上で直して「調べる」を押してください。", byScore: "買い度", byGo: "買ってよし", byThink: "よく考えて", byWait: "待った", byDup: "似た服あり",
  byMore: "増えるコーデ", byPartners: "合わせられる服", bySimilar: "似ている服", byPcs: "点", bySimHave: "もう持っている似た服", byLooks: "これを使ったコーデ", byGoesWith: "合わせやすい手持ちの服", byThis: "この服",
  byWish: "ほしいものリストへ", byBought: "買った！クローゼットへ", byWishT: "ほしいものリスト", byWished: "ほしいものリストに入れました", byAdded: "クローゼットに入れました", byNot: "服が写っていないようです。種類を選んでください。", byFix: "読み取れなかったので、種類を選んでください。",
  worn: "今日これを着た", wornOn: "今日の服として記録ずみ", wornDone: "今日の服を記録しました", repeatT: "同じ服装に注意",
  logT: "着た記録", logEmpty: "コーデを着た日に「今日これを着た」を押すと、よく着る服と、しばらく着ていない服が分かります。", logDays: "記録した日", logUse: "クローゼットの活用度", logTop: "よく着る服", logSleep: "眠っている服", logSleepP: "3週間以上着ていない服です。押すと、その服を使ったコーデをAIスタイリストが考えます。",
  pkTitle: "旅行の荷物リスト", pkSub: "行き先の天気予報に合わせて、少ない服で毎日のコーデを組み、持ち物リストにします。", pkCity: "行き先", pkDate: "出発日", pkDays: "日数", pkOcc: "旅の目的", pkGo: "荷物リストを作る", pkNeed: "行き先を入れてください", pkFar: "天気予報は16日先までなので、近くなったらもう一度作ってください", pkPast: "出発日が過ぎています", pkSub2: "同じボトムスや靴を何度も使って、荷物を少なくしました。", pkReady: "準備OK", pkClothes: "服", pkOther: "そのほか",
  rTotal: "相性", rPts: "点", rColor: "色", rScene: "場面", rTemp: "気温",
  chFollow: ["もっと明るく", "もっときれいめに", "もっとカジュアルに", "ジャケットなしで", "もっと暖かく", "別の案"],
  nav5: "相談", chTitle: "AIスタイリストに相談", chSub: "「明日のデート何着る？」のように話しかけると、手持ちの服から選んで答えます。", chPh: "メッセージを入力", chSend: "送る", chStop: "止める", chClear: "会話を消す",
  chName: "AIスタイリスト", chLLMName: "AIスタイリスト（なんでもAI）", chOpen: "大きく見る", chDx: "診断を見る",
  chHello: "こんにちは！あなたのクローゼット専属のAIスタイリストです。行き先や天気、気分を教えてくれれば、手持ちの服からコーデを選びます。",
  chSugg: ["明日のデート、何着る？", "ライブに行く服は？", "雨の日の通勤コーデ", "白いスニーカーに合うコーデは？", "ネイビーに合う色は？", "背を高く見せたい", "清潔感を出すには？", "いちばん活躍する服は？", "この服、買うべき？", "旅行の荷造りを手伝って", "私の服のタイプは？", "クローゼットに何がある？"],
  chLLMTitle: "なんでも話せるAI", chLLMNote: "服以外のことも自由に話せるAIを、この端末の中に読みこめます（約300MB・はじめの1回だけ。Wi-Fiがおすすめ）。", chLoad: "読みこむ", chOff: "オフにする", chLoading: "AIを読みこみ中…", chReady: "オン：服以外のことも話せます。答えはこの端末の中で作られ、どこにも送られません。小さなAIなので、ときどきまちがえます。", chFail: "この端末では読みこめませんでした。服の相談はこのまま使えます。",
  occ: "どこに着ていく？", temp: "気温", mood: "気分・リクエスト（任意）", moodph: "例：明るめの色、たくさん歩く日", gen: "コーデを生成", again: "別の案",
  here: "現在地の天気", cityph: "都市名（例：大阪、Paris）", find: "天気を読む", wxFail: "天気を読みこめませんでした。気温は手で選んでください。", geoFail: "現在地を使えませんでした。都市名で探してください。", noCity: "その都市が見つかりませんでした。",
  closet: "クローゼット", name: "名前", nameph: "例：グレーのパーカー", kind: "種類", color: "色", save: "追加する", cancel: "やめる",
  all: "すべて", top: "トップス", outer: "アウター", bottom: "ボトムス", onepiece: "ワンピース", shoes: "靴", acc: "小物",
  tip: "着こなしのコツ", buy: "買い足すなら", thinking: "組み合わせを計算中…", loading: "AIを準備中…（はじめての1回だけ）", tagging: "AIが解析中…",
  aiFail: "AIを読みこめませんでした。種類を選んで追加してください。", need: "トップスとボトムス（またはワンピース）を1点ずつ以上登録してください。", notCloth: "服が写っていないようです。",
  deleted: "削除しました", undo: "元に戻す", full: "保存容量がいっぱいです。古い服を消してください。", sampleTag: "サンプル", aiTag: "AIコーデ", items: "点", del: "削除",
  addPhoto: "写真で追加", addHint: "撮るとAIが種類と色を読み取ります", addText: "文字で追加",
  saveImg: "画像で保存", shareX: "Xでシェア", shareTh: "Threads", shareLine: "LINE", made: "画像を作りました", madeFail: "画像を作れませんでした",
  findAt: "で探す", inspo: "コーデ例を見る",
  wkTitle: "1週間コーデ", wkSub: "天気予報に合わせて、7日分を同じ服が続かないように組みます。", wkDay: "平日の予定", wkEnd: "休日の予定", wkGo: "1週間ぶん作る", wkNeed: "先に場所を決めてください（現在地か都市名）。", wkTap: "日にちを押すと、くわしく見られます。",
  dxTitle: "クローゼット診断", dxSub: "あなたの服から、スタイルのタイプと、着回しの力を読み取ります。", dxGo: "診断する", dxCombos: "相性のいいコーデ", dxWays: "通り", dxStar: "いちばん活躍する服", dxAdd: "これを足すと", dxMore: "通り増える", dxColors: "色のバランス",
  h_1: "撮る", p_1: "服を1枚ずつ撮ると、AIが種類と色を読み取ってクローゼットに入れます。", h_2: "選ぶ", p_2: "行き先と天気から、色の相性ときちんと感で、いちばん合う組み合わせを探します。", h_3: "外に出ない", p_3: "AIはこのスマホやパソコンの中で動きます。写真はどこにも送られず、このブラウザにだけ保存されます。",
  foot: "最初から入っている服はサンプルです。はじめて写真を読みこむときだけ、AIのデータを読みこみます（Wi-Fiがおすすめ）。", clearSample: "サンプルを消す", credit: "天気データ：Open-Meteo.com（CC BY 4.0）／写真の読み取り：CLIP（Transformers.js）／なんでも話せるAI：LFM2.5-350M（Liquid AI）",
  emptyT: "服を追加しよう", emptyP: "下のクローゼットに服を入れて「コーデを生成」を押すと、ここに今日のコーデが出ます。",
  occs: ["休日", "仕事", "デート", "旅行", "きちんと（式・会食）"], occW: ["休日", "通勤", "デート", "旅コーデ", "お呼ばれ"],
  dows: ["日", "月", "火", "水", "木", "金", "土"], wx: { sun: "晴れ", cloud: "くもり", rain: "雨", snow: "雪", storm: "雷雨", fog: "きり" }
},
en: {
  cap1: "Your closet, <br><span>now with AI.</span>", cap2: "One photo. <br>Every piece, read.", cap3: "Color, type and dressiness, <br>scanned in a blink.", cap3b: "Love a look? <br><span>Rebuild it from your closet.</span>", hRe: "Rebuilt from your closet", hWx: "Sunny 16°C · Commute", nav4: "Recreate", photos: "Photos", rxTitle: "Recreate a look", rxSub: "Saw an outfit you love? Rebuild it from what you already own. Pick an example or upload a photo.", rxUp: "Recreate from photo", rxCam: "Take a photo", rxTap: "Tap each piece in the photo (jacket, top, bottoms, shoes). You can fix the type below.", rxScore: "Match", rxNone: "Nothing similar yet", rxLow: "Find similar", rxLook: "Look", rxWear: "Wear this today", rxMine: "Outfit from your photo", camTile: "Take a photo", camHint: "Snap and add it now", err: "Something went wrong. Please try again.", cap4: "Matched to today's weather. <br><span>Outfit done.</span>", start: "Get started", hint: "Scroll",
  nav1: "Today", nav2: "Week", nav3: "Style type",
  tourLabel: "WHAT IT DOES", nav6: "Before you buy", byTitle: "Before-you-buy check", bySub: "Snap something you're eyeing in a store. AI checks whether it works with your closet and whether you already own something similar.", byCam: "Take a photo", byUp: "From photos", byOr: "No photo? Pick a type and color instead.", byGoBtn: "Check",
  byReading: "Reading", byChecked: "Result", byFixHint: "Wrong type or color? Fix it above and tap Check.", byScore: "Buy score", byGo: "Go for it", byThink: "Think it over", byWait: "Hold off", byDup: "You have one",
  byMore: "New outfits", byPartners: "Pairs with", bySimilar: "Similar owned", byPcs: "", bySimHave: "Similar pieces you own", byLooks: "Outfits with it", byGoesWith: "Easy matches in your closet", byThis: "This item",
  byWish: "Add to wishlist", byBought: "Bought it! Add to closet", byWishT: "Wishlist", byWished: "Added to your wishlist", byAdded: "Added to your closet", byNot: "That doesn't look like clothing. Pick a type.", byFix: "Couldn't read it. Pick a type.",
  worn: "Wore this today", wornOn: "Logged as today's outfit", wornDone: "Logged today's outfit", repeatT: "Repeat alert",
  logT: "Wear log", logEmpty: "Tap \"Wore this today\" on days you wear a look. You'll see your most-worn pieces and the ones gathering dust.", logDays: "Days logged", logUse: "Closet in use", logTop: "Most worn", logSleep: "Sleeping pieces", logSleepP: "Not worn for 3+ weeks. Tap one and the AI stylist builds a look around it.",
  pkTitle: "Trip packing list", pkSub: "Uses your destination's forecast to plan each day with as few clothes as possible, then turns it into a checklist.", pkCity: "Destination", pkDate: "Leaving", pkDays: "Days", pkOcc: "Trip type", pkGo: "Make my list", pkNeed: "Enter a destination", pkFar: "Forecasts only go 16 days ahead. Try again closer to the trip.", pkPast: "That date has passed", pkSub2: "Bottoms and shoes repeat so your bag stays light.", pkReady: "packed", pkClothes: "Clothes", pkOther: "Everything else",
  rTotal: "Match", rPts: "/100", rColor: "Color", rScene: "Occasion", rTemp: "Weather",
  chFollow: ["Brighter", "Make it smarter", "More casual", "Without the jacket", "Warmer", "Another idea"],
  nav5: "Ask", chTitle: "Ask your AI stylist", chSub: "Ask things like \"what should I wear on my date tomorrow?\" and it picks from your own clothes.", chPh: "Type a message", chSend: "Send", chStop: "Stop", chClear: "Clear chat",
  chName: "AI stylist", chLLMName: "AI stylist (chat-anything AI)", chOpen: "View larger", chDx: "See my type",
  chHello: "Hi! I'm your closet's own AI stylist. Tell me where you're going, the weather or your mood, and I'll build a look from what you own.",
  chSugg: ["What should I wear on my date tomorrow?", "Outfit for a concert?", "Rainy commute outfit", "What goes with my white sneakers?", "What color goes with navy?", "How do I look taller?", "How do I look neater?", "My most useful piece?", "Should I buy this?", "Help me pack for a trip", "What's my style type?", "What do I have?"],
  chLLMTitle: "Chat-anything AI", chLLMNote: "Load a small AI onto this device so you can talk about anything, not just clothes (about 300 MB, first time only; Wi-Fi recommended).", chLoad: "Load", chOff: "Turn off", chLoading: "Loading the AI…", chReady: "On: you can talk about anything. Replies are made on this device and never sent anywhere. It's a small AI, so it sometimes gets things wrong.", chFail: "This device couldn't load it. Clothing questions still work.",
  occ: "Where are you going?", temp: "Temperature", mood: "Mood or request (optional)", moodph: "e.g. bright colors, lots of walking", gen: "Generate look", again: "Another idea",
  here: "Weather here", cityph: "City (e.g. Osaka, Paris)", find: "Get weather", wxFail: "Couldn't load the weather. Set the temperature by hand.", geoFail: "Couldn't use your location. Search a city instead.", noCity: "City not found.",
  closet: "Closet", name: "Name", nameph: "e.g. grey hoodie", kind: "Type", color: "Color", save: "Add", cancel: "Cancel",
  all: "All", top: "Tops", outer: "Outerwear", bottom: "Bottoms", onepiece: "Dresses", shoes: "Shoes", acc: "Accessories",
  tip: "Styling tip", buy: "Worth adding", thinking: "Working out the best match…", loading: "Getting the AI ready… (first time only)", tagging: "AI is reading it…",
  aiFail: "The AI couldn't load. Pick the type and add it yourself.", need: "Add at least one top and one bottom (or a dress).", notCloth: "That doesn't look like clothing.",
  deleted: "Removed", undo: "Undo", full: "Storage is full. Remove a few items.", sampleTag: "Sample", aiTag: "AI look", items: "items", del: "Remove",
  addPhoto: "Add from photo", addHint: "AI reads the type and color for you", addText: "Add by text",
  saveImg: "Save image", shareX: "Share on X", shareTh: "Threads", shareLine: "LINE", made: "Image ready", madeFail: "Couldn't make the image",
  findAt: "", inspo: "See outfit ideas",
  wkTitle: "Week planner", wkSub: "Seven outfits from the forecast, without repeating yesterday's clothes.", wkDay: "Weekdays", wkEnd: "Weekend", wkGo: "Plan my week", wkNeed: "Set a location first (here, or a city).", wkTap: "Tap a day for details.",
  dxTitle: "Closet type", dxSub: "Reads your style type and how far your clothes stretch.", dxGo: "Analyze", dxCombos: "Good outfits", dxWays: "ways", dxStar: "Your hardest-working piece", dxAdd: "Add this for", dxMore: "more outfits", dxColors: "Color balance",
  h_1: "Snap", p_1: "Photograph each item and the AI reads its type and color into your closet.", h_2: "Pick", p_2: "From where you're going and the weather, it finds the best match by color and dressiness.", h_3: "Stays with you", p_3: "The AI runs on this phone or computer. Photos are never uploaded; they stay in this browser.",
  foot: "The starting items are samples. The AI data downloads once, the first time you add a photo (Wi-Fi recommended).", clearSample: "Remove samples", credit: "Weather data: Open-Meteo.com (CC BY 4.0) / Photo reading: CLIP (Transformers.js) / Chat-anything AI: LFM2.5-350M (Liquid AI)",
  emptyT: "Add your clothes", emptyP: "Put clothes in your closet below, then tap Generate look to see your outfit here.",
  occs: ["Weekend", "Work", "Date", "Travel", "Formal event"], occW: ["weekend", "commute", "date", "travel look", "guest look"],
  dows: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], wx: { sun: "Sunny", cloud: "Cloudy", rain: "Rain", snow: "Snow", storm: "Storm", fog: "Fog" }
}};
const KINDS = {
  shirt: ["top", "シャツ", "shirt", 3, 1, "a button-up shirt"], tshirt: ["top", "Tシャツ", "T-shirt", 1, 0, "a t-shirt"], sweater: ["top", "ニット", "sweater", 2, 2, "a knit sweater"], hoodie: ["top", "パーカー", "hoodie", 0, 2, "a hoodie"], blouse: ["top", "ブラウス", "blouse", 3, 1, "a blouse"],
  jacket: ["outer", "ジャケット", "jacket", 2, 1, "a casual jacket"], blazer: ["outer", "ブレザー", "blazer", 4, 1, "a tailored blazer"], coat: ["outer", "コート", "coat", 3, 3, "a long coat"], down: ["outer", "ダウンジャケット", "puffer jacket", 1, 4, "a puffer down jacket"], cardigan: ["outer", "カーディガン", "cardigan", 2, 1, "a cardigan"],
  jeans: ["bottom", "デニム", "jeans", 1, 1, "blue jeans"], trousers: ["bottom", "スラックス", "trousers", 3, 1, "dress trousers"], chinos: ["bottom", "チノパン", "chinos", 2, 1, "chino pants"], skirt: ["bottom", "スカート", "skirt", 2, 1, "a skirt"], shorts: ["bottom", "ショートパンツ", "shorts", 0, 0, "shorts"],
  dress: ["onepiece", "ワンピース", "dress", 3, 1, "a dress"],
  sneakers: ["shoes", "スニーカー", "sneakers", 1, 1, "sneakers"], leather: ["shoes", "革靴", "leather shoes", 4, 1, "leather dress shoes"], boots: ["shoes", "ブーツ", "boots", 2, 2, "boots"], sandals: ["shoes", "サンダル", "sandals", 0, 0, "sandals"],
  bag: ["acc", "バッグ", "bag", 2, 0, "a bag"], cap: ["acc", "キャップ", "cap", 0, 0, "a cap or hat"], scarf: ["acc", "マフラー", "scarf", 2, 2, "a scarf"]
};
const NOT = ["a person's face", "food", "an animal", "a room interior", "a landscape", "a screenshot of text"];
const DEF = { top: "tshirt", outer: "jacket", bottom: "trousers", onepiece: "dress", shoes: "sneakers", acc: "bag" };
const K = k => { const a = KINDS[k]; return { cat: a[0], ja: a[1], en: a[2], f: a[3], w: a[4], label: a[5] }; };
const PAL = [["白", "white", "#f2f2f0", "m"], ["グレー", "grey", "#8c8c8e", "m"], ["チャコール", "charcoal", "#3f4046", "m"], ["黒", "black", "#18181a", "m"], ["ネイビー", "navy", "#1f2a4a", "n"], ["インディゴ", "indigo", "#34477c", "n"], ["ベージュ", "beige", "#d2bc94", "e"], ["キャメル", "camel", "#b88b56", "e"], ["茶色", "brown", "#6b4630", "e"], ["カーキ", "khaki", "#76704a", "e"], ["青", "blue", "#2f5fd0", "c"], ["水色", "light blue", "#8fc1e8", "c"], ["赤", "red", "#c8323a", "c"], ["えんじ", "burgundy", "#6e1f2e", "c"], ["ピンク", "pink", "#ef9ab5", "c"], ["紫", "purple", "#7d4fa8", "c"], ["緑", "green", "#2f7a4e", "c"], ["ミント", "mint", "#a8d6b2", "c"], ["ライトグレー", "light grey", "#c9c9cb", "m"], ["黄色", "yellow", "#f0cf3a", "c"], ["オレンジ", "orange", "#e57a2e", "c"]];
const CATS = ["top", "outer", "bottom", "onepiece", "shoes", "acc"];
const ORDER = { outer: 0, top: 1, onepiece: 1, bottom: 2, shoes: 3, acc: 4 };
const PH = window.CA_PHOTOS;
const SAMPLE = PH.SAMPLE.map(x => ({ ...x, cat: KINDS[x.kind][0], img: PH.U(x.photo, 480, 480) }));
const DEF_LOOK = ["s7", "s2", "s6", "s10"];
const SH = { top: "M30 20L42 13Q50 21 58 13L70 20L87 36L77 46L70 40V88H30V40L23 46L13 36Z", outer: "M28 15L42 10Q50 19 58 10L72 15L89 42V82H77L74 46V91H26V46L23 82H11V42Z", bottom: "M30 9H70L77 91H56L50 38L44 91H23Z", onepiece: "M38 9H62L64 30L81 91H19L36 30Z", shoes: "M12 62Q14 45 29 47L44 51Q58 59 80 62Q91 64 89 72H12Z", acc: "M22 42H78L82 90H18Z" };

const $ = s => document.getElementById(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const col = c => /^#[0-9a-f]{6}$/i.test(c || "") ? c : "#8a8f9e";
const rgb = h => { const n = parseInt(col(h).slice(1), 16); return [n >> 16, n >> 8 & 255, n & 255]; };
const hex = (r, g, b) => "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
const shade = (h, a) => { const f = v => Math.max(0, Math.min(255, Math.round(a < 0 ? v * (1 + a) : v + (255 - v) * a))); const [r, g, b] = rgb(h); return hex(f(r), f(g), f(b)); };
const hsl = h => { const [r, g, b] = rgb(h).map(v => v / 255); const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn; let s = 0, hu = 0; if (d) { s = d / (1 - Math.abs(2 * l - 1)); hu = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; hu *= 60; if (hu < 0) hu += 360; } return { h: hu, s, l }; };
const nearMemo = new Map();
const near = h => { if (nearMemo.has(h)) return nearMemo.get(h); const [r, g, b] = rgb(h); let best = PAL[0], bd = 1e9; for (const p of PAL) { const [R, G, B] = rgb(p[2]), rm = (r + R) / 2, d = (2 + rm / 256) * (r - R) ** 2 + 4 * (g - G) ** 2 + (2 + (255 - rm) / 256) * (b - B) ** 2; if (d < bd) { bd = d; best = p; } } const o = { ja: best[0], en: best[1], hex: best[2], fam: best[3], n: best[3] !== "c" }; nearMemo.set(h, o); return o; };
const cap = s => s ? s[0].toUpperCase() + s.slice(1) : s;

let st = { lang: "ja", items: SAMPLE.slice(), look: null, occ: 0, filter: "all", loc: null, wkOcc: [1, 0], week: null, tab: "today" };
try { const s = JSON.parse(localStorage.getItem("closet.v5") || "null"); if (s && Array.isArray(s.items)) st = Object.assign(st, s); } catch (e) {}
let sampleTx = {}, lastDel = null, pendingImg = null, clf = null, clfLoading = null, wxToday = null;
const t = k => T[st.lang][k] ?? k;
const ja = () => st.lang === "ja";
const kindOf = i => K(KINDS[i.kind] ? i.kind : DEF[i.cat] || "tshirt");
const nm = i => i.name || i["name_" + st.lang] || i.name_ja || "";
const byId = id => st.items.find(i => i.id === id);
function save() { try { const { tab, ...rest } = st; localStorage.setItem("closet.v5", JSON.stringify({ ...rest, tab })); } catch (e) { status(t("full")); } }
function status(msg, undo) { const p = $("st"); p.textContent = msg || ""; if (undo) { const b = document.createElement("button"); b.type = "button"; b.textContent = t("undo"); b.onclick = undo; p.append(b); } }
function bar(pct) { const b = $("bar"); if (pct == null) { b.hidden = true; return; } b.hidden = false; b.firstElementChild.style.width = Math.max(2, Math.min(100, pct)) + "%"; }

/* ---------- 服の絵 ---------- */
function art(i) {
  if (i.img) return `<img src="${esc(i.img)}" alt="" loading="lazy" data-id="${esc(i.id)}"${i.pos ? ` style="object-position:${esc(i.pos)}"` : ""} onerror="__fb(this)">`;
  return svgArt(i);
}
window.__fb = el => { const it = byId(el.dataset.id) || (window.__tmpItems || []).find(x => x.id === el.dataset.id); const ph = el.parentElement; if (it && ph) { ph.classList.remove("photo"); el.outerHTML = svgArt(it); } };
const phc = i => i.img ? " photo" : "";
function svgArt(i) {
  const c = col(i.color), g = "g" + String(i.id).replace(/\W/g, ""), cat = i.cat, d = i.kind === "skirt" ? "M33 14H67L80 86Q50 93 20 86Z" : i.kind === "shorts" ? "M27 14H73L77 60H54L50 36L46 60H23Z" : SH[cat] || SH.top, ln = "rgba(0,0,0,.25)", lo = shade(c, -0.4), k = i.kind;
  let ex = "";
  if (cat === "top") {
    if (i.id === "s2") ex = `<clipPath id="${g}c"><path d="${d}"/></clipPath><g clip-path="url(#${g}c)" stroke="#f2f2f2" stroke-width="3.4">${[30, 40, 50, 60, 70, 80].map(y => `<path d="M10 ${y}H90"/>`).join("")}</g>`;
    else if (k === "sweater" || k === "hoodie") ex = `<path d="M42 14Q50 22 58 14" fill="none" stroke="${lo}" stroke-width="3"/><rect x="30" y="82" width="40" height="6" fill="${lo}" opacity=".55"/><path d="M14 36L23 46M86 36L77 46" stroke="${lo}" stroke-width="4" opacity=".6"/>`;
    else if (k === "shirt" || k === "blouse") ex = `<path d="M41 13L50 25L59 13" fill="none" stroke="${ln}" stroke-width="1.8"/><path d="M50 25V88" stroke="${ln}" stroke-width="1.2"/>${[35, 47, 59, 71].map(y => `<circle cx="50" cy="${y}" r="1.3" fill="${ln}"/>`).join("")}`;
  } else if (cat === "outer") {
    ex = `<path d="M42 10L46 42L50 32L54 42L58 10" fill="${lo}" opacity=".5"/><path d="M50 32V91" stroke="${ln}" stroke-width="1.4"/><circle cx="53" cy="52" r="1.6" fill="${ln}"/><circle cx="53" cy="64" r="1.6" fill="${ln}"/>`;
    if (k === "coat") ex += `<rect x="26" y="56" width="48" height="5" fill="${lo}"/><rect x="47" y="55" width="7" height="7" fill="none" stroke="#2a1d10" stroke-width="1.2"/>`;
  } else if (cat === "bottom") {
    ex = k === "skirt" ? `<path d="M33 16H67" stroke="${lo}" stroke-width="3"/><path d="M42 20L36 86M58 20L64 86M50 20V88" stroke="${ln}" stroke-width="1"/>` : k === "shorts" ? `<path d="M27 16H73" stroke="${lo}" stroke-width="3"/>` : `<path d="M30 15H70" stroke="${lo}" stroke-width="3"/><path d="M39 44L35 88M61 44L65 88" stroke="${ln}" stroke-width="1"/>`;
    if (k === "jeans") ex += `<path d="M33 18Q38 30 46 22M67 18Q62 30 54 22" fill="none" stroke="#d9984a" stroke-width="1.2" stroke-dasharray="2 1.6"/>`;
  } else if (cat === "onepiece") {
    ex = `<path d="M44 9L50 18L56 9" fill="none" stroke="${ln}" stroke-width="1.6"/><path d="M36 33H64" stroke="${lo}" stroke-width="3.5"/><path d="M50 18V33" stroke="${ln}"/>`;
  } else if (cat === "shoes") {
    const so = hsl(c).l > 0.6 ? "#dedede" : "#0c0c0e";
    const body = k === "boots" ? `<path d="M22 20H44V52Q58 58 80 62Q91 64 89 72H12Q12 52 22 46Z" fill="url(#${g})" stroke="rgba(0,0,0,.3)"/>` : "";
    ex = body + `<path d="M12 71H89V77Q89 80 86 80H15Q12 80 12 77Z" fill="${so}"/>` + (k === "leather" ? `<path d="M42 53Q52 49 62 56" fill="none" stroke="${shade(c, 0.25)}" stroke-width="2.2"/>` : k === "boots" ? "" : `<path d="M38 50L46 54M42 47L50 52M46 45L53 50" stroke="#bdbdbd" stroke-width="1.6"/>`);
  } else if (cat === "acc") {
    ex = `<path d="M36 42Q36 18 50 18Q64 18 64 42" fill="none" stroke="${lo}" stroke-width="4.5"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2=".8" y2="1"><stop offset="0" stop-color="${shade(c, 0.3)}"/><stop offset="1" stop-color="${shade(c, -0.3)}"/></linearGradient><linearGradient id="${g}h" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><ellipse cx="50" cy="95" rx="34" ry="3" fill="#000" opacity=".5"/><path d="${d}" fill="url(#${g})" stroke="rgba(0,0,0,.3)" stroke-width="1"/>${ex}<path d="${d}" fill="url(#${g}h)"/></svg>`;
}

/* ---------- コーデを組むしくみ ---------- */
const OCC_F = [1.2, 3, 2.3, 1.3, 3.7];
const needWarm = tp => tp < 5 ? 7 : tp < 10 ? 5.5 : tp < 15 ? 4 : tp < 20 ? 2.6 : tp < 25 ? 1.6 : 0.6;
function moodOf(m) { m = (m || "").toLowerCase(); return { bright: /明る|派手|カラフル|元気|bright|colou?r/.test(m), calm: /落ち着|シック|大人|地味|calm|minimal|chic/.test(m), walk: /歩|動|楽|ラク|walk|comfort/.test(m), smart: /きれいめ|上品|ちゃんと|smart|elegant|neat/.test(m), casual: /カジュアル|ラフ|ゆる|casual|relax/.test(m), warm: /寒|暖|あったか|warm|cold/.test(m) }; }
const info = i => ({ i, k: kindOf(i), c: near(col(i.color)), h: hsl(i.color) });
function scoreCombo(c, ctx) {
  const A = c.map(info);
  const body = A.filter(a => a.k.cat !== "shoes" && a.k.cat !== "acc");
  const fs = A.map(a => a.k.f), fav = fs.reduce((x, y) => x + y, 0) / fs.length;
  let s = -Math.abs(fav - ctx.target) * 2.2;
  if (Math.max(...fs) - Math.min(...fs) > 3) s -= 1.5;
  s -= Math.abs(body.reduce((x, a) => x + a.k.w, 0) - ctx.need) * 0.9;
  const outer = A.find(a => a.k.cat === "outer");
  if (outer && ctx.tp >= 24) s -= 3;
  if (!outer && ctx.tp < 12) s -= 3;
  for (const a of A) {
    const k = a.i.kind;
    if (k === "shorts" && ctx.tp < 20) s -= 4; if (k === "sandals" && ctx.tp < 18) s -= 4; if (k === "boots" && ctx.tp > 24) s -= 2;
    if (k === "down" && ctx.tp > 14) s -= 3; if (k === "scarf" && ctx.tp > 15) s -= 3;
    if (ctx.rain && a.k.cat === "shoes") s += k === "boots" ? 1.4 : (k === "sneakers" && a.h.l > 0.75) ? -1.2 : k === "sandals" ? -2 : 0;
    if (ctx.recent && ctx.recent[a.i.id]) s -= ctx.recent[a.i.id] * (a.k.cat === "shoes" || a.k.cat === "acc" ? 0.3 : 1);
  }
  const accs = A.filter(a => !a.c.n), hues = accs.map(a => a.h.h);
  if (accs.length === 0) s += ctx.m.calm ? 1.4 : 0.6;
  else if (accs.length === 1) s += ctx.m.bright ? 2 : 0.5;
  else { let spread = 0; for (let x = 0; x < hues.length; x++) for (let y = x + 1; y < hues.length; y++) { const d = Math.abs(hues[x] - hues[y]); spread = Math.max(spread, Math.min(d, 360 - d)); } s -= spread > 40 ? 1.6 * (accs.length - 1) : 0; if (ctx.m.bright) s += 0.6; }
  if (ctx.m.calm && accs.length) s -= 1;
  const top = A.find(a => a.k.cat === "top"), bot = A.find(a => a.k.cat === "bottom");
  if (top && bot && Math.abs(top.h.l - bot.h.l) > 0.25) s += 0.8;
  const sh = A.find(a => a.k.cat === "shoes"), bag = A.find(a => a.k.cat === "acc");
  if (bag) s += 0.3;
  if (sh && bag && sh.c.ja === bag.c.ja) s += 0.5;
  if (ctx.m.walk && sh) s += sh.i.kind === "sneakers" ? 1.6 : -0.6;
  return s + Math.random() * ctx.jitter;
}
function combos(items) {
  const by = c => items.filter(i => i.cat === c);
  const tops = by("top"), bots = by("bottom"), ops = by("onepiece"), outs = [null, ...by("outer")], shoes = by("shoes"), accs = [null, ...by("acc")];
  const bases = []; for (const a of tops) for (const b of bots) bases.push([a, b]); for (const o of ops) bases.push([o]);
  const out = [];
  for (const base of bases) for (const o of outs) for (const sh of (shoes.length ? shoes : [null])) for (const ac of accs) out.push([...base, o, sh, ac].filter(Boolean));
  return out;
}
function makeCtx(o) {
  const m = moodOf(o.mood);
  return { m, tp: o.tp, rain: !!o.rain, occ: o.occ, target: OCC_F[o.occ] + (m.smart ? 0.8 : 0) - (m.casual ? 0.8 : 0), need: needWarm(o.tp) + (m.warm ? 1.5 : 0), jitter: o.again ? 1.8 : 0.25, recent: o.recent || null };
}
function buildLook(o) {
  const items = st.items.filter(i => !i.busy).concat(o.extra || []), ctx = makeCtx(o);
  const prev = o.again && o.prevIds ? o.prevIds.slice().sort().join() : "";
  const res = [];
  for (const c of combos(items)) { if (prev && c.map(i => i.id).sort().join() === prev) continue; if (o.must && !c.some(i => i.id === o.must)) continue; if (o.exclude && o.exclude.length && c.some(i => o.exclude.includes(i.id))) continue; let sc = scoreCombo(c, ctx); if (o.bias) for (const i of c) sc += o.bias[i.id] || 0; res.push([sc, c]); }
  res.sort((a, b) => b[0] - a[0]);
  const pick = o.again ? res[Math.floor(Math.random() * Math.min(3, res.length))] : res[0];
  return pick ? { c: pick[1], ctx } : null;
}
function explain(c, ctx) {
  const J = ja(), A = c.slice().sort((x, y) => ORDER[x.cat] - ORDER[y.cat]).map(info);
  const fs = A.map(a => a.k.f), fav = fs.reduce((x, y) => x + y, 0) / fs.length;
  const accs = A.filter(a => !a.c.n), mono = A.every(a => a.c.fam === "m");
  const cn = a => J ? a.c.ja : a.c.en, kn = a => J ? a.k.ja : a.k.en;
  const style = fav >= 3.1 ? (J ? "きれいめ" : "smart") : fav <= 1.4 ? (J ? "リラックス" : "relaxed") : (J ? "大人カジュアル" : "smart-casual");
  const occ = t("occW")[ctx.occ ?? st.occ];
  let title, s1;
  if (mono) { title = J ? `モノトーンの${occ}` : `Monotone ${occ}`; s1 = J ? "白・黒・グレーだけでまとめたので、すっきり大人っぽく見えます。" : "Keeping to white, black and grey makes it clean and grown-up."; }
  else if (accs.length === 1) { const a = accs[0]; title = J ? `${cn(a)}が主役の${occ}` : `${cap(cn(a))}-led ${occ}`; const base = [...new Set(A.filter(x => x !== a).map(cn))].slice(0, 2).join(J ? "と" : " and "); s1 = J ? `${cn(a)}の${kn(a)}を差し色にして、ほかは${base}で落ち着かせました。` : `The ${cn(a)} ${kn(a)} is the one pop of color; ${base} keep the rest calm.`; }
  else if (accs.length === 0) { const cs = [...new Set(A.map(cn))].slice(0, 2); title = J ? `${style}${occ}` : `${cap(style)} ${occ}`; s1 = J ? `${cs.join("と")}の落ち着いた配色で、だれにでも好かれる組み合わせです。` : `${cap(cs.join(" and "))} make a calm palette that suits almost anyone.`; }
  else { title = J ? `カラフルな${occ}` : `Colorful ${occ}`; s1 = J ? "色を重ねて、明るく元気な印象にしました。" : "Layering colors keeps it bright and upbeat."; }
  const outer = A.find(a => a.k.cat === "outer"), top = A.find(a => a.k.cat === "top" || a.k.cat === "onepiece");
  let s2;
  if (outer) s2 = J ? `${ctx.tp}°Cなので、${nm(outer.i)}を羽織って調節できるようにしました。` : `At ${ctx.tp}°C, the ${nm(outer.i).toLowerCase()} lets you layer up or down.`;
  else if (ctx.tp >= 24) s2 = J ? `${ctx.tp}°Cと暖かいので、軽い${kn(top)}で涼しく過ごせます。` : `At ${ctx.tp}°C, a light ${kn(top)} keeps you cool.`;
  else s2 = J ? `${ctx.tp}°Cなら、羽織りなしでちょうどいい重さです。` : `At ${ctx.tp}°C, no extra layer is needed.`;
  const tips = [], has = k => A.some(a => a.i.kind === k);
  const sh = A.find(a => a.k.cat === "shoes"), bg = A.find(a => a.k.cat === "acc");
  if (ctx.rain) tips.push(J ? `雨の予報なので、${sh ? nm(sh.i) + "なら足もとも安心。" : "濡れても平気な靴で。"}折りたたみ傘を忘れずに。` : `Rain is forecast, so ${sh ? "the " + nm(sh.i).toLowerCase() + " keep your feet safe" : "pick shoes that can get wet"}. Bring an umbrella.`);
  else {
    if (outer && (has("shirt") || has("blouse"))) tips.push(J ? "シャツの袖を、上着ごと少しまくると、こなれて見えます。" : "Push the jacket and shirt sleeves up together for an easy look.");
    if (has("jeans") || has("chinos")) tips.push(J ? "すそを1〜2回まくって足首を少し見せると、軽く見えます。" : "Roll the hems once or twice to show a little ankle.");
    if ((has("shirt") || has("tshirt") || has("sweater")) && A.some(a => a.k.cat === "bottom")) tips.push(J ? "前だけ少しパンツに入れると、脚が長く見えます。" : "A loose front tuck makes your legs look longer.");
    if (has("dress")) tips.push(J ? "ウエストの位置を少し高めにすると、バランスがよくなります。" : "Set the waist a little higher for better balance.");
    if (sh && bg && sh.c.ja === bg.c.ja) tips.push(J ? "靴とバッグの色がそろっているので、全体がまとまって見えます。" : "Matching shoes and bag pull the whole look together.");
    if (has("sneakers")) tips.push(J ? "スニーカーをきれいにしておくだけで、清潔感がぐっと上がります。" : "Clean sneakers instantly make the look sharper.");
  }
  const all = st.items, cnt = f => all.filter(f).length, oc = ctx.occ ?? st.occ;
  let buy = "", buyQ = "";
  if (ctx.rain && !cnt(i => i.kind === "boots")) { buy = J ? "雨の日も安心な、レインブーツ" : "Rain boots for wet days"; buyQ = J ? "レインブーツ" : "rain boots"; }
  else if (ctx.tp < 15 && !cnt(i => i.cat === "outer" && kindOf(i).w >= 3)) { buy = J ? "寒い日用の、あたたかいコート" : "A warm coat for cold days"; buyQ = J ? "ウールコート" : "wool coat"; }
  else if ((oc === 1 || oc === 4) && !cnt(i => i.cat === "shoes" && kindOf(i).f >= 3)) { buy = J ? "きちんとした場面用の、黒の革靴" : "Black leather shoes for dressier days"; buyQ = J ? "黒 革靴" : "black leather shoes"; }
  else if (!cnt(i => i.cat === "outer")) { buy = J ? "さっと羽織れるカーディガン" : "A cardigan you can throw on"; buyQ = J ? "カーディガン" : "cardigan"; }
  else if (!cnt(i => i.cat === "acc")) { buy = J ? "どんな服にも合う、黒か茶色のバッグ" : "A black or brown bag that goes with everything"; buyQ = J ? "レザー トートバッグ" : "leather tote bag"; }
  else if (!cnt(i => !near(col(i.color)).n)) { buy = J ? "差し色になる、明るい色のニット" : "A bright knit to add a pop of color"; buyQ = J ? "カラーニット" : "colorful sweater"; }
  if (!J) s1 = cap(s1);
  return { title, why: s1 + " " + s2, tip: tips.length ? tips[Math.floor(Math.random() * tips.length)] : "", buy, buyQ };
}

/* ---------- 天気（Open-Meteo・無料・非商用） ---------- */
function wxType(code) { if (code >= 95) return "storm"; if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "snow"; if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "rain"; if (code === 45 || code === 48) return "fog"; if (code <= 1) return "sun"; return "cloud"; }
function wxIcon(type) {
  const s = { sun: `<circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>`, cloud: `<path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.3 3.3 0 0 0 7 18z"/>`, rain: `<path d="M7 15h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.3 3.3 0 0 0 7 15z"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>`, snow: `<path d="M7 14h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.3 3.3 0 0 0 7 14z"/><path d="M8 18h.01M12 20h.01M16 18h.01"/>`, storm: `<path d="M7 14h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.3 3.3 0 0 0 7 14z"/><path d="M12 14l-2 4h4l-2 4"/>`, fog: `<path d="M4 9h16M6 13h12M4 17h16"/>` }[type];
  return `<svg class="wxi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`;
}
const dayTemp = (mx, mn) => Math.round(mx * 0.65 + mn * 0.35);
async function forecast(loc) {
  const u = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=7`;
  const r = await fetch(u); if (!r.ok) throw new Error("wx"); const d = (await r.json()).daily;
  return d.time.map((date, i) => ({ date, code: d.weather_code[i], max: Math.round(d.temperature_2m_max[i]), min: Math.round(d.temperature_2m_min[i]), pop: d.precipitation_probability_max?.[i] ?? 0 }));
}
async function geocode(name) {
  const r = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1&language=${st.lang}`);
  if (!r.ok) throw new Error("geo"); const j = await r.json(); const g = j.results?.[0]; if (!g) return null;
  return { lat: +g.latitude.toFixed(3), lon: +g.longitude.toFixed(3), name: g.name };
}
function here() {
  return new Promise((res, rej) => { if (!navigator.geolocation) return rej(new Error("geo")); navigator.geolocation.getCurrentPosition(p => res({ lat: +p.coords.latitude.toFixed(3), lon: +p.coords.longitude.toFixed(3), name: ja() ? "現在地" : "Here" }), rej, { timeout: 9000, maximumAge: 600000 }); });
}
const isRain = d => d && (wxType(d.code) === "rain" || wxType(d.code) === "storm" || d.pop >= 60);
async function applyLocation(loc) {
  st.loc = loc; save();
  try {
    const days = await forecast(loc); wxToday = days[0]; st.days = days; save();
    $("temp").value = dayTemp(wxToday.max, wxToday.min); $("tv").textContent = $("temp").value + "°C";
    renderWx(); status("");
    return days;
  } catch (e) { status(t("wxFail")); throw e; }
}
function renderWx() {
  const box = document.querySelectorAll(".wxnow");
  const d = wxToday, loc = st.loc;
  box.forEach(b => { b.innerHTML = d && loc ? `${wxIcon(wxType(d.code))}<b>${esc(loc.name)}</b><span>${t("wx")[wxType(d.code)]} ${d.max}° / ${d.min}°${d.pop ? ` ・ ${ja() ? "降水" : "rain"} ${d.pop}%` : ""}</span>` : ""; b.hidden = !(d && loc); });
}
async function locHere() { try { status("…"); await applyLocation(await here()); } catch (e) { status(t("geoFail")); } }
async function locCity(name) { if (!name.trim()) return; try { status("…"); const g = await geocode(name.trim()); if (!g) { status(t("noCity")); return; } await applyLocation(g); } catch (e) { status(t("wxFail")); } }

/* ---------- 画面：今日 ---------- */
function lookItems(L) { return L.ids.map(byId).filter(Boolean).sort((a, b) => ORDER[a.cat] - ORDER[b.cat]); }
function renderLook(anim) {
  const L = st.look || { ids: DEF_LOOK, sample: true, occ: 0, tp: 16 };
  const its = lookItems(L);
  $("stage").classList.toggle("drop", !!anim);
  if (!its.length) { $("look").innerHTML = `<div class="meta"><span class="pill">${t("sampleTag")}</span></div><h2 class="ltitle">${t("emptyT")}</h2><p class="why">${t("emptyP")}</p>`; $("share").hidden = true; return; }
  const show = L.sample ? (sampleTx[st.lang] || (sampleTx[st.lang] = explain(its, { tp: 16, occ: 0 }))) : L;
  const rot = [-2.5, 2, -1.5, 2.5, -2, 1.5], z = [40, 10, 55, 20, 35, 15];
  const wx = L.wx ? `<span class="pill wxp">${wxIcon(wxType(L.wx.code))}${t("wx")[wxType(L.wx.code)]}</span>` : "";
  const q = show.buyQ ? encodeURIComponent(show.buyQ) : "";
  const shops = q ? `<div class="shops"><a href="https://www.amazon.${ja() ? "co.jp" : "com"}/s?k=${q}" target="_blank" rel="noopener">Amazon${t("findAt")}</a>${ja() ? `<a href="https://search.rakuten.co.jp/search/mall/${q}/" target="_blank" rel="noopener">楽天${t("findAt")}</a>` : ""}<a href="https://www.pinterest.com/search/pins/?q=${encodeURIComponent((ja() ? "コーデ " : "outfit ") + show.buyQ)}" target="_blank" rel="noopener">${t("inspo")}</a></div>` : "";
  $("look").innerHTML = `<div class="meta"><span class="pill ${L.sample ? "" : "ai"}">${L.sample ? t("sampleTag") : t("aiTag")}</span>${L.date ? `<span class="pill">${esc(fmtDay(L.date))}</span>` : ""}<span class="pill">${esc(t("occs")[L.occ ?? st.occ])}</span><span class="pill">${esc(L.tp)}°C</span>${wx}<span class="pill">${its.length} ${t("items")}</span></div>
  <h2 class="ltitle">${esc(show.title)}</h2><p class="why">${esc(show.why)}</p>
  <div class="rig" id="rig">${its.map((i, n) => `<div class="card" style="--r:${rot[n % 6]}deg;--z:${z[n % 6]}px;--i:${n}"><div class="ph${phc(i)}">${art(i)}</div><p>${esc(nm(i))}</p><small>${t(i.cat)}</small></div>`).join("")}</div>
  <div class="notes">${!L.sample && repeatNote(L.ids) ? `<div class="note warn"><b>${t("repeatT")}</b>${esc(repeatNote(L.ids))}</div>` : ""}${show.tip ? `<div class="note"><b>${t("tip")}</b>${esc(show.tip)}</div>` : ""}${show.buy ? `<div class="note"><b>${t("buy")}</b>${esc(show.buy)}${shops}</div>` : ""}</div>`;
  $("share").hidden = false;
  const wd = (st.log || []).find(x => x.d === dayStr());
  $("worn").hidden = !!L.sample; $("worn").classList.toggle("on", !!(wd && setKey(wd.ids) === setKey(L.ids))); $("worn").textContent = $("worn").classList.contains("on") ? t("wornOn") : t("worn");
}
const fmtDay = iso => { const d = new Date(iso + "T12:00:00"); return ja() ? `${d.getMonth() + 1}/${d.getDate()}（${t("dows")[d.getDay()]}）` : `${t("dows")[d.getDay()]} ${d.getMonth() + 1}/${d.getDate()}`; };
function gen(again) {
  const has = c => st.items.some(i => i.cat === c && !i.busy);
  if (!(has("onepiece") || (has("top") && has("bottom")))) { status(t("need")); return; }
  $("gen").disabled = $("again").disabled = true; status(t("thinking")); $("stage").classList.add("busy");
  setTimeout(() => {
    const tp = +$("temp").value, wx = wxToday && Math.abs(dayTemp(wxToday.max, wxToday.min) - tp) <= 1 ? wxToday : null;
    const r = buildLook({ occ: st.occ, tp, rain: isRain(wx), mood: $("mood").value, again, prevIds: st.look?.ids, recent: recentFromLog() });
    $("stage").classList.remove("busy"); $("gen").disabled = $("again").disabled = false;
    if (!r) { status(t("need")); return; }
    st.look = { ids: r.c.map(i => i.id), occ: st.occ, tp, wx: wx ? { code: wx.code } : null, rain: !!r.ctx.rain, ...explain(r.c, r.ctx) };
    save(); renderLook(true); status("");
    if (innerWidth < 880) $("stage").scrollIntoView({ behavior: "smooth", block: "start" });
  }, matchMedia("(prefers-reduced-motion: reduce)").matches ? 50 : 900);
}

/* ---------- 画面：1週間 ---------- */
async function planWeek() {
  if (!st.loc) { $("wkst").textContent = t("wkNeed"); return; }
  $("wkgo").disabled = true; $("wkst").textContent = t("thinking");
  try {
    const days = await applyLocation(st.loc);
    const recent = {}, plan = [];
    days.forEach((d, i) => {
      const dow = new Date(d.date + "T12:00:00").getDay(), occ = dow === 0 || dow === 6 ? st.wkOcc[1] : st.wkOcc[0];
      const tp = dayTemp(d.max, d.min), rain = isRain(d);
      const r = buildLook({ occ, tp, rain, recent: { ...recent }, mood: "" });
      if (!r) return;
      for (const k in recent) recent[k] = Math.max(0, recent[k] - 1.2);
      r.c.forEach(it => { recent[it.id] = (recent[it.id] || 0) + 2.4; });
      plan.push({ date: d.date, code: d.code, max: d.max, min: d.min, pop: d.pop, occ, tp, rain, ids: r.c.map(x => x.id), ...explain(r.c, r.ctx) });
    });
    st.week = plan; save(); renderWeek(true); $("wkst").textContent = t("wkTap");
  } catch (e) { $("wkst").textContent = t("wxFail"); }
  finally { $("wkgo").disabled = false; }
}
function renderWeek(anim) {
  const g = $("weekgrid");
  if (!st.week) { g.innerHTML = ""; return; }
  g.classList.toggle("drop", !!anim);
  g.innerHTML = st.week.map((d, n) => { const its = lookItems(d); return `<button type="button" class="day glass" data-day="${n}" style="--i:${n}"><span class="dh"><b>${esc(fmtDay(d.date))}</b>${wxIcon(wxType(d.code))}</span><span class="dt">${d.max}° / ${d.min}°${d.pop >= 30 ? ` ・ ${d.pop}%` : ""}</span><span class="dthumbs">${its.slice(0, 4).map(i => `<span class="ph${phc(i)}">${art(i)}</span>`).join("")}</span><span class="dn">${esc(d.title)}</span><span class="pill">${esc(t("occs")[d.occ])}</span></button>`; }).join("");
}

/* ---------- 画面：診断 ---------- */
const TYPES = {
  minimal: ["都会のミニマリスト", "Urban Minimalist", "白・黒・グレーを中心に、少ない色でかっこよくまとめるタイプ。どんな場面でも失敗しにくいのが強みです。", "You build sharp looks from white, black and grey. Hard to get wrong anywhere.", "赤や青を1点だけ足すと、写真映えがぐっと上がります。", "Add one red or blue piece and your photos pop."],
  trad: ["きれいめトラッド", "Smart Trad", "ネイビーやベージュの、きちんとした服が多いタイプ。仕事にも休日にも使える、着回し上手です。", "Navy, beige and tidy pieces. Your clothes work for the office and the weekend.", "白スニーカーを合わせると、休日はほどよく抜けます。", "White sneakers loosen it up for weekends."],
  natural: ["ナチュラル・アース派", "Natural Earth", "ベージュ・茶色・カーキなど、自然の色が好きなタイプ。やわらかく、話しかけやすい印象です。", "Beige, brown and khaki. You come across soft and easy to talk to.", "白か深い緑を足すと、季節感が出ます。", "White or deep green adds a seasonal touch."],
  color: ["カラフル・ムードメーカー", "Color Maker", "色のある服を楽しめるタイプ。その場を明るくする力があります。", "You enjoy color, and you brighten a room.", "黒や白の無地を1つ挟むと、色がもっと引き立ちます。", "A plain black or white piece makes your colors stand out more."],
  relax: ["ゆるっとリラックス派", "Easygoing Casual", "動きやすく、楽な服が多いタイプ。自然体で親しみやすい印象です。", "Comfy, easy pieces. You look relaxed and approachable.", "シャツかジャケットを1枚持つと、行ける場所が増えます。", "One shirt or jacket opens up dressier plans."],
  classic: ["きちんと上品派", "Polished Classic", "ジャケットや革靴など、きちんとした服が多いタイプ。大事な日に頼りにされます。", "Blazers, leather shoes and polish. People trust you on big days.", "スニーカーやニットを合わせると、休日用の顔ができます。", "Sneakers or a knit give you a weekend version."]
};
const FAM_COL = { m: "#d9dbe3", n: "#4b62b8", e: "#c49a63", c: "#ff7ad9" };
function diagnose() {
  const items = st.items.filter(i => !i.busy && i.cat !== "acc" && i.cat !== "shoes");
  const allI = st.items.filter(i => !i.busy);
  if (!items.length) return null;
  const fam = { m: 0, n: 0, e: 0, c: 0 };
  items.forEach(i => fam[near(col(i.color)).fam]++);
  const n = items.length, sh = k => fam[k] / n;
  const fav = allI.reduce((x, i) => x + kindOf(i).f, 0) / allI.length;
  const sc = { minimal: sh("m") * 1.1, trad: sh("n") + sh("e") * 0.4 + (fav >= 2.2 ? 0.15 : 0), natural: sh("e") * 1.05, color: sh("c") * 1.6, relax: fav < 1.6 ? 0.5 + (1.6 - fav) : 0, classic: fav > 2.6 ? 0.45 + (fav - 2.6) : 0 };
  const type = Object.keys(sc).sort((a, b) => sc[b] - sc[a])[0];
  const good = goodOf;
  const base = good(allI);
  const star = Object.keys(base.use).sort((a, b) => base.use[b] - base.use[a])[0];
  const CAND = [["tshirt", "#f2f2f0", "白のTシャツ", "White T-shirt", "白 Tシャツ"], ["trousers", "#18181a", "黒のスラックス", "Black trousers", "黒 スラックス"], ["cardigan", "#1f2a4a", "ネイビーのカーディガン", "Navy cardigan", "ネイビー カーディガン"], ["sneakers", "#f2f2f0", "白のスニーカー", "White sneakers", "白 スニーカー"], ["jeans", "#34477c", "デニム", "Jeans", "デニム"], ["sweater", "#8c8c8e", "グレーのニット", "Grey sweater", "グレー ニット"], ["skirt", "#d2bc94", "ベージュのスカート", "Beige skirt", "ベージュ スカート"]];
  let add = null;
  for (const [kind, color, nj, ne, q] of CAND) {
    if (allI.some(i => i.kind === kind && near(col(i.color)).ja === near(color).ja)) continue;
    const extra = { id: "tmp_" + kind, kind, cat: KINDS[kind][0], color };
    const r = good([...allI, extra]).ok - base.ok;
    if (!add || r > add.more) add = { more: r, name: ja() ? nj : ne, q: ja() ? q : ne.toLowerCase(), item: extra };
  }
  return { type, fam, n, combos: base.ok, star: star ? byId(star) : null, add };
}
function renderDx(anim) {
  const r = diagnose(), box = $("dxout");
  if (!r) { box.innerHTML = `<p class="why">${t("need")}</p>`; return; }
  const ty = TYPES[r.type], J = ja();
  const famBar = ["m", "n", "e", "c"].filter(k => r.fam[k]).map(k => `<i style="flex:${r.fam[k]};background:${FAM_COL[k]}"></i>`).join("");
  const famLab = { m: J ? "モノトーン" : "Mono", n: J ? "ネイビー系" : "Navy", e: J ? "アース系" : "Earth", c: J ? "カラー" : "Color" };
  box.className = "dxcard glass" + (anim ? " pop" : "");
  box.innerHTML = `<span class="pill ai">${J ? "あなたのタイプ" : "Your type"}</span><h2 class="dxname">${esc(J ? ty[0] : ty[1])}</h2><p class="why">${esc(J ? ty[2] : ty[3])}</p>
  <div class="dxstats"><div><small>${t("dxCombos")}</small><b class="big">${r.combos.toLocaleString()}<em>${t("dxWays")}</em></b></div>
  <div><small>${t("dxStar")}</small>${r.star ? `<span class="mini"><span class="ph${phc(r.star)}">${art(r.star)}</span>${esc(nm(r.star))}</span>` : "—"}</div>
  <div><small>${t("dxAdd")}</small>${r.add ? `<span class="mini"><span class="ph">${svgArt(r.add.item)}</span><span>${esc(r.add.name)}<br><b class="plus">+${r.add.more}${t("dxWays")}</b></span></span><div class="shops"><a href="https://www.amazon.${J ? "co.jp" : "com"}/s?k=${encodeURIComponent(r.add.q)}" target="_blank" rel="noopener">Amazon${t("findAt")}</a>${J ? `<a href="https://search.rakuten.co.jp/search/mall/${encodeURIComponent(r.add.q)}/" target="_blank" rel="noopener">楽天${t("findAt")}</a>` : ""}</div>` : "—"}</div></div>
  <div><small class="lbl">${t("dxColors")}</small><div class="fambar">${famBar}</div><div class="famlab">${["m", "n", "e", "c"].filter(k => r.fam[k]).map(k => `<span><i style="background:${FAM_COL[k]}"></i>${famLab[k]} ${Math.round(r.fam[k] / r.n * 100)}%</span>`).join("")}</div></div>
  <p class="note"><b>${J ? "アドバイス" : "Tip"}</b>${esc(J ? ty[4] : ty[5])}</p>
  <div class="row sharerow"><button class="btn go" type="button" data-share="dx" data-k="img">${t("saveImg")}</button><button class="btn" type="button" data-share="dx" data-k="x">${t("shareX")}</button><button class="btn" type="button" data-share="dx" data-k="th">${t("shareTh")}</button><button class="btn" type="button" data-share="dx" data-k="line">${t("shareLine")}</button></div>`;
  st.dx = { type: r.type, combos: r.combos };
}

/* ---------- シェア画像（1080×1920） ---------- */
const loadImg = src => new Promise((res, rej) => { const im = new Image(); if (/^https?:/.test(src)) im.crossOrigin = "anonymous"; im.onload = () => res(im); im.onerror = rej; im.src = src; });
const svgSrc = i => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgArt(i));
const srcOf = i => i.img || svgSrc(i);
const loadItem = async i => { try { return await loadImg(srcOf(i)); } catch (e) { return loadImg(svgSrc(i)); } };
function rr(x, X, Y, W, H, R) { x.beginPath(); x.moveTo(X + R, Y); x.arcTo(X + W, Y, X + W, Y + H, R); x.arcTo(X + W, Y + H, X, Y + H, R); x.arcTo(X, Y + H, X, Y, R); x.arcTo(X, Y, X + W, Y, R); x.closePath(); }
function wrap(x, text, X, Y, maxW, lh) { const chars = [...text]; let line = "", y = Y; for (const ch of chars) { const test = line + ch; if (x.measureText(test).width > maxW && line && !"。、，．）」』!?！？ー".includes(ch)) { x.fillText(line, X, y); line = ch.trim() ? ch : ""; y += lh; } else line = test; } if (line) x.fillText(line, X, y); return y + lh; }
async function makeCard(kind) {
  await document.fonts?.ready;
  const W = 1080, H = 1920, c = document.createElement("canvas"); c.width = W; c.height = H; const x = c.getContext("2d");
  x.fillStyle = "#06070b"; x.fillRect(0, 0, W, H);
  [["#1e5cff", 160, 300, 700], ["#ff3fb4", 980, 260, 600], ["#27e8d0", 600, 1500, 650]].forEach(([cc, cx, cy, r]) => { const g = x.createRadialGradient(cx, cy, 0, cx, cy, r); g.addColorStop(0, cc + "66"); g.addColorStop(1, cc + "00"); x.fillStyle = g; x.fillRect(0, 0, W, H); });
  const holo = x.createLinearGradient(0, 0, W, 0); ["#7cf7ff", "#a99bff", "#ff7ad9", "#e4ff6b"].forEach((s, i) => holo.addColorStop(i / 3, s));
  x.fillStyle = holo; rr(x, 80, 96, 56, 56, 14); x.fill();
  x.fillStyle = "#fff"; x.font = "700 44px Unbounded, sans-serif"; x.textBaseline = "middle"; x.fillText("CLOSET.AI", 156, 126);
  x.textBaseline = "alphabetic";
  const F = (w, s) => `${w} ${s}px Unbounded, "Zen Kaku Gothic New", sans-serif`, B = s => `${s}px Inter, "Zen Kaku Gothic New", sans-serif`;
  if (kind === "look") {
    const L = st.look || { ids: DEF_LOOK, sample: true, occ: 0, tp: 16 }, its = lookItems(L);
    const show = L.sample ? sampleTx[st.lang] : L;
    x.fillStyle = "#9aa1bb"; x.font = B(36); x.fillText(`${t("occs")[L.occ ?? 0]} ・ ${L.tp}°C${L.wx ? " ・ " + t("wx")[wxType(L.wx.code)] : ""}`, 80, 270);
    if (L.rate) { x.save(); x.textAlign = "right"; let rx0 = W - 80; x.font = B(32); x.fillStyle = "#9aa1bb"; const u = t("rPts"); x.fillText(u, rx0, 285); rx0 -= x.measureText(u).width + 8; x.font = F(700, 64); x.fillStyle = holo; x.fillText(String(L.rate.total), rx0, 285); rx0 -= x.measureText(String(L.rate.total)).width + 14; x.font = B(32); x.fillStyle = "#9aa1bb"; x.fillText(t("rTotal"), rx0, 285); x.restore(); }
    x.fillStyle = "#fff"; x.font = F(700, 76); let y = wrap(x, show.title, 80, 370, W - 160, 92);
    const n = Math.min(its.length, 6), cols = n <= 4 ? 2 : 3, gap = 30, cw = (W - 160 - gap * (cols - 1)) / cols;
    y += 20;
    for (let k = 0; k < n; k++) {
      const cx = 80 + (k % cols) * (cw + gap), cy = y + Math.floor(k / cols) * (cw + 90);
      x.save(); x.translate(cx + cw / 2, cy + cw / 2); x.rotate(((k % 2 ? 1 : -1) * 2) * Math.PI / 180); x.translate(-cw / 2, -cw / 2);
      x.fillStyle = "#20243a"; rr(x, 0, 0, cw, cw + 64, 26); x.fill(); x.strokeStyle = "#ffffff30"; x.lineWidth = 2; x.stroke();
      x.save(); rr(x, 12, 12, cw - 24, cw - 24, 18); x.clip(); x.fillStyle = "#12141f"; x.fillRect(12, 12, cw - 24, cw - 24);
      try { const im = await loadItem(its[k]); const s = its[k].img && !/^data:image\/svg/.test(im.src) ? Math.max((cw - 24) / im.width, (cw - 24) / im.height) : (cw - 24) * 0.82 / Math.max(im.width || 100, im.height || 100); const iw = (im.width || 100) * s, ih = (im.height || 100) * s; x.drawImage(im, 12 + (cw - 24 - iw) / 2, 12 + (cw - 24 - ih) / 2, iw, ih); } catch (e) {}
      x.restore(); x.fillStyle = "#e8ebff"; x.font = B(30); let lab = nm(its[k]); while (lab.length > 1 && x.measureText(lab).width > cw - 36) lab = lab.slice(0, -2) + "…"; x.fillText(lab, 18, cw + 38); x.restore();
    }
    y += Math.ceil(n / cols) * (cw + 90) + 10;
    x.fillStyle = "#d5d9ee"; x.font = B(34); y = wrap(x, show.why, 80, y + 20, W - 160, 50);
  } else if (kind === "remix") {
    const r = rx && rx.result; if (!r) throw new Error("none");
    x.fillStyle = "#9aa1bb"; x.font = B(38); x.fillText(ja() ? "憧れコーデを、手持ちの服で再現" : "Rebuilt from my own closet", 80, 270);
    const PW = 440, PHh = 660, px = 80, py = 320;
    try { const im = await loadImg(rx.src); x.save(); rr(x, px, py, PW, PHh, 28); x.clip(); const sc = Math.max(PW / im.width, PHh / im.height); x.drawImage(im, px + (PW - im.width * sc) / 2, py + (PHh - im.height * sc) / 2, im.width * sc, im.height * sc); x.restore(); } catch (e) { x.fillStyle = "#20243a"; rr(x, px, py, PW, PHh, 28); x.fill(); }
    let yy = py; const S = 150;
    for (const o of r.out.slice(0, 4)) {
      if (!o.best) continue;
      x.save(); rr(x, 560, yy, S, S, 20); x.clip(); x.fillStyle = "#eceae6"; x.fillRect(560, yy, S, S);
      try { const im = await loadItem(o.best.i); if (/^data:image\/svg/.test(im.src)) x.drawImage(im, 560 + S * 0.09, yy + S * 0.09, S * 0.82, S * 0.82); else { const sc = Math.max(S / im.width, S / im.height); x.drawImage(im, 560 + (S - im.width * sc) / 2, yy + (S - im.height * sc) / 2, im.width * sc, im.height * sc); } } catch (e) {}
      x.restore();
      x.fillStyle = "#fff"; x.font = B(30); let lab = nm(o.best.i); while (lab.length > 1 && x.measureText(lab).width > 280) lab = lab.slice(0, -2) + "…"; x.fillText(lab, 730, yy + 64);
      x.fillStyle = holo; x.font = F(700, 42); x.fillText(Math.round(o.best.s * 100) + "%", 730, yy + 120); yy += 168;
    }
    x.fillStyle = "#9aa1bb"; x.font = B(36); x.fillText(t("rxScore"), 80, py + PHh + 90);
    x.fillStyle = holo; x.font = F(700, 190); x.fillText(r.score + "%", 72, py + PHh + 290);
    x.fillStyle = "#fff"; x.font = F(700, 50); wrap(x, rx.title, 80, py + PHh + 390, W - 160, 62);
  } else if (kind === "buy") {
    if (!buyC || !buyR) throw new Error("none"); const r = buyR, v = VERD[r.verdict];
    x.fillStyle = "#9aa1bb"; x.font = B(40); x.fillText(ja() ? "買う前に、AIに聞いてみた" : "Asked AI before buying", 80, 270);
    const S = 420; x.save(); rr(x, 80, 320, S, S, 32); x.clip(); x.fillStyle = "#eceae6"; x.fillRect(80, 320, S, S);
    try { const im = await loadImg(buyC.img || svgSrc(buyC)); if (buyC.img) { const sc = Math.max(S / im.width, S / im.height); x.drawImage(im, 80 + (S - im.width * sc) / 2, 320 + (S - im.height * sc) / 2, im.width * sc, im.height * sc); } else x.drawImage(im, 80 + S * 0.1, 320 + S * 0.1, S * 0.8, S * 0.8); } catch (e) {}
    x.restore();
    x.fillStyle = "#9aa1bb"; x.font = B(36); x.fillText(t("byScore"), 560, 380);
    x.fillStyle = holo; x.font = F(700, 200); x.fillText(String(r.score), 552, 580);
    x.fillStyle = v[0]; rr(x, 560, 630, 400, 92, 46); x.fill(); x.fillStyle = "#06070b"; x.font = F(700, 46); x.textAlign = "center"; x.fillText(t(v[1]), 760, 692); x.textAlign = "left";
    x.fillStyle = "#fff"; x.font = F(700, 64); let y = wrap(x, r.name, 80, 850, W - 160, 76);
    const stat = (lab, val, X) => { x.fillStyle = "#9aa1bb"; x.font = B(32); x.fillText(lab, X, y + 70); x.fillStyle = "#fff"; x.font = F(700, 84); x.fillText(val, X, y + 170); };
    stat(t("byMore"), "+" + r.more, 80); stat(t("byPartners"), String(r.partners.length), 420); stat(t("bySimilar"), String(r.similar.length), 760);
    y += 240; x.fillStyle = "#d5d9ee"; x.font = B(36); y = wrap(x, r.why, 80, y + 20, W - 160, 54);
    const L = r.looks[0]; if (L) { const its = L.c.slice().sort((p, q) => ORDER[p.cat] - ORDER[q.cat]).slice(0, 5), s2 = 168; let xx = 80; y += 50;
      for (const i of its) { x.save(); rr(x, xx, y, s2, s2, 22); x.clip(); x.fillStyle = i === buyC ? "#2a2440" : "#eceae6"; x.fillRect(xx, y, s2, s2); try { const im = i === buyC ? await loadImg(buyC.img || svgSrc(buyC)) : await loadItem(i); if (/^data:image\/svg/.test(im.src)) x.drawImage(im, xx + s2 * 0.1, y + s2 * 0.1, s2 * 0.8, s2 * 0.8); else { const sc = Math.max(s2 / im.width, s2 / im.height); x.drawImage(im, xx + (s2 - im.width * sc) / 2, y + (s2 - im.height * sc) / 2, im.width * sc, im.height * sc); } } catch (e) {} x.restore(); if (i === buyC) { x.strokeStyle = holo; x.lineWidth = 6; rr(x, xx, y, s2, s2, 22); x.stroke(); } xx += s2 + 14; } }
  } else {
    const r = diagnose(); if (!r) throw new Error("none"); const ty = TYPES[r.type];
    x.fillStyle = "#9aa1bb"; x.font = B(40); x.fillText(ja() ? "わたしのクローゼット診断" : "My closet type", 80, 300);
    x.fillStyle = holo; x.font = F(700, 96); let y = wrap(x, ja() ? ty[0] : ty[1], 80, 430, W - 160, 112);
    x.fillStyle = "#d5d9ee"; x.font = B(38); y = wrap(x, ja() ? ty[2] : ty[3], 80, y + 20, W - 160, 56);
    x.fillStyle = "#9aa1bb"; x.font = B(34); x.fillText(t("dxCombos"), 80, y + 70);
    x.fillStyle = "#fff"; x.font = F(700, 160); x.fillText(r.combos.toLocaleString(), 80, y + 240);
    const w = x.measureText(r.combos.toLocaleString()).width; x.font = F(700, 54); x.fillText(t("dxWays"), 100 + w, y + 240);
    y += 320; let bx = 80; const tot = r.n;
    ["m", "n", "e", "c"].forEach(k => { if (!r.fam[k]) return; const ww = (W - 160) * r.fam[k] / tot; x.fillStyle = FAM_COL[k]; rr(x, bx, y, Math.max(ww - 6, 8), 34, 17); x.fill(); bx += ww; });
    y += 110;
    if (r.star) { x.fillStyle = "#9aa1bb"; x.font = B(34); x.fillText(t("dxStar"), 80, y); try { const im = await loadItem(r.star); x.save(); rr(x, 80, y + 30, 240, 240, 26); x.clip(); x.fillStyle = "#20243a"; x.fillRect(80, y + 30, 240, 240); const s = r.star.img && !/^data:image\/svg/.test(im.src) ? Math.max(240 / im.width, 240 / im.height) : 200 / 100; x.drawImage(im, 80 + (240 - im.width * s) / 2, y + 30 + (240 - im.height * s) / 2, im.width * s, im.height * s); x.restore(); } catch (e) {} x.fillStyle = "#fff"; x.font = B(44); wrap(x, nm(r.star), 360, y + 160, W - 440, 58); }
  }
  x.fillStyle = "#9aa1bb"; x.font = B(32); x.fillText(location.host || "closet.ai", 80, H - 90);
  x.fillStyle = holo; x.fillRect(80, H - 150, W - 160, 4);
  return new Promise(res => c.toBlob(res, "image/png"));
}
async function share(what, how) {
  const J = ja(), url = location.href.split("#")[0];
  let text;
  if (what === "look") { const L = st.look, show = L && !L.sample ? L : sampleTx[st.lang]; text = J ? `今日のコーデは「${show?.title}」。手持ちの服からAIが組んでくれた #CLOSETAI` : `Today's look: "${show?.title}", built by AI from my own closet #CLOSETAI`; }
  else if (what === "remix") { const r = rx?.result; text = J ? `憧れコーデ「${rx?.title}」を手持ちの服で再現したら、再現度${r?.score}%でした #CLOSETAI` : `Rebuilt "${rx?.title}" from my own closet: ${r?.score}% match #CLOSETAI`; }
  else if (what === "buy") { text = J ? `買う前にAIに聞いてみたら「${buyR ? t(VERD[buyR.verdict][1]) : ""}」（買い度${buyR?.score}）。手持ちの服とのコーデが${buyR?.more}通り増えるらしい #CLOSETAI` : `Asked AI before buying: "${buyR ? t(VERD[buyR.verdict][1]) : ""}" (buy score ${buyR?.score}), +${buyR?.more} outfits with my closet #CLOSETAI`; }
  else { const r = diagnose(), ty = r && TYPES[r.type]; text = J ? `わたしのクローゼットは「${ty?.[0]}」タイプ。手持ちの服で${r?.combos}通りのコーデが組めるらしい #CLOSETAI` : `My closet type is "${ty?.[1]}" — ${r?.combos} outfits from what I already own #CLOSETAI`; }
  if (how === "x") return void window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank", "noopener");
  if (how === "th") return void window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(text + " " + url)}`, "_blank", "noopener");
  if (how === "line") return void window.open(`https://line.me/R/share?text=${encodeURIComponent(text + " " + url)}`, "_blank", "noopener");
  try {
    const blob = await makeCard(what); const file = new File([blob], `closet-ai-${what}.png`, { type: "image/png" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], text }); return; }
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = file.name; document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    const prev = $("preview"); prev.src = URL.createObjectURL(blob); prev.hidden = false; status(t("made"));
  } catch (e) { if (e?.name !== "AbortError") status(t("madeFail")); }
}

/* ---------- クローゼット ---------- */
function renderCloset() {
  const f = st.filter, list = st.items.filter(i => f === "all" || i.cat === f);
  $("cnt").textContent = `${st.items.length} ${t("items")}`;
  $("flt").innerHTML = ["all", ...CATS].map(c => `<button type="button" class="chip" data-f="${c}" aria-pressed="${c === f}">${t(c)}</button>`).join("");
  $("rack").innerHTML = `<label class="addtile" for="file"><svg viewBox="0 0 40 40" fill="none" stroke="url(#hg)" stroke-width="2.4" stroke-linecap="round"><rect x="5" y="10" width="30" height="22" rx="6"/><circle cx="20" cy="21" r="6"/><path d="M14 10l2-4h8l2 4"/></svg>${t("addPhoto")}<small>${t("addHint")}</small></label><label class="addtile" for="fcam"><svg viewBox="0 0 40 40" fill="none" stroke="url(#hg)" stroke-width="2.4" stroke-linecap="round"><circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="5"/></svg>${t("camTile")}<small>${t("camHint")}</small></label><button type="button" class="addtile" id="addText"><svg viewBox="0 0 40 40" fill="none" stroke="url(#hg)" stroke-width="2.4" stroke-linecap="round"><path d="M20 9v22M9 20h22"/></svg>${t("addText")}</button>` +
    list.map(i => `<div class="tile${i.busy ? " busy" : ""}"><div class="ph${phc(i)}">${art(i)}</div><div class="nm">${esc(i.busy ? t("tagging") : nm(i))}</div><div class="ct"><i style="background:${col(i.color)}"></i>${t(i.cat)}</div>${i.busy ? "" : `<button class="x" type="button" data-del="${esc(i.id)}" aria-label="${t("del")}">×</button>`}</div>`).join("");
  $("clr").hidden = !st.items.some(i => i.sample);
}
async function loadAI() {
  if (clf) return clf; if (clfLoading) return clfLoading;
  clfLoading = (async () => {
    status(t("loading")); bar(0);
    const tf = await import(LIB); tf.env.allowLocalModels = false;
    const p = await tf.pipeline("zero-shot-image-classification", MODEL, { dtype: "q8", progress_callback: e => { if (e.status === "progress_total" && e.total) { bar(e.progress); status(`${t("loading")} ${Math.round(e.loaded / 1e6)} / ${Math.round(e.total / 1e6)} MB`); } } });
    bar(null); status(""); clf = p; return p;
  })();
  try { return await clfLoading; } catch (e) { clfLoading = null; bar(null); throw e; }
}
function dominant(img) {
  const S = 64, c = document.createElement("canvas"); c.width = c.height = S; const x = c.getContext("2d", { willReadFrequently: true }); x.drawImage(img, 0, 0, S, S);
  const d = x.getImageData(0, 0, S, S).data, px = (i, j) => { const o = (j * S + i) * 4; return [d[o], d[o + 1], d[o + 2]]; };
  let br = [0, 0, 0], bn = 0; for (let i = 0; i < S; i++) for (const j of [0, 1, S - 2, S - 1]) for (const v of [px(i, j), px(j, i)]) { br[0] += v[0]; br[1] += v[1]; br[2] += v[2]; bn++; }
  br = br.map(v => v / bn);
  const buckets = new Map();
  for (let j = Math.floor(S * 0.15); j < S * 0.85; j++) for (let i = Math.floor(S * 0.15); i < S * 0.85; i++) { const p = px(i, j); if (Math.hypot(p[0] - br[0], p[1] - br[1], p[2] - br[2]) < 38) continue; const key = (p[0] >> 5) + "," + (p[1] >> 5) + "," + (p[2] >> 5); const b = buckets.get(key) || [0, 0, 0, 0]; b[0] += p[0]; b[1] += p[1]; b[2] += p[2]; b[3]++; buckets.set(key, b); }
  let best = null; for (const b of buckets.values()) if (!best || b[3] > best[3]) best = b;
  if (!best) return hex(...px(S >> 1, S >> 1));
  return hex(...best.slice(0, 3).map(v => Math.round(v / best[3])));
}
async function shrink(file) {
  const url = URL.createObjectURL(file);
  try { const im = new Image(); im.src = url; await im.decode(); const k = Math.min(1, 420 / Math.max(im.naturalWidth, im.naturalHeight)), c = document.createElement("canvas"); c.width = Math.round(im.naturalWidth * k); c.height = Math.round(im.naturalHeight * k); c.getContext("2d").drawImage(im, 0, 0, c.width, c.height); return { data: c.toDataURL("image/jpeg", 0.82), color: dominant(c) }; }
  finally { URL.revokeObjectURL(url); }
}
function manual(img, color) { pendingImg = img || null; $("apv").hidden = !img; if (img) $("apv").src = img; if (color) $("acol").value = color; $("addf").hidden = false; $("an").focus(); }
const autoName = (kind, color) => { const c = near(col(color)), k = K(kind); return ja() ? `${c.ja}の${k.ja}` : `${cap(c.en)} ${k.en}`; };
async function addPhoto(file) {
  let sm; try { sm = await shrink(file); } catch (e) { status(t("aiFail")); return; }
  const item = { id: "u" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), cat: "top", kind: "tshirt", img: sm.data, color: sm.color, busy: true };
  st.items.unshift(item); st.filter = "all"; renderCloset();
  try {
    const c = await loadAI(), keys = Object.keys(KINDS), labels = [...keys.map(k => KINDS[k][5]), ...NOT];
    const out = await c(sm.data, labels, { hypothesis_template: "a product photo of {}" });
    const k = keys.find(k => KINDS[k][5] === out[0].label);
    if (!k) { st.items = st.items.filter(i => i !== item); status(t("notCloth")); }
    else { Object.assign(item, { kind: k, cat: KINDS[k][0], name: autoName(k, sm.color), busy: false }); status(""); }
  } catch (e) { console.warn(e); st.items = st.items.filter(i => i !== item); manual(sm.data, sm.color); status(t("aiFail")); }
  save(); renderCloset();
}

/* ---------- 憧れコーデ再現 ---------- */
const lab = h => { const lin = v => { v /= 255; return v > 0.04045 ? ((v + 0.055) / 1.055) ** 2.4 : v / 12.92; }; const [r, g, b] = rgb(h).map(lin); const f = v => v > 0.008856 ? Math.cbrt(v) : 7.787 * v + 16 / 116; const X = f((r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047), Y = f(r * 0.2126 + g * 0.7152 + b * 0.0722), Z = f((r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883); return [116 * Y - 16, 500 * (X - Y), 200 * (Y - Z)]; };
const dE = (a, b) => { const A = lab(a), B = lab(b); return Math.hypot(A[0] - B[0], A[1] - B[1], A[2] - B[2]); };
let rx = null;
function remixMatch(target) {
  const items = st.items.filter(i => !i.busy);
  const out = target.items.map(tg => {
    const tk = K(tg.kind); let best = null;
    for (const i of items) {
      const ik = kindOf(i); if (ik.cat !== tk.cat) continue;
      const cs = Math.max(0, 1 - dE(col(i.color), tg.color) / 55), ks = i.kind === tg.kind ? 1 : Math.max(0.3, 0.7 - Math.abs(ik.f - tk.f) * 0.1);
      const s = cs * 0.62 + ks * 0.38; if (!best || s > best.s) best = { i, s };
    }
    return { tg, best };
  });
  return { out, score: Math.round(out.reduce((x, o) => x + (o.best ? o.best.s : 0), 0) / Math.max(1, out.length) * 100) };
}
function renderLooks() {
  $("looks").innerHTML = PH.LOOKS.map(L => `<button type="button" class="lookcard" data-look="${L.id}" aria-pressed="${!!rx && rx.id === L.id}"><img src="${PH.U(L.ph, 400, 600)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'"><span>${esc(ja() ? L.ja : L.en)}</span></button>`).join("");
  if (rx) { if (!rx.user) { const L = PH.LOOKS.find(x => x.id === rx.id); rx.title = ja() ? L.ja : L.en; } else rx.title = t("rxMine"); renderRx(false); }
}
function pickLook(id) {
  const L = PH.LOOKS.find(x => x.id === id);
  rx = { id, src: PH.U(L.ph, 700, 1050), title: ja() ? L.ja : L.en, credit: L.credit, user: false, items: L.items.map(it => ({ kind: it.kind, color: it.color, x: it.box[0] + it.box[2] * (KINDS[it.kind][0] === "outer" ? 0.16 : 0.5), y: it.box[1] + it.box[3] * (KINDS[it.kind][0] === "outer" ? 0.4 : 0.5) })) };
  renderLooks(); renderRx(true);
  $("rxwork").scrollIntoView({ behavior: "smooth", block: "start" });
}
async function rxUpload(file) {
  const url = URL.createObjectURL(file);
  try {
    const im = new Image(); im.src = url; await im.decode();
    const k = Math.min(1, 900 / Math.max(im.naturalWidth, im.naturalHeight)), c = document.createElement("canvas");
    c.width = Math.round(im.naturalWidth * k); c.height = Math.round(im.naturalHeight * k); c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
    rx = { id: "user", src: c.toDataURL("image/jpeg", 0.85), canvas: c, title: t("rxMine"), user: true, items: [] };
    renderLooks(); renderRx(true); $("rxwork").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (e) { status(t("err")); } finally { URL.revokeObjectURL(url); }
}
function sampleAt(c, fx, fy) {
  const x = c.getContext("2d", { willReadFrequently: true }), R = Math.max(3, Math.round(c.width * 0.025));
  const cx = Math.round(fx * c.width), cy = Math.round(fy * c.height);
  const d = x.getImageData(Math.max(0, cx - R), Math.max(0, cy - R), R * 2, R * 2).data, arr = [];
  for (let i = 0; i < d.length; i += 4) arr.push([d[i], d[i + 1], d[i + 2]]);
  arr.sort((a, b) => (a[0] * 0.3 + a[1] * 0.59 + a[2] * 0.11) - (b[0] * 0.3 + b[1] * 0.59 + b[2] * 0.11));
  const m = arr.slice(Math.floor(arr.length * 0.25), Math.ceil(arr.length * 0.75));
  return hex(...[0, 1, 2].map(k => Math.round(m.reduce((s, p) => s + p[k], 0) / m.length)));
}
const guessKind = (fx, fy) => fy > 0.84 ? "sneakers" : fy > 0.48 ? "trousers" : Math.abs(fx - 0.5) < 0.09 ? "tshirt" : "jacket";
function renderRx(anim) {
  const w = $("rxwork"); if (!rx) { w.hidden = true; return; } w.hidden = false;
  const opts = sel => CATS.map(c => `<optgroup label="${t(c)}">${Object.keys(KINDS).filter(k => KINDS[k][0] === c).map(k => `<option value="${k}"${k === sel ? " selected" : ""}>${ja() ? KINDS[k][1] : KINDS[k][2]}</option>`).join("")}</optgroup>`).join("");
  const cr = rx.credit && PH.C[rx.credit];
  $("rxphoto").innerHTML = `<div class="pic" id="rxpic"><img src="${esc(rx.src)}" alt="" onerror="this.style.minHeight='320px';this.style.visibility='hidden'">${rx.items.map((it, n) => `<span class="dot" data-n="${n + 1}" style="left:${it.x}%;top:${it.y}%"></span>`).join("")}</div>` +
    (rx.user ? `<p class="status">${t("rxTap")}</p><div class="taplist">${rx.items.map((it, n) => `<div class="taprow"><b>${n + 1}</b><i style="background:${it.color}"></i><select data-k="${n}" aria-label="${t("kind")}">${opts(it.kind)}</select><button type="button" data-rm="${n}" aria-label="${t("del")}">×</button></div>`).join("")}</div>`
      : cr ? `<p class="credits">Photo: <a href="https://unsplash.com/@${cr[1]}?utm_source=closet_ai&utm_medium=referral" target="_blank" rel="noopener">${esc(cr[0])}</a> / <a href="https://unsplash.com/?utm_source=closet_ai&utm_medium=referral" target="_blank" rel="noopener">Unsplash</a></p>` : "");
  const res = $("rxres");
  if (!rx.items.length) { res.innerHTML = `<h3 class="rxtitle">${esc(rx.title)}</h3><p class="why">${t("rxTap")}</p>`; return; }
  const r = remixMatch(rx); rx.result = r;
  res.className = "rxres" + (anim ? " pop" : "");
  res.innerHTML = `<h3 class="rxtitle">${esc(rx.title)}</h3><div class="rxscore"><small>${t("rxScore")}</small><b>${r.score}%</b></div>
  <div class="mrows">${r.out.map((o, n) => { const tk = K(o.tg.kind), c = near(o.tg.color), pc = o.best ? Math.round(o.best.s * 100) : 0, low = pc < 62, want = ja() ? `${c.ja}の${tk.ja}` : `${c.en} ${tk.en}`, q = encodeURIComponent(ja() ? `${c.ja} ${tk.ja}` : want);
    return `<div class="mrow"><span class="sw" style="background:${o.tg.color}"></span><span class="ar">→</span><span class="mi">${o.best ? `<span class="ph${phc(o.best.i)}">${art(o.best.i)}</span><span>${esc(nm(o.best.i))}<br><small style="color:var(--mute)">${t("rxLook")}: ${esc(want)}</small></span>` : `<span>${t("rxNone")}<br><small style="color:var(--mute)">${t("rxLook")}: ${esc(want)}</small></span>`}</span><span class="pc${low ? " low" : ""}">${pc}%</span>${low ? `<div class="shops"><span style="font-size:13px;color:var(--mute);align-self:center">${t("rxLow")}</span><a href="https://www.amazon.${ja() ? "co.jp" : "com"}/s?k=${q}" target="_blank" rel="noopener">Amazon${t("findAt")}</a>${ja() ? `<a href="https://search.rakuten.co.jp/search/mall/${q}/" target="_blank" rel="noopener">楽天${t("findAt")}</a>` : ""}</div>` : ""}</div>`; }).join("")}</div>
  <div class="row sharerow"><button class="btn go" type="button" data-share="remix" data-k="img">${t("saveImg")}</button><button class="btn" type="button" data-share="remix" data-k="x">${t("shareX")}</button><button class="btn" type="button" data-share="remix" data-k="th">${t("shareTh")}</button><button class="btn" type="button" data-share="remix" data-k="line">${t("shareLine")}</button><button class="btn" type="button" id="rxwear">${t("rxWear")}</button></div>`;
}
function renderCredits() {
  const keys = new Set([PH.HERO.credit, ...PH.LOOKS.map(l => l.credit), ...st.items.filter(i => i.sample && i.credit).map(i => i.credit)]);
  $("credits").innerHTML = `${t("photos")}: ` + [...keys].map(k => `<a href="https://unsplash.com/@${PH.C[k][1]}?utm_source=closet_ai&utm_medium=referral" target="_blank" rel="noopener">${esc(PH.C[k][0])}</a>`).join(", ") + ` / <a href="https://unsplash.com/?utm_source=closet_ai&utm_medium=referral" target="_blank" rel="noopener">Unsplash</a>`;
}

/* ---------- 買う前チェック ---------- */
let buyC = null, buyR = null;
function goodOf(list) {
  const cs = combos(list.filter(i => !i.busy)); let ok = 0; const use = {}, keep = [];
  for (const c of cs) {
    const A = c.map(info), accs = A.filter(a => !a.c.n);
    if (accs.length > 1) { let bad = false; for (let x = 0; x < accs.length; x++) for (let y = x + 1; y < accs.length; y++) { const d = Math.abs(accs[x].h.h - accs[y].h.h); if (Math.min(d, 360 - d) > 40) bad = true; } if (bad) continue; }
    const fs = A.map(a => a.k.f); if (Math.max(...fs) - Math.min(...fs) > 3) continue;
    ok++; keep.push(c); c.forEach(i => { if (i.cat !== "acc") use[i.id] = (use[i.id] || 0) + 1; });
  }
  return { ok, use, list: keep };
}
function buyEval(c) {
  const J = ja(), all = st.items.filter(i => !i.busy && i.id !== c.id), base = goodOf(all), withC = goodOf([...all, c]);
  const more = Math.max(0, withC.ok - base.ok), pc = {};
  withC.list.forEach(cmb => { if (cmb.includes(c)) cmb.forEach(i => { if (i !== c && i.cat !== "acc") pc[i.id] = (pc[i.id] || 0) + 1; }); });
  const partners = Object.keys(pc).sort((a, b) => pc[b] - pc[a]).map(byId).filter(Boolean);
  const similar = all.filter(i => i.kind === c.kind && dE(col(i.color), col(c.color)) < 22);
  const n = Math.max(1, all.filter(i => i.cat !== "acc").length), expected = base.ok > 0 ? base.ok * 4 / n : 1;
  let score = 35 + 40 * Math.min(more / expected, 1.5) / 1.5 + Math.min(20, partners.length * 2);
  if (similar.length) score = Math.min(score - 25, 48);
  if (!more) score = Math.min(score, 28);
  score = clamp(Math.round(score), 5, 99);
  const verdict = similar.length ? "dup" : score >= 75 ? "go" : score >= 50 ? "think" : "wait";
  const tp = +$("temp").value, looks = [];
  const L1 = buildLook({ occ: 0, tp, mood: "", must: c.id, extra: [c] });
  if (L1) looks.push({ occ: 0, c: L1.c, rate: rateLook(L1.c, L1.ctx) });
  const L2 = buildLook({ occ: kindOf(c).f >= 3 ? 4 : 1, tp, mood: "", must: c.id, extra: [c] });
  if (L2 && (!L1 || L2.c.map(i => i.id).sort().join() !== L1.c.map(i => i.id).sort().join())) looks.push({ occ: kindOf(c).f >= 3 ? 4 : 1, c: L2.c, rate: rateLook(L2.c, L2.ctx) });
  const has = cat => all.some(i => i.cat === cat);
  const need = c.cat === "top" && !has("bottom") ? t("bottom") : c.cat === "bottom" && !has("top") ? t("top") : (c.cat === "shoes" || c.cat === "outer" || c.cat === "acc") && !(has("top") || has("onepiece")) ? t("top") : "";
  const fav = all.reduce((x, i) => x + kindOf(i).f, 0) / n, gap = kindOf(c).f - fav;
  const cname = nm(c);
  let why;
  if (verdict === "dup") why = J ? `よく似た「${nm(similar[0])}」をもう持っています。買うなら、色か形がちがうものを選ぶと、着回しがもっと広がります。` : `You already own a very similar ${nm(similar[0]).toLowerCase()}. A different color or shape would widen your options more.`;
  else if (verdict === "go") why = J ? `手持ちの${partners.length}点と合わせられて、コーデが${more}通り増えます。着回し力の高い服です。` : `It pairs with ${partners.length} pieces you own and adds ${more} outfits. A hard-working buy.`;
  else if (need) why = J ? `合わせる${need}がまだクローゼットにないので、今は活躍しにくい服です。` : `You don't have ${need.toLowerCase()} to pair it with yet, so it won't get much use right now.`;
  else if (verdict === "think") why = J ? `合わせられる服は${partners.length}点。悪くはありませんが、${Math.abs(gap) > 1.2 ? (gap > 0 ? "手持ちの服より、きちんとしすぎる" : "手持ちの服より、カジュアルすぎる") : "似た役割の服が手持ちにある"}ので、よく考えてからがおすすめです。` : `It pairs with ${partners.length} pieces. Not bad, but ${Math.abs(gap) > 1.2 ? (gap > 0 ? "it's dressier than the rest of your closet" : "it's more casual than the rest of your closet") : "something in your closet already does a similar job"}, so think it over.`;
  else why = J ? `今のクローゼットとは合わせにくい服です。${Math.abs(gap) > 1.2 ? (gap > 0 ? "手持ちの服とくらべて、きちんとしすぎています。" : "手持ちの服とくらべて、カジュアルすぎます。") : !near(col(c.color)).n ? "色が強いので、合わせられる服が少なめです。" : ""}` : `It's hard to pair with your current closet. ${Math.abs(gap) > 1.2 ? (gap > 0 ? "It's much dressier than your other clothes." : "It's much more casual than your other clothes.") : !near(col(c.color)).n ? "The strong color limits what it goes with." : ""}`;
  return { score, verdict, more, partners, similar, looks, why, name: cname };
}
function buyRun(anim) { if (!buyC || buyC.busy) return renderBuy(); buyC.name = autoName(buyC.kind, buyC.color); buyR = buyEval(buyC); renderBuy(anim); }
async function buyUpload(file) {
  let sm; try { sm = await shrink(file); } catch (e) { status(t("aiFail")); return; }
  buyC = { id: "cand", kind: "tshirt", cat: "top", color: sm.color, img: sm.data, busy: true }; buyR = null; renderBuy();
  try {
    const c = await loadAI(), keys = Object.keys(KINDS), labels = [...keys.map(k => KINDS[k][5]), ...NOT];
    const out = await c(sm.data, labels, { hypothesis_template: "a product photo of {}" });
    const k = keys.find(k => KINDS[k][5] === out[0].label);
    if (k) Object.assign(buyC, { kind: k, cat: KINDS[k][0] }); else status(t("byNot"));
  } catch (e) { status(t("byFix")); }
  buyC.busy = false; buyRun(true);
}
function buyManual() { buyC = { id: "cand", kind: $("bykind").value, cat: KINDS[$("bykind").value][0], color: $("bycol").value, img: null }; buyRun(true); }
const VERD = { go: ["#7dffb0", "byGo"], think: ["#ffd36b", "byThink"], wait: ["#ff8a8a", "byWait"], dup: ["#ff8a8a", "byDup"] };
const candPh = c => `<div class="ph${c.img ? " photo" : ""}">${c.img ? `<img src="${esc(c.img)}" alt="">` : svgArt(c)}</div>`;
function miniCards(list, cand) { return list.map(i => i === cand ? `<div class="it cand">${candPh(i)}<span>${t("byThis")}</span></div>` : `<div class="it"><div class="ph${phc(i)}">${art(i)}</div><span>${esc(nm(i))}</span></div>`).join(""); }
function renderBuy(anim) {
  const box = $("byout"), J = ja();
  $("bykind").innerHTML = Object.keys(KINDS).map(k => `<option value="${k}"${buyC && buyC.kind === k ? " selected" : ""}>${J ? KINDS[k][1] : KINDS[k][2]}</option>`).join("");
  if (buyC) $("bycol").value = col(buyC.color);
  if (!buyC) { box.hidden = true; renderWish(); return; }
  box.hidden = false; box.classList.toggle("pop", !!anim);
  if (buyC.busy) { box.innerHTML = `<div class="byhead"><div class="byph photo"><img src="${esc(buyC.img)}" alt=""><i class="scanl"></i></div><div><span class="pill ai">${t("byReading")}</span><h3>${t("tagging")}</h3></div></div>`; return; }
  const r = buyR, v = VERD[r.verdict];
  box.innerHTML = `<div class="byhead"><div class="byph${buyC.img ? " photo" : ""}">${buyC.img ? `<img src="${esc(buyC.img)}" alt="">` : svgArt(buyC)}</div>
    <div class="bymeta"><span class="pill ai">${t("byChecked")}</span><h3>${esc(r.name)}</h3><p class="byfix">${t("byFixHint")}</p></div>
    <div class="byscore" style="--vc:${v[0]}"><small>${t("byScore")}</small><b>${r.score}</b><em>${t(v[1])}</em></div></div>
  <div class="bystats"><div><small>${t("byMore")}</small><b>+${r.more}<em>${t("dxWays")}</em></b></div><div><small>${t("byPartners")}</small><b>${r.partners.length}<em>${t("byPcs")}</em></b></div><div class="${r.similar.length ? "warn" : ""}"><small>${t("bySimilar")}</small><b>${r.similar.length}<em>${t("byPcs")}</em></b></div></div>
  <p class="why">${esc(r.why)}</p>
  ${r.similar.length ? `<div class="bysec"><b class="lbl">${t("bySimHave")}</b><div class="chlook">${miniCards(r.similar.slice(0, 4))}</div></div>` : ""}
  ${r.looks.length ? `<div class="bysec"><b class="lbl">${t("byLooks")}</b>${r.looks.map(L => `<div class="bylook"><div class="bylh"><span class="pill">${esc(t("occs")[L.occ])}</span><span class="pill">${t("rTotal")} ${L.rate.total}${t("rPts")}</span></div><div class="chlook">${miniCards(L.c.slice().sort((a, b) => ORDER[a.cat] - ORDER[b.cat]), buyC)}</div></div>`).join("")}</div>` : ""}
  ${r.partners.length ? `<div class="bysec"><b class="lbl">${t("byGoesWith")}</b><div class="chlook">${miniCards(r.partners.slice(0, 8))}</div></div>` : ""}
  <div class="row sharerow"><button class="btn go" type="button" data-share="buy" data-k="img">${t("saveImg")}</button><button class="btn" type="button" data-share="buy" data-k="x">${t("shareX")}</button><button class="btn" type="button" id="bywish">${t("byWish")}</button><button class="btn" type="button" id="bybought">${t("byBought")}</button></div>`;
  renderWish();
}
function renderWish() {
  const w = st.wish || [], box = $("wish");
  box.hidden = !w.length;
  box.innerHTML = w.length ? `<h3>${t("byWishT")}<small>${w.length}</small></h3><div class="wishl">${w.map((x, n) => `<div class="wi"><button type="button" class="wopen" data-wopen="${n}"><span class="ph${x.img ? " photo" : ""}">${x.img ? `<img src="${esc(x.img)}" alt="">` : svgArt(x)}</span><span class="wn">${esc(autoName(x.kind, x.color))}</span><span class="ws" style="--vc:${VERD[x.verdict][0]}">${x.score}${t("rPts")}・${t(VERD[x.verdict][1])}</span></button><button type="button" class="x" data-wdel="${n}" aria-label="${t("del")}">×</button></div>`).join("")}</div>` : "";
}

/* ---------- 着た記録 ---------- */
const pad2 = n => String(n).padStart(2, "0");
const dayStr = (d = new Date()) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const daysAgo = iso => Math.round((new Date(dayStr() + "T12:00:00") - new Date(iso + "T12:00:00")) / 864e5);
const setKey = ids => ids.map(byId).filter(i => i && i.cat !== "acc").map(i => i.id).sort().join();
function markWorn(ids) {
  const d = dayStr(); st.log = (st.log || []).filter(x => x.d !== d).concat({ d, ids: ids.filter(byId) }).slice(-180);
  save(); status(t("wornDone")); renderLog(); renderLook(false);
}
function recentFromLog() {
  const r = {}; (st.log || []).forEach(x => { const a = daysAgo(x.d); if (a >= 1 && a <= 3) x.ids.forEach(id => { r[id] = (r[id] || 0) + 2.4 / a; }); });
  return r;
}
function repeatNote(ids) {
  const k = setKey(ids); if (!k) return "";
  const hit = (st.log || []).filter(x => setKey(x.ids) === k && daysAgo(x.d) >= 1 && daysAgo(x.d) <= 14).map(x => daysAgo(x.d)).sort((a, b) => a - b)[0];
  return hit ? (ja() ? `この組み合わせは${hit}日前にも着ています。会う人が同じなら、1点だけ変えるのがおすすめです。` : `You wore this exact combo ${hit} day${hit > 1 ? "s" : ""} ago. Swap one piece if you're seeing the same people.`) : "";
}
function renderLog() {
  const box = $("logout"), J = ja(), log = st.log || [], items = st.items.filter(i => !i.busy);
  const cnt = {}, last = {};
  log.forEach(x => x.ids.forEach(id => { cnt[id] = (cnt[id] || 0) + 1; if (!last[id] || x.d > last[id]) last[id] = x.d; }));
  const strip = Array.from({ length: 14 }, (_, n) => { const d = new Date(); d.setDate(d.getDate() - 13 + n); const s = dayStr(d), e = log.find(x => x.d === s), it = e && e.ids.map(byId).filter(Boolean).sort((a, b) => ORDER[a.cat] - ORDER[b.cat])[0]; return `<div class="lday${e ? " on" : ""}${n === 13 ? " today" : ""}"><small>${d.getDate()}</small><span class="ph${it ? phc(it) : ""}">${it ? art(it) : ""}</span></div>`; }).join("");
  if (!log.length) { box.innerHTML = `<h2>${t("logT")}</h2><p class="why">${t("logEmpty")}</p><div class="lstrip">${strip}</div>`; return; }
  const top = items.filter(i => cnt[i.id]).sort((a, b) => cnt[b.id] - cnt[a.id]).slice(0, 3);
  const since = daysAgo(log.reduce((m, x) => x.d < m ? x.d : m, log[0].d)), sleep = items.filter(i => i.cat !== "acc" && (last[i.id] ? daysAgo(last[i.id]) >= 21 : since >= 21)).slice(0, 6);
  const used = items.filter(i => cnt[i.id]).length, pct = Math.round(used / Math.max(1, items.length) * 100);
  box.innerHTML = `<h2>${t("logT")}</h2>
  <div class="lstats"><div><small>${t("logDays")}</small><b>${log.length}<em>${J ? "日" : " days"}</em></b></div><div><small>${t("logUse")}</small><b>${pct}<em>%</em></b><span class="usebar"><i style="width:${pct}%"></i></span><small>${used} / ${items.length}${t("byPcs")}</small></div></div>
  <div class="lstrip">${strip}</div>
  ${top.length ? `<div class="bysec"><b class="lbl">${t("logTop")}</b><div class="chlook">${top.map(i => `<div class="it"><div class="ph${phc(i)}">${art(i)}</div><span>${esc(nm(i))}<br><b>${cnt[i.id]}${J ? "回" : "×"}</b></span></div>`).join("")}</div></div>` : ""}
  ${sleep.length ? `<div class="bysec"><b class="lbl">${t("logSleep")}</b><p class="why sm">${t("logSleepP")}</p><div class="chlook">${sleep.map(i => `<button type="button" class="it wake" data-wake="${esc(i.id)}"><div class="ph${phc(i)}">${art(i)}</div><span>${esc(nm(i))}<br><b>${last[i.id] ? (J ? `${daysAgo(last[i.id])}日前` : `${daysAgo(last[i.id])}d ago`) : (J ? "まだ0回" : "never")}</b></span></button>`).join("")}</div></div>` : ""}`;
}

/* ---------- 旅行の荷物リスト ---------- */
async function forecastRange(loc, from, to) {
  const u = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&start_date=${from}&end_date=${to}`;
  const r = await fetch(u); if (!r.ok) throw new Error("wx"); const d = (await r.json()).daily;
  return d.time.map((date, i) => ({ date, code: d.weather_code[i], max: Math.round(d.temperature_2m_max[i]), min: Math.round(d.temperature_2m_min[i]), pop: d.precipitation_probability_max?.[i] ?? 0 }));
}
async function planPack() {
  const J = ja(), city = $("pkcity").value.trim(), n = +$("pkdays").value, from = $("pkdate").value;
  if (!from) return;
  const a = daysAgo(from); if (a > 0) { $("pkst").textContent = t("pkPast"); return; }
  if (-a + n - 1 > 15) { $("pkst").textContent = t("pkFar"); return; }
  $("pkgo").disabled = true; $("pkst").textContent = t("thinking");
  try {
    const loc = city ? await geocode(city) : st.loc;
    if (!loc) { $("pkst").textContent = city ? t("noCity") : t("pkNeed"); return; }
    const end = new Date(from + "T12:00:00"); end.setDate(end.getDate() + n - 1);
    const days = await forecastRange(loc, from, dayStr(end)), packed = {}, plan = [];
    let prevTop = null;
    for (const d of days) {
      const bias = {}; for (const id in packed) { const it = byId(id); bias[id] = it && (it.cat === "top" || it.cat === "onepiece") ? 0.6 : 1.6; }
      if (prevTop) bias[prevTop] = (bias[prevTop] || 0) - 2.5;
      const r = buildLook({ occ: +$("pkocc").value, tp: dayTemp(d.max, d.min), rain: isRain(d), mood: "歩く", bias });
      if (!r) break;
      r.c.forEach(i => { packed[i.id] = (packed[i.id] || 0) + 1; });
      prevTop = (r.c.find(i => i.cat === "top" || i.cat === "onepiece") || {}).id || null;
      plan.push({ ...d, ids: r.c.map(i => i.id) });
    }
    if (!plan.length) { $("pkst").textContent = t("need"); return; }
    const rain = days.some(d => d.pop >= 50 || isRain(d)), hot = days.some(d => d.max >= 25), cold = days.some(d => d.min <= 5);
    const extras = [J ? `下着・くつ下 ${n}日分` : `Underwear & socks × ${n}`, J ? "パジャマ" : "Pajamas", J ? "スマホの充電器" : "Phone charger", ...(rain ? [J ? "折りたたみ傘" : "Folding umbrella"] : []), ...(hot ? [J ? "日焼け止め・帽子" : "Sunscreen & hat"] : []), ...(cold ? [J ? "手袋・マフラー" : "Gloves & scarf"] : []), J ? "たためるエコバッグ" : "Foldable tote"];
    st.pack = { name: loc.name, from, n, occ: +$("pkocc").value, plan, items: Object.keys(packed), extras, done: {} };
    save(); renderPack(true); $("pkst").textContent = "";
  } catch (e) { $("pkst").textContent = t("wxFail"); }
  finally { $("pkgo").disabled = false; }
}
function renderPack(anim) {
  const box = $("pkout"), P = st.pack, J = ja();
  if (!P) { box.innerHTML = ""; return; }
  const its = P.items.map(byId).filter(Boolean).sort((a, b) => ORDER[a.cat] - ORDER[b.cat]);
  const total = its.length + P.extras.length, done = Object.values(P.done).filter(Boolean).length;
  box.classList.toggle("pop", !!anim);
  box.innerHTML = `<div class="pkhead"><div><span class="pill ai">${esc(P.name)}</span><h3>${J ? `${P.plan.length}日間で、服は${its.length}点だけ` : `${P.plan.length} days, just ${its.length} pieces`}</h3><p class="why sm">${t("pkSub2")}</p></div><div class="pkprog"><b>${done}</b>/${total}<small>${t("pkReady")}</small></div></div>
  <div class="pkdays">${P.plan.map(d => { const L = d.ids.map(byId).filter(Boolean).sort((a, b) => ORDER[a.cat] - ORDER[b.cat]); return `<div class="pkd"><span class="dh"><b>${esc(fmtDay(d.date))}</b>${wxIcon(wxType(d.code))}</span><span class="dt">${d.max}° / ${d.min}°${d.pop >= 30 ? ` ・ ${d.pop}%` : ""}</span><span class="dthumbs">${L.slice(0, 5).map(i => `<span class="ph${phc(i)}">${art(i)}</span>`).join("")}</span></div>`; }).join("")}</div>
  <div class="pklists"><div><b class="lbl">${t("pkClothes")}</b>${its.map(i => `<label class="pki"><input type="checkbox" data-pk="${esc(i.id)}"${P.done[i.id] ? " checked" : ""}><span class="ph${phc(i)}">${art(i)}</span><span>${esc(nm(i))}</span></label>`).join("")}</div>
  <div><b class="lbl">${t("pkOther")}</b>${P.extras.map((x, k) => `<label class="pki"><input type="checkbox" data-pk="x${k}"${P.done["x" + k] ? " checked" : ""}><span>${esc(x)}</span></label>`).join("")}</div></div>`;
}

/* ---------- 相談（AIスタイリストと話す） ---------- */
const KW = { jeans: /デニム|ジーンズ|ジーパン|\bjeans\b|\bdenim\b/i, trousers: /スラックス|\btrousers\b|\bslacks\b/i, chinos: /チノ|\bchinos?\b/i, skirt: /スカート|\bskirts?\b/i, shorts: /ショートパンツ|短パン|半ズボン|\bshorts\b/i, shirt: /(?<![TＴ]|ティー)シャツ|(?<!t-?)\bshirts?\b/i, tshirt: /Tシャツ|ティーシャツ|\bt-?shirts?\b|\btees?\b/i, sweater: /ニット|セーター|\bsweaters?\b|\bknits?\b/i, hoodie: /パーカー|フーディ|\bhoodies?\b/i, blouse: /ブラウス|\bblouses?\b/i, jacket: /ジャケット|ジャケ|\bjackets?\b/i, blazer: /ブレザー|テーラード|\bblazers?\b/i, coat: /コート|\bcoats?\b/i, down: /ダウン|\bpuffer\b|\bdown jacket\b/i, cardigan: /カーディガン|カーデ|\bcardigans?\b/i, dress: /ワンピ|ドレス|\bdress(es)?\b(?! for| up)/i, sneakers: /スニーカー|\bsneakers?\b|\btrainers?\b/i, leather: /革靴|ローファー|\bleather shoes?\b|\bloafers?\b/i, boots: /ブーツ|\bboots?\b/i, sandals: /サンダル|\bsandals?\b/i, bag: /バッグ|かばん|カバン|鞄|\bbags?\b|\btotes?\b/i, cap: /キャップ|帽子|\bcaps?\b|\bhats?\b/i, scarf: /マフラー|ストール|\bscarf\b|\bscarves\b/i };
const CATKW = { top: /トップス|上の服|\btops?\b/i, outer: /アウター|上着|羽織|\bouter(wear)?\b/i, bottom: /ボトムス|ズボン|パンツ(?!ー)|\bbottoms?\b|\bpants\b/i, shoes: /靴|くつ|\bshoes\b/i };
const COLKW = PAL.map(p => [p, new RegExp(p[0] + "|\\b" + p[1] + (p[0] === "白" ? "|ホワイト" : p[0] === "黒" ? "|ブラック" : ""), "i")]);
let chatW = null, chatBusy = false, llmState = "off", chatSeq = 0, lastQ = null;

function anchorOf(q) {
  const kinds = Object.keys(KW).filter(k => KW[k].test(q));
  const cats = Object.keys(CATKW).filter(c => CATKW[c].test(q));
  const colr = COLKW.filter(([, re]) => re.test(q)).map(([p]) => p[0]);
  if (!kinds.length && !cats.length) return null;
  const pool = st.items.filter(i => !i.busy && (kinds.length ? kinds.some(k => i.kind === k || KW[k].test(nm(i))) : cats.includes(i.cat)));
  const label = kinds.length ? (ja() ? KINDS[kinds[0]][1] : KINDS[kinds[0]][2]) : t(cats[0]);
  if (!pool.length) return { missing: (colr.length ? (ja() ? colr[0] + "の" : near(PAL.find(p => p[0] === colr[0])[2]).en + " ") : "") + label, q: (colr[0] ? colr[0] + " " : "") + label };
  const sc = i => (colr.includes(near(col(i.color)).ja) ? 2 : 0) + (nm(i).includes(label) ? 0.5 : 0);
  return { item: pool.slice().sort((a, b) => sc(b) - sc(a))[0] };
}
function dayOf(q) {
  if (/明後日|あさって|day after tomorrow/i.test(q)) return 2;
  if (/明日|あした|tomorrow/i.test(q)) return 1;
  const dw = ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"], en = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  for (let n = 0; n < 7; n++) if (q.includes(dw[n]) || q.toLowerCase().includes(en[n])) { const d = (st.days || []).findIndex(x => new Date(x.date + "T12:00:00").getDay() === n); return d >= 0 ? d : null; }
  return 0;
}
// 行き先の種類：[ことば, 場面, 気分, 呼び名ja, 呼び名en, コツja, コツen, 気温の上限]
const EVENTS = [
  [/葬式|お葬式|通夜|法事|告別式|funeral/i, 4, "落ち着き きちんと", "お葬式", "a funeral", "黒やネイビーなど暗い色だけでまとめます。光る小物や明るい色はさけましょう。", "Keep to black or navy. Skip shiny accessories and bright colors."],
  [/面接|interview/i, 4, "きちんと 落ち着き", "面接", "an interview", "シワのないシャツと、よごれのない靴がいちばん大事です。", "A crease-free shirt and clean shoes matter most."],
  [/結婚式|披露宴|二次会|お呼ばれ|wedding/i, 4, "きちんと", "結婚式", "a wedding", "全身白は花嫁の色なのでさけるのがマナーです。", "Avoid head-to-toe white; that's the bride's color."],
  [/入学式|卒業式|入社式|成人式|式典|表彰|発表会|ceremony|graduation/i, 4, "きちんと", "式", "a ceremony", "式では、ネイビーや黒を中心にすると安心です。", "Navy or black is the safe base for ceremonies."],
  [/顔合わせ|親に会う|(彼氏|彼女)の(親|家)|meet the parents/i, 4, "きちんと 落ち着き", "顔合わせ", "meeting the parents", "派手すぎない、清潔感のある服がいちばん好かれます。", "Clean and not too loud wins every time."],
  [/(?<!ド)ライブ|フェス|コンサート|concert|festival|gig/i, 0, "歩く カジュアル", "ライブ", "a concert", "荷物は少なく、両手があくバッグが楽です。人が多いので、よごれてもいい靴で。", "Pack light and keep your hands free. Wear shoes you don't mind getting stepped on."],
  [/ディズニー|ユニバ|USJ|テーマパーク|遊園地|theme park|disney/i, 0, "歩く 明るい", "テーマパーク", "a theme park", "1日で1万歩以上歩くこともあるので、靴はスニーカーが安心です。写真に映える色を1つ入れると楽しいです。", "You can walk 10,000+ steps, so sneakers are safest. One bright piece looks great in photos."],
  [/花火|夏祭り|お祭り|祭り|fireworks/i, 0, "歩く カジュアル", "お祭り", "a festival night", "夜は虫が多いので、うすい長そでがあると安心です。", "Bugs come out at night, so a light long sleeve helps."],
  [/海(?!外)|ビーチ|プール|beach|pool/i, 0, "カジュアル", "海", "the beach", "日やけに注意。帽子があるといいです。", "Watch the sun; a cap helps."],
  [/キャンプ|ハイキング|登山|山登り|camp|hiking/i, 3, "歩く 暖かい", "アウトドア", "the outdoors", "山は街より寒いので、1枚多めに持っていきましょう。", "It's colder up high, so bring one extra layer."],
  [/スキー|スノボ|雪山|ski|snowboard/i, 3, "暖かい", "雪山", "the snow", "首と手首を温めると、体全体が楽になります。", "Warm neck and wrists keep your whole body comfortable."],
  [/初詣|new year shrine/i, 0, "暖かい", "初詣", "a New Year shrine visit", "外で並ぶので、首元を温めるとちがいます。", "You'll queue outside, so keep your neck warm."],
  [/合コン|初デート|告白|first date/i, 2, "きれいめ 明るい", "初デート", "a first date", "はじめて会う日は清潔感がいちばん。明るい色を顔の近くに持ってくると、表情が明るく見えます。", "On a first meeting, clean beats trendy. A light color near your face brightens it."],
  [/女子会|ランチ|お茶|brunch|lunch/i, 0, "きれいめ", "ランチ", "lunch", "", ""],
  [/美術館|博物館|映画館|museum|cinema/i, 0, "きれいめ", "おでかけ", "an outing", "館内は冷えやすいので、羽織りを1枚。", "Inside can be chilly, so bring a layer."],
  [/撮影|写真を撮|プリ|photo ?shoot/i, 2, "明るい", "写真の日", "a photo day", "写真では、無地で色がはっきりした服が映えます。", "Plain, clear colors photograph best."],
  [/ドライブ|\bdrive\b|road trip/i, 0, "楽", "ドライブ", "a drive", "長くすわるので、楽なボトムスと、脱ぎ着しやすい羽織りがあると快適です。", "You'll sit a while, so wear easy bottoms and a layer you can take off."],
  [/飛行機|新幹線|長距離|flight|long drive/i, 3, "楽", "移動の日", "a travel day", "長い時間すわるので、ウエストが楽なものを。", "You'll sit a long time, so pick an easy waist."],
  [/部活|体育|運動|ジム|gym|workout/i, 0, "楽 歩く", "運動の日", "an active day", "", ""],
  [/学校|授業|大学|塾|school|\bclass\b/i, 0, "歩く", "学校", "school", "", ""],
  [/バイト|part-?time/i, 1, "歩く", "バイト", "work", "", ""],
  [/仕事|通勤|会社|オフィス|職場|商談|work|office|job/i, 1, "", "", "", "", ""],
  [/デート|\bdate\b/i, 2, "", "", "", "", ""],
  [/旅行|旅|遠出|trip|travel/i, 3, "歩く", "", "", "", ""],
  [/休日|休み|遊び|遊ぶ|買い物|カフェ|映画(に|を見|見に)|公園|weekend|shopping|cafe|movies? (with|tonight)/i, 0, "", "", "", "", ""]
];
function eventOf(q) { const e = EVENTS.find(x => x[0].test(q)); return e ? { occ: e[1], mood: e[2], ja: e[3], en: e[4], tipJ: e[5], tipE: e[6] } : null; }
const occOf = q => { const e = eventOf(q); return e ? e.occ : null; };
const TAGW = { bright: "明るい", calm: "落ち着き", walk: "歩く", smart: "きれいめ", casual: "カジュアル", warm: "暖かい" };
const OPP = { bright: "calm", calm: "bright", smart: "casual", casual: "smart" };
const tagsOf = s => Object.keys(TAGW).filter(k => moodOf(s)[k]);
function lookReq(q) {
  const di = dayOf(q), d = di != null && st.days ? st.days[di] : null, ev = eventOf(q);
  const num = q.match(/(-?\d{1,2})\s*(度|℃|°|c\b)/i);
  let tp = num ? +num[1] : d ? dayTemp(d.max, d.min) : +$("temp").value;
  if (!num && !d) { if (/寒|冷え|cold|freezing/i.test(q)) tp = Math.min(tp, 8); else if (/暑|hot/i.test(q)) tp = Math.max(tp, 28); else if (/涼し|cool/i.test(q)) tp = 18; }
  if (!num && /スキー|スノボ|雪山|ski|snowboard/i.test(q)) tp = Math.min(tp, 2);
  const an = anchorOf(q), tags = tagsOf(q + " " + (ev ? ev.mood : ""));
  return { q, occ: ev ? ev.occ : st.occ, ev, tp, rain: /雨|rain/i.test(q) || isRain(d), day: di, d, tags, mood: tags.map(k => TAGW[k]).join(" "), must: an?.item?.id || null, missing: an?.missing || null, missQ: an?.q || "", exclude: [], recent: di ? null : recentFromLog() };
}
// 言い直し（もっと明るく、ジャケットなしで など）
const REFINE = /もっと|もう少し|もうちょっと|なしで|無しで|以外|じゃなくて|ではなく|抜きで|やめて|いらない|は嫌|はいや|\bmore |\bless |without|instead of/i;
function refineReq(q) {
  const r = { ...lastQ.r, again: false, tags: [...(lastQ.r.tags || [])], exclude: [...(lastQ.r.exclude || [])] }, J = ja(), did = [];
  const add = k => { r.tags = r.tags.filter(x => x !== OPP[k] && x !== k).concat(k); did.push(J ? { bright: "明るめ", calm: "落ち着いた感じ", smart: "きれいめ", casual: "カジュアル", warm: "暖かめ", walk: "歩きやすい感じ" }[k] : { bright: "brighter", calm: "calmer", smart: "smarter", casual: "more casual", warm: "warmer", walk: "easier to walk in" }[k]); };
  if (/明る|派手|カラフル|元気|華やか|bright|colou?rful/i.test(q)) add("bright");
  if (/落ち着|地味|シック|大人っぽ|calm|subtle|chic/i.test(q)) add("calm");
  if (/きれいめ|ちゃんと|上品|きちんと|フォーマル|smart|dressy|formal/i.test(q)) { add("smart"); r.occ = Math.max(r.occ, 1); }
  if (/カジュアル|ラフ|ゆる|楽な|casual|relaxed/i.test(q)) add("casual");
  if (/暖か|あったか|寒そう|warm/i.test(q)) { add("warm"); r.tp = Math.min(r.tp, r.tp - 4); }
  if (/涼し|薄着|暑そう|cool|lighter/i.test(q)) { r.tags = r.tags.filter(x => x !== "warm"); r.tp += 5; did.push(J ? "涼しめ" : "cooler"); }
  if (/歩きやす|動きやす|walk/i.test(q)) add("walk");
  if (/なしで|無しで|以外|じゃなくて|ではなく|抜きで|やめて|いらない|は嫌|はいや|without|instead of|\bno /i.test(q)) {
    const kinds = Object.keys(KW).filter(k => KW[k].test(q)), cats = Object.keys(CATKW).filter(c => CATKW[c].test(q));
    const out = st.items.filter(i => kinds.some(k => i.kind === k || KW[k].test(nm(i))) || cats.includes(i.cat)).map(i => i.id);
    if (out.length) { r.exclude = [...new Set([...r.exclude, ...out])]; if (out.includes(r.must)) r.must = null; did.push(J ? `${kinds.length ? KINDS[kinds[0]][1] : t(cats[0])}なし` : `no ${kinds.length ? KINDS[kinds[0]][2] : t(cats[0]).toLowerCase()}`); }
  }
  r.mood = r.tags.map(k => TAGW[k]).join(" ");
  return { r, did };
}
// コーデの点数（色・場面・気温）
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function rateLook(c, ctx) {
  const A = c.map(info), fs = A.map(a => a.k.f), fav = fs.reduce((x, y) => x + y, 0) / fs.length;
  const scene = clamp(Math.round(100 - Math.abs(fav - ctx.target) * 20 - (Math.max(...fs) - Math.min(...fs) > 3 ? 12 : 0)), 40, 100);
  const body = A.filter(a => a.k.cat !== "shoes" && a.k.cat !== "acc"), outer = A.some(a => a.k.cat === "outer");
  let temp = 100 - Math.abs(body.reduce((x, a) => x + a.k.w, 0) - ctx.need) * 13;
  if (outer && ctx.tp >= 24) temp -= 18; if (!outer && ctx.tp < 12) temp -= 18;
  for (const a of A) { const k = a.i.kind; if ((k === "shorts" && ctx.tp < 20) || (k === "sandals" && ctx.tp < 18) || (k === "down" && ctx.tp > 14)) temp -= 20; }
  temp = clamp(Math.round(temp), 40, 100);
  const accs = A.filter(a => !a.c.n); let color;
  if (accs.length === 0) color = ctx.m.bright ? 82 : 92; else if (accs.length === 1) color = ctx.m.calm ? 84 : 97;
  else { let sp = 0; for (let x = 0; x < accs.length; x++) for (let y = x + 1; y < accs.length; y++) { const d = Math.abs(accs[x].h.h - accs[y].h.h); sp = Math.max(sp, Math.min(d, 360 - d)); } color = sp > 40 ? 64 : 85; }
  const top = A.find(a => a.k.cat === "top"), bot = A.find(a => a.k.cat === "bottom");
  if (top && bot && Math.abs(top.h.l - bot.h.l) > 0.25) color += 3;
  color = clamp(color, 40, 100);
  return { total: Math.round(color * 0.36 + scene * 0.34 + temp * 0.3), color, scene, temp };
}
// 色の相談
const GOES = { "白": "*", "黒": "*", "グレー": ["白", "黒", "ネイビー", "ピンク", "水色", "えんじ"], "チャコール": ["白", "グレー", "ベージュ", "水色"], "ライトグレー": ["白", "ネイビー", "黒", "ピンク"], "ネイビー": ["白", "ベージュ", "グレー", "キャメル", "水色", "赤", "黄色"], "インディゴ": ["白", "ベージュ", "グレー", "茶色", "黒"], "ベージュ": ["白", "茶色", "ネイビー", "カーキ", "緑", "黒"], "キャメル": ["白", "ネイビー", "黒", "ベージュ", "緑"], "茶色": ["ベージュ", "白", "ネイビー", "緑", "オレンジ"], "カーキ": ["白", "黒", "ベージュ", "ネイビー", "オレンジ"], "青": ["白", "グレー", "ベージュ", "ネイビー"], "水色": ["白", "ネイビー", "グレー", "ベージュ"], "赤": ["黒", "白", "ネイビー", "グレー", "ベージュ"], "えんじ": ["ベージュ", "グレー", "ネイビー", "白"], "ピンク": ["グレー", "白", "ネイビー", "ベージュ"], "紫": ["グレー", "白", "黒"], "緑": ["白", "ベージュ", "茶色", "ネイビー"], "ミント": ["白", "ベージュ", "グレー", "ネイビー"], "黄色": ["ネイビー", "白", "グレー", "黒"], "オレンジ": ["ネイビー", "白", "カーキ", "茶色"] };
function colorAnswer(q) {
  const hit = COLKW.filter(([, re]) => re.test(q)).map(([p]) => p).sort((a, b) => b[0].length - a[0].length)[0];
  if (!hit) return null;
  const J = ja(), base = hit[0], go = GOES[base] || "*";
  const nameOf = jn => J ? jn : PAL.find(p => p[0] === jn)[1];
  const pals = go === "*" ? null : go;
  const mine = st.items.filter(i => !i.busy && near(col(i.color)).ja !== base && (pals ? pals.includes(near(col(i.color)).ja) : true)).slice(0, 5);
  const list = pals ? pals.map(nameOf).join(J ? "・" : ", ") : "";
  const text = pals ? (J ? `${base}には、${list}がよく合います。` : `${cap(hit[1])} goes well with ${list}.`) : (J ? `${base}は、ほとんどどの色とも合う万能色です。迷ったら、紺やベージュと合わせると失敗しません。` : `${cap(hit[1])} goes with almost anything. When in doubt, pair it with navy or beige.`);
  const extra = !near(hit[2]).n ? (J ? "\n色のある服は、ほかを白・黒・グレーなどにして1点だけにすると、まとまります。" : "\nWith a colorful piece, keep the rest neutral so it's the only one.") : "";
  return { text: text + extra + (mine.length ? (J ? "\nあなたのクローゼットだと、このあたりが合わせやすいです。" : "\nFrom your closet, these pair easily.") : ""), look: mine.length ? { ids: mine.map(i => i.id), only: true } : null };
}
// おしゃれの悩み・お手入れ
const TIPS = [
  [/清潔感|せいけつ|clean look|look neat/i, "清潔感は、服の値段より手入れで決まります。\n・シワをのばす\n・白い服と靴のよごれを落とす\n・サイズが合っているものを着る\nこの3つだけで、ぐっと変わります。", "Looking neat comes from care, not price.\n- Smooth out wrinkles\n- Keep whites and shoes clean\n- Wear the right size\nThose three change a lot.", ["shirt", "sneakers"]],
  [/背.*高く|脚.*長く|足.*長く|スタイル.*よく|taller|longer legs/i, "縦長に見せるコツです。\n・上と下の色を近くする（同じ色や同じ濃さ）\n・トップスは前だけパンツに入れる\n・靴とパンツの色をそろえる\n・羽織りは前を開けて、縦の線をつくる", "To look taller:\n- Keep top and bottom close in color\n- Tuck just the front of your top\n- Match shoes to trousers\n- Wear your layer open for a long vertical line", ["trousers", "jeans", "jacket"]],
  [/すっきり見|細く見|着やせ|look slimmer|streamline/i, "すっきり見せるコツです。\n・ボトムスを濃い色にする\n・羽織りの前を開けて、縦の線をつくる\n・首元が少しあいた服を選ぶ\n・大きすぎず、小さすぎないサイズを着る", "For a streamlined look:\n- Go darker on the bottom\n- Wear your layer open for a vertical line\n- Pick a slightly open neckline\n- Choose a size that's neither baggy nor tight", ["jacket", "cardigan"]],
  [/大人っぽ|落ち着いて見|grown-?up|mature/i, "大人っぽく見せるには、色を3色までにして、白・黒・ネイビー・ベージュを中心にします。シャツやジャケットなど、えりのある服を1つ入れると一気に変わります。", "To look more grown-up, stick to three colors, mostly white, black, navy and beige. One collared piece, like a shirt or jacket, changes everything.", ["shirt", "blazer", "jacket"]],
  [/かわいく|やさしい印象|やわらか|softer|cute/i, "やさしい印象にするには、ベージュ・ピンク・水色などのやわらかい色や、ニットのようなふんわりした素材が効きます。黒は小物だけにすると軽く見えます。", "For a softer look, try beige, pink or light blue, and fluffy textures like knits. Keep black to accessories.", ["sweater", "cardigan", "skirt"]],
  [/垢抜け|あかぬけ|おしゃれに見|おしゃれになりたい|look stylish|more stylish/i, "おしゃれに見えるいちばんの近道です。\n・全身の色を3色まで\n・1点だけ「主役」を決める（色・柄・形のどれか）\n・すそ・そで・えりを整える（まくる、入れる、立てる）\n「整える」だけで、同じ服でもちがって見えます。", "Fastest route to looking stylish:\n- Three colors max\n- Pick one star piece (color, pattern or shape)\n- Fix the details: roll hems, tuck, set the collar\nSame clothes, different look.", null],
  [/着回し|服が少な|少ない服|服.*足りな|capsule|mix and match/i, "少ない服で着回すコツは、白・黒・ネイビー・ベージュ・デニムなど、合わせやすい色を中心に持つことです。その上で色のある服を1〜2枚足すと、組み合わせが一気に増えます。「診断」のページで、あと何を足すと何通り増えるかも見られます。", "To stretch a small closet, build around easy colors: white, black, navy, beige, denim. Add one or two colorful pieces and your combos jump. The Style type page shows what to add and how many outfits it unlocks.", null],
  [/シワ|しわ|wrinkle/i, "シワ対策です。\n・洗ったらすぐ干して、手でパンパンたたいてのばす\n・ハンガーにかけて、お風呂場の湯気に当てる\n・前の日の夜にかけておく\nアイロンがなくても、かなりのびます。", "Fighting wrinkles:\n- Hang right after washing and smooth with your hands\n- Hang it in a steamy bathroom\n- Hang tomorrow's outfit the night before\nWorks well even without an iron.", null],
  [/毛玉|pilling|pills/i, "毛玉は、裏返して洗濯ネットに入れて洗うと、できにくくなります。できてしまったら、ひっぱらずに毛玉取りやハサミでそっと切りましょう。", "Wash knits inside out in a laundry net to prevent pilling. If they appear, snip or shave them off instead of pulling.", ["sweater"]],
  [/洗濯|縮|shrink|wash/i, "服の内側のタグに洗い方のマークがあります。ニットやウールは縮みやすいので、ネットに入れて「手洗い」や「おしゃれ着」コースで。乾燥機は使わないのが安心です。", "Check the care tag inside. Knits and wool shrink easily: use a net and a gentle or hand-wash cycle, and skip the dryer.", null],
  [/黄ばみ|白.*(汚れ|よごれ)|yellow stain/i, "白い服のよごれは、時間がたつほど落ちにくくなります。えりやわきは、洗う前に洗剤を直接つけて少しおいてから洗うと落ちやすいです。", "Stains on whites set over time. Rub detergent straight onto collars and underarms, wait a bit, then wash.", ["tshirt", "shirt"]],
  [/季節の変わり目|寒暖差|朝晩|temperature swing/i, "朝と昼で気温がちがう日は、さっと脱ぎ着できる羽織りが主役です。カーディガンやジャケットを1枚持っておくと、1日中ちょうどよく過ごせます。", "On days with big temperature swings, an easy layer is key. One cardigan or jacket keeps you comfortable all day.", ["cardigan", "jacket"]],
  [/重ね着|レイヤード|layer/i, "重ね着のコツは、内側を薄く、外側を厚くすること。すそから中の服が少し見えると、こなれた感じになります。", "Layer thin under thick. A little of the inner layer showing at the hem looks effortless.", ["shirt", "sweater", "cardigan"]],
  [/配色|色の合わせ方|色の組み合わせ|color combo|match colou?rs/i, "配色の基本です。\n・3色まで\n・色のある服は1点だけ\n・迷ったら白・黒・ネイビー・ベージュ・グレーと合わせる\n・靴とバッグの色をそろえるとまとまる", "Color basics:\n- Three colors max\n- One colorful piece\n- When unsure, pair with white, black, navy, beige or grey\n- Matching shoes and bag pulls it together", null],
  [/似合う色|パーソナルカラー|personal colou?r|colors suit me/i, "似合う色を知る簡単な方法です。明るい場所で、真っ白な紙と、少しクリーム色の紙を顔の下に当ててみてください。真っ白で顔が明るく見えれば青みのある色（ネイビー・グレー・ピンク）、クリーム色で明るく見えれば黄みのある色（ベージュ・キャメル・カーキ）が得意なことが多いです。", "A quick test: in daylight, hold pure white paper, then cream paper, under your face. If pure white brightens you, cool colors (navy, grey, pink) tend to suit you; if cream does, warm ones (beige, camel, khaki).", null],
  [/靴.*(選|合わせ)|どの靴|which shoes/i, "靴選びの目安です。\n・きちんとした日は革靴\n・たくさん歩く日はスニーカー\n・雨の日はブーツ\n・迷ったら、パンツかバッグと色をそろえる", "Shoe rules of thumb:\n- Dressy day: leather shoes\n- Lots of walking: sneakers\n- Rain: boots\n- Unsure: match your trousers or bag", ["sneakers", "leather", "boots"]],
  [/小物|アクセ|accessor/i, "小物は「1点だけ足す」がコツです。シンプルな服に、色のあるバッグやキャップを1つ足すだけで、写真映えがぐっと上がります。", "With accessories, add just one. A colorful bag or cap on a simple outfit makes photos pop.", ["bag", "cap", "scarf"]],
  [/オーバーサイズ|サイズ感|大きめ|oversized|fit/i, "大きめの服を着るときは、どこか1か所を細くするのがコツです。上が大きいなら下は細め、下が太いなら上はコンパクトに。", "With oversized pieces, keep one part slim: big top, slim bottom, or wide bottom, compact top.", null],
  [/節約|安く|お金をかけず|budget|cheap/i, "お金をかけずにおしゃれに見せるなら、新しい服を買う前に、今の服の組み合わせを増やすのがいちばんです。「診断」のページで、今の服で何通り組めるかを見てみてください。", "The cheapest way to look good is more combos from what you own. The Style type page shows how many outfits you already have.", null]
];
function tipOf(q) { const x = TIPS.find(t => t[0].test(q)); if (!x) return null; const J = ja(); const mine = x[3] ? st.items.filter(i => !i.busy && x[3].includes(i.kind)).slice(0, 4) : []; return { text: J ? x[1] : x[2], look: mine.length ? { ids: mine.map(i => i.id), only: true } : null }; }
// クローゼットの中身
function invAnswer() {
  const J = ja(), its = st.items.filter(i => !i.busy);
  if (!its.length) return J ? "クローゼットはまだ空です。下のクローゼットに服を入れてください。" : "Your closet is empty. Add clothes below.";
  const per = CATS.map(c => [c, its.filter(i => i.cat === c).length]).filter(x => x[1]);
  const fam = { m: 0, n: 0, e: 0, c: 0 }; its.forEach(i => fam[near(col(i.color)).fam]++);
  const top = Object.keys(fam).sort((a, b) => fam[b] - fam[a])[0];
  const famN = J ? { m: "白・黒・グレー", n: "ネイビー系", e: "ベージュ・茶色系", c: "色のある服" } : { m: "white, black and grey", n: "navy tones", e: "beige and brown tones", c: "colorful pieces" };
  const n = diagnose()?.combos || 0;
  return J ? `今、${its.length}点の服があります。\n${per.map(([c, k]) => `${t(c)} ${k}点`).join("・")}\nいちばん多いのは${famN[top]}です。この服で、${n}通りのコーデが組めます。`
    : `You have ${its.length} pieces.\n${per.map(([c, k]) => `${t(c)} ${k}`).join(" · ")}\nMostly ${famN[top]}. That makes ${n} outfits.`;
}
function intentOf(q) {
  if (/荷造り|荷物|パッキング|\d+泊|packing|pack for/i.test(q)) return "pack";
  if (/買うべき|買おうか|買っていい|買ってもいい|迷って.*買|should i buy|worth buying/i.test(q)) return "bcheck";
  if (/好きな|嫌いな|きらいな|どう思う|知ってる|教えて.*(話|こと)|favou?rite|do you (like|know|think)/i.test(q) && !/着|服|コーデ|色|wear|outfit|colou?r/i.test(q)) return "other";
  if (lastQ && REFINE.test(q) && occOf(q) == null && !/天気|タイプ|weather/i.test(q)) return "refine";
  if (lastQ && /別の|べつの|ほか|他の|違う|ちがう|もう一|もういっこ|もう1|another|other|different|else/i.test(q) && !/タイプ|天気/.test(q)) return "again";
  if (tipOf(q)) return "tip";
  if (/何色|色.*合う|合う色|colou?r.*(go|match)|goes with.*colou?r/i.test(q) && COLKW.some(([, re]) => re.test(q)) && !Object.keys(KW).some(k => KW[k].test(q))) return "color";
  if (/何がある|何枚|何着|何点|持ってる服|持っている服|クローゼットの中|一覧|what do i (have|own)|how many/i.test(q)) return "inv";
  if (/買(?!い物)|足す|足し|欲しい|ほしい|足りない|buy|shop|missing|should i get/i.test(q)) return "buy";
  if (/(いちばん|一番|最も).*(使|活躍)|活躍|着回し.*(服|アイテム)|most useful|hardest-working|best piece/i.test(q)) return "star";
  if (/タイプ|診断|系統|似合う系|style type|my style/i.test(q)) return "type";
  if (/天気|気温|weather|forecast/i.test(q) && !/着|コーデ|服|wear|outfit/i.test(q)) return "wx";
  if (occOf(q) != null || anchorOf(q) || /着る|着て|着よう|着れ|着たら|コーデ|服|合う|合わせ|何着|なに着|格好|かっこう|恰好|outfit|wear|match|look|dress for|寒|暑|雨|明日|今日/i.test(q)) return "look";
  if (/こんにち|こんばん|おはよ|はじめまして|やあ|よろしく|hello|^hi\b|^hey/i.test(q)) return "hi";
  if (/ありがと|サンキュー|助か|thank/i.test(q)) return "thx";
  return "other";
}
const pick = a => a[Math.floor(Math.random() * a.length)];
const dayWord = r => r.day == null || r.day === 0 ? (ja() ? "今日" : "today") : r.day === 1 ? (ja() ? "明日" : "tomorrow") : r.d ? fmtDay(r.d.date) : "";
function helloText() {
  const J = ja(), d = wxToday, loc = st.loc;
  if (d && loc) return J ? `こんにちは！今日の${loc.name}は${t("wx")[wxType(d.code)]}、最高${d.max}°C・最低${d.min}°Cです。「今日なに着る？」と聞いてくれれば、天気に合わせてすぐ選びます。` : `Hi! ${loc.name} today: ${t("wx")[wxType(d.code)].toLowerCase()}, ${d.max}° / ${d.min}°. Ask "what should I wear today?" and I'll match the weather.`;
  return t("chHello");
}
function lookAnswer(r, mode, did) {
  const J = ja(), out = { text: "", look: null, acts: [] };
  const has = c => st.items.some(i => i.cat === c && !i.busy);
  if (!(has("onepiece") || (has("top") && has("bottom")))) { out.text = t("need"); return out; }
  const res = buildLook({ ...r, prevIds: mode === "again" ? lastQ.ids : null }) || buildLook({ ...r, must: null }) || buildLook({ ...r, must: null, exclude: [] });
  if (!res) { out.text = t("need"); return out; }
  const ex = explain(res.c, res.ctx);
  if (r.ev && r.ev.ja === "お葬式") ex.title = J ? "落ち着いた、お葬式の装い" : "Quiet funeral look";
  else if (r.ev && r.ev.ja) ex.title = ex.title.replace(t("occW")[r.occ], J ? r.ev.ja : r.ev.en.replace(/^(a|an|the) /, ""));
  const ids = res.c.slice().sort((a, b) => ORDER[a.cat] - ORDER[b.cat]).map(i => i.id), rate = rateLook(res.c, res.ctx);
  lastQ = { r, ids };
  const wx = r.d ? `${t("wx")[wxType(r.d.code)]}・${r.tp}°C` : `${r.tp}°C`;
  const place = r.ev && r.ev.ja ? (J ? r.ev.ja : r.ev.en) : t("occW")[r.occ];
  let lead;
  if (mode === "again") lead = pick(J ? ["では、こちらはどうでしょう。", "ちがう組み合わせも作ってみました。", "こういうのもありです。"] : ["How about this one instead?", "Here's a different take.", "This works too."]);
  else if (mode === "refine") lead = did.length ? (J ? `了解です。${did.join("・")}にしてみました。` : `Got it, made it ${did.join(", ")}.`) : (J ? "少し変えてみました。" : "I tweaked it a little.");
  else lead = J ? pick([`${dayWord(r)}の${place}（${wx}）なら、これがおすすめです。`, `${dayWord(r)}の${place}（${wx}）は、これでいきましょう。`, `${dayWord(r)}の${place}（${wx}）に合わせて選びました。`]) : `${cap(dayWord(r))}, ${place} (${wx}): here's my pick.`;
  const miss = r.missing && mode === "look" ? (J ? `クローゼットに${r.missing}がなかったので、手持ちの服で選びました。` : `There's no ${r.missing} in your closet, so I used what you have.`) + "\n" : "";
  const evTip = r.ev && mode === "look" ? (J ? r.ev.tipJ : r.ev.tipE) : "";
  out.text = `${miss}${lead}\n${J ? "「" + ex.title + "」" : "“" + ex.title + "”"}\n${ex.why}${evTip ? "\n" + evTip : ex.tip ? "\n" + ex.tip : ""}`;
  out.look = { ids, occ: r.occ, tp: r.tp, wx: r.d ? { code: r.d.code } : null, date: r.d && r.day ? r.d.date : undefined, rain: !!res.ctx.rain, rate, ...ex };
  out.acts = ["share", "open", "again"];
  if (r.missing && mode === "look") out.buyQ = r.missQ; else if (ex.buyQ) out.buyQ = ex.buyQ;
  return out;
}
function ruleAnswer(q, intent) {
  const J = ja(), out = { text: "", look: null, acts: [] };
  if (intent === "look") return lookAnswer(lookReq(q), "look");
  if (intent === "again") return lookAnswer({ ...lastQ.r, again: true }, "again");
  if (intent === "refine") { const { r, did } = refineReq(q); return lookAnswer(r, "refine", did); }
  if (intent === "tip") return { ...tipOf(q), acts: [] };
  if (intent === "color") return { ...colorAnswer(q), acts: [] };
  if (intent === "inv") { out.text = invAnswer(); return out; }
  if (intent === "pack") { out.text = J ? "旅行の荷物は「1週間」のページで作れます。行き先と日数を入れると、現地の天気に合わせて、少ない服で毎日のコーデを組み、持ち物リストにします。" : "Make a packing list on the Week page. Enter where and how long, and I'll plan each day for the forecast with as few clothes as possible."; out.acts = ["pack"]; return out; }
  if (intent === "bcheck") { out.text = J ? "迷っている服は「買う前チェック」で調べられます。写真を撮るだけで、手持ちの服と何通り組めるか、似た服をもう持っていないかが分かります。" : "Try the before-you-buy check. Snap the item and you'll see how many outfits it adds and whether you already own something similar."; out.acts = ["bcheck"]; return out; }
  if (intent === "buy" || intent === "star" || intent === "type") {
    const d = diagnose();
    if (!d) { out.text = t("need"); return out; }
    if (intent === "buy") { out.text = d.add ? (J ? `いちばんのおすすめは「${d.add.name}」です。足すだけで、組み合わせが${d.add.more}通り増えます。\nでも、まずは今の服で組める${d.combos}通りを楽しむのもありです。` : `My top pick is ${d.add.name.toLowerCase()}. It adds ${d.add.more} new outfits.\nThough your current ${d.combos} outfits are worth exploring first.`) : (J ? "今の服でじゅうぶん着回せています。" : "Your closet already works well."); out.buyQ = d.add?.q; out.add = d.add?.item; }
    if (intent === "star") { out.text = d.star ? (J ? `いちばん活躍するのは「${nm(d.star)}」です。今の服で${d.combos}通りのコーデが組めて、その多くに入っています。` : `Your hardest-working piece is the ${nm(d.star).toLowerCase()}. It's in many of your ${d.combos} outfits.`) : "—"; if (d.star) out.look = { ids: [d.star.id], only: true }; }
    if (intent === "type") { const ty = TYPES[d.type]; out.text = J ? `あなたは「${ty[0]}」タイプです。${ty[2]}\n${ty[4]}` : `You're a ${ty[1]}. ${ty[3]}\n${ty[5]}`; out.acts = ["dx"]; }
    return out;
  }
  if (intent === "wx") {
    if (!st.days || !st.loc) { out.text = J ? "場所がまだわかりません。下のボタンで現在地を使うか、「今日」のページで都市名を入れてください。" : "I don't know where you are yet. Use your location below, or type a city on the Today page."; out.acts = ["here"]; return out; }
    out.text = st.days.slice(0, 3).map((d, n) => `${n === 0 ? (J ? "今日" : "Today") : n === 1 ? (J ? "明日" : "Tomorrow") : fmtDay(d.date)}：${t("wx")[wxType(d.code)]} ${d.max}° / ${d.min}°${d.pop >= 30 ? (J ? `（雨 ${d.pop}%）` : ` (rain ${d.pop}%)`) : ""}`).join("\n") + "\n" + (J ? `（${st.loc.name}）「明日の服は？」と聞いてくれれば、天気に合わせて選びます。` : `(${st.loc.name}) Ask "what should I wear tomorrow?" and I'll match the forecast.`);
    return out;
  }
  if (intent === "hi") { out.text = J ? (/おはよ/.test(q) ? "おはようございます！" : /こんばん/.test(q) ? "こんばんは！" : "") + helloText().replace(/^こんにちは！/, (/おはよ|こんばん/.test(q) ? "" : "こんにちは！")) : helloText(); return out; }
  if (intent === "thx") { out.text = pick(J ? ["どういたしまして！また迷ったら、いつでも聞いてください。", "よかったです！いってらっしゃい。", "どういたしまして。コーデを画像で保存しておくと、あとで見返せますよ。"] : ["Anytime! Ask whenever you're stuck.", "Glad it helped. Have a great day!", "You're welcome. Save the look as an image to find it later."]); return out; }
  out.text = J ? "ごめんなさい、それはまだわかりません。服のことなら答えられます。たとえば「ライブに行く服は？」「ネイビーに合う色は？」「清潔感を出すには？」と聞いてみてください。" + (llmState === "ready" ? "" : "\n服以外の話もしたいときは、上の「なんでも話せるAI」を使ってください。")
    : "Sorry, I can't answer that yet. I'm good with clothes: try \"what should I wear to a concert?\", \"what goes with navy?\" or \"how do I look neater?\"" + (llmState === "ready" ? "" : "\nFor anything else, turn on the Chat-anything AI above.");
  return out;
}

/* なんでも話せるAI */
function llmLoad() {
  if (llmState === "loading" || llmState === "ready") return;
  llmState = "loading"; st.llmOn = true; save(); renderLLM();
  if (!chatW) {
    try { chatW = new Worker("llm.js", { type: "module" }); } catch (e) { llmState = "fail"; renderLLM(); return; }
    chatW.onmessage = ({ data }) => {
      if (data.type === "prog") { $("chprog").hidden = false; $("chprog").firstElementChild.style.width = Math.max(2, data.p) + "%"; $("chllmst").textContent = `${t("chLoading")} ${Math.round(data.loaded / 1e6)} / ${Math.round(data.total / 1e6)} MB`; }
      else if (data.type === "ready") { llmState = "ready"; renderLLM(); }
      else if (data.type === "error" && data.id == null) { llmState = "fail"; st.llmOn = false; save(); renderLLM(); }
      else if (chatW.onTok) chatW.onTok(data);
    };
    chatW.onerror = () => { llmState = "fail"; st.llmOn = false; save(); renderLLM(); };
  }
  chatW.postMessage({ type: "load" });
}
function renderLLM() {
  const s = llmState, box = $("chllm");
  box.dataset.s = s;
  $("chllmst").textContent = s === "ready" ? t("chReady") : s === "loading" ? t("chLoading") : s === "fail" ? t("chFail") : t("chLLMNote");
  $("chload").hidden = s === "ready" || s === "loading";
  $("choff").hidden = s !== "ready";
  if (s !== "loading") $("chprog").hidden = true;
}
function closetText() {
  const its = st.items.filter(i => !i.busy).slice(0, 36);
  return its.map(i => `- ${nm(i)}（${t(i.cat)}）`).join("\n");
}
function sysPrompt(rule) {
  const J = ja(), d = st.days && st.days[0];
  const wx = d && st.loc ? (J ? `今日の天気（${st.loc.name}）：${t("wx")[wxType(d.code)]}、最高${d.max}°C、最低${d.min}°C` : `Today's weather (${st.loc.name}): ${t("wx")[wxType(d.code)]}, high ${d.max}°C, low ${d.min}°C`) : "";
  const base = J ? `あなたは「CLOSET.AI」のAIスタイリストです。明るく、やさしい日本語で、短く（3文くらい）答えます。むずかしい言葉や、たとえ話・詩のような言い方は使いません。服の話では、色の相性・きちんと感・気温など、具体的な理由を言います。\nユーザーの手持ちの服：\n${closetText()}\n${wx}\n手持ちにない服を、持っているように言ってはいけません。`
    : `You are the AI stylist inside CLOSET.AI. Reply in friendly, simple English in about 3 sentences. No metaphors or poetic language; give concrete reasons (color match, dressiness, temperature).\nThe user's closet:\n${closetText()}\n${wx}\nNever pretend the user owns clothes that aren't listed.`;
  if (!rule || !rule.look || rule.look.only) return base + (rule && rule.text ? (J ? `\n参考情報：${rule.text}` : `\nFacts to use: ${rule.text}`) : "");
  const names = rule.look.ids.map(byId).filter(Boolean).map(nm).join(J ? "、" : ", ");
  return base + (J ? `\nコーデ係がこの組み合わせを選びました：${names}。\n選んだ理由：${rule.look.why}\nこのコーデをすすめる返事を書いてください。服の名前を使って、なぜ合うのかを伝えます。`
    : `\nThe outfit engine picked: ${names}.\nWhy: ${rule.look.why}\nWrite a reply recommending this outfit, naming the pieces and why they work.`);
}

/* 画面 */
function chatPush(m) { st.chat = (st.chat || []).concat(m).slice(-30); save(); }
function rateHtml(r) {
  const row = (k, v) => `<div class="rrow"><span>${t(k)}</span><i><b style="width:${v}%"></b></i><em>${v}</em></div>`;
  return `<div class="rate"><div class="rtot"><small>${t("rTotal")}</small><b>${r.total}</b><small>${t("rPts")}</small></div><div class="rbars">${row("rColor", r.color)}${row("rScene", r.scene)}${row("rTemp", r.temp)}</div></div>`;
}
function bubble(m, n) {
  if (m.role === "me") return `<div class="msg me">${esc(m.text)}</div>`;
  const its = m.look ? m.look.ids.map(byId).filter(Boolean) : [];
  const add = m.add ? `<div class="it"><div class="ph">${svgArt(m.add)}</div></div>` : "";
  const q = m.buyQ ? encodeURIComponent(m.buyQ) : "";
  const shops = q ? `<div class="shops"><a href="https://www.amazon.${ja() ? "co.jp" : "com"}/s?k=${q}" target="_blank" rel="noopener">Amazon${t("findAt")}</a>${ja() ? `<a href="https://search.rakuten.co.jp/search/mall/${q}/" target="_blank" rel="noopener">楽天${t("findAt")}</a>` : ""}</div>` : "";
  const act = { share: `<button class="btn go" type="button" data-ch="share" data-n="${n}">${t("saveImg")}</button>`, open: `<button class="btn" type="button" data-ch="open" data-n="${n}">${t("chOpen")}</button>`, again: `<button class="btn" type="button" data-ch="again">${t("again")}</button>`, dx: `<button class="btn" type="button" data-ch="dx">${t("chDx")}</button>`, here: `<button class="btn" type="button" data-ch="here">${t("here")}</button>`, pack: `<button class="btn go" type="button" data-ch="pack">${t("pkTitle")}</button>`, bcheck: `<button class="btn go" type="button" data-ch="bcheck">${t("byTitle")}</button>` };
  return `<div class="msg ai${m.llm ? " llm" : ""}"><div class="who"><i class="chdot"></i>${m.llm ? t("chLLMName") : t("chName")}</div><div class="tx">${esc(m.text) || '<span class="typing"><i></i><i></i><i></i></span>'}</div>${m.look && m.look.rate ? rateHtml(m.look.rate) : ""}${its.length || add ? `<div class="chlook">${its.map(i => `<div class="it"><div class="ph${phc(i)}">${art(i)}</div><span>${esc(nm(i))}</span></div>`).join("")}${add}</div>` : ""}${shops}${m.acts && m.acts.length ? `<div class="acts">${m.acts.map(a => act[a] || "").join("")}</div>` : ""}</div>`;
}
function renderChat(scroll) {
  const log = $("chlog"), msgs = st.chat && st.chat.length ? st.chat : [{ role: "ai", text: helloText() }];
  log.innerHTML = msgs.map(bubble).join("");
  const lastM = msgs[msgs.length - 1], follow = lastM && lastM.role === "ai" && lastM.look && !lastM.look.only && lastQ;
  $("sugg").innerHTML = (follow ? t("chFollow") : t("chSugg")).map(s => `<button type="button" class="chip">${esc(s)}</button>`).join("");
  $("chclr").hidden = !(st.chat && st.chat.length);
  if (scroll !== false) log.scrollTop = log.scrollHeight;
}
async function ask(q) {
  q = q.trim(); if (!q || chatBusy) return;
  chatBusy = true; $("chsend").disabled = true; $("chin").value = "";
  chatPush({ role: "me", text: q });
  const intent = intentOf(q), rule = ruleAnswer(q, intent);
  const fashion = intent !== "other" && intent !== "hi" && intent !== "thx";
  const useLLM = llmState === "ready" && chatW && !fashion;
  if (!useLLM) {
    renderChat(); await new Promise(r => setTimeout(r, still ? 30 : 450));
    chatPush({ role: "ai", ...rule }); renderChat();
    chatBusy = false; $("chsend").disabled = false; return;
  }
  const msg = { role: "ai", llm: true, text: "", look: fashion ? rule.look : null, acts: fashion ? rule.acts : [], buyQ: fashion ? rule.buyQ : undefined, add: fashion ? rule.add : undefined };
  st.chat = (st.chat || []).concat(msg).slice(-30); renderChat();
  const hist = st.chat.slice(-5, -1).filter(m => m.text).map(m => ({ role: m.role === "me" ? "user" : "assistant", content: m.text }));
  const id = ++chatSeq, tx = () => $("chlog").querySelector(".msg.ai:last-child .tx");
  $("chstop").hidden = false;
  await new Promise(res => {
    chatW.onTok = data => {
      if (data.id !== id) return;
      if (data.type === "tok") { msg.text += data.t; const el = tx(); if (el) el.textContent = msg.text; $("chlog").scrollTop = $("chlog").scrollHeight; }
      if (data.type === "done") {
        msg.text = (data.text || msg.text).trim();
        const its = msg.look && !msg.look.only ? msg.look.ids.map(byId).filter(Boolean) : [];
        const said = its.some(i => msg.text.includes(kindOf(i).ja) || msg.text.toLowerCase().includes(kindOf(i).en.toLowerCase()) || msg.text.includes(nm(i)));
        if (!msg.text || (its.length && !said)) { msg.text = rule.text; msg.llm = false; }
        res();
      }
      if (data.type === "error") { msg.text = msg.text.trim() || rule.text; msg.llm = false; res(); }
    };
    chatW.postMessage({ type: "gen", id, messages: [{ role: "system", content: sysPrompt(fashion ? rule : null) }, ...hist], max: 220 });
  });
  chatW.onTok = null; $("chstop").hidden = true;
  save(); renderChat();
  chatBusy = false; $("chsend").disabled = false;
}

/* ---------- 言葉・タブ ---------- */
function renderText() {
  document.documentElement.lang = st.lang;
  document.querySelectorAll("[data-t]").forEach(e => { const v = t(e.dataset.t); if (e.hasAttribute("data-html")) e.innerHTML = v; else e.textContent = v; });
  document.querySelectorAll("[data-ph]").forEach(e => e.placeholder = t(e.dataset.ph));
  $("l-ja").setAttribute("aria-pressed", ja()); $("l-en").setAttribute("aria-pressed", !ja());
  $("occ").innerHTML = t("occs").map((o, n) => `<button type="button" class="chip" data-o="${n}" aria-pressed="${n === st.occ}">${o}</button>`).join("");
  ["wkd", "wke"].forEach((id, n) => { $(id).innerHTML = t("occs").map((o, k) => `<option value="${k}"${st.wkOcc[n] === k ? " selected" : ""}>${o}</option>`).join(""); });
  $("ak").innerHTML = CATS.map(c => `<optgroup label="${t(c)}">${Object.keys(KINDS).filter(k => KINDS[k][0] === c).map(k => `<option value="${k}">${ja() ? KINDS[k][1] : KINDS[k][2]}</option>`).join("")}</optgroup>`).join("");
  document.querySelectorAll(".cityin").forEach(i => { if (st.loc && !i.value) i.value = st.loc.name === "現在地" || st.loc.name === "Here" ? "" : st.loc.name; });
}
function setTab(tab) {
  st.tab = tab;
  document.querySelectorAll("[role=tab]").forEach(b => b.setAttribute("aria-selected", b.dataset.tab === tab));
  ["today", "chat", "buy", "week", "remix", "dx"].forEach(k => { $("tab-" + k).hidden = k !== tab; });
  if (tab === "dx") renderLog(); if (tab === "buy") renderBuy(); if (tab === "week") renderPack();
  if (tab === "chat") { renderChat(); if (st.llmOn && llmState === "off") llmLoad(); }
  if (tab === "dx") renderDx(true);
  if (tab === "remix") renderLooks();
}
function fillPk() {
  const J = ja(), o = $("pkocc"), d = $("pkdays"), ov = o.value || "3", dv = d.value || "3";
  o.innerHTML = [3, 1, 0].map(k => `<option value="${k}">${t("occs")[k]}</option>`).join(""); o.value = ov;
  d.innerHTML = [2, 3, 4, 5, 6, 7].map(k => `<option value="${k}">${J ? `${k}日間（${k - 1}泊）` : `${k} days`}</option>`).join(""); d.value = dv;
  if (!$("pkdate").value) { const x = new Date(); x.setDate(x.getDate() + 1); $("pkdate").value = dayStr(x); }
}
function all(anim) { renderText(); renderLook(anim); renderWeek(false); renderCloset(); renderWx(); renderCredits(); if (st.tab === "dx") renderDx(false); if (st.tab === "remix") renderLooks(); renderChat(false); renderLLM(); fillPk(); if (buyC && !buyC.busy) buyRun(false); else renderBuy(); renderLog(); renderPack(); document.dispatchEvent(new Event("ca:lang")); }
function relang(l) {
  st.lang = l;
  const re = L => { if (!L || L.sample) return; Object.assign(L, explain(lookItems(L), { tp: L.tp, occ: L.occ, rain: L.rain })); };
  re(st.look); (st.week || []).forEach(re); save(); all(false);
}

/* ---------- 操作 ---------- */
$("ctl").addEventListener("submit", e => { e.preventDefault(); gen(false); });
$("again").addEventListener("click", () => gen(true));
$("temp").addEventListener("input", e => { $("tv").textContent = e.target.value + "°C"; });
$("occ").addEventListener("click", e => { const b = e.target.closest("[data-o]"); if (!b) return; st.occ = +b.dataset.o; save(); renderText(); });
$("flt").addEventListener("click", e => { const b = e.target.closest("[data-f]"); if (!b) return; st.filter = b.dataset.f; renderCloset(); });
$("rack").addEventListener("click", e => {
  if (e.target.closest("#addText")) { manual(null); return; }
  const b = e.target.closest("[data-del]"); if (!b) return;
  const n = st.items.findIndex(i => i.id === b.dataset.del); if (n < 0) return;
  lastDel = { item: st.items[n], n }; st.items.splice(n, 1); save(); renderCloset();
  status(`${t("deleted")}：${nm(lastDel.item)}`, () => { st.items.splice(lastDel.n, 0, lastDel.item); save(); renderCloset(); status(""); });
});
$("file").addEventListener("change", async e => { const fs = [...e.target.files]; e.target.value = ""; for (const f of fs) await addPhoto(f); });
$("fcam").addEventListener("change", async e => { const fs = [...e.target.files]; e.target.value = ""; for (const f of fs) await addPhoto(f); });
["rfile", "rcam"].forEach(id => $(id).addEventListener("change", e => { const f = e.target.files[0]; e.target.value = ""; if (f) rxUpload(f); }));
$("looks").addEventListener("click", e => { const b = e.target.closest("[data-look]"); if (b) pickLook(b.dataset.look); });
$("rxphoto").addEventListener("click", e => { if (!rx || !rx.user) { const b = e.target.closest("[data-rm]"); return; } const rm = e.target.closest("[data-rm]"); if (rm) { rx.items.splice(+rm.dataset.rm, 1); renderRx(false); return; } const pic = e.target.closest("#rxpic"); if (!pic || rx.items.length >= 6) return; const r = pic.getBoundingClientRect(), fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height; rx.items.push({ kind: guessKind(fx, fy), color: sampleAt(rx.canvas, fx, fy), x: fx * 100, y: fy * 100 }); renderRx(false); });
$("rxphoto").addEventListener("change", e => { const s = e.target.closest("select[data-k]"); if (s && rx) { rx.items[+s.dataset.k].kind = s.value; renderRx(false); } });
$("rxres").addEventListener("click", e => { if (!e.target.closest("#rxwear") || !rx?.result) return; const ids = rx.result.out.filter(o => o.best).map(o => o.best.i.id); const its = [...new Set(ids)].map(byId).filter(Boolean); st.look = { ids: its.map(i => i.id), occ: st.occ, tp: +$("temp").value, ...explain(its, makeCtx({ occ: st.occ, tp: +$("temp").value })) }; save(); setTab("today"); renderLook(true); $("stage").scrollIntoView({ behavior: "smooth", block: "start" }); });
$("acancel").addEventListener("click", () => { $("addf").hidden = true; pendingImg = null; });
$("addf").addEventListener("submit", e => { e.preventDefault(); const name = $("an").value.trim(); if (!name) return; const k = $("ak").value; st.items.unshift({ id: "u" + Date.now().toString(36), kind: k, cat: KINDS[k][0], name, color: $("acol").value, img: pendingImg || undefined }); pendingImg = null; $("an").value = ""; $("addf").hidden = true; st.filter = "all"; save(); renderCloset(); });
$("clr").addEventListener("click", () => { st.items = st.items.filter(i => !i.sample); if (st.look && !st.look.ids.every(byId)) st.look = null; st.week = null; save(); all(false); });
$("l-ja").addEventListener("click", () => relang("ja"));
$("l-en").addEventListener("click", () => relang("en"));
document.querySelectorAll("[role=tab]").forEach(b => b.addEventListener("click", () => { setTab(b.dataset.tab); save(); }));
document.querySelectorAll(".herebtn").forEach(b => b.addEventListener("click", locHere));
document.querySelectorAll(".cityform").forEach(f => { const go = () => locCity(f.querySelector(".cityin").value); f.querySelector(".citybtn").addEventListener("click", go); f.querySelector(".cityin").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); go(); } }); });
["wkd", "wke"].forEach((id, n) => $(id).addEventListener("change", e => { st.wkOcc[n] = +e.target.value; save(); }));
$("wkgo").addEventListener("click", planWeek);
$("weekgrid").addEventListener("click", e => { const b = e.target.closest("[data-day]"); if (!b) return; const d = st.week[+b.dataset.day]; st.look = { ...d, wx: { code: d.code } }; save(); setTab("today"); renderLook(true); $("stage").scrollIntoView({ behavior: "smooth", block: "start" }); });
$("dxgo").addEventListener("click", () => renderDx(true));
$("bycam").addEventListener("change", e => { const f = e.target.files[0]; e.target.value = ""; if (f) buyUpload(f); });
$("byfile").addEventListener("change", e => { const f = e.target.files[0]; e.target.value = ""; if (f) buyUpload(f); });
$("bygo").addEventListener("click", () => { if (buyC && !buyC.busy) { buyC.kind = $("bykind").value; buyC.cat = KINDS[buyC.kind][0]; buyC.color = $("bycol").value; buyRun(true); } else buyManual(); });
$("tab-buy").addEventListener("click", e => {
  if (e.target.closest("#bywish") && buyC && buyR) { st.wish = [{ kind: buyC.kind, color: buyC.color, img: buyC.img, score: buyR.score, verdict: buyR.verdict }, ...(st.wish || [])].slice(0, 12); save(); renderWish(); status(t("byWished")); }
  if (e.target.closest("#bybought") && buyC && buyR) { st.items.unshift({ id: "u" + Date.now().toString(36), kind: buyC.kind, cat: KINDS[buyC.kind][0], color: buyC.color, img: buyC.img || undefined, name: autoName(buyC.kind, buyC.color) }); st.wish = (st.wish || []).filter(w => !(w.img === buyC.img && w.kind === buyC.kind && w.color === buyC.color)); buyC = buyR = null; save(); renderCloset(); renderBuy(); status(t("byAdded")); }
  const wo = e.target.closest("[data-wopen]"); if (wo) { const w = st.wish[+wo.dataset.wopen]; buyC = { id: "cand", kind: w.kind, cat: KINDS[w.kind][0], color: w.color, img: w.img }; buyRun(true); $("tab-buy").scrollIntoView({ behavior: "smooth", block: "start" }); }
  const wd = e.target.closest("[data-wdel]"); if (wd) { st.wish.splice(+wd.dataset.wdel, 1); save(); renderWish(); }
});
$("worn").addEventListener("click", () => { if (st.look && !st.look.sample) markWorn(st.look.ids); });
$("logout").addEventListener("click", e => { const b = e.target.closest("[data-wake]"); if (!b) return; const i = byId(b.dataset.wake); if (!i) return; setTab("chat"); save(); ask(ja() ? `${nm(i)}に合うコーデは？` : `What goes with my ${nm(i).toLowerCase()}?`); $("tab-chat").scrollIntoView({ behavior: "smooth", block: "start" }); });
$("pkgo").addEventListener("click", planPack);
$("pkout").addEventListener("change", e => { const c = e.target.closest("[data-pk]"); if (!c || !st.pack) return; st.pack.done[c.dataset.pk] = c.checked; save(); const P = st.pack, total = P.items.length + P.extras.length, done = Object.values(P.done).filter(Boolean).length; $("pkout").querySelector(".pkprog b").textContent = done; });
$("chform").addEventListener("submit", e => { e.preventDefault(); ask($("chin").value); });
$("sugg").addEventListener("click", e => { const b = e.target.closest(".chip"); if (b) ask(b.textContent); });
$("chload").addEventListener("click", llmLoad);
$("choff").addEventListener("click", () => { llmState = "off"; st.llmOn = false; save(); renderLLM(); });
$("chstop").addEventListener("click", () => { if (chatW) chatW.postMessage({ type: "stop" }); });
$("chclr").addEventListener("click", () => { st.chat = []; lastQ = null; save(); renderChat(); });
$("chlog").addEventListener("click", e => {
  const b = e.target.closest("[data-ch]"); if (!b || chatBusy) return;
  const k = b.dataset.ch;
  if (k === "again") ask(ja() ? "別の案" : "Another idea");
  else if (k === "dx") { setTab("dx"); save(); }
  else if (k === "pack") { setTab("week"); save(); document.querySelector(".pack").scrollIntoView({ behavior: "smooth", block: "start" }); }
  else if (k === "bcheck") { setTab("buy"); save(); $("tab-buy").scrollIntoView({ behavior: "smooth", block: "start" }); }
  else if (k === "share") { const m = (st.chat || [])[+b.dataset.n]; if (!m || !m.look) return; st.look = { ...m.look }; save(); renderLook(false); share("look", "img"); }
  else if (k === "here") locHere().then(() => { if (st.days) ask(ja() ? "今週の天気は？" : "Weather this week?"); });
  else if (k === "open") { const m = (st.chat || [])[+b.dataset.n]; if (!m || !m.look) return; st.look = { ...m.look }; save(); setTab("today"); renderLook(true); $("stage").scrollIntoView({ behavior: "smooth", block: "start" }); }
});
document.addEventListener("click", e => { const b = e.target.closest("[data-share]"); if (b) share(b.dataset.share, b.dataset.k); });
document.querySelectorAll("[data-go]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); const tab = a.dataset.go; if (tab) setTab(tab); $("studio").scrollIntoView({ behavior: "smooth" }); }));
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
$("stage").addEventListener("pointermove", e => { if (still || e.pointerType !== "mouse") return; const r = e.currentTarget.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5, g = $("rig"); if (g) { g.style.setProperty("--ry", (x * 14).toFixed(2) + "deg"); g.style.setProperty("--rx", (-y * 10).toFixed(2) + "deg"); } });
$("stage").addEventListener("pointerleave", () => { const g = $("rig"); if (g) { g.style.setProperty("--ry", "0deg"); g.style.setProperty("--rx", "0deg"); } });

if (st.look && !st.look.ids.some(byId)) st.look = null;
st.items = st.items.filter(i => !i.busy);
if (st.days && st.days[0]) { const today = new Date().toISOString().slice(0, 10); wxToday = st.days.find(d => d.date === today) || null; }
setTab(st.tab || "today");
all(true);
if (st.loc) applyLocation(st.loc).catch(() => {});
}
