//String & String Methods

let string = "Hello World";
let lenghtOfString = string.length;
// console.log(lenghtOfString);
// // This checks the length of characters in a string.

let upperCase = string.toUpperCase();
// console.log(upperCase);
//Converts the string to upper case words(capital letters) .

let lowerCase = string.toLowerCase();
// console.log(lowerCase);
//Converts the string to lower case words(small letters) .

let index = string.indexOf("l");
// console.log(index);
// //Checks the occurence of sub string and give its index .

let lastIndex = string.lastIndexOf();
// console.log(lastIndex);
// // Find the lastIndex of occurence of string .

let include = string.includes("o");
// console.log(include);
// //Check if strings includes substring .

let subString = string.substring(1, 3);
// console.log(subString);
// //Find the substring between two index .

let split = string.split("");
// console.log(split);
// //Converts the string into array on the basis of seperator .

let slice = string.slice(0, 5);
// console.log(slice);
// Extracts a part of string on the basis of starting and ending index .

let replace = string.replace("World", "JavaScript");
// console.log(replace);
// Return a new string with some or all matches of a pattern replaced by a replacement string. The original string remains unchanged.

let char = string.charAt(2);
// console.log(char);
//Give the character in a string of a given index .

let string2 = " Luffy is Joyboy ";
let trim = string2.trim();
// console.log(trim);
//Removes whitespaces from a string .

let concat = string.concat(string2);
// console.log(concat);
// Adds one string to another string .

let repeat = string.repeat(3);
// console.log(repeat);
// Repeats the string on the basis of given paramter .

let match = string.match('Hello'); 
// console.log(match);
//Is used to find matches of a pattern (regular expression) in a string.

