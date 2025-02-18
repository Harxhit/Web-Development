/* 
Question 51: 
Delete a specific key from an object
Input: { a: 1, b: 2, c: 3 }, "b"
Output: { a: 1, c: 3 }
*/

function deleteSpecificKeyFromObject(object, key) {
  delete object[key];
  return object;
}
//console.log(deleteSpecificKeyFromObject({ a: 1, b: 2, c: 3 }, "b"));

/* 
Question 52: 
Count the number of keys in an object
Input: { a: 1, b: 2, c: 3 }
Output: 3
*/

function countKeys(object) {
  let count = 0;
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      count++;
    }
  }
  return count;
}
//console.log(countKeys({ a: 1, b: 2, c: 3 }));
/* 
Question 53: 
Return an array of keys from an object
Input: { a: 1, b: 2, c: 3 }
Output: ["a", "b", "c"]
*/

function arrayOfKeys(object) {
  let array = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = key;
      array.push(element);
    }
  }
  return array;
}
//console.log(arrayOfKeys({ a: 1, b: 2, c: 3 }));

/* 
Question 54: 
Return an array of values from an object
Input: { a: 1, b: 2, c: 3 }
Output: [1, 2, 3]
*/

function arrayOfValue(object) {
  let array = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = object[key];
      array.push(element);
    }
  }
  return array;
}
//console.log(arrayOfValue({ a: 1, b: 2, c: 3 }));

/* 
Question 55: 
Merge two arrays into an object with the elements of the first array as keys and elements of the second as values
Input: ["a", "b", "c"], [1, 2, 3]
Output: { a: 1, b: 2, c: 3 }
*/

function meregeTwoArraysIntoObject(keys, value) {
  const object = {};
  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = value[i];
  }
  return object;
}
//console.log(meregeTwoArraysIntoObject(["a", "b", "c"], [1, 2, 3]));

/* 
Question 56: 
Compare two arrays and return true if they are equal
Input: [1, 2, 3], [1, 2, 3]
Output: true
*/

function compareArray(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
// console.log(compareArray([1, 2, 3], [6]));
/* 
Question 57: 
  Compare two objects and return true if they are equal
Input: { a: 1, b: 2 }, { a: 1, b: 2 }
Output: true
*/

function equalObject(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let key in key1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
//console.log(equalObject({ a: 1, b: 2 }, { a: 1, b: 2 }));
/* 
Question 58: 
Return the sum of all the values in an object
Input: { a: 1, b: 2, c: 3 }
Output: 6
*/

function sumOfValue(object) {
  let sum = 0;
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = object[key];
      sum += element;
    }
  }
  return sum;
}
//console.log(sumOfValue({ a: 1, b: 2, c: 3 }));

/* 
Question 59: 
Find the maximum value in an array of objects based on a specific property
Input: [{ value: 1 }, { value: 3 }, { value: 2 }]
Output: 3
*/

function maximumValue(array, key) {
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] > max) {
      max = array[i][key];
    }
  }
  return max;
}
//console.log(maximumValue([{ value: 1 }, { value: 3 }, { value: 2 }], "value"));
/* 
Question 60: 
Filter an array of objects by a specific property
Input: [{ name: "John" }, { name: "Jane" }, { name: "Jack" }], "name"
Output: [{ name: "John" }, { name: "Jane" }]
*/

function filterObject(array, key) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][key]) {
      result.push(array[i]);
    }
  }
  return result;
}
// console.log(
//   filterObject([{ name: "John" }, { name: "Jane" }, { name: "Jack" }], "name")
// );

/* 
Question 61: 
Group an array of objects by a specific property
Input: [{ category: "fruit", name: "apple" }, { category: "fruit", name: "banana" }, { category: "vegetable", name: "carrot" }]
Output: { fruit: [{ name: "apple" }, { name: "banana" }], vegetable: [{ name: "carrot" }] }
*/

// function groupObject(array) {
//   let result = [];

// }

/* 
Question 62: 
Find the most frequent item in an array
Input: [1, 2, 2, 3, 3, 3, 4]
Output: 3
*/

