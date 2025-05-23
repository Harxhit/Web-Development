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

function removeElementMinHeap(array, number) {
  let index;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      index = i;
      break;
    }
  }
  if (index === undefined) return array;
  let lastIndex = array.length - 1;
  [array[index], array[lastIndex]] = [array[lastIndex], array[index]];
  array.pop();
  function heapify(i) {
    let smallest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < array.length && array[left] < array[smallest]) smallest = left;
    if (right < array.length && array[right] < array[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [array[i], array[smallest]] = [array[smallest], array[i]];
      heapify(smallest);
    }
  }
  if (index > array.length) heapify(index);
  return array;
}

//console.log(removeElementMinHeap([1, 3, 5, 7, 9], 3));

/** Question 11: 
    Remove an element from a Max Heap.
    Input: Heap = [10, 5, 3, 2, 1], Remove 5
    Output: [10, 3, 2, 1]
**/

function removeElementMaxHeap(array, k) {
  let index;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === k) {
      index = i;
      break;
    }
  }
  if (index === undefined) return array;

  let lastIndex = array.length - 1;
  [array[index], array[lastIndex]] = [array[lastIndex], array[index]];
  array.pop();

  function heapify(i) {
    let largest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < array.length && array[left] > array[largest]) largest = left;
    if (right < array.length && array[right] > array[largest]) largest = right;

    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];
      heapify(largest);
    }
  }
  if (index > array.length) return heapify(index);
  return array;
}
//console.log(removeElementMaxHeap([10, 5, 3, 2, 1], 5));

/** Question 12: 
    Build a Min Heap from an unsorted array.
    Input: [9, 5, 6, 2, 3]
    Output: [2, 3, 6, 9, 5]
**/

function buildMinHeapFromUnsortedArray(array) {
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
  return array;
}
//console.log(buildMinHeapFromUnsortedArray([9, 5, 6, 2, 3]));

/** Question 13: 
    Build a Max Heap from an unsorted array.
    Input: [3, 6, 9, 2, 10]
    Output: [10, 6, 9, 2, 3]
**/

function buildUnsortedMaxHeap(array) {
  let index = array.length;
  function heapify(i) {
    let larget = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < index && array[left] > array[larget]) larget = left;
    if (right < index && array[right] > array[larget]) larget = right;

    if (larget !== i) {
      [array[i], array[larget]] = [array[larget], array[i]];
      heapify(larget);
    }
  }

  for (let i = Math.floor((index - 1) / 2); i >= 0; i--) {
    heapify(i);
  }
  return array;
}
//console.log(buildUnsortedMaxHeap([3, 6, 9, 2, 10]));

/** Question 14: 
    Implement a Priority Queue using a Min Heap.
    Input: Insert (3, "Task A"), (1, "Task B"), (2, "Task C")
    Output: ["Task B", "Task C", "Task A"]
**/

class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }
  insert(priority, task) {
    this.heap.push({ priority, task });
    this.heapifyUp(this.heap.length - 1);
  }
  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);

    if (
      index > 0 &&
      this.heap[index].priority < this.heap[parentIndex].priority
    ) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  }
  show() {
    return this.heap;
  }
}

const priorityQueue = new MinPriorityQueue();
priorityQueue.insert(3, "Task A");
priorityQueue.insert(1, "Task B");
priorityQueue.insert(2, "Task C");
//console.log(priorityQueue.show());

/** Question 15: 
    Implement a Priority Queue using a Max Heap.
    Input: Insert (3, "Task A"), (1, "Task B"), (2, "Task C")
    Output: ["Task A", "Task C", "Task B"]
**/

class MaxPriorityQueue {
  constructor() {
    this.array = [];
  }
  insert(priority, task) {
    this.array.push({ priority, task });
    this.heapifyUp(this.array.length - 1);
  }
  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      index > 0 &&
      this.array[index].priority > this.array[parentIndex].priority
    ) {
      [this.array[index], this.array[parentIndex]] = [
        this.array[parentIndex],
        this.array[index],
      ];
    }
  }
  show() {
    return this.array;
  }
}
const maxPriorityQueue = new MaxPriorityQueue();
maxPriorityQueue.insert(3, "Task A");
maxPriorityQueue.insert(1, "Task B");
maxPriorityQueue.insert(2, "Task C");
//console.log(maxPriorityQueue.show());

