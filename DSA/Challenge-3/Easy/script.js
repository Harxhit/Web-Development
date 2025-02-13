/* Question - 1 => Find the factorial of a number. Input: n = 5, Output: 120 */

function factorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

const n = factorial(5);
// console.log(n);

/* Question - 2 => Compute the nth Fibonacci number. Input: n = 6, Output: 8 */

function fibonacci(number) {
  if (number <= 1) {
    return number;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}
const num = fibonacci(6);
// console.log(num);

/* Question - 3 => Reverse a string using recursion. Input: "hello", 
Output: "olleh"*/

function reverseString(string) {
  if (string.length == 0) {
    return "";
  }
  return reverseString(string.substring(1)) + string[0];
}
const string = reverseString("hello");
// console.log(string);

/* Question - 4 => Calculate sum of digits of a number. Input: 123, Output: 6 */

function sumOfDigit(number) {
  if (number === 0) {
    return 0;
  }
  return (number % 10) + sumOfDigit(Math.floor(number / 10));
}
const sum = sumOfDigit(1234);
// console.log(sum);

/* Question - 5 => Find the Greatest Common Divisor (GCD). Input: (48, 18), 
Output: 6 
*/

/* Question - 6 => Print numbers from 1 to n. Input: n = 5, Output: 1 2 3 4 5 */

function printNumber(number, start = 1) {
  if (start > number) {
    return;
  }
  // console.log(start);
  return printNumber(number, start + 1);
}
const print = printNumber(5);
// console.log(print);
/* Question - 7 => Print numbers from n to 1. Input: n = 5, Output: 5 4 3 2 1 */

function reverseN(number) {
  if (number === 1) {
    return number;
  }
  // console.log(number);
  return reverseN(number - 1);
}
const reversePrint = reverseN(5);
// console.log(reversePrint);

/* Question - 8 => Check if a number is prime using recursion. Input: n = 7, Output: true */

function checkPrime(number, divisor = 2) {
  if (number < divisor) {
    return false;
  }
  if (divisor * divisor > number) {
    return true;
  }
  if (number % divisor === 0) {
    return false;
  }
  return checkPrime(number, divisor + 1);
}

const number = checkPrime(7);
// console.log(number);

/* Question - 9 => Convert a number to binary using recursion. Input: n = 10, Output: "1010" */

/* Question - 10 => Count the number of digits in an integer. Input: 5432, Output: 4 */

function countDigits(number) {
  if (number === 0) {
    return 0;
  }
  return 1 + countDigits(Math.floor(number / 10));
}
const digit = countDigits(123456);
// console.log(digit);

/* Question - 11 => Compute power of a number (x^n). Input: (2, 5), Output: 32 */

function computePower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent === 1) {
    return base;
  }
  let num = computePower(base, Math.floor(exponent / 2));
  if (exponent % 2 === 0) {
    return num * num;
  } else {
    return base * num * num;
  }
}
const exponent = computePower(2, 5);
// console.log(exponent);

/* Question - 12 => Print an array using recursion. Input: [1,2,3,4], 
Output: 1 2 3 4 
*/

function printArray(array, index = 0) {
  if (index === array.length) {
    return;
  }
  console.log(array[index]);
  return printArray(array, index + 1);
}
const array = [1, 2, 3, 4];
// printArray(array);

/* Question - 13 => Check if a string is a palindrome. Input: "racecar", Output: true */

function checkPalindrome(str, leftIndex = 0, rightIndex = string.length - 1) {
  if (left >= right) {
    return true;
  }
  if (str[left] !== str[right]) {
    return false;
  }
  return checkPalindrome(str, left + 1, right - 1);
}
// console.log(checkPalindrome("racecar"));

/* Question - 14 => Find the nth triangular number. Input: n = 4, Output: 10 */

function nthTriangular(number) {
  if (number === 1) {
    return 1;
  }
  return number + nthTriangular(number - 1);
}
const nthTerm = nthTriangular(4);
// console.log(nthTerm);

/* Question - 15 => Find the product of two numbers using recursion. Input: (3, 4), Output: 12 */

function productOfTwo(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }
  return num1 + productOfTwo(num1, num2 - 1);
}
const product = productOfTwo(3, 4);
// console.log(product);

