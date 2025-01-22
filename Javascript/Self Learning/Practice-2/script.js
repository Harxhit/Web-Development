/** Problem 1: Find the sum of all elements in an array.
 * Input: [1, 2, 3, 4, 5]
 * Output: 15
 */

const { CompressedTextureLoader } = require("three");

// function sumElement(array) {
//   const sum = array.reduce(
//     (accumulatar, currentValue) => accumulatar + currentValue,
//     0
//   );
//   console.log(sum);
// }

function sumElement(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// console.log(sumElement([1, 2, 3, 4, 5]));

/** Problem 2: Find the largest and smallest element in an array.
 * Input: [4, 2, 8, 1]
 * Output: Largest: 8, Smallest: 1
 */

function largetSmallest(array) {
  let smallest = array[0];
  let largest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (smallest > array[i]) {
      smallest = array[i];
    }
    if (largest < array[i]) {
      largest = array[i];
    }
  }
  return `Smallest:${smallest} and largest:${largest}`;
}
// console.log(largetSmallest([4, 2, 8, 1]));

/** Problem 3: Check if an array is sorted in ascending order.
 * Input: [1, 2, 3, 4, 5 ]
 * Output: True
 */
function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(isSorted([1, 2, 3, 4, 5, 8, 7]));

/** Problem 4: Count the number of even and odd numbers in an array.
 * Input: [1, 2, 3, 4, 5]
 * Output: Even: 2, Odd: 3
 */

function oddAndEven(array) {
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenCount++;
    } else if (array[i] % 2 === 1) {
      oddCount++;
    }
  }
  return `Odd Count:${oddCount} and Even count:${evenCount}`;
}
// console.log(oddAndEven([1, 2, 3, 4, 5]));

/** Problem 5: Reverse an array.
 * Input: [1, 2, 3]
 * Output: [3, 2, 1]
 */

function reverse(array) {
  return array.reverse();
}
// console.log(reverse([1, 2, 3]));

/** Problem 6: Rotate an array by `k` positions.
 * Input: [1, 2, 3, 4], k = 1
 * Output: [4, 1, 2, 3]
 */

/** Problem 7: Merge two sorted arrays.
 * Input: [1, 3, 5], [2, 4, 6]
 * Output: [1, 2, 3, 4, 5, 6]
 */

// function mergeSorted(array1, array2) {
//   let sorted  = [...array1,...array2]
//   return sorted.sort((a, b) => a - b);
// }

function mergeSorted(arr1, arr2) {
  let sortedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }
  return sortedArray;
}
// console.log(mergeSorted([1, 3, 5], [2, 4, 6]));

/** Problem 8: Remove duplicates from a sorted array.
 * Input: [1, 1, 2, 2, 3, 3]
 * Output: [1, 2, 3]
 */

function removeDuplicate(array) {
  for (let i = 0; i < array.length; i++) {
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[index] === array[j]) {
        array.splice(j, 1);
        j++;
      }
    }
  }
  return array;
}
// console.log(removeDuplicate([1, 1, 2, 2, 3, 3]));

/** Problem 9: Find the index of the first occurrence of a target value.
 * Input: [1, 2, 3, 4, 5], target = 3
 * Output: 2
 */

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
// console.log(findTarget([1, 2, 3, 4, 5], (target = 3)));

/** Problem 10: Implement bubble sort on an array.
 * Input: [5, 2, 9, 1, 5, 6]
 * Output: [1, 2, 5, 5, 6, 9]
 */

function bubbleSortAlgorithum(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let element = array[i];
        array[i] = array[i + 1];
        array[i + 1] = element;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

// console.log(bubbleSortAlgorithum([5, 2, 9, 1, 5, 6]));

/** Medium Problems (15) */

/** Problem 1: Implement insertion sort on an array.
 * Input: [5, 2, 9, 1, 5, 6]
 * Output: [1, 2, 5, 5, 6, 9]
 */

/** Problem 2: Implement selection sort on an array.
 * Input: [5, 2, 9, 1, 5, 6]
 * Output: [1, 2, 5, 5, 6, 9]
 */

/** Problem 3: Find the majority element in an array (element appears more than n/2 times).
 * Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]
 * Output: 4
 */

/** Problem 4: Implement binary search on a sorted array.
 * Input: [1, 2, 3, 4, 5], target = 3
 * Output: 2 (index of target)
 */

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (array[middleIndex] === target) {
      return middleIndex;
    } else if (array[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5], (target = 5)));

/** Problem 5: Find the kth smallest element in an unsorted array.
 * Input: [7, 10, 4, 3, 20, 15], k = 4
 * Output: 10
 */

function smallestKthElement(arr, k) {
  const sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[k - 1];
}
// console.log(smallestKthElement([7, 10, 4, 3, 20, 15], (k = 4)));

/** Problem 6: Find the missing number in an array of 1 to N.
 * Input: [1, 2, 4, 5, 6], n = 6
 * Output: 3
 */

function missingNumber(array) {
  let n = array.length + 1;
  let arraySum = 0;
  let totalSum = n * ((n + 1) / 2);
  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }
  return totalSum - arraySum;
}

// console.log(missingNumber([1, 2, 4, 5, 6], (n = 6)));

/** Problem 7: Find the longest consecutive sequence in an unsorted array.
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4 (The sequence is [1, 2, 3, 4])
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
      maxLength = Math.max(maxLength, longestLength);
    }
  }
  return maxLength;
}
// console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));

/** Problem 8: Find the intersection of two arrays.
 * Input: [1, 2, 2, 1], [2, 2]
 * Output: [2, 2]
 */

