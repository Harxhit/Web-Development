/*
Question 15 : Container with most amount of
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

function maxArea(array) {
  let area = 0;
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    let element = (j - i) * Math.min(array[i], array[j]);
    area = Math.max(area, element);
    if (array[i] > array[j]) {
      j--;
    } else {
      i++;
    }
  }
  return area;
}
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
/*
Question 6 : Group of Anargrams
Given an array of strings strs, group the 
anagrams together. You can return the answer in any order.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

function anagrams(array) {
  let sorted = array.map((str) => str.split("").sort().join(""));
  let map = {};
  for (let i = 0; i < sorted.length; i++) {
    if (!map[sorted[i]]) {
      map[sorted[i]] = [array[i]];
    } else {
      map[sorted[i]].push(array[i]);
    }
  }
  return Object.values(map);
}
// console.log(anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
/*
Question 10 : Product of array except self 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/
function product(array) {
  let nums = new Array(array.length).fill(1);
  for (let i = 1; i < array.length; i++) {
    nums[i] = nums[i - 1] * array[i - 1];
  }
  let suffix = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    nums[i] = nums[i] * suffix;
    suffix *= array[i];
  }
  return nums;
}
// console.log(product([1, 2, 3, 4]));

/* 
Question 21 : Longest Consecutive Sequence
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.
Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

function longestConsecutiveSequence(array) {
  let newSet = new Set(array);
  let maxLength = 0;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (!newSet.has(num - 1)) {
      let currentNumber = num;
      let longestLength = 1;
      while (newSet.has(currentNumber + 1)) {
        currentNumber++;
        longestLength++;
        newSet.delete(currentNumber);
      }
      maxLength = Math.max(longestLength, maxLength);
    }
  }
  return maxLength;
}
// console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));

/*
Question 22 : Color sort
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/
function colorSort(array) {
  let zero = 0;
  let one = 0;
  let two = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zero++;
    } else if (array[i] === 1) {
      one++;
    } else {
      two++;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (i < zero) {
      array[i] = 0;
    } else if (i >= zero && i < one + zero) {
      array[i] = 1;
    } else {
      array[i] = 2;
    }
  }
  return array;
}
function secondMethod(array) {
  let left = 0;
  let right = array.length - 1;
  let current = 0;
  while (current <= right) {
    if (array[current] === 0) {
      [array[left], array[current]] = [array[current], array[left]];
      left++;
      current++;
    } else if (array[current] === 1) {
      current++;
    } else {
      [array[right], array[current]] = [array[current], array[right]];
      right--;
    }
  }
  return array;
}
// console.log(colorSort([2, 0, 2, 1, 1, 0]));
// console.log(secondMethod([2, 0, 2, 1, 1, 0]));
/*
Question 23 : Maximum Subarray
Given an integer array nums, find the 
subarray with the largest sum, and return its sum.
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/
function maximumSubArray(array) {
  let start = 0;
  let end = 0;
  let temp = 0;
  let maxSum = array[0];
  let currentSum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > currentSum + array[i]) {
      currentSum = array[i];
      temp = i;
    } else {
      currentSum += array[i];
    }
    if (maxSum < currentSum) {
      maxSum = currentSum;
      start = temp;
      end = i;
    }
  }
  return maxSum;
}
// console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
/*
Question 24 : Maximum Product Subarray 
Given an integer array nums, find a 
subarray that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.
Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

*/
function maxProduct(array) {
  let temp = -Infinity;
  for (let i = 0; i < array.length; i++) {
    sum = 1;
    for (let j = i; j < array.length; j++) {
      sum *= array[j];
      if (sum > temp) {
        temp = sum;
      }
    }
  }
  return temp;
}
// console.log(maxProduct([2, 3, -2, 4]));
/*
Question 25 : Delete Nth node from end of linked list 
Given the head of a linked list, remove the nth node from the end of the list and return its head.
Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  function size(head) {
    let current = head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  let positionFromEnd = size(head) - n;
  if (positionFromEnd < 0) return null;
  if (positionFromEnd === 0) return head.next;
  let current = head;
  for (let i = 0; i < positionFromEnd - 1; i++) {
    current = current.next;
  }
  current.next = current.next.next;
  return head;
};

/*
Question 26 : Swapping nodes in a linked list
You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let first = head;
  let second = head;
  let count = 1;
  while (count < k) {
    first = first.next;
    count++;
  }

  let temp = first;
  while (first.next) {
    second = second.next;
    first = first.next;
  }
  [temp.val, second.val] = [second.val, first.val];
  return head;
};

/*
Question 27 : Rotate List 
Given the head of a linked list, rotate the list to the right by k places.
Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
*/
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;
  let count = 0;
  let current = head;
  while (current) {
    count++;
    current = current.next;
  }
  let rotation = k % count;
  if (rotation === 0) return head;
  let newTail = head;
  for (let i = 0; i < count - rotation - 1; i++) {
    temp = temp.next;
  }
  temp.next = head;
  head = newHead;
  return head;
};
/*
Question 28 : Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummy = new ListNode(0);
  let current = dummy;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }
  return dummy.next;
};
/*
Question 29 : Linked List cycle 2 
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
Do not modify the linked list.
Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
/*
Question 30 : Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:
MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
Output
[null,null,null,null,-3,null,0,-2]
Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return -1;
  let removedElement = this.stack.pop();
  if (
    this.minStack.length > 0 &&
    removedElement === this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.pop();
  }
  return removedElement;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length === 0) return -1;
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/*
Question 31 : LRU Cache
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the LRUCache class:
LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
Example 1:
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]
Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
*/
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;
  let deletedKey = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, deletedKey);
  return deletedKey;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) this.map.delete(key);
  if (this.map.size >= this.capacity)
    this.map.delete(this.map.keys().next().value);
  this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/*
Question 32: Evalute reverse polish notation 
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
Evaluate the expression. Return an integer that represents the value of the expression.
Note that:
The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
Example 1:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      stack.push(Number(tokens[i]));
    } else {
      let p1 = stack.pop();
      let p2 = stack.pop();
      let operator = tokens[i];
      let result;
      switch (operator) {
        case "+":
          result = p1 + p2;
          break;
        case "-":
          result = p2 - p1;
          break;
        case "/":
          result = Math.trunc(p2 / p1);
          break;
        case "*":
          result = p1 * p2;
          break;
      }
      stack.push(result);
    }
  }
  return stack[0];
};
/*
Question 33: Design Circular Queue
Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.
Implement the MyCircularQueue class:
MyCircularQueue(k) Initializes the object with the size of the queue to be k.
int Front() Gets the front item from the queue. If the queue is empty, return -1.
int Rear() Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty() Checks whether the circular queue is empty or not.
boolean isFull() Checks whether the circular queue is full or not.
You must solve the problem without using the built-in queue data structure in your programming language. 
Example 1:
Input
["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 3, true, true, true, 4]
Explanation
MyCircularQueue myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear();     // return 3
myCircularQueue.isFull();   // return True
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear();     // return 4
*/
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.capacity = k;
  this.array = new Array(k);
  this.front = -1;
  this.rear = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) {
    this.front = 0;
  }
  this.rear = (this.rear + 1) % this.capacity;
  this.array[this.rear] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  let removeElement = this.array[this.front];
  if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
  } else {
    this.front = (this.front + 1) % this.capacity;
  }
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.array[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.array[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.front === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.rear + 1) % this.capacity === this.front;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

/*
Question 34 : Design Circular Dequeue
Design your implementation of the circular double-ended queue (deque).
Implement the MyCircularDeque class:
MyCircularDeque(int k) Initializes the deque with a maximum size of k.
boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
boolean isEmpty() Returns true if the deque is empty, or false otherwise.
boolean isFull() Returns true if the deque is full, or false otherwise.
Example 1:
Input
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 2, true, true, true, 4]
Explanation
MyCircularDeque myCircularDeque = new MyCircularDeque(3);
myCircularDeque.insertLast(1);  // return True
myCircularDeque.insertLast(2);  // return True
myCircularDeque.insertFront(3); // return True
myCircularDeque.insertFront(4); // return False, the queue is full.
myCircularDeque.getRear();      // return 2
myCircularDeque.isFull();       // return True
myCircularDeque.deleteLast();   // return True
myCircularDeque.insertFront(4); // return True
myCircularDeque.getFront();     // return 4
*/
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.array = new Array(k);
  this.capacity = k;
  this.rear = -1;
  this.front = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) this.front = this.rear = 0;
  else {
    this.front = (this.front - 1 + this.capacity) % this.capacity;
  }
  this.array[this.front] = value;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) this.front = this.rear = 0;
  else {
    this.rear = (this.rear + 1) % this.capacity;
  }
  this.array[this.rear] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;
  if (this.front === this.rear) this.front = this.rear = -1;
  else {
    this.front = (this.front + 1) % this.capacity;
  }
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;
  if (this.front === this.rear) this.front = this.rear = -1;
  else {
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
  }
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;
  return this.array[this.front];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  return this.array[this.rear];
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
  return (this.rear + 1) % this.capacity === this.front;
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
 */

