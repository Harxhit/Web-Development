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

let obj2 = {};

for (const key in obj2) {
  if (Object.prototype.hasOwnProperty.call(obj2, key)) {
    console.log("Object holds some value.");
  }
}
// console.log('Object is empty');

/* 
Question 57:
Write a program that generates a random number between a given range.
*/

let min = 1;
let max = 100;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNumber);
/* 
Question 58:
Write a program that takes an array of strings and finds the longest string.
*/

let arrayString = [
  "Bleach",
  "Hunter X Hunter",
  "Naruto",
  "Welcome to demon school Iruma kun",
  "The day I was reincarnated as 7th prince",
];
let longestString = null;

for (let i = 0; i < arrayString.length; i++) {
  let longest = arrayString[0].length;
  let element = arrayString[i].length;
  if (element > longest) {
    longestString = arrayString[i];
  }
}
// console.log('The longest string is: ',longestString);

/* 
Question 59:
Write a program that removes duplicate elements from an array.
*/

let array = [1, 2, 1, 1, 3, 4, 5, 7, 8, 8, 6, 5, 2, 3, 1];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      array.splice(j, 1);
      j--;
    }
  }
}
// console.log(array);

/* 
Question 60:
Write a program that creates a deep copy of an array or object.
*/
let array1 = [1, 2, 3, { a: 10, b: 10 }, 5, 6];
let deepCopy = structuredClone(array1);

deepCopy[3].b = "I changed the value";
// console.log(array1);
// console.log(deepCopy);
/* 
Question 61:
Write a program that checks whether a string is a valid number.
*/

let str = "122.323";
let isValid = true;
let haveDigits = false;
let haveDecimals = false;

if (str.length === 0) {
  isValid = false;
}

for (let i = 0; i < str.length && isValid; i++) {
  let element = str[i];

  if ((element === "+" || element === "-") && i === 0) {
    continue;
  }
  if (element === ".") {
    if (haveDecimals) {
      isValid = false;
    } else {
      haveDecimals = true;
    }
    continue;
  }
  if (element >= "0" && element <= "9") {
    haveDigits = true;
    continue;
  }

  isValid = false;
}
if (!haveDigits) {
  isValid = false;
}

// console.log(isValid);

/* 
  Question 62:
  Write a program that merges two objects, with properties from the second object overwriting the first if they share keys.
*/

/* 
  Question 63:
  Write a program that checks if a number is a perfect square.
*/

let n = 12;
let isPerfectSquare = false;
let squareRoot = Math.floor(Math.sqrt(n));

for (let i = 0; i <= n; i++) {
  if (squareRoot * squareRoot === n) {
    isPerfectSquare = true;
  }
}
// console.log('The given number is perfect square:',isPerfectSquare);

// console.log(isPerfectSquare);
/* 
  Question 64:
  Write a program that checks if a number is a prime number.
*/

let num = 4;

let isPrime = true;
for (let i = 2; i <= num; i++) {
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    isPrime = true;
  }
}
// console.log('Is number a prime:',isPrime);

/* 
  Question 65:
  Write a program that removes all falsy values from an array.
*/

//A falsy array is an array where all its elements evaluate to falsy values in JavaScript. Falsy values include:
//false, 0, -0, "" (empty string), null, undefined, and NaN

let falsyArray = [1, 2, false, 0, -0, "", null, undefined, NaN, 3];

for (let i = falsyArray.length - 1; i >= 0; i--) {
  let element = falsyArray[i];

  if (
    element === false ||
    element === 0 ||
    element === -0 ||
    element === null ||
    element === "" ||
    element === undefined ||
    (typeof element === "number" && isNaN(element))
  ) {
    falsyArray.splice(i, 1);
  }
}
// console.log(falsyArray);

/* 
  Question 66:
  Write a program that counts the number of occurrences of each element in an array.
*/

let arrayNum = [1, 1, 3, 4, 5, 3, 4, 5, 5, 3, 3, 4, 68, 7, 6, 5, 4];
let occurrence = {};

for (let i = 0; i < arrayNum.length; i++) {
  let element = arrayNum[i];

  if (occurrence[element]) {
    occurrence[element]++;
  } else {
    occurrence[element] = 1;
  }
}
// console.log(occurrence);
/* 
  Question 67:
  Write a program that flattens a nested array.
*/

let nestedArray = [1, 2, [3, 4], [5, 6, [7, 8]], 9];
let flattensArray = [];

for (let i = 0; i < nestedArray.length; i++) {
  let element = nestedArray[i];
  if (Array.isArray(element)) {
    for (let j = 0; j < element.length; j++) {
      if (Array.isArray(element[j])) {
        for (let k = 0; k < element[j].length; k++) {
          flattensArray.push(element[j][k]);
        }
      } else {
        flattensArray.push(element[j]);
      }
    }
  } else {
    flattensArray.push(element);
  }
}
// console.log(flattensArray);
/* 
  Question 68:
  Write a program that finds the intersection of two arrays.
*/

