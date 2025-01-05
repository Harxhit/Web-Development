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
function specificString(string, substring) {
  if (string.includes(substring)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// specificString("string", "str");
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
function joinElement(element, seperator) {
  return element.join(seperator);
}
// console.log(joinElement(['apple','mango','banana'],','))
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

function stringRepeat(string, number) {
  return string.repeat(number);
}
// console.log(stringRepeat("hello",3));
/* 
Question 28:
Write a function that checks if a number is prime.
*/

function prime(number) {
  if (number < 2) {
    console.log("Number is not a prime number");
  }
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      console.log("It is not a prime");
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("Number is a prime number");
  }
}
// prime(3);

/* 
Question 29:
Write a function that returns the nth Fibonacci number.
*/

function fibonacci(number) {
  let fibonacciArray = [0, 1];
  for (let i = 2; i < number; i++) {
    nextElement = fibonacciArray[i - 2] + fibonacciArray[i - 1];
    fibonacciArray.push(nextElement);
  }
  return fibonacciArray[number - 1];
}
// console.log(fibonacci(5));
/* 
Question 30:
Write a function that finds the sum of all numbers in an array.
*/

function additionArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
  }
  return sum;
}
// console.log(additionArray([1, 24, 3, 53, 53, 353]));
/* 
Question 31:
Write a function that multiplies all numbers in an array.
*/

function multiplicationArray(array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum *= element;
  }
  return sum;
}
// console.log(multiplicationArray([1, 2, 3, 4, 5, 5]));
/* 
Question 32:
Write a function that finds the average of all numbers in an array.
*/
function averageArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
  }
  let average = sum / array.length - 1;
  return average;
}
// console.log(averageArray([1, 2, 3, 4, 5]));
/* 
Question 33:
Write a function that finds the largest number in an array.
*/

function largestInArray(array) {
  let largest = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (largest < element) {
      largest = element;
    }
  }
  return largest;
}
// console.log(largestInArray([1, 213, 13, 3, 1, 3414, 1241, 2]));
/* 
Question 34:
Write a function that finds the smallest number in an array.
*/

function smallestInArray(array) {
  let smallest = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (smallest > element) {
      smallest = element;
    }
  }
  return smallest;
}
// console.log(smallestInArray([12, 121, 1, 31, 31, 31, 31, 3]));
/* 
Question 35:
Write a function that removes duplicate elements from an array.
*/

function duplicateRemove(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        index = j;
        array.splice(index, 1);
      }
    }
  }
  return array;
}
// console.log(duplicateRemove([1, 2, 3, 4, 5, 3, 2, 6]));
/* 
Question 36:
Write a function that checks if an array is sorted in ascending order.
*/

function ascendingArray(array) {
  let isSorted = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      isSorted = false;
    }
  }
  return isSorted;
}
// console.log(ascendingArray([1, 2, 3, 4, 5, 8, 7]));
/* 
Question 37:
Write a function that flattens a nested array.
*/

function flattensArray(array) {
  let flattens = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Array.isArray(element)) {
      for (let j = 0; j < element.length; j++) {
        if (Array.isArray(element[j])) {
          for (let k = 0; k < element[j].length; k++) {
            flattens.push(element[j][k]);
          }
        } else {
          flattens.push(element[j]);
        }
      }
    } else {
      flattens.push(element);
    }
  }
  console.log(flattens);
}

// flattensArray([1, 2, [3, 4], [5, 6, [7, 8]], 9]);

/* 
Question 38:
Write a function that merges two arrays without duplicates.
*/

function mergeArray(array1, array2) {
  let array3 = [...array1, ...array2];
  for (let i = 0; i < array3.length; i++) {
    let index = i;
    for (let j = i + 1; j < array3.length; j++) {
      if (array3[index] === array3[j]) {
        index = j;
        array3.splice(index, 1);
        j--;
      }
    }
  }
  return array3;
}
// console.log(mergeArray([1, 2, 3, 4, 5, 4], [2, 8, 9]));
/* 
Question 39:
Write a function that sorts an array in ascending order.
*/

function ascendingOrder(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let element = array[i];
        array[i] = array[j];
        array[j] = element;
      }
    }
  }
  return array;
}
// console.log(ascendingOrder([9, 8, 6, 7, 3, 5, 3, 1, 4]));
/* 
Question 40:
Write a function that sorts an array in descending order.
*/

function descendingOrder(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let element = array[i];
        array[i] = array[j];
        array[j] = element;
      }
    }
  }
  return array;
}
// console.log(descendingOrder([1, 2, 3, 4, 5, 6]));
/* 
Question 41:
Write a function that finds the index of a specific element in an array.
*/

function findIndex(array) {
  let element = 6;
  let index;
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      index = i;
    }
  }
  return index;
}
// console.log(findIndex([1, 2, 3, 6, 4, 9]));
/* 
Question 42:
Write a function that removes an element from an array at a specific index.
*/

function removeElement(array, index) {
  array.splice(index, 1);
  return array;
}
// console.log(removeElement([10, 20, 30, 40, 50], 2));
/* 
Question 43:
Write a function that removes all occurrences of a specific element from an array.
*/

function occurrenceElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    let index = 0;
    if (element === array[i]) {
      index = i;
      array.splice(index, 1);
      i--;
    }
  }
  return array;
}
// console.log(occurrenceElement([1, 2, 3, 4, 2, 5, 2],2));
/* 
Question 44:
Write a function that checks if an array contains a specific element.
*/

function specificElement(array) {
  let element = 6;
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      console.log(true);
      return;
    }
  }
  console.log(false);
  x;
}
// specificElement([1, 2, 3, 4, 5, 6]);
/* 
Question 45:
Write a function that splits a string into an array of words.
*/
function StringToArray(string) {
  let words = string.split(" ");
  return words;
}
// console.log(StringToArray("Bankai Senbonzakura kageyoshi"));

/* 
Question 46:
Write a function that returns a substring from a string starting at a specific index.
*/

function substring(string, index) {
  return string.slice(index);
}
// console.log(substring("JavaScript is awesome", 4));

/* 
Question 47:
Write a function that checks if an object is empty.
*/

function objectIsEmpty(object) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}
// objectIsEmpty({});
/* 
Question 48:
Write a function that merges two objects into one.
*/
// console.log(copiesObject({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }));
/* 
Question 49:
Write a function that copies the properties of one object to another.
*/
function copiesObject(obj1, obj2) {
  let mergedObject = { ...obj1, ...obj2 };
  return mergedObject;
}
// console.log(copiesObject({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }));
/* 
Question 50:
Write a function that checks if a key exists in an object.
*/

function keyObject(object, key) {
  return object.hasOwnProperty(key);
}
// console.log(keyObject({ a: 1, b: 2 }, "a"));