/*
Question 35: Validate stack sequence
Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.
Example 1:
Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
*/
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let index = 0;
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (stack.length > 0 && stack[stack.length - 1] === popped[index]) {
      stack.pop();
      index++;
    }
  }
  return stack.length === 0;
};
/*
Question 36 : Design a Stack with Increment Operation 
Design a stack that supports increment operations on its elements.
Implement the CustomStack class:
CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack.
void push(int x) Adds x to the top of the stack if the stack has not reached the maxSize.
int pop() Pops and returns the top of the stack or -1 if the stack is empty.
void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, increment all the elements in the stack.
Example 1:
Input
["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
[[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
Output
[null,null,null,2,null,null,null,null,null,103,202,201,-1]
Explanation
CustomStack stk = new CustomStack(3); // Stack is Empty []
stk.push(1);                          // stack becomes [1]
stk.push(2);                          // stack becomes [1, 2]
stk.pop();                            // return 2 --> Return top of the stack 2, stack becomes [1]
stk.push(2);                          // stack becomes [1, 2]
stk.push(3);                          // stack becomes [1, 2, 3]
stk.push(4);                          // stack still [1, 2, 3], Do not add another elements as size is 4
stk.increment(5, 100);                // stack becomes [101, 102, 103]
stk.increment(2, 100);                // stack becomes [201, 202, 103]
stk.pop();                            // return 103 --> Return top of the stack 103, stack becomes [201, 202]
stk.pop();                            // return 202 --> Return top of the stack 202, stack becomes [201]
stk.pop();                            // return 201 --> Return top of the stack 201, stack becomes []
stk.pop();                            // return -1 --> Stack is empty return -1.
*/
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.max = maxSize;
  this.stack = [];
  this.inc = new Array(maxSize).fill(0);
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.max) this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.stack.length === 0) return -1;
  let index = this.stack.length - 1;
  let value = this.stack.pop() + this.inc[index];
  if (index > 0) this.inc[index - 1] += this.inc[index];
  this.inc[index] = 0;
  return value;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  let n = Math.min(k, this.stack.length);
  if (n > 0) this.inc[n - 1] += val;
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

