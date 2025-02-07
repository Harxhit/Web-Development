/* 
Question 101:
Write a program to generate the power set (all subsets) of a given array.

Example:
Input: [1, 2, 3]
Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
*/
let array = [1, 2, 3];
array.reverse;
let powerSet = [[]];

for (let i = 0; i < array.length; i++) {
  let element = array[i];
  let subSet = [];
  for (let j = 0; j < powerSet.length; j++) {
    let temp = [...powerSet[j], element];
    subSet.push(temp);
  }
  powerSet = [...powerSet, ...subSet];
}
// console.log(powerSet);
/* 
Question 102:
Write a program to find the longest common subsequence between two strings.

Example:
Input: "abcde", "ace"
Output: "ace"
*/

/* 
Question 103:
Create a program to implement the quicksort algorithm.

Example:
Input: [3, 6, 8, 10, 1, 2, 1]
Output: [1, 1, 2, 3, 6, 8, 10]
*/

/* 
Question 104:
Write a program to simulate the behavior of the `bind()` method without using functions.

Example:
Input: Object: {a: 1}, Method: printA
Output: Successfully bound the method to the object.
*/

/* 
Question 105:
Write a program that implements the merge sort algorithm.

Example:
Input: [38, 27, 43, 3, 9, 82, 10]
Output: [3, 9, 10, 27, 38, 43, 82]
*/

/* 
Question 106:
Write a program to detect cycles in a linked list.

Example:
Input: LinkedList: [3, 2, 0, -4], Cycle: Position 1
Output: true
*/

/* 
Question 107:
Create a program to implement a stack data structure.

Example:
Input: Push(1), Push(2), Pop(), Top()
Output: 1
*/

/* 
Question 108:
Write a program to implement a queue data structure.

Example:
Input: Enqueue(5), Enqueue(10), Dequeue(), Front()
Output: 10
*/

/* 
Question 109:
Create a program to flatten a deeply nested array (with arbitrary depth) using loops.

Example:
Input: [1, [2, [3, [4, 5]]]]
Output: [1, 2, 3, 4, 5]
*/

/* 
Question 110:
Write a program to check if a given string is a valid palindrome by ignoring non-alphanumeric characters.

Example:
Input: "A man, a plan, a canal: Panama"
Output: true
*/

/* 
Question 111:
Write a program to implement a depth-first search (DFS) on a graph.

Example:
Input: Graph: {0: [1, 2], 1: [2], 2: [3], 3: []}, Start: 0
Output: [0, 1, 2, 3]
*/

/* 
Question 112:
Write a program to implement a breadth-first search (BFS) on a graph.

Example:
Input: Graph: {0: [1, 2], 1: [2], 2: [3], 3: []}, Start: 0
Output: [0, 1, 2, 3]
*/

/* 
Question 113:
Write a program that finds the shortest path in a weighted graph using Dijkstra's algorithm.

Example:
Input: Graph: [[0, 1, 4], [0, 2, 1], [2, 1, 2], [1, 3, 1]], Start: 0, End: 3
Output: 4
*/

/* 
Question 114:
Create a program to implement a binary search algorithm.

Example:
Input: [1, 2, 3, 4, 5, 6], Target: 4
Output: 3
*/

/* 
Question 115:
Write a program to implement a hash table in JavaScript.

Example:
Input: Insert("key1", "value1"), Insert("key2", "value2"), Get("key1")
Output: "value1"
*/

/* 
Question 116:
Write a program that validates a given Sudoku puzzle.

Example:
Input: Board: [
 ["5","3",".",".","7",".",".",".","."],
 ["6",".",".","1","9","5",".",".","."],
 [".","9","8",".",".",".",".","6","."],
 ["8",".",".",".","6",".",".",".","3"],
 ["4",".",".","8",".","3",".",".","1"],
 ["7",".",".",".","2",".",".",".","6"],
 [".","6",".",".",".",".","2","8","."],
 [".",".",".","4","1","9",".",".","5"],
 [".",".",".",".","8",".",".","7","9"]
]
Output: true
*/

/* 
Question 117:
Create a program that implements a circular linked list.

Example:
Input: LinkedList: [1, 2, 3], Make Circular
Output: LinkedList with last node pointing to the head
*/

/* 
Question 118:
Write a program to implement a binary search tree.

Example:
Input: Insert(5), Insert(3), Insert(7), Search(3)
Output: true
*/

/* 
Question 119:
Write a program that finds the median of two sorted arrays.

Example:
Input: [1, 3], [2]
Output: 2.0
*/

/* 
Question 120:
Create a program to solve the N-Queens problem.

Example:
Input: N = 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],
 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/

/* 
Question 121:
Write a program to implement the topological sort algorithm.

Example:
Input: Graph: {5: [2, 0], 4: [0, 1], 2: [3], 3: [1]}, Nodes: [0, 1, 2, 3, 4, 5]
Output: [5, 4, 2, 3, 1, 0]
*/

/* 
Question 122:
Write a program that solves the knapsack problem using dynamic programming.

Example:
Input: Values: [60, 100, 120], Weights: [10, 20, 30], Capacity: 50
Output: 220
*/

/* 
Question 123:
Write a program to implement a trie (prefix tree).

Example:
Input: Insert("apple"), Search("apple"), Search("app")
Output: true, false
*/

/* 
Question 124:
Create a program that detects if a string is an anagram of a palindrome.

Example:
Input: "civic"
Output: true
*/

/* 
Question 125:
Write a program that generates all permutations of a string.

Example:
Input: "abc"
Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
*/

/* 
Question 126:
Write a program to find the longest increasing subsequence in an array.

Example:
Input: [10, 9, 2, 5, 3, 7, 101, 18]
Output: 4
*/

/* 
Question 127:
Create a program that implements a depth-first search on a binary tree.

Example:
Input: Tree: [1, 2, 3, null, 5, null, 4]
Output: [1, 2, 5, 3, 4]
*/

/* 
Question 128:
Write a program to implement the Floyd-Warshall algorithm.

Example:
Input: Graph: [
 [0, 3, INF, INF],
 [2, 0, INF, INF],
 [INF, 7, 0, 1],
 [6, INF, INF, 0]
]
Output: Shortest distances matrix
*/

/* 
Question 129:
Write a program that finds the maximum subarray sum in an array using Kadane's algorithm.

Example:
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
*/

/* 
Question 130:
Create a program that implements a heap data structure.

Example:
Input: Insert(3), Insert(1), Insert(6), ExtractMax()
Output: 6
*/
