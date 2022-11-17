// adapted from https://github.com/lakenen/flip-text

const chars = {
  // uppercase (incomplete)
  A: "∀",
  B: "𐐒",
  C: "Ɔ",
  E: "Ǝ",
  F: "Ⅎ",
  G: "פ",
  H: "H",
  I: "I",
  J: "ſ",
  L: "˥",
  M: "W",
  N: "N",
  P: "Ԁ",
  R: "ᴚ",
  T: "⊥",
  U: "∩",
  V: "Λ",
  Y: "⅄",

  // lowercase
  a: "ɐ",
  b: "q",
  c: "ɔ",
  d: "p",
  e: "ǝ",
  f: "ɟ",
  g: "ƃ",
  h: "ɥ",
  i: "ᴉ",
  j: "ɾ",
  k: "ʞ",
  m: "ɯ",
  n: "u",
  p: "d",
  q: "b",
  r: "ɹ",
  t: "ʇ",
  u: "n",
  v: "ʌ",
  w: "ʍ",
  y: "ʎ",

  // numbers
  1: "Ɩ",
  2: "ᄅ",
  3: "Ɛ",
  4: "ㄣ",
  5: "ϛ",
  6: "9",
  7: "ㄥ",
  8: "8",
  9: "6",
  0: "0",

  // special chars
  ".": "˙",
  ",": "'",
  "'": ",",
  '"': ",,",
  "`": ",",
  "<": ">",
  ">": "<",
  "∴": "∵",
  "&": "⅋",
  _: "‾",
  "?": "¿",
  "!": "¡",
  "[": "]",
  "]": "[",
  "(": ")",
  ")": "(",
  "{": "}",
  "}": "{",

  // russian chars UPPERCASE
  А: "∀",
  Б: "ܦ",
  В: "ꓭ",
  Г: "⅃",
  Д: "ჩ",
  Е: "Ǝ",
  З: "Ɛ",
  Й: "И̯",
  К: "ꓘ",
  Л: "Ѵ",
  М: "ꟽ",
  П: "ⵡ",
  Р: "Ԁ",
  С: "Ͻ",
  Т: "ꓕ",
  У: "ʎ",
  Ц: "ŉ",
  Ч: "Ⴙ",
  Ш: "ᗰ",
  Ь: "ᑫ",
  Э: "Є",
  Ю: "Ꙕ",
  Я: "ᖉ",

  // russian chars lowercase
  а: "ɐ",
  б: "ܦ",
  в: "ʚ",
  г: "⅃",
  д: "ჩ",
  е: "ǝ",
  з: "ԑ",
  й: "и̯",
  к: "ʞ",
  л: "ѵ",
  м: "ᥕ",
  п: "⊔",
  р: "d",
  с: "ɔ",
  т: "ꓕ",
  у: "ʎ",
  ц: "ŉ",
  ч: "h",
  ш: "m",
  ь: "৭",
  э: "є",
  ю: "ꙕ",
  я: "ʁ",
};

Object.keys(chars).forEach(function (key) {
  var value = chars[key];
  if (!chars[value]) {
    chars[value] = key;
  }
});

export function flipString(str) {
  var result = "",
    c = str.length,
    ch = "";
  for (; c >= 0; --c) {
    ch = str.charAt(c);
    result += chars[ch] || chars[ch.toLowerCase()] || ch;
  }
  return result;
}

export function rageFlipped(text) {
  if (text === undefined) return;
  const rage = "(ノಠ益ಠ)ノ彡";
  console.log(rage);
  return rage + " " + flipString(text);
}
