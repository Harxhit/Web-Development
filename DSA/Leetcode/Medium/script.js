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