/* Question - 16 => Print even numbers up to n. Input: n = 10, Output: 2 4 6 8 10 */

function evenNumber(number) {
  if (number <= 0) {
    return 0;
  }
  console.log(number);
  return evenNumber(number - 2);
}
// console.log(evenNumber(10));

/* Question - 17 => Print odd numbers up to n. Input: n = 9, Output: 1 3 5 7 9 */

function oddNumber(number) {
  if (number < 0) {
    return;
  }
  console.log(number);
  return oddNumber(number - 2);
}
// console.log(oddNumber(9));

/* Question - 18 => Find the sum of an array. Input: [1,2,3,4], Output: 10 */

function sumArray(array, index = 0) {
  if (index == array.length) {
    return 0;
  }
  return array[index] + sumArray(array, index + 1);
}
// console.log(sumArray([1, 2, 3, 4, 5, 6 ]));

/* Question - 19 => Find the maximum element in an array. Input: [1,5,3,9,2]
Output: 9 */

function maximumElement(array, index = 0) {
  if (index == array.length) {
    return -Infinity;
  }
  return Math.max(array[index], maximumElement(array, index + 1));
}
// console.log(maximumElement([1, 5, 3, 9, 2]));

/* Question - 20 => Find the minimum element in an array. Input: [1,5,3,9,2], Output: 1 */

function minimumElement(array, index = 0) {
  if (index === array.length) {
    return Infinity;
  }
  return Math.min(array[index], minimumElement(array, index + 1));
}
// console.log(minimumElement([1, 5, 3, 9, 2]));

/* Question - 21 => Compute sum of first n natural numbers. Input: n = 5, 
Output: 15 */

function sumOfNatural(number) {
  if (number == 0) {
    return 0;
  }
  return number + sumOfNatural(number - 1);
}
// console.log(sumOfNatural(5));

/* Question - 22 => Print the elements of a linked list using recursion. Input: [1,2,3], Output: 1 2 3 */

function printLinkedList(array, index = 0) {
  if (index === array.length) {
    return;
  }
  console.log(array[index]);
  printLinkedList(array, index + 1);
}
// printLinkedList([1, 2, 3]);

/* Question - 23 => Compute the sum of squares of first n numbers. Input: n = 3, Output: 14 */

function squareOfNth(number) {
  if (number === 0) {
    return 0;
  }
  return number * number + squareOfNth(number - 1);
}
// console.log(squareOfNth(3));

/* Question - 24 => Count occurrences of a digit in a number. Input: (76773, 7), Output: 3 */

function occurenceOfNumber(number, digit) {
  if (number == 0) {
    return 0;
  }
  let count = 0;
  if (number % 10 === digit) {
    count = 1;
  }
  return count + occurenceOfNumber(Math.floor(number / 10), digit);
}
// console.log(occurenceOfNumber(76773, 7));

/* Question - 25 => Convert a string to uppercase using recursion. Input: "hello", Output: "HELLO" */

/* Question - 26 => Find the sum of even numbers up to n. Input: n = 6, Output: 12 */

function sumOfEvenNth(number) {
  if (number < 0) {
    return 0;
  }
  return number + sumOfEvenNth(number - 2);
}
// console.log(sumOfEvenNth(6));

/* Question - 27 => Find the sum of odd numbers up to n. Input: n = 5, Output: 9 */

function sumOfOddNth(number) {
  if (number < 0) {
    return 0;
  }
  return number + sumOfOddNth(number - 2);
}
// console.log(sumOfOddNth(5));

/* Question - 28 => Find the HCF of two numbers. Input: (15, 25), Output: 5 */

function hcf(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return hcf(num2, num1 % num2);
}
// console.log(hcf(15, 25));

/* Question - 29 => Check if an array is sorted. Input: [1,2,3,4], Output: true */

function checkSortedArray(array, index = 0) {
  if (index === array.length - 1) {
    return true;
  }
  if (array[index] > array[index + 1]) {
    return false;
  }
  return checkSortedArray(array, index + 1);
}
// console.log(checkSortedArray([1, 2, 3, 4, 9, 8]));

/* Question - 30 => Find the nth term in a geometric series. Input: (a=2, r=3, n=4), Output: 54 */

