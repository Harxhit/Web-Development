// EASY LEVEL QUESTIONS (5)

/**
 * 1. Find the length of a string
 * Input: "JavaScript"
 */

let string = "javascript";
// console.log(string.length);

/**
 * 2. Convert a string to uppercase
 * Input: "hello"
 */

let string2 = "hello";
// console.log(string2.toUpperCase());

/**
 * 3. Check if a string includes a substring
 * Input: "programming", "gram"
 */

let string3 = "programming";
// console.log(string3.includes('gram'));

/**
 * 4. Extract a substring from a string
 * Input: "Hello World", 0, 5
 */

let string4 = "Hello World";
// console.log(string4.slice(0, 5));

/**
 * 5. Replace a part of the string with another string
 * Input: "Hello World", "World", "JavaScript"
 */

let string5 = "Hello World";
let replace = string5.replace("World", "JavaScript");
// console.log(replace);

// MEDIUM LEVEL QUESTIONS (5)

/**
 * 6. Find the index of the first occurrence of a character
 * Input: "hello", "l"
 */

let string6 = "hello";
// console.log(string6.indexOf('l'));

/**
 * 7. Remove whitespace from the beginning and end of a string
 * Input: "   Luffy is Joyboy   "
 */
let string7 = "   Luffy is Joyboy   ";
// console.log(string7.trim());
/**
 * 8. Split a string into an array
 * Input: "apple,banana,orange", ","
 */
let string8 = "apple,banana,orange";
let split = string8.split(",");
// console.log(split);
/**
 * 9. Check if a string ends with a certain substring
 * Input: "Hello World", "World"
 */
let string9 = "Hello World";
let endWith = string9.endsWith("World");
// console.log(endWith);
/**
 * 10. Repeat a string multiple times
 * Input: "abc", 3
 */
let string10 = "abc";
let repeat = string10.repeat(3);
// console.log(repeat);

// HARD LEVEL QUESTIONS (10)

/**
 * 11. Find the last occurrence of a character
 * Input: "hello", "l"
 */

let string11 = "hello";
// console.log(string11.lastIndexOf("l"));

/**
 * 12. Convert a string to lowercase
 * Input: "JAVA"
 */

let string12 = "JAVA";
// console.log(string12.toLowerCase());

/**
 * 13. Check if a string starts with a certain substring
 * Input: "Hello World", "Hello"
 */

let string13 = "Hello World";
// console.log(string13.startsWith("Hello"));

/**
 * 14. Match a pattern in a string using regular expression
 * Input: "hello123", /\d+/
 */

let string14 = "hello123";
let match = string14.match(/\d+/);
// console.log(match);
/**
 * 15. Extract a part of the string using slice
 * Input: "JavaScript", 4, 10
 */
let string15 = "JavaScript";
// console.log(string15.slice(4, 10));

/**
 * 16. Check if a string contains any digits
 * Input: "Hello123", /\d/
 */
let string16 = "Hello123";
let temp = string16.match(/\d/);
// console.log(temp);
/**
 * 17. Concatenate two strings
 * Input: "Hello ", "World"
 */

let str1 = "Hello";
let str2 = "World";
// console.log(str1.concat(str2));

/**
 * 18. Count the number of occurrences of a substring
 * Input: "banana", "na"
 */

let string18 = "banana";
// console.log(string18.match(/na/g).length);

/**
 * 19. Check if a string is a palindrome
 * Input: "madam"
 */
let string19 = "madam";
let isPalindrome = string19 === string19.split("").reverse().join("");
// console.log(isPalindrome);
/**
 * 20. Replace all occurrences of a substring in a string
 * Input: "apple banana apple", "apple", "orange"
 */

let string20 = "apple banana apple";
// console.log(string20.replace(/apple/g, "orange"));
