/* 
Question 1 : Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

const { NeverDepth, CompressedArrayTexture } = require("three");

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
}
// console.log(twoSum([2, 7, 11, 15], 13));

/* 
Question 2: Is Palindrome 
Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

// function isPalindrome(number) {
//   let string = number.toString();
//   let reverseString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverseString += string[i];
//   }
//   if (reverseString === string) {
//     return true;
//   } else {
//     return false;
//   }
// }
function isPalindrome(number) {
  let string = number.toString();
  let index = string.length - 1;
  for (let i = 0; i <= Math.floor(index / 2); i++) {
    if (string[i] !== string[index - i]) {
      return false;
    }
  }
  return true;
}
// console.log(isPalindrome(122));
/*
Question 3 : Remove duplictes from sorted array . 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

function removeDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array.length;
}
// console.log(removeDuplicates([1, 1, 2]));
/* 
Question 4 : Remove element 
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
function removeElement(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      array.splice(i, 1);
      i--;
    }
  }
  return array.length;
}
// console.log(removeElement([3, 2, 2, 3],3));
/*
Question 5 : Find the index of first occurence of string . 
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/

function occurence(haystack, needle) {
  let index = haystack.indexOf(needle);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
// console.log(occurence("sadbutsad", "sad"));
/*

/* 
Question 7 : Merge sort array 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/
function merge(array1, m, array2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = array1.length - 1;
  while (i >= 0 && j >= 0) {
    if (array1[i] > array2[j]) {
      array1[k] = array1[i];
      i--;
    } else {
      array1[k] = array2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    array1[k] = array2[j];
    j--;
    k--;
  }
  return array1;
}
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
/*
Question 8 : Pascal's Triangle 
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/
function pascalTriangle(number) {
  let triangle = [];
  for (let i = 0; i < number; i++) {
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
    triangle[k] = triangle[k].join(" ");
  }
  console.log(triangle.join("\n"));
}
// pascalTriangle(10);
/*
Question 9 : Pascals Triangle 2 
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/
function pascalTriangleTwo(number) {
  let row = [1];
  for (let i = 1; i <= number; i++) {
    let newRow = [1];
    for (let j = 1; j < row.length; j++) {
      newRow[j] = row[j - 1] + row[j];
    }
    newRow.push(1);
    row = newRow;
  }
  return row;
}
// console.log(pascalTriangleTwo(3));
/*

/* 
Question 11 : Reverse String 
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/
function reverse(array) {
  return array.reverse();
}
// console.log(reverse(["h", "e", "l", "l", "o"]));

/*
Question 12: Reverse string 2
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
Example 1:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
*/

function reverseString(string, k) {
  let result = "";
  for (let i = 0; i < string.length; i += 2 * k) {
    let firstPart = string
      .slice(i, i + k)
      .split("")
      .reverse()
      .join("");
    let secondPart = string.slice(i + k, i + 2 * k);
    result += firstPart + secondPart;
  }
  return result;
}
// console.log(reverseString("abcdefg",2));
/*
Question 13 : Reverse String 3 
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/
function stringReverse(string) {
  let words = string.split(" ");
  let resultArray = [];
  for (let i = 0; i < words.length; i++) {
    resultArray.push(words[i].split("").reverse().join(""));
  }
  let result = resultArray.join(" ");
  return result;
}
// console.log(stringReverse(`Let's take LeetCode contest`));
/*
Question 14 : Find greatest common divisor of number.
Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
Example 1:
Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.
*/

function gcd(array) {
  let largest = array[0];
  let smallest = array[0];
  let number;
  for (let i = 0; i < array.length; i++) {
    if (smallest > array[i]) {
      smallest = array[i];
    }
    if (largest < array[i]) {
      largest = array[i];
    }
  }
  for (let j = 1; j <= smallest && j <= largest; j++) {
    if (smallest % j === 0 && largest % j === 0) {
      number = j;
    }
  }
  return parseInt(number);
}
// console.log(gcd([2, 5, 6, 9, 10]));

/*
Question 15 : Length of last word
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. 
*/

function lastWord(string) {
  let words = string.split(" ");
  let lastWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      lastWord = words[i];
    }
  }
  return lastWord.length;
}
// console.log(lastWord("Hello World"));

/*
Question 16 : Plus One 
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

function addOne(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i] += 1;
    if (array[i] < 10) {
      return array;
    }
    array[i] = 0;
  }
  array.unshift(1);
  return array;
}
// console.log(addOne([9]));
/*
Question 17 :  Sqrt(x)
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
*/
function squareRoot(number) {
  let i = 0;
  while (i * i <= number) {
    i++;
  }
  return i - 1;
}
// console.log(squareRoot(8));
/*
Question 18 : Valid Perfect Square
Given a positive integer num, return true if num is a perfect square or false otherwise.
A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
You must not use any built-in library function, such as sqrt.
Example 1:
Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
*/

