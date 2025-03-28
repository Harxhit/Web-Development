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