// ===================== MEDIUM (15 Questions) =====================

/** Question 16: 
    Find the median of a running stream of numbers using two heaps.
    Input: [5, 15, 1, 3]
    Output: [5, 10, 5, 4]
**/

class FindMedian {
  constructor() {
    this.maxHeap = [];
    this.minHeap = [];
  }
  insert(value) {
    if (this.maxHeap.length === 0 || this.maxHeap[0] >= value) {
      this.maxHeap.push(value);
      this.heapifyUp(this.maxHeap, false);
    } else {
      this.minHeap.push(value);
      this.heapifyUp(this.minHeap, true);
    }

    if (this.maxHeap.length > this.minHeap.length + 1) {
      let removed = this.removeRoot(this.maxHeap, false);
      this.minHeap.push(removed);
      this.heapifyUp(this.minHeap, true);
    } else if (this.minHeap.length > this.maxHeap.length) {
      let removed = this.removeRoot(this.minHeap, true);
      this.maxHeap.push(removed);
      this.heapifyUp(this.maxHeap, false);
    }
  }

  heapifyUp(heap, isMinHeap) {
    let index = heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (
        (isMinHeap && heap[index] < heap[parentIndex]) ||
        (!isMinHeap && heap[index] > heap[parentIndex])
      ) {
        [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
        index = parentIndex;
      } else break;
    }
  }

  heapifyDown(heap, isMinHeap) {
    let index = 0;
    let length = heap.length;

    while (true) {
      let swapIndex = index;
      let left = index * 2 + 1;
      let right = index * 2 + 2;

      if (
        (left < length && isMinHeap && heap[left] < heap[swapIndex]) ||
        (left < length && !isMinHeap && heap[left] > heap[swapIndex])
      ) {
        swapIndex = left;
      }
      if (
        (right < length && isMinHeap && heap[right] < heap[swapIndex]) ||
        (right < length && !isMinHeap && heap[right] > heap[swapIndex])
      ) {
        swapIndex = right;
      }

      if (swapIndex === index) break;

      [heap[index], heap[swapIndex]] = [heap[swapIndex], heap[index]];
      index = swapIndex;
    }
  }

  removeRoot(heap, isMinHeap) {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();

    const root = heap[0];
    heap[0] = heap.pop();
    this.heapifyDown(heap, isMinHeap);
    return root;
  }

  median() {
    if (this.maxHeap.length > this.minHeap.length) return this.maxHeap[0];
    else if (this.maxHeap.length < this.minHeap.length) return this.minHeap[0];
    else return (this.maxHeap[0] + this.minHeap[0]) / 2;
  }
}
const findMedian = new FindMedian();
let numberArray = [5, 15, 1, 3];
let resultMedianArray = [];
for (let num of numberArray) {
  findMedian.insert(num);
  resultMedianArray.push(findMedian.median());
}
//console.log(resultMedianArray);

/** Question 17: 
    Find K closest numbers to a given value using a heap.
    Input: [1, 3, 7, 8, 9], k = 2, x = 5
    Output: [3, 7]
**/