/** Problem 9: Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).
 * Input: [2, 0, 1, 2, 0, 1, 1]
 * Output: [0, 0, 1, 1, 1, 2, 2]
 */

/** Problem 10: Find the pair with the minimum absolute sum in an unsorted array.
 * Input: [-1, 2, 3, -4, 5]
 * Output: [-1, 2]
 */

/** Problem 11: Move all zeroes to the end of an array.
 * Input: [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 */

function moveAllZero(array) {
  let nonZero = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element !== 0) {
      nonZero.push(element);
    }
  }
  while (nonZero.length < array.length) {
    nonZero.push(0);
  }
  return nonZero;
}

function sortingZeroElement(array) {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[index] = array[i];
      index++;
    }
  }
  for (let i = index; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
}
// console.log(sortingZeroElement([0, 1, 0, 3, 12]));
// console.log(moveAllZero([0, 1, 0, 3, 12]));

/** Problem 12: Find the first non-repeating element in an array.
 * Input: [4, 5, 1, 2, 0, 4, 5]
 * Output: 1
 */
function nonRepeatingElement(array) {
  let element = new Map();
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (element.has(num)) {
      element.set(num, element.get(num) + 1);
    } else {
      element.set(num, 1);
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (element.get(array[j]) === 1) {
      return j;
    }
  }
}
// console.log(nonRepeatingElement([4, 5, 1, 2, 0, 4, 5]));

/** Problem 13: Find the subarray with the maximum sum (Kadane's Algorithm).
 * Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output: 6 (The subarray is [4, -1, 2, 1])
 */

/** Problem 14: Find the longest palindrome in an array of strings.
 * Input: ["babad", "cbbd"]
 * Output: "bab"
 */

/** Problem 15: Implement a two-pointer technique to find pairs with a target sum.
 * Input: [1, 2, 3, 4, 5], target = 6
 * Output: [[1, 5], [2, 4]]
 */

/** Hard Problems (25) */

/** Problem 1: Find the maximum product of two integers in an array.
 * Input: [3, 5, -1, 8, -6]
 * Output: 48
 */

/** Problem 2: Implement a fast algorithm to find the median of an unsorted array.
 * Input: [1, 3, 2, 4, 5]
 * Output: 3
 */

/** Problem 3: Find the longest subarray with at most two distinct characters.
 * Input: "eceba"
 * Output: 3 (The longest substring is "ece")
 */

/** Problem 4: Find the subarray with the largest product.
 * Input: [2, 3, -2, 4]
 * Output: 6
 */

/** Problem 5: Implement a sliding window approach to find the maximum sum of `k` consecutive elements.
 * Input: [2, 1, 5, 1, 3, 2], k = 3
 * Output: 9
 */

/** Problem 6: Find the median of two sorted arrays.
 * Input: [1, 3], [2]
 * Output: 2
 */

/** Problem 7: Implement the "Next Greater Element" for each element in an array.
 * Input: [4, 5, 2, 10]
 * Output: [5, 10, 10, -1]
 */

/** Problem 8: Find the number of subarrays whose sum equals a given target.
 * Input: [1, 1, 1], target = 2
 * Output: 2 (subarrays are [1, 1] and [1, 1])
 */

/** Problem 9: Implement a circular array using a static array.
 * Input: [1, 2, 3, 4, 5], move 2 positions
 * Output: [4, 5, 1, 2, 3]
 */

/** Problem 10: Implement a data structure that supports efficient range sum queries.
 * Input: [1, 2, 3, 4, 5], range [0, 2]
 * Output: 6 (sum of elements 1 + 2 + 3)
 */

/** Problem 11: Find the subarray with the minimum sum.
 * Input: [2, -3, 4, -1, 6, -2]
 * Output: -3
 */

/** Problem 12: Merge k sorted arrays.
 * Input: [[1, 4, 5], [1, 3, 4], [2, 6]]
 * Output: [1, 1, 2, 3, 4, 4, 5, 6]
 */

/** Problem 13: Find all subsets of a set of numbers.
 * Input: [1, 2, 3]
 * Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
 */

/** Problem 14: Find the longest substring without repeating characters.
 * Input: "abcabcbb"
 * Output: 3 (The longest substring is "abc")
 */

/** Problem 15: Find the subarray whose sum is closest to zero.
 * Input: [1, -1, 2, -3, 4]
 * Output: [2, -3]
 */

/** Problem 16: Find the longest increasing subsequence.
 * Input: [10, 9, 2, 5, 3, 7, 101, 18]
 * Output: 4
 */

/** Problem 17: Find the number of ways to climb stairs (Dynamic Programming).
 * Input: 5
 * Output: 8
 */

/** Problem 18: Solve the "Jump Game" problem.
 * Input: [2, 3, 1, 1, 4]
 * Output: True
 */

/** Problem 19: Find the number of distinct subsets in a set of numbers.
 * Input: [1, 2, 2]
 * Output: 6
 */

/** Problem 20: Count the number of set bits (1's) in a number.
 * Input: 15
 * Output: 4
 */

/** Problem 21: Solve the "Word Search" problem.
 * Input: board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
 * Output: True
 */

/** Problem 22: Solve the "Word Break" problem.
 * Input: s = "leetcode", wordDict = ["leet", "code"]
 * Output: True
 */

/** Problem 23: Find the longest common subsequence.
 * Input: "abcde", "ace"
 * Output: 3
 */

/** Problem 24: Solve the "House Robber" problem.
 * Input: [2, 7, 9, 3, 1]
 * Output: 12
 */

/** Problem 25: Find the minimum number of coins to make a given amount.
 * Input: [1, 2, 5], amount = 11
 * Output: 3
 */
