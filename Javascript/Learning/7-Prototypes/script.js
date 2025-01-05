let naruto = { hinata: "Hyuga Clan" };
let bleach = {
  ichigo: "subsitute soul reaper",
  __proto__: naruto,
};
let nothing = {};

console.log(`bleach`, bleach.__proto__);
