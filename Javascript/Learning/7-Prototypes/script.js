let naruto = { hinata: "Hyuga Clan" };
let bleach = {
  ichigo: "subsitute soul reaper",
  __proto__: naruto,
};
let nothing = {};

// console.log(`bleach`, bleach.__proto__);

/* Constructor*/

function music(nameOfSong, artist) {
  this.nameOfSong = nameOfSong;
  this.artist = artist;
}

let rand = new music("Element", "Pop Smoke");
// console.log(rand);

let newSong = music("Hit em Up", "Tupac");
// console.log(newSong);

function form(name, mail, password) {
  this.name = name;
  this.mail = mail;
  this.password = () => {
    return password;
  };
}

let user1 = new form("Harshit", "harsxit04@gmail.com", 1425);
// console.log(user1);
// console.log(user1.password());

function fruits(name, season) {
  this.name = name;
  this.season = season;
  this.data = () => {
    return `Comes in a this ${this.season} season`;
  };
}

let randomFruit = new fruits("Mango", "Summer");
// console.log(randomFruit);
// console.log(randomFruit.data());

function species(name) {
  this.name = name;
}

species.prototype.sound = function (sound) {
  return `${this.name} makes ${sound} sound.`;
};

let dog = new species("Dog");
// console.log(dog.sound("bark"));

function drink(name) {
  if (!new.target) {
    throw new Error("Please use new keyword to proper make functions proper.");
  }
  this.name = name;
}

// let coffee = new drink("coffee");
// let wine = drink("wine");
