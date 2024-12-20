// Objects

let user = {
  firstName: "Kylie",
  "last name": "Jenner",
  isLoggedin: true,
};

user.firstName = "Travis"; //How to change the value of any key.
user.middleName = "Scott"; //How to add another key and its value.
console.log(typeof user);
console.log(user.middleName);
console.log(user.firstName);
console.log(user["last name"]); //If there is spaces in key this way we can find the value of that key.
console.log(user);

// Arrays

let array = ["Hinata", 28];
console.log(array[0]);
let value = true;
let value2 = false;
console.log(value + 1); //Javascript consider 'true' as 1.
console.log(value2 + 1); //Javascript consider 'false' as 0.
