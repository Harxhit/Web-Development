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
