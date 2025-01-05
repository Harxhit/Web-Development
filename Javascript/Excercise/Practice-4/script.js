/* 
Question 1:
Write a for loop that prints the squares of numbers from 1 to 5.
*/

let num = 5;
let exponentArray = [];
for (let i = 1; i <= num; i++) {
  let result = i * i;
  exponentArray.push(result);
}
// console.log(exponentArray);

/* 
Question 2:
Write a while loop that prints numbers from 10 to 1 in reverse order.
*/

let order = 11;

while (order > 1) {
  order--;
  // console.log(order);
}

/* 
Question 3:
Write a program using a loop that sums up all the even numbers between 1 and 20.
*/
let n = 20;
let total = 0;
for (let i = 1; i < n; i++) {
  if (i % 2 === 0) {
    total += i;
  }
}
// console.log(total);

/* 
Question 4:
Write a for loop that iterates through a list of strings and prints each string in uppercase.
*/

let string = "I am sorry , I missed my sunshine.";
for (let i = 0; i < string.length; i++) {
  // console.log(string[i].toUpperCase());
}

/* 
Question 5:
Write a while loop that prompts the user for input until they type "exit".
*/

// let array = [];
// while (true) {
//   let input = prompt(`Enter any input and to exit (type 'exit') . `)
//   if (input === 'exit') {
//     break;
//   }
//   array.push(input);
// }
// console.log(array);

/* 
Question 6:
Write a program using a loop that counts how many vowels are in a given string.
*/

let vowelsString =
  "Sometimes I look into her eyes and thats where I find the glimpse of us";
let count = 0;

for (let i = 0; i < vowelsString.length; i++) {
  let element = vowelsString[i].toLowerCase();

  // if (element === 'a' || element === 'i' || element === 'e' || element === 'o' || element === 'u') {
  //   count ++;
  // }
  if ("aeiouAEIOU".includes(element)) {
    count++;
  }
}
// console.log(count);

/* 
Question 7:
Write a program that finds the factorial of a number using a for loop.
*/

let factorialArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultArray = [];

for (let i = 0; i < factorialArray.length; i++) {
  const element = factorialArray[i];
  let factorial = 1;
  for (let j = 1; j <= element; j++) {
    factorial *= j;
  }
  resultArray.push(factorial);
}
// console.log(resultArray);

/* 
Question 8:
Write a program that calculates the Fibonacci sequence up to the 20th term using a loop.
*/

let fibonacciArray = [0, 1];
let i = 20;

for (let j = 2; j < i; j++) {
  nextTerm = fibonacciArray[j - 1] + fibonacciArray[j - 2];
  fibonacciArray.push(nextTerm);
}
// console.log(fibonacciArray);

/* 
Question 9:
Write a for loop that prints the sum of all odd numbers in a list of integers.
*/

let oddNumber = 20;
let sum = 0;

for (let i = 1; i < oddNumber; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}
// console.log(sum);

/* 
Question 10:
Write a program that reverses a given string using a loop.
*/

let reverseString = "Hello";
let result = "";

for (let i = reverseString.length - 1; i >= 0; i--) {
  result += reverseString[i];
}
// console.log(result);

/* 
Question 11:
Write a program that prints a multiplication table for a given number using a loop.
*/

let nums = 2;
let multiplicationArray = [];

for (let i = 1; i <= 10; i++) {
  let element = i * nums; 
  multiplicationArray.push(element); 
}
// console.log(multiplicationArray); 
// let input = prompt('Enter a number you want to find multiplication table.')
let number = 2;
``;
for (let i = 1; i <= 10; i++) {
  let result = number * i;
  // console.log(result);
}

/* 
Question 12:
Write a program to generate all prime numbers up to 100 using a loop.
*/

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    // console.log(i);
  }
}

/* 
Question 13:
Write a program that uses nested loops to print a pattern (e.g., a triangle of stars).
*/

/* 
Question 14:
Write a program to find the largest number in a list of numbers using a loop.
*/

listNumber = [
  5558, 22232, 32323, 3435, 657, 766, 8879, 7090, 44646, 464646, 7686, 8686,
];
let largest = listNumber[0];
for (let i = 2; i < listNumber.length; i++) {
  if (listNumber[i] > largest) {
    largest = listNumber[i];
  }
}
// console.log(largest);
/* 
Question 15:
Write a program that takes a list of numbers and counts how many numbers are divisible by 3 using a loop.
*/

let divisibleByThree = 0;

for (let i = 0; i < listNumber.length; i++) {
  if (listNumber[i] % 3 === 0) {
    divisibleByThree++;
  }
}
// console.log(divisibleByThree);
/* 
Question 16:
Write a program to merge two sorted lists into one sorted list using a loop.
*/

let array1 = [
  "Dancing in the dark",
  "Heartbreak Anniversary",
  "90201",
  "Room no 420",
];
let array2 = ["Blinding by lights", "Die for you", "Less than Zero"];
let combineArray = [];

let l = 0;
let m = 0;

while (l < array1.length && m < array2.length) {
  if (array1[l] < array2[m]) {
    combineArray.push(array1[l]);
    l++;
  } else {
    combineArray.push(array2[m]);
    m++;
  }
}

while (l < array1.length) {
  combineArray.push(array1[l]);
  l++;
}

while (m < array2.length) {
  combineArray.push(array2[m]);
  m++;
}

// console.log(combineArray);

/* 
Question 17:
Write a program to calculate the GCD (Greatest Common Divisor) of two numbers using a loop.
*/

let num1 = 399;
let num2 = 1212;
let greatestCommonDivisor = [];
let smallNumber;

if (num1 < num2) {
  smallNumber = num1;
} else {
  smallNumber = num2;
}
for (let i = 1; i <= smallNumber; i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    greatestCommonDivisor.push(i);
  }
}
let gcd = greatestCommonDivisor[0];

for (let j = 1; j < greatestCommonDivisor.length; j++) {
  if (greatestCommonDivisor[j] > gcd) {
    gcd = greatestCommonDivisor[j];
  }
}
// console.log(gcd);
/* 
Question 18:
Write a program to find all pairs of numbers in a list whose sum is equal to a target value using loops.
*/

let targetValue = 46;
let listNumbers = [
  12, 34, 4, 5, 6, 43, 3, 4, 32, 9, 8, 35, 28, 14, 27, 23, 45, 2, 1,
];
let equalTargetValue = [];

for (let i = 0; i < listNumbers.length; i++) {
  for (let j = i + 1; j < listNumbers.length; j++) {
    let sum = listNumbers[i] + listNumbers[j];
    if (sum === targetValue) {
      equalTargetValue.push([listNumbers[i], listNumbers[j]]);
    }
  }
}
// console.log(equalTargetValue);
/* 
Question 19:
Write a program that prints the Pascal's Triangle for a given number of rows using nested loops.
*/

let rows = 10;
let triangle = [];

for (let i = 0; i < rows; i++) {
  let row = [];
  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i) {
      row.push(1);
    } else {
      row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
  }
  triangle.push(row);
}

for (let k = 0; k < triangle.length; k++) {
  // console.log(triangle[k].join(" "));
}