/*
Question 37 : Task Scheduler

You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.
Return the minimum number of CPU intervals required to complete all tasks.
Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.
*/
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let taskCount = new Map();
  for (let task of tasks) {
    if (taskCount.has(task)) taskCount.set(task, taskCount.get(task) + 1);
    else taskCount.set(task, 1);
  }
  let maxFreq = 0;
  for (let count of taskCount.values()) {
    if (count > maxFreq) maxFreq = count;
  }
  let maxCount = 0;
  for (let count of taskCount.values()) {
    if (count === maxFreq) maxCount++;
  }
  let minInterval = (maxFreq - 1) * (n + 1) + maxCount;
  if (minInterval < tasks.length) minInterval = tasks.length;
  return minInterval;
};

/*
Question 38 : Kth largest element in array 
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?
Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let n = nums.length;

  function heapify(i, size) {
    let largest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < size && nums[left] > nums[largest]) largest = left;
    if (right < size && nums[right] > nums[largest]) largest = right;

    if (largest !== i) {
      [nums[i], nums[largest]] = [nums[largest], nums[i]];
      heapify(largest, size);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(i, n);
  }

  for (let i = 0; i < k - 1; i++) {
    [nums[0], nums[n - 1]] = [nums[n - 1], nums[0]];
    n--;
    heapify(0, n);
  }

  return nums[0];
};
/*
Question 39 : Find k Closest Element
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
An integer a is closer to x than an integer b if:
|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
*/
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
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
};

