/* 
Question 1:
Write a `for` loop to print numbers from 1 to 10.
*/

for (let i = 1; i <= 10; i++) {
  let count = i;
  // console.log(count);
}

/* 
Question 2:
Create an array of fruits and display its elements using a loop.
*/

let fruits = ["apple", "banana", "pineapple", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  // console.log(element);
}

let count = 0;
while (count < fruits.length) {
  const display = fruits[count];
  // console.log(display);
  count++;
}

/* 
Question 3:
How do you declare and initialize a variable? 
*/

//We can declare a variable in three ways -
let var1 = "Hello";
//In this type of variable we can assign new value to it .
const var2 = "Hello";
//In this type of variable we cannot assign new to value to it .
var var3 = "Hello";
//It is use for old browsers .

/* 
Question 4:
What is the difference between `let`, `var`, and `const`? 
*/

/* 
Question 6:
Create an object representing a student with properties `name`, `age`, and `grade`.
*/

let student = {
  name: "Tavis Scott",
  age: 28,
  grades: {
    Physics: 98,
    Chemistry: 88,
    Maths: 86,
    English: 88,
    Physical_Education: 88,
  },
};

/* 
Question 7:
Write a program to check if a number is even or odd using `if-else`. 
*/

let number = 12;
if (number % 2 === 0) {
  // console.log('Number is even.');
} else {
  // console.log('Number is odd.')
}

/* 
Question 9:
Use a `while` loop to print numbers from 1 to 5.
*/

let num = 1;
while (num <= 5) {
  // console.log(num);
  num++;
}

/* 
Question 10:
What is the type of `null` in JavaScript?
*/

/* 
Question 11:
How do you access a property of an object using dot notation?
*/

// console.log(student.name);
// console.log(student.age);
// console.log(student.grades);

/* 
Question 12:
Write a program to find the largest of three numbers using nested `if`.
*/

let num1 = 22;
let num2 = 12;
let num3 = 23;

if (num1 > num2 && num1 > num3) {
  // console.log('Num1 is largest');
}
if (num2 > num1 && num2 > num3) {
  // console.log('Num3 is greater.');
}
if (num3 > num1 && num3 > num2) {
  // console.log('Num3 is greater.');
}

/* 
Question 13:
How can you find the length of a string? 
*/

let string = "Glimpse of Us";
// console.log(string.length);

/* 
Question 18:
How do you convert a string to a number in JavaScript?
*/

/* 
Question 19:
Write a program that prints Pascal's Triangle for a given number of rows using nested loops.
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
  //console.log(triangle[k].join(""));
}

/* 
Question 20:
Create an array of numbers and find its sum using a loop.
*/
let numArray = [12, 23, 343, 545, 54646, 575768, 7573, 424, 23232];
let sum = [];
for (let i = 0; i < numArray.length; i++) {
  let element = numArray[i];
  // console.log(element);
}
/* 
Question 21:
Write a `do-while` loop to print numbers from 1 to 3.
*/

let condt = 1;

do {
  // console.log(condt);
  condt++;
} while (condt <= 3);

/* 
Question 22:
What is the difference between `==` and `===`?
*/

/* 
Question 24:
How do you access the first element of an array?
*/

let rappers = ["seedhe maut", "krishna", " rap demon", "raftaar"];
// console.log(rappers[0]);

/* 
Question 25:
Write a program to find the smallest number in an array.
*/

let numbers = [3, 56, 64, 3, 664, 64, 34, 231, 2, 1, 342];
let smallest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i];
  if (element < smallest) {
    smallest = element;
  }
}
// console.log(smallest);

/* 
Question 27:
Explain what an object is in JavaScript.
*/

/* 
Question 28:
How do you iterate over an object’s properties using a `for...in` loop?
*/

/* 
Question 29:
What is the difference between `null` and `undefined`?
*/

/* 
Question 30:
Write a program that checks whether a number is divisible by both 3 and 5.
*/

let n = 12;
if (n % 3 === 0 && n % 5 === 0) {
  // console.log("FizzBuzz");
}
if (n % 3 === 0) {
  // console.log("Fizz");
}
if (n % 5 === 0) {
  // console.log("Buzz");
}

/* 
Question 31:
Create an array of strings and join them into a single string with a separator.
*/

/* 
Question 32:
Write a program to find the average of all elements in an array.
*/

/* 
Question 33:
How do you remove the last element of an array in JavaScript?
*/

/* 
Question 34:
Write a program to convert a number to a string.
*/

/* 
Question 35:
What is the result of `typeof NaN`?
*/

/* 
Question 36:
Write a program to print the Fibonacci series up to `n` terms.
*/


/* 
Question 37:
How do you add a new property to an object?
*/

let obj = {
  name: "Sicko Mode",
  singer: "Travis Scott",
};
obj.collabration = "Drake";
// console.log(obj);
/* 
Question 38:
Write a program to count the number of vowels in a string.
*/

let string3 = "Glock on my lap";
let vowels = 0;
for (let i = 0; i < string3.length; i++) {
  if (
    string3[i] === "a" ||
    string3[i] === "e" ||
    string3[i] === "i" ||
    string3[i] === "o" ||
    string3[i] === "u" ||
    string3[i] === "A" ||
    string3[i] === "E" ||
    string3[i] === "I" ||
    string3[i] === "O" ||
    string3[i] === "U"
  ) {
    vowels++;
  }
}
// console.log(vowels);

/* 
Question 39:
What will be the result of `5 + "5"` in JavaScript and why?
*/

//Answer = the output would be 55 .

/* 
Question 42:
Write a program to merge two arrays into a single array.
*/

let arr = ["Nose", "hairs"];
let arr2 = ["stomach", "eyes"];

// console.log([...arr, ...arr2]);

/* 
Question 43:
What is the output of `"1" + 2 - 1` in JavaScript?
*/
// Answer - Output would be 11

/* 
Question 44:
Write a program to check if a given string contains a specific character.
*/

let str = "Less than zero";
for (let i = 0; i < str.length; i++) {
  if (str[i] === "t") {
    // console.log("Found");
  }
}

/* 
Question 45:
What is the result of `[] + {}` and why?
*/

/* 
Question 46:
Write a program that prints the multiplication table of a number.
*/

let m = 2;
for (let i = 1; i <= 10; i++) {
  let mult = i * m;
  // console.log(mult);
}

/* 
Question 47:
How do you find the index of an element in an array?
*/

/* 
Question 48:
Write a program that removes a specific element from an array.
*/

let lang = ["English", "Hindi", "Spanish ", "French"];

/* 
Question 49:
What is the difference between `push()` and `unshift()` in JavaScript arrays?
*/

/* 
Question 50:
Write a program to find the second largest number in an array.
*/