let arr = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
let intersection = [];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  for (let j = 0; j < arr2.length; j++) {
    let k = arr2[j];
    if (element === k) {
      intersection.push(element);
    }
  }
}
// console.log(intersection);
/* 
  Question 69:
  Write a program that checks if a string is a valid email address.
*/

let string = "harsxit04@gmail.com";
let valid = true;
let haveDot = false;
let haveAt = false;

if (string.length === 0) {
  valid = false;
}

for (let index = 0; index < string.length && valid; index++) {
  let element = string[index];
  if (element === "@") {
    if (haveAt) {
      //Check if mail have more than one @ sign.
      valid = false;
      break;
    } else {
      haveAt = true;
      continue;
    }
  }
  if (element === ".") {
    if (haveDot) {
      valid = false;
      break;
    }
    if (haveAt) {
      haveDot = true;
      continue;
    }
  }
  if (haveAt || haveDot) {
    let atIndex = string.indexOf("@");
    let dotIndex = string.indexOf(".", atIndex);
    if (
      dotIndex === -1 ||
      dotIndex < atIndex + 2 ||
      dotIndex === string.length - 1
    ) {
      valid = false;
      break;
    }
  }
}
if (!haveAt || !haveDot) {
  valid = false;
}
// console.log(valid);
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

let array3 = [5, 7, 9, 2, 0, 4, 3, 6, 1, 8];

for (let i = 0; i < array3.length; i++) {
  let index = i;
  for (let j = i + 1; j < array3.length; j++) {
    if (array3[index] > array3[j]) {
      index = j;
    }
  }
  if (index !== i) {
    let element = array3[i];
    array3[i] = array3[index];
    array3[index] = element;
  }
}
// console.log(array3);
/* 
  Question 73:
  Write a program that implements the insertion sort algorithm.
*/

let arr3 = [3, 8, 12, 4, 53, 5, 6, 9];

for (let i = 0; i < arr3.length; i++) {
  let current = arr3[i];
  let j = i - 1;

  while (j >= 0 && arr3[j] > current) {
    arr3[j + 1] = arr3[j];
    j--;
  }
  arr3[j + 1] = current;
}
// console.log(arr3);

/* 
  Question 74:
  Write a program that finds all unique elements in an array.
*/
let arr4 = [12, 12, 2, 2, 124, 4, 6, 4, 64, 7, 5, 5, 8, 1, 3, 78, 5];
let resultArray = [];

for (let i = 0; i < arr4.length; i++) {
  let element = arr4[i];
  let count = 0;
  for (let j = 0; j < arr4.length; j++) {
    if (element === arr4[j]) {
      count++;
    }
  }
  if (count === 1) {
    resultArray.push(element);
  }
}
// console.log(resultArray);
/* 
  Question 75:
  Write a program that generates a random hexadecimal color code.
*/

let arrayStr = ["A", "B", "C", "D", "E", "F"];
let arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let char = [...arrayStr, ...arrayNumber];
let hexadecimal = "#";

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * char.length);
  hexadecimal += char[randomIndex];
}
// console.log(hexadecimal);
/* 
  Question 76:
  Write a program that accepts an array of numbers and finds the sum of the squares of all the numbers.
*/

/* 
  Question 77:
  Write a program that checks if a number is a palindrome.
*/

let integer = 221;
let strInt = integer.toString();
let index = strInt.length - 1;
let isPalindrome = true;

for (let i = 0; i <= Math.floor(index / 2); i++) {
  if (strInt[i] !== strInt[index - i]) {
    isPalindrome = false;
    break;
  }
}
// console.log(isPalindrome);
/* 
  Question 78:
  Write a program that finds the longest substring without repeating characters in a string.
*/

let str2 = "harshit";
let longestSubString = "";

for (let i = 0; i < str2.length; i++) {
  let tempSub = "";
  let char = new Set();

  for (let j = i; j < str2.length; j++) {
    if (char.has(str2[j])) {
      break;
    } else {
      tempSub += str2[j];
      char.add(str2[j]);
    }
  }
  if (tempSub.length > longestSubString.length) {
    longestSubString = tempSub;
  }
}
// console.log(longestSubString);
/* 
  Question 79:
  Write a program that reverses the words in a sentence.
*/

let str1 =
  "Sometimes I look into her eyes and thats where find the glimpse of us";
let result = "";
for (let i = str1.length - 1; i >= 0; i--) {
  result += str1[i];
}
// console.log(result);str2
/*
Question 80: 
Write a program that checks if an array is sorted.
*/

let unSorted = [9, 5, 3, 7, 6, 8, 2, 1, 4];
let isSorted = true;

for (let i = 0; i < unSorted.length; i++) {
  if (unSorted[i] > unSorted[i + 1]) {
    isSorted = false;
    break;
  }
}
if (isSorted) {
  // console.log('Array is sorted');
} else {
  // console.log('Array is not sorted');
}

/* 
Question 81:
Write a program that checks if two strings are anagrams of each other.
*/

let string1 = "listen";
let string2 = "silent";
let isAnargram = true;

