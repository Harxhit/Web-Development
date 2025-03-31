/*
Question 1 : Largest rectangle in histogram 
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [];
  let n = heights.length;
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      let h = heights[stack.pop()];
      let w;
      if (stack.length === 0) w = i;
      else w = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, w * h);
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    let h = heights[stack.pop()];
    let w;
    if (stack.length === 0) w = n;
    else w = n - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, w * h);
  }
  return maxArea;
};
/*
Question 2 - Sliding Window Maximum 
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.
Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:
Input: nums = [1], k = 1
Output: [1]
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  this.nums = nums;
  this.size = k;
  this.result = [];
  this.dq = [];
  for (let i = 0; i < this.nums.length; i++) {
    while (this.dq.length && this.dq[0] < i - this.size + 1) {
      this.dq.shift();
    }
    while (
      this.dq.length &&
      this.nums[this.dq[this.dq.length - 1]] < this.nums[i]
    ) {
      this.dq.pop();
    }
    this.dq.push(i);
    if (i >= this.size - 1) this.result.push(this.nums[this.dq[0]]);
  }
  return this.result;
};

/*
Question 3 : Rainwater Trapping
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let rightArray = new Array(height);
  let leftArray = new Array(height);

  let leftMax = -Infinity;
  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(leftMax, height[i]);
    leftArray[i] = leftMax;
  }
  let rightMax = -Infinity;
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, height[i]);
    rightArray[i] = rightMax;
  }
  let count = 0;
  for (let i = 0; i < height.length; i++) {
    count += Math.min(leftArray[i], rightArray[i]) - height[i];
  }
  return count;
};
/*
Question 4 : Longest valid Parentheses
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.
Example 1:
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [-1];
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else {
      stack.pop();
      if (stack.length === 0) stack.push(i);
      maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
    }
  }
  return maxLength;
};

/*
Question 5 : Find Median from data stream
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.
For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:
MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
Example 1:
Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]
Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
*/
var MedianFinder = function () {
  this.maxHeap = [];
  this.minHeap = [];
};

MedianFinder.prototype.heapifyUp = function (heap, isMinHeap) {
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
};

MedianFinder.prototype.heapifyDown = function (heap, isMinHeap) {
  let index = 0;
  let length = heap.length;

  while (true) {
    let swapIndex = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;

    if (
      left < length &&
      ((isMinHeap && heap[left] < heap[swapIndex]) ||
        (!isMinHeap && heap[left] > heap[swapIndex]))
    ) {
      swapIndex = left;
    }
    if (
      right < length &&
      ((isMinHeap && heap[right] < heap[swapIndex]) ||
        (!isMinHeap && heap[right] > heap[swapIndex]))
    ) {
      swapIndex = right;
    }
    if (swapIndex === index) break;

    [heap[index], heap[swapIndex]] = [heap[swapIndex], heap[index]];
    index = swapIndex;
  }
};

MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.length === 0 || num <= this.maxHeap[0]) {
    this.maxHeap.push(num);
    this.heapifyUp(this.maxHeap, false);
  } else {
    this.minHeap.push(num);
    this.heapifyUp(this.minHeap, true);
  }

  if (this.maxHeap.length > this.minHeap.length + 1) {
    this.minHeap.push(this.removeRoot(this.maxHeap, false));
    this.heapifyUp(this.minHeap, true);
  } else if (this.minHeap.length > this.maxHeap.length) {
    this.maxHeap.push(this.removeRoot(this.minHeap, true));
    this.heapifyUp(this.maxHeap, false);
  }
};

MedianFinder.prototype.removeRoot = function (heap, isMinHeap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();

  const root = heap[0];
  heap[0] = heap.pop();
  this.heapifyDown(heap, isMinHeap);
  return root;
};

MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.length > this.minHeap.length) {
    return this.maxHeap[0];
  } else if (this.minHeap.length > this.maxHeap.length) {
    return this.minHeap[0];
  } else {
    return (this.maxHeap[0] + this.minHeap[0]) / 2;
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
/**/
