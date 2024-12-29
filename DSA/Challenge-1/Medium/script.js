/* 
Question 51:
Write a program to generate all prime numbers up to a given number.
*/

let till = 100;
let primeArray = [];

for (let nums = 2; nums <= till; nums++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(nums); j++) {
    if (nums % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeArray.push(nums);
  }
}
// console.log(primeArray) ;
/* 
Question 52:
Write a program that prints an object's keys.
*/

let obj = {
  name: "Lionel Messi",
  profession: "Footballer",
};

for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    // console.log(element);
  }
}
/* 
Question 53:
Write a program to find the most frequent element in an array.
*/

let numArray = [
  11,
  232,
  42,
  12,
  1,
  32,
  442,
  1,
  1,
  13,
  43,
  5,
  2,
  3,
  1,
  3,
  4,
  56,
  7,
  7,
  3,
  21,
  3,
  45,
  1,
  31,
  ,
  31,
  313,
  32,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  11,
];
let maxCount = 0;
let frequentElement = null;

for (let i = 0; i < numArray.length; i++) {
  let count = 0;
  for (let j = i + 1; j < numArray.length; j++) {
    if (numArray[count] === numArray[j]) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    frequentElement = numArray[i];
  }
}
// console.log('Most frequent element is', frequentElement);
// console.log('the frequency of element is', maxCount);

/* 
Question 54:
Write a program that sorts an array of numbers in ascending order.
*/

let numberArray = [9, 7, 8, 4, 2, 1, 5, 0];
let sortedArray = [];

for (let i = 0; i < numberArray.length; i++) {
  let index = 0;
  for (let j = i + 1; j < numberArray.length; j++) {
    if (numberArray[index] > numberArray[j]) {
      index = j;
    }
  }
  let minValue = numberArray[index];
  numberArray.splice(index, 1);
  sortedArray.push(minValue);
  i--;
}
// console.log(sortedArray);
/* 
Question 55:
Write a program that implements a simple calculator for addition, subtraction, multiplication, and division based on user input.
*/

// let input = prompt(
//   `Enter the operation you want to perform (addition , subtraction , divide , multiplication):  `
// );

// while (true) {
//   if (input === "add" || input === "addition") {
//     let firstNumber = Number(prompt("Enter first number:"));
//     let secondNumber = Number(prompt("Enter second number:"));
//     let result = firstNumber + secondNumber;
//     console.log(Number(result));
//     break; 
//   } else if (input === "sub" || input === "subtraction") {
//     let firstNumber = Number(prompt("Enter first number:"));
//     let secondNumber = Number(prompt("Enter second number:"));
//     if (firstNumber > secondNumber) {
//       let result = firstNumber - secondNumber;
//       console.log(result);
//       break;
//     } else {
//       result = secondNumber - firstNumber;
//       console.log(result);
//       break;
//     }
//   } else if (input === "div" || input === "divide") {
//     let firstNumber = Number(prompt("Enter first number:"));
//     let secondNumber = Number(prompt("Enter second number:"));
//     if (firstNumber > secondNumber) {
//       let result = firstNumber / secondNumber;
//       console.log(result);
//       break;
//     } else {
//       result = secondNumber / firstNumber;
//       console.log(result);
//       break;
//     }
//   } else if (input === "mult" || input === "multiplication") {
//     let firstNumber = Number(prompt("Enter first number:"));
//     let secondNumber = Number(prompt("Enter second number:"));
//     if (firstNumber > secondNumber) {
//       let result = firstNumber * secondNumber;
//       console.log(result);
//       break;
//     }
//   } else {
//     break; 
//   }
// }
// console.log("Please choose type correct operations...");

/* 
Question 56:
Write a program that checks if an object is empty in JavaScript.
*/

/* 
Question 57:
Write a program that generates a random number between a given range.
*/

/* 
Question 58:
Write a program that takes an array of strings and finds the longest string.
*/

/* 
Question 59:
Write a program that removes duplicate elements from an array.
*/

/* 
Question 60:
Write a program that creates a deep copy of an array or object.
*/

/* 
Question 61:
Write a program that checks whether a string is a valid number.
*/

/* 
Question 62:
Write a program that merges two objects, with properties from the second object overwriting the first if they share keys.
*/

/* 
Question 63:
Write a program that checks if a number is a perfect square.
*/

/* 
Question 64:
Write a program that checks if a number is a prime number.
*/

/* 
Question 65:
Write a program that removes all falsy values from an array.
*/

/* 
Question 66:
Write a program that counts the number of occurrences of each element in an array.
*/

/* 
Question 67:
Write a program that flattens a nested array.
*/

/* 
Question 68:
Write a program that finds the intersection of two arrays.
*/

/* 
Question 69:
Write a program that checks if a string is a valid email address.
*/

/* 
Question 70:
Write a program that adds the digits of a number together until the result is a single digit.
*/

/* 
Question 71:
Write a program that formats a number to have commas separating thousands.
*/

/* 
Question 72:
Write a program that implements the bubble sort algorithm.
*/

/* 
Question 73:
Write a program that implements the insertion sort algorithm.
*/

/* 
Question 74:
Write a program that finds all unique elements in an array.
*/

/* 
Question 75:
Write a program that generates a random hexadecimal color code.
*/

/* 
Question 76:
Write a program that accepts an array of numbers and finds the sum of the squares of all the numbers.
*/

/* 
Question 77:
Write a program that checks if a number is a palindrome.
*/

/* 
Question 78:
Write a program that finds the longest substring without repeating characters in a string.
*/

/* 
Question 79:
Write a program that reverses the words in a sentence.
*/

/* 
Question 80:
Write a program that checks if an array is sorted.
*/

/* 
Question 81:
Write a program that checks if two strings are anagrams of each other.
*/

/* 
Question 82:
Write a program that formats a string to have the first letter of each word capitalized.
*/

/* 
Question 83:
Write a program that returns a list of all divisors of a given number.
*/

/* 
Question 84:
Write a program that calculates the factorial of a number recursively.
*/

/* 
Question 85:
Write a program that calculates the sum of digits of a number.
*/

/* 
Question 86:
Write a program that simulates a simple ATM system.
*/

/* 
Question 87:
Write a program that removes a specified item from an array by index.
*/

/* 
Question 88:
Write a program that converts a string to title case (first letter of each word capitalized).
*/

/* 
Question 89:
Write a program that finds the unique values from two arrays.
*/

/* 
Question 90:
Write a program that computes the total number of vowels in a string.
*/

/* 
Question 91:
Write a program that calculates the greatest common divisor (GCD) of two numbers iteratively.
*/

/* 
Question 92:
Write a program that merges two sorted arrays into one sorted array.
*/

/* 
Question 93:
Write a program that finds the index of the first occurrence of a value in an array.
*/

/* 
Question 94:
Write a program that calculates the sum of even numbers in an array.
*/

/* 
Question 95:
Write a program that converts an object to a query string format.
*/

/* 
Question 96:
Write a program that calculates the LCM (Least Common Multiple) of two numbers.
*/

/* 
Question 97:
Write a program that finds the middle element(s) of an array.
*/

/* 
Question 98:
Write a program that checks if a given number is a perfect number.
*/

/* 
Question 99:
Write a program that finds all prime numbers in a range.
*/

/* 
Question 100:
Write a program that finds the second smallest number in an array.
*/
