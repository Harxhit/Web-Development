/* 
Question 1:
Write a function that returns the square of a number.
*/

function square(number) {
  let result = number * number;
  return result;
}
// console.log(square(4));

/* 
Question 2:
Create a function that adds two numbers.
*/

function addition(a, b) {
  let result = a + b;
  return result;
}
// console.log(addition(5, 3));

/* 
Question 3:
Write a function that subtracts one number from another.
*/

function subtraction(a, b) {
  if (b > a) {
    result = b - a;
  } else {
    result = a - b;
  }
  return result;
}
// console.log(subtraction(10, 20));

/* 
Question 4:
Write a function that multiplies two numbers.
*/

function multiplication(a, b) {
  let result = a * b;
  return result;
}
// console.log(multiplication(5, 3));

/* 
Question 5:
Write a function that divides two numbers and returns the result.
*/

function divide(a, b) {
  if (b > a) {
    result = b / a;
  } else {
    result = a / b;
  }
  return result;
}
// console.log(divide(9, 3));
/* 
Question 6:
Write a function that checks if a number is even or odd.
*/

function check(n) {
  if (n % 2 === 0) {
    result = "even";
  }
  if (n % 2 == 1) {
    result = "odd";
  }
  return result;
}
// console.log(check(8));

/* 
Question 7:
Create a function that returns the absolute value of a number.
*/
function absolute(n) {
  let result = Math.abs(n);
  return result;
}
// console.log(absolute(-2));
/* 
Question 8:
Write a function that returns the greater of two numbers.
*/

function greater(a, b) {
  if (b > a) {
    result = `Number ${b} is greater than ${a}`;
  }
  if (a > b) {
    result = `Number ${a} is greater than ${b}`;
  }
  return result;
}
// console.log(greater(3, 2));
/* 
Question 9:
Write a function that finds the smallest of three numbers.
*/

function smallest(a, b, c) {
  if (c < b && c < a) {
    result = "c is smallest";
  } else if (b < c && b < a) {
    result = "b is smallest";
  } else if (a < c && a < b) {
    result = " a is smallest";
  }
  return result;
}
// console.log(smallest(1, 2, 3));

/* 
Question 10:
Create a function that calculates the perimeter of a rectangle.
*/

function perimeter(length, width) {
  perimeter = 2 * (length + width);
  return perimeter;
}
// console.log(perimeter(2, 4));
/* 
Question 11:
Write a function that returns the factorial of a number.
*/

function factorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
// console.log(factorial(5));
/* 
Question 12:
Write a function that counts the number of vowels in a string.
*/

function vowels(string) {
  let count = 0;
  if (string.length === 0) {
    return "You have enter an empty string.";
  }
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u" ||
      string[i] === "A" ||
      string[i] === "E" ||
      string[i] === "I" ||
      string[i] === "O" ||
      string[i] === "U"
    ) {
      count++;
    }
  }
  return `The string have ${count} vowels in it.`;
}
// console.log(vowels("hello world"));

/* 
Question 13:
Write a function that converts a string to uppercase.
*/

function uppercase(string) {
  let result = string.toUpperCase();
  return result;
}
// console.log(uppercase('hello'));

/* 
Question 14:
Write a function that converts a string to lowercase.
*/

function lowercase(string) {
  return string.toLowerCase();
}

// console.log(lowercase("HEELOO"));
/* 
Question 15:
Write a function that removes all spaces from a string.
*/

function spaces(string) {
  return string.replace(/\s+/g, "");
}
// console.log(spaces("This can be us"));

/* 
Question 16:
Write a function that checks if a string contains a specific substring.
*/

/* 
Question 17:
Write a function that returns the first character of a string.
*/

function firstCharacter(string) {
  let result = string[0];
  return result;
}
// console.log(firstCharacter('hello'));
/* 
Question 18:
Write a function that returns the last character of a string.
*/

function lastCharacter(string) {
  let result = string.length - 1;
  return string[result];
}
// console.log(lastCharacter('hello'));

/* 
Question 19:
Write a function that counts the number of words in a string.
*/

function numberWords(string) {
  if (string.trim() === "") {
    return 0;
  }
  let words = string.trim().split(/\s+/);
  return words.length;
}
// console.log(numberWords('world'));
/* 
Question 20:
Write a function that reverses a string.
*/

function reverse(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}
// console.log(reverse('hello'));
/* 
Question 21:
Write a function that checks if a string is a palindrome.
*/

function palindrome(string) {
  let index = string.length - 1;
  for (let i = 0; i <= Math.floor(index / 2); i++) {
    if (string[i] !== string[index - i]) {
      return "String is not a palindrome";
    }
  }
  return "String is palindrome";
}
// console.log(palindrome("ABCCA"));
/* 
Question 22:
Write a function that removes all non-alphanumeric characters from a string.
*/

function nonAlphanumeric(string) {
  return string.replace(/[^a-zA-Z0-9]/g, "");
}
// console.log(nonAlphanumeric('Hello , % '));
/* 
Question 23:
Write a function that capitalizes the first letter of each word in a string.
*/

function capitalizes(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
}
// console.log(capitalizes("hello world"));
/* 
Question 24:
Write a function that converts an array to a string.
*/

function arrayToString(array) {
  return array.join(",");
}
// console.log(arrayToString([1, 2, 3]));
/* 
Question 25:
Write a function that joins elements of an array into a string with a custom separator.
*/

/* 
Question 26:
Write a function that finds the longest word in a string.
*/

function longestWord(string) {
  let words = string.split(" ");
  let longestLength = 0;
  let longestWords = [];
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    if (longestLength < element.length) {
      longestLength = element.length;
      longestWords = [element];
    } else if (longestLength === element.length) {
      longestWords.push(element);
    }
  }
  return longestWords;
}
// console.log(longestWord("Still dont know my name"));
/* 
Question 27:
Write a function that repeats a string a specified number of times.
*/

/* 
Question 28:
Write a function that checks if a number is prime.
*/

/* 
Question 29:
Write a function that returns the nth Fibonacci number.
*/

/* 
Question 30:
Write a function that finds the sum of all numbers in an array.
*/

/* 
Question 31:
Write a function that multiplies all numbers in an array.
*/

/* 
Question 32:
Write a function that finds the average of all numbers in an array.
*/

/* 
Question 33:
Write a function that finds the largest number in an array.
*/

/* 
Question 34:
Write a function that finds the smallest number in an array.
*/

/* 
Question 35:
Write a function that removes duplicate elements from an array.
*/

/* 
Question 36:
Write a function that checks if an array is sorted in ascending order.
*/

/* 
Question 37:
Write a function that flattens a nested array.
*/

/* 
Question 38:
Write a function that merges two arrays without duplicates.
*/

/* 
Question 39:
Write a function that sorts an array in ascending order.
*/

/* 
Question 40:
Write a function that sorts an array in descending order.
*/

/* 
Question 41:
Write a function that finds the index of a specific element in an array.
*/

/* 
Question 42:
Write a function that removes an element from an array at a specific index.
*/

/* 
Question 43:
Write a function that removes all occurrences of a specific element from an array.
*/

/* 
Question 44:
Write a function that checks if an array contains a specific element.
*/

/* 
Question 45:
Write a function that splits a string into an array of words.
*/

/* 
Question 46:
Write a function that returns a substring from a string starting at a specific index.
*/

/* 
Question 47:
Write a function that checks if an object is empty.
*/

/* 
Question 48:
Write a function that merges two objects into one.
*/

/* 
Question 49:
Write a function that copies the properties of one object to another.
*/

/* 
Question 50:
Write a function that checks if a key exists in an object.
*/