/*
Question 40 : Number of Island 
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited)) {
        count++;
      }
    }
  }
  return count;

  function explore(grid, r, c, visited) {
    const validRow = r >= 0 && r < grid.length;
    const validCol = c >= 0 && c < grid[0].length;

    if (!validRow || !validCol) return false;

    if (grid[r][c] === "0") return false;

    const pos = r + "," + c;

    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r + 1, c, visited);
    explore(grid, r - 1, c, visited);
    explore(grid, r, c + 1, visited);
    explore(grid, r, c - 1, visited);

    return true;
  }
};

/*
Question 41 : Max area of island 
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0.
Example 1:
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let visited = new Set();
  let maxSize = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreSize(grid, r, c, visited);
      if (size > 0 && size > maxSize) {
        maxSize = size;
      }
    }
  }
  return maxSize;

  function exploreSize(grid, r, c, visited) {
    const validRow = r >= 0 && r < grid.length;
    const validCol = c >= 0 && c < grid[0].length;

    if (!validRow || !validCol) return 0;

    if (grid[r][c] === 0) return 0;

    let pos = r + "," + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;

    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r, c + 1, visited);
    size += exploreSize(grid, r, c - 1, visited);

    return size;
  }
};
/*
Question 42 : Redundant Connection 
In this problem, a tree is an undirected graph that is connected and has no cycles.
You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.
Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.
Example 1:
Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]
*/
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const parent = [];

  for (let i = 0; i <= edges.length; i++) {
    parent[i] = i;
  }

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) return false;

    parent[rootY] = rootX;
    return true;
  }

  for (let [u, v] of edges) {
    if (!union(u, v)) {
      return [u, v];
    }
  }
  return -1;
};
/*
Question 43 : Course Schedule
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const topo = [];
  const visited = new Set();
  const mother = new Set();
  const graph = buildGraph(numCourses, prerequisites);

  function detectCycle(children) {
    visited.add(node);
    mother.add(children);

    for (let neighbour of graph[children]) {
      if (!visited.has(neighbour)) {
        if (detectCycle(neighbour)) return true;
      } else if (mother.has(neighbour)) return true;
    }
    mother.delete(children);
    topo.push(children);
    return false;
  }

  function buildGraph(numCourses, prerequisites) {
    const graph = {};
    for (let i = 0; i < numCourses; i++) {
      graph[i] = [];
    }
    prerequisites.forEach(([u, v]) => graph[v].push(u));
    return graph;
  }

  for (let node = 0; node < numCourses; node++) {
    if (!visited.has(node)) {
      if (detectCycle(node)) return false;
    }
  }

  return topo.length === numCourses;
};
/*
Question 44 : Course Schedule II
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites);
  const visited = new Set();
  const temp = new Set();
  const topo = [];

  function dfs(node) {
    visited.add(node);
    temp.add(node);
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        if (dfs(neighbour)) return true;
      } else if (temp.has(neighbour)) return true;
    }
    temp.delete(node);
    topo.push(node);
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited.has(i)) {
      if (dfs(i)) return [];
    }
  }

  function buildGraph(numCourses, edges) {
    const graph = {};
    for (let i = 0; i < numCourses; i++) {
      graph[i] = [];
    }
    edges.forEach(([u, v]) => graph[v].push(u));
    return graph;
  }

  return topo.reverse();
};

/*
Question 45: Number of Provinces
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
A province is a group of directly or indirectly connected cities and no other cities outside of the group.
You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
Return the total number of provinces.
Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
*/
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const parent = [];
  const length = isConnected.length;

  for (let i = 0; i < length; i++) {
    parent[i] = i;
  }

  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(u, v) {
    const rootX = find(u);
    const rootY = find(v);

    if (rootX === rootY) return false;

    parent[rootX] = rootY;
    return true;
  }

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (isConnected[i][j] === 1) {
        union(i, j);
      }
    }
  }
  const uniqueParents = new Set();

  for (let i = 0; i < length; i++) {
    uniqueParents.add(find(i));
  }

  return uniqueParents.size;
};
/*
Question 46 : Minimum Cost to connect All points
You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.
Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.
Example 1:
Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation: 
We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.
*/
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const parent = [];
  for (let i = 0; i < points.length; i++) {
    parent[i] = i;
  }
  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }
  function union(u, v) {
    const x = find(u);
    const y = find(v);

    if (x === y) return false;
    parent[x] = y;
    return true;
  }

  const edge = [];

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let dist =
        Math.abs(points[i][0] - points[j][0]) +
        Math.abs(points[i][1] - points[j][1]);
      edge.push([dist, i, j]);
    }
  }
  edge.sort((a, b) => a[0] - b[0]);

  let total = 0;
  for (let [dist, u, v] of edge) {
    if (union(u, v)) {
      total += dist;
    }
  }

  return total;
};