function validSquare(number) {
  let i = 1;
  while (i * i <= number) {
    if (i * i === number) {
      return true;
    }
    i++;
  }
  return false;
}
// console.log(validSquare(8));
/*
Question 19: Missing Number 
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Example 1:
Input: nums = [3,0,1]
Output: 2
*/
function missingNumber(array) {
  let n = array.length;
  let totalSum = n * ((n + 1) / 2);
  let arraySum = 0;
  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }
  return totalSum - arraySum;
}

/*
Question 20 : Missing kth number
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
Return the kth positive integer that is missing from this array.
Example 1:
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
*/

function missingKthValue(array, k) {
  let missingArray = [];
  let currentValue = 0;
  let i = 0;
  while (missingArray.length < k) {
    if (array[i] !== currentValue) {
      missingArray.push(currentValue);
    } else {
      i++;
    }
    currentValue++;
  }
  return missingArray[k - 1];
}
function findKthElement(array, k) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2);
    let missing = array[middleIndex] - (middleIndex + 1);
    if (missing < k) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }
  return left + k;
}
// console.log(findKthElement([2, 3, 4, 7, 11], 5));

/*
Question 22 : First Unique Character in String
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.
*/

function firstUniqueCharacterInString(string) {
  let frequency = new Map();
  for (let i = 0; i < string.length; i++) {
    const word = string[i];
    if (frequency.has(word)) {
      frequency.set(word, frequency.get(word) + 1);
    } else {
      frequency.set(word, 1);
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (frequency.get(string[i]) === 1) {
      return i;
    }
  }
  return -1;
}
// console.log(firstUniqueCharacterInString('loveleetcode'))
/*
Question 23 : Moving Zeros
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
function movingZeros(array) {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[index] = array[i];
      index++;
    }
  }
  for (let i = index; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
}
// console.log(movingZeros([0, 1, 0, 3, 12]));
/*
Question 24 : Single Number 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
Example 1:
Input: nums = [4,1,2,1,2]
Output: 4
*/
function singleNumber(array) {
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (count === 1) {
      return array[i];
    }
  }
}
function singleNumberApproach2(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result ^= array[i];
  }
  return result;
}
// console.log(singleNumberApproach2([4, 4, 1, 2, 3, 1, 2]));
// console.log(singleNumber([4, 4, 1, 2, 3, 1, 2]));
/*
Question 25 : Intersection of array 
Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*/
function intersectionofArray(array1, array2) {
  let result = new Set();
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      result.add(array1[i]);
    }
  }
  return [...result];
}
// console.log(intersectionofArray([1, 2, 2, 1], [2, 2]));

/*
Question 26 : Check if two string arrays are equivalent  
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string.
Example 1:
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
*/

function checkString(string1, string2) {
  let var1 = string1.join("");
  let var2 = string2.join("");
  return var1 === var2;
}
// console.log(checkString(["ab", "c"], ["a", "bc"]));

function checkEquivalentString(string1, string2) {
  let temp1 = "";
  let temp2 = "";
  for (let i = 0; i < string1.length; i++) {
    temp1 += string1[i];
  }
  for (let j = 0; j < string2.length; j++) {
    temp2 += string2[j];
  }
  if (temp1.length !== temp2.length) {
    return false;
  }
  for (let k = 0; k < temp1.length; k++) {
    if (temp1[k] !== temp2[k]) {
      return false;
    }
  }
  return true;
}
// console.log(checkEquivalentString(["abc", "d", "defg"], ["abcddefg"]));

/*
Question 27 : Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

function validPalindrome(string) {
  let temp = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = temp.length - 1;
  while (left < right) {
    if (temp[left] !== temp[right]) {
      return false;
    }
    right--;
    left++;
  }
  return true;
}
// console.log(validPalindrome("A man, a plan, a canal: Panama"));

function recursiveValidPalindrome(string) {
  let temp = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  function checkPalindrome(left, right) {
    if (left >= right) {
      return true;
    }
    if (temp[left] !== temp[right]) {
      return false;
    }
    return checkPalindrome(left + 1, right - 1);
  }
  return checkPalindrome(0, temp.length - 1);
}

// console.log(recursiveValidPalindrome("A man, a plan, a canal: Panama"));


/*
Question 28 : Happy Number ; 
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
Example 1:
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1*/

function isHappyNumber(number) {
  let set = new Set();
  while (number !== 1 && !set.has(number)) {
    set.add(number);
    number = number
      .toString()
      .split("")
      .reduce((sum, digit) => sum + digit * digit, 0);
  }
  return number === 1;
}
//console.log(isHappyNumber(19));

/**/
/**/
/**/
