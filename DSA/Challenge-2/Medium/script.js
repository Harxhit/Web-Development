/* 
Question 51: 
Delete a specific key from an object
Input: { a: 1, b: 2, c: 3 }, "b"
Output: { a: 1, c: 3 }
*/

/* 
Question 52: 
Count the number of keys in an object
Input: { a: 1, b: 2, c: 3 }
Output: 3
*/

/* 
Question 53: 
Return an array of keys from an object
Input: { a: 1, b: 2, c: 3 }
Output: ["a", "b", "c"]
*/

/* 
Question 54: 
Return an array of values from an object
Input: { a: 1, b: 2, c: 3 }
Output: [1, 2, 3]
*/

/* 
Question 55: 
Merge two arrays into an object with the elements of the first array as keys and elements of the second as values
Input: ["a", "b", "c"], [1, 2, 3]
Output: { a: 1, b: 2, c: 3 }
*/

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

/* 
Question 58: 
Return the sum of all the values in an object
Input: { a: 1, b: 2, c: 3 }
Output: 6
*/

/* 
Question 59: 
Find the maximum value in an array of objects based on a specific property
Input: [{ value: 1 }, { value: 3 }, { value: 2 }]
Output: 3
*/

/* 
Question 60: 
Filter an array of objects by a specific property
Input: [{ name: "John" }, { name: "Jane" }, { name: "Jack" }], "name"
Output: [{ name: "John" }, { name: "Jane" }]
*/

/* 
Question 61: 
Group an array of objects by a specific property
Input: [{ category: "fruit", name: "apple" }, { category: "fruit", name: "banana" }, { category: "vegetable", name: "carrot" }]
Output: { fruit: [{ name: "apple" }, { name: "banana" }], vegetable: [{ name: "carrot" }] }
*/

/* 
Question 62: 
Find the most frequent item in an array
Input: [1, 2, 2, 3, 3, 3, 4]
Output: 3
*/

/* 
Question 63: 
Check if a string starts with a specific character
Input: "hello", "h"
Output: true
*/

/* 
Question 64: 
Check if a string ends with a specific character
Input: "hello", "o"
Output: true
*/

/* 
Question 65: 
Replace all occurrences of a character in a string
Input: "hello", "l", "x"
Output: "hexxo"
*/

/* 
Question 66: 
Count how many times a specific character appears in a string
Input: "hello", "l"
Output: 2
*/

/* 
Question 67: 
Reverse the order of elements in an array
Input: [1, 2, 3, 4]
Output: [4, 3, 2, 1]
*/

/* 
Question 68: 
Find the index of the first occurrence of a specific element in an array
Input: [1, 2, 3, 4], 3
Output: 2
*/

/* 
Question 69: 
Check if a given string is a valid palindrome by ignoring non-alphanumeric characters
Input: "A man, a plan, a canal, Panama"
Output: true
*/

/* 
Question 70: 
Check if a number is a perfect square
Input: 16
Output: true
*/

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

/* 
Question 76: 
Detect cycles in a linked list
Input: LinkedList(1 -> 2 -> 3 -> 4 -> 5 -> 2)
Output: true
*/

/* 
Question 77: 
Implement a stack data structure
Input: push(1), push(2), pop()
Output: 2
*/

/* 
Question 78: 
Implement a queue data structure
Input: enqueue(1), enqueue(2), dequeue()
Output: 1
*/

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