function mostFrequent(array) {
  let maxCount = 0;
  let mostFrequent = array[0];
  let count = {};
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
//console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
/* 
Question 63: 
Check if a string starts with a specific character
Input: "hello", "h"
Output: true
*/

function checkStringStartWithSpecificCharacter(string, char) {
  let firstChar = string[0];
  if (firstChar !== char) {
    return false;
  }
  return true;
}
//console.log(checkStringStartWithSpecificCharacter("hello", "h"));
/* 
Question 64: 
Check if a string ends with a specific character
Input: "hello", "o"
Output: true
*/

function checkStringEndsWithSpecificCharacter(string, char) {
  return string[string.length - 1] === char;
}
//console.log(checkStringEndsWithSpecificCharacter("hello", "o"));

/* 
Question 65: 
Replace all occurrences of a character in a string
Input: "hello", "l", "x"
Output: "hexxo"
*/

function replaceOccurence(string, char1, replaceChar) {
  let resultString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char1) {
      resultString += replaceChar;
    } else {
      resultString += string[i];
    }
  }
  return resultString;
}
//console.log(replaceOccurence("hello", "l", "x"));

function characterReplace(string, char, replaceChar) {
  return string.split(char).join(replaceChar);
}
//console.log(characterReplace("hello", "l", "x"));
/* 
Question 66: 
Count how many times a specific character appears in a string
Input: "hello", "l"
Output: 2
*/

function specificCharacterApperance(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}
//console.log(specificCharacterApperance("hello", "l"));
/* 
Question 67: 
Reverse the order of elements in an array
Input: [1, 2, 3, 4]
Output: [4, 3, 2, 1]
*/

function revereseOrder(array) {
  return array.reverse();
}
//console.log(revereseOrder([1, 2, 3, 4]));
function revereseOrderLoops(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++;
    right--;
  }
  return array;
}
//console.log(revereseOrderLoops([1, 2, 3, 4]));

/* 
Question 68: 
Find the index of the first occurrence of a specific element in an array
Input: [1, 2, 3, 4], 3
Output: 2
*/

function findOccurence(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
}
//console.log(findOccurence([1, 2, 3, 4], 3));
//We can also do this using binary,jump etc for more better time complexbility.

/* 
Question 69: 
Check if a given string is a valid palindrome by ignoring non-alphanumeric characters
Input: "A man, a plan, a canal, Panama"
Output: true
*/

function validPalindrome(string) {
  let combineString = string.toLowerCase().replace(/[a-z0-9]/g, "");
  let left = 0;
  let right = combineString.length - 1;
  while (left < right) {
    if (combineString[left] !== combineString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
//console.log(validPalindrome("A man, a plan, a canal, Panama"));
/* 
Question 70: 
Check if a number is a perfect square
Input: 16
Output: true
*/

function checkPerfectSqaure(number) {
  let i = 1;
  while (i * i <= number) {
    if (i * i === number) {
      return true;
    }
    i++;
  }
  return false;
}
//console.log(checkPerfectSqaure(16));
/* 
Question 71: 
Generate the power set (all subsets) of a given array
Input: [1, 2]
Output: [[], [1], [2], [1, 2]]
*/

/* 
Question 72: 
Find the longest common subsequence between two strings
Input: "abc", "ac"
Output: "ac"
*/

/* 
Question 73: 
Implement the quicksort algorithm
Input: [3, 1, 4, 1, 5, 9, 2]
Output: [1, 1, 2, 3, 4, 5, 9]
*/

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
//console.log(quickSort([3, 1, 4, 1, 5, 9, 2]));
/* 
Question 74: 
Simulate the `bind()` method in JavaScript
Input: function(a, b) { return a + b }, 1, 2
Output: 3
*/

/* 
Question 75: 
Implement the merge sort algorithm
Input: [3, 1, 4, 1, 5, 9, 2]
Output: [1, 1, 2, 3, 4, 5, 9]
*/

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let i = 0,
    j = 0;
  let result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}
//console.log(mergeSort([3, 1, 4, 1, 5, 9, 2]));

/* 
Question 76: 
Detect cycles in a linked list
Input: LinkedList(1 -> 2 -> 3 -> 4 -> 5 -> 2)
Output: true
*/

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);
let fifth = new ListNode(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = second;

//console.log(hasCycle(head));

/* 
Question 77: 
Implement a stack data structure
Input: push(1), push(2), pop()
Output: 2
*/

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.size() - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
//console.log(stack.size());
//console.log(stack.peek());
//console.log(stack.isEmpty());

/* 
Question 78: 
Implement a queue data structure
Input: enqueue(1), enqueue(2), dequeue()
Output: 1
*/

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  clear() {
    return (this.items = []);
  }

  print() {
    console.log(this.items.join("->"));
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
//queue.print();

/* 
Question 79: 
Flatten a deeply nested array (with arbitrary depth)
Input: [1, [2, [3, 4], 5], 6]
Output: [1, 2, 3, 4, 5, 6]
*/

/* 
Question 80: 
Implement a depth-first search (DFS) on a graph
Input: Graph: { a: [b, c], b: [d], c: [d], d: [] }, "a"
Output: [a, b, d, c]
*/

/* 
Question 81: 
Implement a breadth-first search (BFS) on a graph
Input: Graph: { a: [b, c], b: [d], c: [d], d: [] }, "a"
Output: [a, b, c, d]
*/

/* 
Question 82: 
Find the shortest path in a weighted graph using Dijkstra's algorithm
Input: Graph: { a: { b: 1, c: 4 }, b: { c: 2 }, c: { d: 1 }, d: {} }, "a", "d"
Output: [a, b, c, d]
*/

/* 
Question 83: 
Implement a binary search algorithm
Input: [1, 2, 3, 4, 5], 3
Output: 2
*/

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === target) return middle;
    else if (target < middle) left = middle - 1;
    else return (right = middle + 1);
  }
  return -1;
}
//console.log(binarySearch([1, 2, 3, 4, 5], 3));