function geometricSeries(a, r, n) {
  if (n === 1) {
    return a;
  }
  return r * geometricSeries(a, r, n - 1);
}
// console.log(geometricSeries(2, 3, 4));

/* Question - 31 => Print a pattern using recursion. Input: n = 3, Output:
 ***
 **
 *
 */

function pattern(number) {
  if (number === 0) {
    return "";
  }
  console.log("*".repeat(number));
  return pattern(number - 1);
}
// console.log(pattern(3));

/* Question - 32 => Reverse an array using recursion. Input: [1,2,3,4], 
Output: [4,3,2,1]
*/

function reverseArray(array, left = 0) {
  let right = array.length - 1 - left;
  while (left >= right) {
    return array;
  }
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
  return reverseArray(array, left + 1);
}
// console.log(reverseArray([1, 2, 3, 4]));

function reverseArrayWithoutSwapping(
  array,
  result = [],
  index = array.length - 1
) {
  if (index < 0) {
    return result;
  }
  result.push(array[index]);
  return reverseArrayWithoutSwapping(array, result, index - 1);
}
// console.log(reverseArrayWithoutSwapping([1, 2, 3, 4]));

/* Question - 33 => Convert a number to a string using recursion. Input: 123, Output: "123" */

/* Question - 34 => Find the nth term of an arithmetic series. Input: (a=3, d=2, n=5), Output: 11 */

/* Question - 35 => Remove vowels from a string using recursion. Input: "hello", Output: "hll" */

function removeVowels(string, index = 0) {
  if (index == string.length) {
    return "";
  }
  const currentChar = string[index];
  const restOfString = removeVowels(string, index + 1);
  if ("AEIOUaeiou".includes(currentChar)) {
    return restOfString;
  } else {
    return currentChar + restOfString;
  }
}
// console.log(removeVowels("hello"));

/* Question - 36 => Count vowels in a string using recursion. Input: "hello", Output: 2 */

function countVowels(string, index = 0, count = 0) {
  if (index === string.length) {
    return count;
  }
  const currentChar = string[index];
  if ("AEIOUaeiou".includes(currentChar)) {
    return countVowels(string, index + 1, count + 1);
  } else {
    return countVowels(string, index + 1, count);
  }
}
// console.log(countVowels("hello"));

/* Question - 37 => Replace all spaces in a string with underscores. Input: "hello world", Output: "hello_world" */

/* Question - 38 => Find the number of trailing zeros in factorial of n. Input: 10, Output: 2 */

/* Question - 39 => Merge two sorted arrays using recursion. Input: ([1,3,5], [2,4,6]), Output: [1,2,3,4,5,6] */

/* Question - 40 => Find the LCM of two numbers. Input: (4, 6), Output: 12 */

/* Question - 41 => Count consonants in a string. Input: "hello", Output: 3 */

/* Question - 42 => Print the nth row of Pascal’s Triangle. Input: n = 4, Output: [1,4,6,4,1] */

/* Question - 43 => Remove duplicates from a string using recursion. Input: "banana", Output: "ban" */

function removeDuplicates(string, index = 0) {
  if (index == string.length) {
    return "";
  }
  const currentChar = string[index];
  const restOfString = removeDuplicates(string, index + 1);
  if (restOfString.includes(currentChar)) {
    return restOfString;
  } else {
    return currentChar + restOfString;
  }
}
// console.log(removeDuplicates("banana"));

/* Question - 44 => Find the sum of first n even numbers. Input: n = 4, Output: 20 */

/* Question - 45 => Find the sum of first n odd numbers. Input: n = 4, Output: 16 */

/* Question - 46 => Find the length of a linked list using recursion. Input: [1,2,3,4], Output: 4 */

/* Question - 47 => Find the median of an array using recursion. Input: [1,3,4,2,5], Output: 3 */

/* Question - 48 => Implement binary search using recursion. Input: ([1,2,3,4,5], 3), Output: 2 */

/* Question - 49 => Print a string multiple times using recursion. Input: ("hello", 3), Output: "hello hello hello" */

/* Question - 50 => Find the number of ways to climb n stairs (1 or 2 steps at a time). Input: n = 3, Output: 3 */
