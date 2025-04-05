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

/*
Question 29 : Majority Element
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:
Input: nums = [3,2,3]
Output: 3
*/

function majorityElement(array) {
  let count = {};
  let maxCount = 0;
  let mostFrequent = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!count[element]) {
      count[element] = 0;
    }
    count[element]++;
    if (count[element] > maxCount) {
      maxCount = count[element];
      mostFrequent = element;
    }
  }
  return mostFrequent;
}
//console.log(majorityElement([3, 2, 3]));

/*
Question 30 : Linked List Cycle 
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.
Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

/*
Question 31 : Reverse Linked List 
Given the head of a singly linked list, reverse the list, and return the reversed list.
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
/*
Question 32 : Reverse Linked List
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
Example 1:
Input: head = [1,2,2,1]
Output: true
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let prev = null;
  let current = slow;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  while (prev !== null) {
    if (head.val !== prev.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }
  return true;
};
/*
Question 33 : Intersection of two linked list 
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
For example, the following two linked lists begin to intersect at node c1:
The test cases are generated such that there are no cycles anywhere in the entire linked structure.
Note that the linked lists must retain their original structure after the function returns.
Custom Judge:
The inputs to the judge are given as follows (your program is not given these inputs):
intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.
Example 1:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  function size(head) {
    let count = 0;
    let current = head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  let size1 = size(headA);
  let size2 = size(headB);
  let difference = Math.abs(size1 - size2);
  let longer;
  let shorter;

  if (size1 > size2) {
    longer = headA;
    shorter = headB;
  } else {
    shorter = headA;
    longer = headB;
  }
  for (let i = 0; i < difference; i++) {
    longer = longer.next;
  }
  while (longer !== null && shorter !== null) {
    if (longer === shorter) {
      return longer;
    }
    longer = longer.next;
    shorter = shorter.next;
  }
  return null;
};
/*
Question 34 : Remove linked list items
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
*/

/*
Question 35 : Middle of linked list
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

/*
Question 36 : Remove duplicates from sorted linked list
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Example 1:
Input: head = [1,1,2]
Output: [1,2]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
/*
Question 37 - Merge two sorted linked list
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4] 
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let point1 = list1;
  let point2 = list2;

  while (point1 !== null && point2 !== null) {
    if (point1.val < point2.val) {
      current.next = point1;
      point1 = point1.next;
    } else {
      current.next = point2;
      point2 = point2.next;
    }
    current = current.next;
  }
  if (point1 !== null) {
    current.next = point1;
  } else {
    current.next = point2;
  }
  return dummy.next;
};
/*
Question 39 : Convert binary number in a linked list to integer 
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
Return the decimal value of the number in the linked list.
The most significant bit is at the head of the linked list.
Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let current = head;
  let result = 0;
  while (current !== null) {
    result = result * 2 + current.val;
    current = current.next;
  }
  return result;
};
/*
Question 40 : Next greater element 1
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let greaterElementMap = new Map();

  for (let number of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < number) {
      greaterElementMap.set(stack.pop(), number);
    }
    stack.push(number);
  }
  return nums1((number) => greaterElementMap.get(number) || -1);
};

/*
Question 41 : Design Circular Deque
 
*/
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.front = -1;
  this.rear = -1;
  this.queue = new Array(k);
  this.limit = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) {
    this.front = 0;
    this.rear = 0;
  } else {
    this.front = (this.front - 1 + this.limit) % this.limit;
  }
  this.queue[this.front] = value;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) {
    this.front = 0;
    this.rear = 0;
  } else {
    this.rear = (this.rear + 1) % this.limit;
  }
  this.queue[this.rear] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;
  if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
  } else {
    this.front = (this.front + 1) % this.limit;
  }
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;
  if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
  } else {
    this.rear = (this.rear - 1 + this.limit) % this.limit;
  }
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;
  else return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  else return this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.front === -1;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return (this.rear + 1) % this.limit === this.front;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 **/

/*
Question 42: Implement Stack using queue
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
Implement the MyStack class:
void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:
You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
Example 1:
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]
*/
var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.q1.length === 0) return -1; // Fix: Return -1 instead of null
  while (this.q1.length > 1) this.q2.push(this.q1.shift());
  let removedElement = this.q1.shift();
  [this.q1, this.q2] = [this.q2, this.q1]; // Swap queues
  return removedElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.q1.length === 0) return -1; // Fix: Return -1 instead of null
  while (this.q1.length > 1) this.q2.push(this.q1.shift());
  let firstElement = this.q1[0];
  this.q2.push(this.q1.shift()); // Push the top element back
  [this.q1, this.q2] = [this.q2, this.q1]; // Swap queues
  return firstElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0; // Fix: Check q1 instead of q2
};

/*
Question 42 : Implement Queue Using Stacks 
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
Implement the MyQueue class:
void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:
You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
Example 1:
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]
Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return falseImplement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
Implement the MyQueue class:
void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:
You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
Example 1:
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]
Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
*/

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }

  if (this.s2.length === 0) {
    return -1;
  }

  return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }
  if (this.s2.length === 0) {
    return -1;
  }
  return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/*
Question 43 : Number of recent calls
You have a RecentCounter class which counts the number of recent requests within a certain time frame.
Implement the RecentCounter class:
RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.
Example 1:
Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output
[null, 1, 2, 3, 3]
Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
*/

var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

/*
Question 44 : Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Example 1:
Input: s = "()"
Output: true
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      let poppedElement = stack.pop();
      if (
        (poppedElement === "(" && s[i] !== ")") ||
        (poppedElement === "{" && s[i] !== "}") ||
        (poppedElement === "[" && s[i] !== "]")
      )
        return false;
    }
  }
  return stack.length === 0;
};

/*
Question 44 : Find if path exists in Graph 
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
You want to determine if there is a valid path that exists from vertex source to vertex destination.
Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
Example 1:
Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  function conversionAdjacent(edges) {
    let graph = {};

    edges.forEach(([u, v]) => {
      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];

      graph[u].push(v);
      graph[v].push(u);
    });
    return graph;
  }
  const depthFirst = (graph, src, destination, visited) => {
    if (src === destination) return true;
    visited[src] = true;
    for (let neighbour of graph[src] || []) {
      if (!visited[neighbour]) {
        if (depthFirst(graph, neighbour, destination, visited)) return true;
      }
    }
    return false;
  };
  const graph = conversionAdjacent(edges);
  const visited = new Array(n).fill(false);
  return depthFirst(graph, source, destination, visited);
};

/*
Question 45 : Island Perimeter
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
Example 1:
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let result = 0;
  let visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1 && !visited.has(`${r},${c}`)) {
        result += explore(grid, r, c, visited);
      }
    }
  }
  return result;

  function explore(grid, r, c, visited) {
    const validRow = r >= 0 && r < grid.length;
    const validCol = c >= 0 && c < grid[0].length;

    if (!validRow || !validCol) return 1;

    if (grid[r][c] === 0) return 1;

    const pos = `${r},${c}`;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    let result = 0;

    result += explore(grid, r + 1, c, visited);
    result += explore(grid, r - 1, c, visited);
    result += explore(grid, r, c + 1, visited);
    result += explore(grid, r, c - 1, visited);

    return result;
  }
};
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