/* 
Question 84: 
Implement a hash table
Input: put("key", "value"), get("key")
Output: "value"
*/

/* 
Question 85: 
Validate a given Sudoku puzzle
Input: [[5, 3, 0, 0, 7, 0, 0, 0, 0], ...]
Output: true
*/

/* 
Question 86: 
Implement a circular linked list
Input: LinkedList(1 -> 2 -> 3 -> 1)
Output: true
*/

/* 
Question 87: 
Implement a binary search tree
Input: insert(5), insert(3), insert(7), search(3)
Output: true
*/

/* 
Question 88: 
Find the median of two sorted arrays
Input: [1, 3], [2]
Output: 2
*/

/* 
Question 89: 
Solve the N-Queens problem
Input: 4
Output: [[".Q..", "...Q", "Q...", "..Q."]]
*/

/* 
Question 90: 
Implement the topological sort algorithm
Input: [[1, 2], [1, 3], [3, 4]]
Output: [1, 3, 2, 4]
*/

/* 
Question 91: 
Solve the knapsack problem using dynamic programming
Input: values: [60, 100, 120], weights: [10, 20, 30], capacity: 50
Output: 220
*/

/* 
Question 92: 
Implement a trie (prefix tree)
Input: insert("apple"), search("app")
Output: true
*/

/* 
Question 93: 
Detect if a string is an anagram of a palindrome
Input: "civic"
Output: true
*/

/* 
Question 94: 
Generate all permutations of a string
Input: "abc"
Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
*/

/* 
Question 95: 
Find the longest increasing subsequence in an array
Input: [10, 9, 2, 5, 3, 7, 101, 18]
Output: [2, 3, 7, 101]
*/

/* 
Question 96: 
Implement a depth-first search on a binary tree
Input: root = { value: 1, left: { value: 2 }, right: { value: 3 } }
Output: [1, 2, 3]
*/

/* 
Question 97: 
Implement the Floyd-Warshall algorithm
Input: Graph: [[0, 3, INF], [INF, 0, 1], [INF, INF, 0]]
Output: [[0, 3, 4], [INF, 0, 1], [INF, INF, 0]]
*/

/* 
Question 98: 
Find the maximum subarray sum in an array using Kadane's algorithm
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
*/

/* 
Question 99: 
Implement a heap data structure
Input: insert(10), insert(20), extractMax()
Output: 20
*/

/* 
Question 100: 
Detect if a number is a happy number
Input: 19
Output: true
*/

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