if (string1.length !== string2.length) {
  isAnargram = false;
} else {
  let str1 = string1.split("").sort().join("");
  let str2 = string2.split("").sort().join("");

  if (str1 !== str2) {
    isAnargram = false;
  }
}
// console.log(isAnargram);

/* 
  Question 82:
  Write a program that formats a string to have the first letter of each word capitalized.
*/

/* 
  Question 83:
  Write a program that returns a list of all divisors of a given number.
*/

let m = 100;
let listDivisor = [];

for (let i = 1; i <= m; i++) {
  if (m % i === 0) {
    listDivisor.push(i);
  }
}
// console.log(listDivisor);

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

const data = {
  Account1: {
    name: "Travis Scott",
    account_no: 3215,
    account_balance: 100000,
    pin: 4111,
  },
  Account2: {
    name: "Kylie Jennner",
    account_no: 3217,
    account_balance: 10000,
    pin: 4322,
  },
  Account3: {
    name: "Kendric Lamar",
    account_no: 3219,
    account_balance: 10000000,
    pin: 4222,
  },
};

let validAccount = true;

// while (true) {
//   let user = prompt("Please enter your account number: ");

//   let currentAccount = Object.values(data).find(
//     (acc) => acc.account_no === parseInt(user)
//   );

//   if (currentAccount) {
//     let password = prompt("Please enter your ATM pin");

//     if (currentAccount.pin === parseInt(password)) {
//       console.log(`Welcome ${currentAccount.name}`);
//       alert(`Welcome ${currentAccount.name}`);

//       let input = prompt(
//         "Press 1 : To check balance, Press 2 : Withdraw Money , Press 3 : Deposit Money , Press 4: Exit"
//       );

//       while (true) {
//         if (parseInt(input) == 1) {
//           console.log(
//             `Your available balance is: $${currentAccount.account_balance}`
//           );
//           alert(
//             `Your available balance is: $${currentAccount.account_balance}`
//           );
//         } else if (parseInt(input) == 2) {
//           let amount = prompt("How much would you like to withdraw: ");
//           if (
//             parseFloat(amount) > 0 &&
//             parseFloat(amount) <= currentAccount.account_balance
//           ) {
//             currentAccount.account_balance -= amount;
//             console.log(
//               `Available balance is $${currentAccount.account_balance}`
//             );
//             alert(`Available balance is $${currentAccount.account_balance}`);
//           } else {
//             alert("Insufficient balance or invalid amount.");
//           }
//         } else if (parseInt(input) == 3) {
//           let deposit = prompt("How much would you like to deposit: ");
//           if (parseFloat(deposit) > 0) {
//             currentAccount.account_balance += parseFloat(deposit);
//             console.log(
//               `Your available balance is $${currentAccount.account_balance}`
//             );
//             alert(
//               `Your available balance is $${currentAccount.account_balance}`
//             );
//           } else {
//             alert("Invalid deposit amount.");
//           }
//         } else if (parseInt(input) === 4) {
//           console.log(
//             `Thank you for using our services, ${currentAccount.name}`
//           );
//           alert(`Thank you for using our services, ${currentAccount.name}`);
//           break;
//         } else {
//           alert("Invalid option, please try again.");
//         }

//         if (parseInt(input) !== 4) {
//           input = prompt(
//             "Press 1 : To check balance, Press 2 : Withdraw Money , Press 3 : Deposit Money , Press 4: Exit"
//           );
//         }
//       }
//       break;
//     } else {
//       alert("Incorrect pin, please try again.");
//     }
//   } else {
//     alert("Account not found.");
//   }
// }

/* 
  Question 87:
  Write a program that removes a specified item from an array by index.
*/

let arr6 = ["Batman", "Superman", "SpiderMan", "Pokeman"];
let indexRemove = 2;

arr6.splice(indexRemove, 1);
// console.log(arr6);

/* 
  Question 88:
  Write a program that converts a string to title case (first letter of each word capitalized).
*/

/* 
  Question 89:
  Write a program that finds the unique values from two arrays.
*/
let animeNames = [
  "Naruto",
  "One Piece",
  "Naruto",
  "Demon Slayer",
  "My Hero Academia",
  "One Piece",
];
let superheroNames = [
  "Spider-Man",
  "Iron Man",
  "Wonder Woman",
  "Batman",
  "Captain America",
  "Iron Man",
];
let uniqueArray = [];

for (let i = 0; i < animeNames.length; i++) {
  let count = 0;
  for (let k = 0; k < animeNames.length; k++) {
    if (animeNames[i] === animeNames[k]) {
      count++;
    }
  }
  if (count === 1 && !uniqueArray.includes(animeNames[i])) {
    uniqueArray.push(animeNames[i]); 
  }
}
for (let i = 0; i < superheroNames.length; i++) {
  let count = 0;
  for (let k = 0; k < superheroNames.length; k++) {
    if (superheroNames[i] === superheroNames[k]) {
      count++;
    }
  }
  if (count === 1 && !uniqueArray.includes(superheroNames[i])) {
    uniqueArray.push(superheroNames[i]);
  }
}
// console.log(uniqueArray); 
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
