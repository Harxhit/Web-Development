// Write a program to check if a number is positive or negative.

let num1 = -2;
let num2 = 3;

if (num1 >= 0) {
  console.log(`The given number is positive.`);
} else {
  console.log("The given number is negative.");
}

// Determine whether a given number is even or odd.

let number1 = 3;
let number2 = 8;

if (number2 % 2 === 0) {
  console.log("The given number is even.");
} else {
  console.log("The given number is odd.");
}

// Find the largest of two numbers and handle the case when they are equal.

let n = 18;
let n2 = 188;

if (n > n2) {
  console.log(`${n} is the largest.`);
} else if (n == n2) {
  console.log("Both numbers are equal.");
} else {
  console.log(`${n2} is the largest`);
}

//Check if a person is eligible to vote based on their age.

let person1 = 16;
let person2 = 19;
let person3 = 21;

if (person1 >= 18) {
  console.log("You are eligble to vote.");
} else {
  console.log("You are not eligble to vote.");
}

//Verify if a number is within the range of 10 to 20.

let num = 10;

if (num > 10 && num < 20) {
  console.log("The given number is the range between 10 and 20.");
} else {
  console.log("The given number is not in the range between 10 and 20.");
}

//Check if a given string is empty or not.

let str = "";
let str2 = "Hello World";

if (str.length == 0) {
  console.log("String is empty.");
} else {
  console.log("String is not empty.");
}

//Assign a grade to a student based on their marks (A, B, C, or F).

let student1 = {
  name: "Abhinav Sharma",
  class: 11,
  score: {
    Phyics: 62,
    Chemistry: 42,
    Maths: 69,
    English: 34,
    Hindi: 58,
  },
};
let student4 = {
  name: "Virat Kholi",
  class: 11,
  score: {
    Phyics: 82,
    Chemistry: 82,
    Maths: 59,
    English: 88,
    Hindi: 78,
  },
};
let student2 = {
  name: "Rohit Sharma",
  class: 11,
  score: {
    Phyics: 52,
    Chemistry: 92,
    Maths: 69,
    English: 70,
    Hindi: 38,
  },
};
let student3 = {
  name: "Travis Scott",
  class: 11,
  score: {
    Phyics: 82,
    Chemistry: 72,
    Maths: 69,
    English: 90,
    Hindi: 48,
  },
};
let student5 = {
  name: "Hitesh Chaudhary",
  class: 11,
  score: {
    Phyics: 92,
    Chemistry: 98,
    Maths: 99,
    English: 97,
    Hindi: 98,
  },
};
let scoreArray = Object.values(student4.score);

let score = 0;
if (scoreArray.length > 0) {
  score += scoreArray[0];
}
if (scoreArray.length > 0) {
  score += scoreArray[1];
}
if (scoreArray.length > 0) {
  score += scoreArray[2];
}
if (scoreArray.length > 0) {
  score += scoreArray[3];
}
if (scoreArray.length > 0) {
  score += scoreArray[4];
}
let totalScore = 500;
let percentage = (score / 500) * 100;

if (percentage >= 90 && percentage <= 100) {
  console.log(`${student4.name} is awarded with grade A.`);
} else if (percentage >= 89 && percentage <= 80) {
  console.log(`${student4.name} is awarded with grade B.`);
} else if (percentage >= 70 && percentage <= 79) {
  console.log(`${student4.name} is awarded with grade C.`);
} else if (percentage >= 69 && percentage <= 65) {
  console.log(`${studen1.name} is awarded with grade D`);
} else if (percentage <= 64) {
  console.log(`${student4.name} failed the exam.`);
} else {
  console.log("Not able to calculate the grades.");
}

//Write a program to check if a year is a leap year.

let year1 = 366;
let year2 = 365;

if (year1 === 366) {
  console.log("Its a leap year.");
} else {
  console.log("Its not a leap year.");
}

// Identify the type of a triangle (Equilateral, Isosceles, or Scalene) based on side lengths.

let triangle1 = {
  side1: 12,
  side2: 21,
  side3: 12,
};
let triangle2 = {
  side1: 12,
  side2: 11,
  side3: 2,
};

let triangle3 = {
  side1: 12,
  side2: 12,
  side3: 12,
};  

let triangleArray = Object.values(triangle1);
console.log(triangleArray)


if (
  triangleArray[0] === triangleArray[1] &&
  triangleArray[1] === triangleArray[2]
) {
  console.log("Triangle is equilateral.");
} else if (
  triangleArray[0] === triangleArray[1] ||
  triangleArray[1] === triangleArray[2] ||
  triangleArray[2] === triangleArray[0]
) {
  console.log("Triangle is Isosceles.");
} else {
  console.log("Triangle is Scalene.");
}
