// ===================== EASY (15 Questions) =====================

/** Question 1: 
    Implement a Max Heap using an array.
    Input: [3, 1, 4, 1, 5, 9, 2]
    Output: [9, 5, 4, 1, 3, 1, 2]
**/

class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 1) {
      let parentIndex = Math.floor(index / 2);
      if (this.heap[parentIndex] >= this.heap[index]) {
        break;
      }
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }
}

const maxHeap = new MaxHeap();
let numsArray = [3, 1, 4, 1, 5, 9, 2];
for (let i = 0; i < numsArray.length; i++) {
  maxHeap.insert(numsArray[i]);
}
//console.log(maxHeap.heap);

/** Question 2: 
    Implement a Min Heap using an array.
    Input: [7, 10, 4, 3, 20, 15]
    Output: [3, 4, 7, 10, 20, 15]
**/

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  bubbleUp(index) {
    while (index > 1) {
      let parentIndex = Math.floor(index / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }
}
const minHeap = new MinHeap();
let input = [7, 10, 4, 3, 20, 15];
for (let i = 0; i < input.length; i++) {
  minHeap.insert(input[i]);
}
//console.log(minHeap.heap);

/** Question 3: 
    Insert an element into a Min Heap.
    Input: Heap = [2, 3, 5, 7, 8], Insert 1
    Output: [1, 3, 2, 7, 8, 5]
**/

class InsertMinHeap {
  constructor() {
    this.heap = [null];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  bubbleUp(index) {
    while (index > 1) {
      let parentIndex = Math.floor(index / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }
}
const insertMinHeap = new InsertMinHeap();
let n = [2, 3, 5, 7, 8];
for (let i = 0; i < n.length; i++) {
  insertMinHeap.insert(n[i]);
}
insertMinHeap.insert(1);
//console.log(insertMinHeap.heap);

/** 4: 
    Extract the minimum element from a Min Heap.
    Input: [1, 3, 5, 7, 9]
    Output: Min = 1, New Heap = [3, 7, 5, 9]
**/

class ExtractMinElement {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  bubbleUp(index) {
    while (index > 1) {
      let parentIndex = Math.floor(index / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }
  minHeap() {
    if (this.heap.length === 0) return;
    let poppedElement = this.heap.shift();
    return this.heap, poppedElement;
  }
}
const extractMinElement = new ExtractMinElement();
let numbers = [1, 3, 5, 7, 9];
for (let i = 0; i < numbers.length; i++) {
  extractMinElement.insert(numbers[i]);
}
// console.log(extractMinElement.minHeap());
// console.log(extractMinElement.heap);

/** Question 5: 
    Convert an array into a Max Heap.
    Input: [3, 2, 1, 15, 5, 4, 45]
    Output: [45, 15, 4, 2, 5, 1, 3]
**/

class ConvertArrayIntoMaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }
}
const convertArraryIntoMaxHeap = new ConvertArrayIntoMaxHeap();
let array = [3, 2, 1, 15, 5, 4, 45];
for (let i = 0; i < array.length; i++) {
  convertArraryIntoMaxHeap.insert(array[i]);
}
//console.log(convertArraryIntoMaxHeap.heap);

/** Question 6: 
    Check if a given array represents a Min Heap.
    Input: [1, 3, 5, 7, 9, 10]
    Output: true
**/

function validMinHeap(array) {
  let index = array.length;
  for (let i = Math.floor((index - 1) / 2); i >= 0; i--) {
    let leftIndex = i * 2 + 1;
    let rightIndex = i * 2 + 2;
    if (leftIndex < index && array[i] > array[leftIndex]) return false;
    if (rightIndex < index && array[i] > array[rightIndex]) return false;
  }
  return true;
}
//console.log(validMinHeap([45, 1, 32, 3, 5, 7, 9, 10]));

/** Question 7: 
    Merge two Min Heaps.
    Input: Heap1 = [1, 3, 5], Heap2 = [2, 4, 6]
    Output: [1, 2, 3, 4, 5, 6]
**/
function mergeTwoMinHeaps(heap1, heap2) {
  let result = [...heap1, ...heap2];
  let n = result.length;

  function heapify(i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && result[left] < result[smallest]) smallest = left;
    if (right < n && result[right] < result[smallest]) smallest = right;

    if (smallest !== i) {
      [result[i], result[smallest]] = [result[smallest], result[i]]; // Swap elements
      heapify(smallest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(i);
  }

  return result;
}

//console.log(mergeTwoMinHeaps([1, 3, 5], [2, 4, 6]));

/** 8: 
    Find Kth largest element in an array using a heap.
    Input: [7, 10, 4, 3, 20, 15], k = 3
    Output: 10
**/

function kthLargestElemet(array, k) {
  let index = array.length;
  function heapify(i, size) {
    let largest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    if (left < size && array[left] > array[largest]) largest = left;
    if (right < size && array[right] > array[largest]) largest = right;

    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];
      heapify(largest, size);
    }
  }
  for (let i = Math.floor((index - 1) / 2); i >= 0; i--) {
    heapify(i, index);
  }
  for (let i = 0; i < k - 1; i++) {
    [array[0], array[index - 1]] = [array[index - 1], array[0]];
    index--;
    heapify(0, index);
  }
  return array[0];
}
//console.log(kthLargestElemet([7, 10, 4, 3, 20, 15], (k = 3)));

/** Question 9: 
    Find Kth smallest element in an array using a heap.
    Input: [7, 10, 4, 3, 20, 15], k = 3
    Output: 7
**/

function KthSmallestElement(array, k) {
  let index = array.length;
  function heapify(i) {
    let smallest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < index && array[left] < array[smallest]) smallest = left;
    if (right < index && array[right] < array[smallest]) smallest = right;

    if (smallest !== i) {
      [array[i], array[smallest]] = [array[smallest], array[i]];
      heapify(smallest);
    }
  }
  for (let i = Math.floor((index - 1) / 2); i >= 0; i--) {
    heapify(i);
  }
  for (let i = 0; i < k - 1; i++) {
    [array[0], array[index - 1]] = [array[index - 1], array[0]];
    index--;
    heapify(0);
  }
  return array[0];
}
//console.log(KthSmallestElement([7, 10, 4, 3, 20, 15], (k = 3)));

/** Question 10: 
    Remove an element from a Min Heap.
    Input: Heap = [1, 3, 5, 7, 9], Remove 3
    Output: [1, 5, 7, 9]
**/

/** 11: 
    Remove an element from a Max Heap.
    Input: Heap = [10, 5, 3, 2, 1], Remove 5
    Output: [10, 3, 2, 1]
**/

/** 12: 
    Build a Min Heap from an unsorted array.
    Input: [9, 5, 6, 2, 3]
    Output: [2, 3, 6, 9, 5]
**/

/** 13: 
    Build a Max Heap from an unsorted array.
    Input: [3, 6, 9, 2, 10]
    Output: [10, 6, 9, 2, 3]
**/

/** 14: 
    Implement a Priority Queue using a Min Heap.
    Input: Insert (3, "Task A"), (1, "Task B"), (2, "Task C")
    Output: ["Task B", "Task C", "Task A"]
**/

/** 15: 
    Implement a Priority Queue using a Max Heap.
    Input: Insert (3, "Task A"), (1, "Task B"), (2, "Task C")
    Output: ["Task A", "Task C", "Task B"]
**/

// ===================== MEDIUM (15 Questions) =====================

/** 16: 
    Find the median of a running stream of numbers using two heaps.
    Input: [5, 15, 1, 3]
    Output: [5, 10, 5, 4]
**/

/** 17: 
    Find K closest numbers to a given value using a heap.
    Input: [1, 3, 7, 8, 9], k = 2, x = 5
    Output: [3, 7]
**/

/** 18: 
    Merge K sorted arrays using a Min Heap.
    Input: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
    Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
**/

/** 19: 
    Find the shortest path in a weighted graph using Dijkstra’s Algorithm.
    Input: Graph with edges [(A,B,4), (A,C,1), (C,B,2)], Start=A
    Output: {A: 0, B: 3, C: 1}
**/

/** 20-30: Various problems including:
    - Sliding window maximum using heaps.
    - Task scheduling with heaps.
    - Huffman Encoding using heaps.
    - Rearranging characters in a string with no adjacent duplicates.
**/

// ===================== HARD (10 Questions) =====================

/** 31: 
    Implement a heap from scratch with insert, delete, and extract-min operations.
    Input: Insert 3, 1, 4, 2
    Output: Extract-Min returns 1
**/

/** 32: 
    Design a data structure that supports insert, delete, and getRandom in O(1) time using heaps.
    Input: Insert 1, 2, 3, Remove 2, GetRandom()
    Output: 1 or 3
**/

/** 33: 
    Find the sum of elements between k1'th and k2'th smallest elements in an array using a heap.
    Input: [1, 3, 12, 5, 15, 11], k1=3, k2=6
    Output: 23
**/

/** 34: 
    Given ‘n’ ropes, connect them with the minimum cost using a Min Heap.
    Input: [4, 3, 2, 6]
    Output: 29
**/

/** 35: 
    Find the maximum sum of k elements picked from two sorted arrays.
    Input: arr1 = [1, 4, 7], arr2 = [2, 5, 6], k = 3
    Output: [7, 6, 5]
**/

/** 36: 
    Find the smallest range covering elements from k sorted lists using a Min Heap.
    Input: [[4, 10, 15], [1, 5, 20], [3, 6, 9]]
    Output: [4, 6]
**/

/** 37: 
    Find the k’th smallest number in a multiplication table.
    Input: m = 3, n = 3, k = 5
    Output: 3
**/

/** 38: 
    Rearrange characters in a string so that no adjacent characters are the same using a Max Heap.
    Input: "aaabb"
    Output: "ababa"
**/

/** 39: 
    Given an array of n elements, each element is at most k away from its correct position. Sort it using a heap.
    Input: [6, 5, 3, 2, 8, 10, 9], k = 3
    Output: [2, 3, 5, 6, 8, 9, 10]
**/

/** 40: 
    Given ‘n’ ropes, connect them with the minimum cost using a Min Heap.
    Input: [4, 3, 2, 6]
    Output: 29
**/
