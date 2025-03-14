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

/**/
/**/
/**/
/**/
/**/