function closestNumber(arr, k, x) {
  let heap = [];

  function heapifyUp() {
    let index = heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (
        heap[index][0] > heap[parentIndex][0] ||
        (heap[index][0] === heap[parentIndex][0] &&
          heap[index][1] > heap[parentIndex][1])
      ) {
        [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  function heapifyDown() {
    let index = 0;
    let length = heap.length;
    while (true) {
      let swapIndex = index;
      let left = index * 2 + 1;
      let right = index * 2 + 2;

      if (
        left < length &&
        (heap[left][0] > heap[swapIndex][0] ||
          (heap[left][0] === heap[swapIndex][0] &&
            heap[left][1] > heap[swapIndex][1]))
      ) {
        swapIndex = left;
      }

      if (
        right < length &&
        (heap[right][0] > heap[swapIndex][0] ||
          (heap[right][0] === heap[swapIndex][0] &&
            heap[right][1] > heap[swapIndex][1]))
      ) {
        swapIndex = right;
      }

      if (swapIndex === index) break;

      [heap[index], heap[swapIndex]] = [heap[swapIndex], heap[index]];
      index = swapIndex;
    }
  }

  function removeRoot() {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();

    const root = heap[0];
    heap[0] = heap.pop();
    heapifyDown();
    return root;
  }

  for (let num of arr) {
    let difference = Math.abs(num - x);
    heap.push([difference, num]);
    heapifyUp();

    while (heap.length > k) {
      removeRoot();
    }
  }

  return heap.map((pair) => pair[1]).sort((a, b) => a - b);
}
// console.log(closestNumber([1, 3, 7, 8, 9], 2, 5));

/** Question 18: 
    Merge K sorted arrays using a Min Heap.
    Input: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
    Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
**/

function mergeKSortedArray(array) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      resultArray.push(array[i][j]);
    }
  }
  function heapify(n, i) {
    let smallest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < n && resultArray[left] < resultArray[smallest]) {
      smallest = left;
    }
    if (right < n && resultArray[right] < resultArray[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [resultArray[i], resultArray[smallest]] = [
        resultArray[smallest],
        resultArray[i],
      ];
      heapify(n, smallest);
    }
  }
  let index = resultArray.length;

  for (let i = Math.floor((index - 1) / 2); i >= 0; i--) {
    heapify(index, i);
  }

  for (let i = index - 1; i > 0; i--) {
    [resultArray[0], resultArray[i]] = [resultArray[i], resultArray[0]];
    heapify(i, 0);
  }
  return resultArray.reverse();
}
// console.log(
//   mergeKSortedArray([
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//   ])
// );

/** Question 19: 
    Find the shortest path in a weighted graph using Dijkstra’s Algorithm.
    Input: Graph with edges [(A,B,4), (A,C,1), (C,B,2)], Start = A
    Output: {A: 0, B: 3, C: 1}
**/

function shortestPath(edges, start) {
  function makeAdjacenyList(edges) {
    let graph = {};
    edges.forEach(([u, v, weight]) => {
      if (!graph[u]) {
        graph[u] = [];
      }
      if (!graph[v]) {
        graph[v] = [];
      }
      graph[u].push([v, weight]);
      graph[v].push([u, weight]);
    });
    return graph;
  }

  let graph = makeAdjacenyList(edges);
  let nodes = Object.keys(graph);

  let visited = {};
  let distance = {};

  nodes.forEach((node) => {
    visited[node] = false;
    distance[node] = Infinity;
  });

  distance[start] = 0;

  for (let i = 0; i < nodes.length - 1; i++) {
    let u = null;
    for (let j = 0; j < nodes.length; j++) {
      let node = nodes[j];
      if (!visited[node] && (u === null || distance[node] < distance[u])) {
        u = node;
      }
    }

    if (u === null) break;
    visited[u] = true;

    for (let v = 0; v < graph[u].length; v++) {
      let [neighbor, weight] = graph[u][v];
      if (!visited[neighbor]) {
        let newDistance = distance[u] + weight;
        if (newDistance < distance[neighbor]) {
          distance[neighbor] = newDistance;
        }
      }
    }
  }
  return distance;
}

let edges = [
  ["A", "B", 4],
  ["A", "C", 1],
  ["C", "B", 2],
];
let start = "A";
console.log(shortestPath(edges, start));

/** Question 20: Sliding Window Maximum Using Heaps
  Problem Statement: 
    Given an array of integers `nums` and an integer `k`, return an array of the maximum number in each sliding window of size `k`.

  Input:
    - nums: an array of integers, e.g., [1, 3, -1, -3, 5, 3, 6, 7]
    - k: an integer representing the window size, e.g., 3

  Output:
    - An array of the maximums in each sliding window of size `k`, e.g., [3, 3, 5, 5, 6, 7]
**/

