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
