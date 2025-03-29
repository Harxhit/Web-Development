let words = ["bella", "label", "roller"];
let map = new Map();
for (let i = 0; i < words.length; i++) {
  if (map.has(words[i])) {
    map.set(words[i], map.set(words[i]) + 1);
  }
}
console.log(map);