/** 21: Task Scheduling with Heaps
  Problem Statement: 
    Given a list of tasks with their required execution times, and a number of processors, schedule the tasks in a way that minimizes the total processing time using a heap-based priority queue.
  
  Input:
    - tasks: A list of integers representing task durations, e.g., [5, 3, 7, 1]
    - processors: An integer representing the number of processors, e.g., 2

  Output:
    - A list representing the total time taken for each processor, e.g., [8, 8]
**/

/** 22: Huffman Encoding Using Heaps
  Problem Statement: 
    Given a string of characters, create a Huffman tree to generate the corresponding Huffman encoding using a priority queue (min heap).
  
  Input:
    - A string of characters, e.g., "aabacabad"
  
  Output:
    - A map or string showing the Huffman encoding, e.g., { 'a': '00', 'b': '11', 'c': '101', 'd': '100' }
**/

/** 23: Rearranging Characters in a String with No Adjacent Duplicates
  Problem Statement: 
    Given a string, rearrange it so that no two adjacent characters are the same. If it’s not possible, return an empty string.

  Input:
    - A string, e.g., "aaabc"
  
  Output:
    - A rearranged string with no adjacent duplicates, e.g., "abc" or any permutation of "abc"
**/

/** 24: Median of Two Sorted Arrays
  Problem Statement: 
    Given two sorted arrays `nums1` and `nums2`, find the median of the two sorted arrays in O(log(min(n, m))) time complexity.

  Input:
    - nums1: A sorted array of integers, e.g., [1, 3]
    - nums2: A sorted array of integers, e.g., [2]

  Output:
    - The median, e.g., 2.0
**/

/** 25: Merge K Sorted Arrays Using Heaps
  Problem Statement: 
    Given `k` sorted arrays, merge them into one sorted array using a min heap.

  Input:
    - An array of `k` sorted arrays, e.g., [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  
  Output:
    - A single sorted array, e.g., [1, 2, 3, 4, 5, 6, 7, 8, 9]
**/

/** 26: Top K Frequent Elements
  Problem Statement: 
    Given an array of integers, find the `k` most frequent elements using a heap.

  Input:
    - nums: An array of integers, e.g., [1, 1, 1, 2, 2, 3]
    - k: An integer representing the number of most frequent elements to find, e.g., 2

  Output:
    - A list of the `k` most frequent elements, e.g., [1, 2]
**/

/** 27: Find the Kth Largest Element in an Array
  Problem Statement: 
    Given an unsorted array, find the `k`th largest element using a heap.

  Input:
    - nums: An unsorted array of integers, e.g., [3, 2, 1, 5, 6, 4]
    - k: An integer representing the kth largest element to find, e.g., 2

  Output:
    - The `k`th largest element, e.g., 5
**/

/** 28: Find Median of Data Stream Using Heaps
  Problem Statement: 
    Design a data structure that supports the following operations:
    - `addNum(num)`: Add a number to the data stream.
    - `findMedian()`: Return the median of all numbers added.

  Input:
    - `addNum(1)`, `addNum(2)`, `findMedian()`

  Output:
    - 1.5
**/

/** 29: Sort a Nearly Sorted (K Sorted) Array
  Problem Statement: 
    Given an array of integers where each element is at most `k` positions away from its sorted position, sort the array efficiently using a heap.

  Input:
    - nums: A nearly sorted array, e.g., [3, 2, 1, 5, 4, 6, 8]
    - k: An integer representing the distance from the correct position, e.g., 3

  Output:
    - The sorted array, e.g., [1, 2, 3, 4, 5, 6, 8]
**/

/** 30: Reorganize String (No Adjacent Duplicates)
  Problem Statement:
    Given a string, rearrange it so that no two adjacent characters are the same. If this is not possible, return an empty string.

  Input:
    - A string, e.g., "aab"
  
  Output:
    - A rearranged string with no adjacent duplicates, e.g., "aba"
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