/*
Question 47 : Network delay time
You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.
Example 1:
Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
*/
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  function adjacencyList(edges) {
    let graph = {};
    for (let i = 1; i <= n; i++) {
      graph[i] = [];
    }
    edges.forEach(([u, v, weight]) => {
      graph[u].push([v, weight]);
    });
    return graph;
  }

  let graph = adjacencyList(times);
  let visited = new Array(n + 1).fill(false);
  let distances = new Array(n + 1).fill(Infinity);

  distances[k] = 0;

  for (let i = 0; i < n; i++) {
    let u = -1;
    for (let j = 1; j <= n; j++) {
      if (!visited[j] && (u === -1 || distances[j] < distances[u])) {
        u = j;
      }
    }

    if (u === -1) break;
    visited[u] = true;

    for (let [v, weight] of graph[u]) {
      const newDistance = distances[u] + weight;
      if (newDistance < distances[v]) {
        distances[v] = newDistance;
      }
    }
  }

  let answer = -Infinity;
  for (let i = 1; i <= n; i++) {
    if (answer < distances[i]) {
      answer = distances[i];
    }
  }
  return answer === Infinity ? -1 : answer;
};
/*

Question 48 : Cheapest flights within k stops
There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.
Example 1:
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
*/
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const queue = [[0, src, 0]];
  const visited = Array.from({ length: n }, () =>
    new Array(k + 2).fill(Infinity)
  );
  visited[src][0] = 0;
  const graph = buildGraph(flights);

  while (queue.length > 0) {
    queue.sort((a, b) => a[0] - b[0]);
    let [cost, city, stops] = queue.shift();

    if (city === dst) return cost;
    if (stops > k) continue;

    for (let [neighbour, price] of graph[city]) {
      let newPrice = cost + price;
      let newStops = stops + 1;
      if (newStops <= k + 1 && visited[neighbour][newStops] > newPrice) {
        visited[neighbour][newStops] = newPrice;
        queue.push([newPrice, neighbour, newStops]);
      }
    }
  }

  function buildGraph(edges) {
    let graph = {};
    for (let i = 0; i < n; i++) {
      graph[i] = [];
    }
    edges.forEach(([u, v, price]) => graph[u].push([v, price]));
    return graph;
  }
  return -1;
};
/*
Question 48 : Path with minimum effort 
You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.
A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.
Return the minimum effort required to travel from the top-left cell to the bottom-right cell.
Example 1:
Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
*/
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  visited[0][0] = 0;

  const heap = new MinHeap();
  heap.insert([0, 0, 0]);

  while (heap.size() > 0) {
    const [currEffort, x, y] = heap.extractMin();

    if (x === m - 1 && y === n - 1) {
      return currEffort;
    }

    if (currEffort > visited[x][y]) {
      continue;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        const newEffort = Math.max(
          currEffort,
          Math.abs(heights[nx][ny] - heights[x][y])
        );
        if (newEffort < visited[nx][ny]) {
          visited[nx][ny] = newEffort;
          heap.insert([newEffort, nx, ny]);
        }
      }
    }
  }

  return -1;
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][0] < this.heap[smallest][0]
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][0] < this.heap[smallest][0]
      ) {
        smallest = rightChildIndex;
      }
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}
/*
Question 49 : Number of restricted paths from last node
There is an undirected weighted connected graph. You are given a positive integer n which denotes that the graph has n nodes labeled from 1 to n, and an array edges where each edges[i] = [ui, vi, weighti] denotes that there is an edge between nodes ui and vi with weight equal to weighti.
A path from node start to node end is a sequence of nodes [z0, z1, z2, ..., zk] such that z0 = start and zk = end and there is an edge between zi and zi+1 where 0 <= i <= k-1.
The distance of a path is the sum of the weights on the edges of the path. Let distanceToLastNode(x) denote the shortest distance of a path between node n and node x. A restricted path is a path that also satisfies that distanceToLastNode(zi) > distanceToLastNode(zi+1) where 0 <= i <= k-1.
Return the number of restricted paths from node 1 to node n. Since that number may be too large, return it modulo 109 + 7.
Example 1:
Input: n = 5, edges = [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]
Output: 3
Explanation: Each circle contains the node number in black and its distanceToLastNode value in blue. The three restricted paths are:
1) 1 --> 2 --> 5
2) 1 --> 2 --> 3 --> 5
3) 1 --> 3 --> 5
*/
var countRestrictedPaths = function (n, edges) {
  const MOD = 1e9 + 7;
  const distances = new Array(n + 1).fill(Infinity);
  const graph = buildGraph(edges);
  distances[n] = 0;
  let heap = new Heap();
  heap.insert([0, n]);

  while (!heap.isEmpty()) {
    const [currentDist, u] = heap.extractMin();

    if (currentDist > distances[u]) continue;

    for (let [v, w] of graph[u]) {
      let newDistance = distances[u] + w;
      if (distances[v] > newDistance) {
        distances[v] = newDistance;
        heap.insert([distances[v], v]);
      }
    }
  }

  const memo = new Array(n + 1).fill(-1);
  function dfs(u) {
    if (u === n) return 1;
    if (memo[u] !== -1) return memo[u];

    let total = 0;
    for (let [v, w] of graph[u]) {
      if (distances[v] < distances[u]) {
        total = (total + dfs(v)) % MOD;
      }
    }
    memo[u] = total;
    return total;
  }

  function buildGraph(edges) {
    let graph = {};
    for (let i = 1; i <= n; i++) {
      graph[i] = [];
    }
    edges.forEach(([u, v, w]) => {
      graph[u].push([v, w]);
      graph[v].push([u, w]);
    });
    return graph;
  }

  return dfs(1);
};

class Heap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return min;
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][0] < this.heap[smallest][0]
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][0] < this.heap[smallest][0]
      ) {
        smallest = rightChildIndex;
      }
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
