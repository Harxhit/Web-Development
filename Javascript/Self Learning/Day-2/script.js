//Arrays and Arrays Methods

let array = [1, 2, 3, 4, 5];

/* 
1.push() => Add elements at the end of the array. 
*/
// array.push(6);
// console.log(array);

/*
2.pop() => Removes the last element from the array.  
*/

// array.pop();
// console.log(array);

/*
3.shift() => Removes the first element from the array .
*/
// array.shift();
// console.log(array);
/*
4.unshift() => Add an element at the starting of an array . 
*/
// array.unshift(11);
// console.log(array);
/*
5.splice() => Removes an element from a array at a certain index given by programmer or a user and we have also have to give how many elements we want to remove.  
*/
// array.splice(2,1);
// console.log(array);
/* 
6.slice() => Slice methods is use to create a shallow copy of array without disturbing original array . In simple words it creates the array from the index I have given . 
*/

let superhero = [
  "Batman",
  "Spiderman",
  "Superman",
  "Captain America",
  "Peacemaker",
];
let shallowCopy = superhero.slice(1, 3);
// console.log(shallowCopy);
// console.log(superhero);

/* 
7.concat() => Merges two array into one array. 
*/
let fruits = ["apple", "banana", "strawberry"];
// console.log(superhero.concat(fruits));

/* 
8.join() => method in JavaScript turns an array into a string, using a specified separator between elements. If no separator is given, it uses a comma by default.  
*/
const words = ["Learning", "JavaScript", "is", "fun"];
const sentence = words.join(" ");
// console.log(sentence);

/* 
Array Traversal  => s the process of visiting or iterating through each element in an array to access or manipulate its values . There are several methods to traversal an array on the basis of task you want to perform .  
*/

/*
I => By using loops (for and while)
*/

/* 
1.for loop => It is the most basic it allows you to take control of the iterations process and you can break it as you needed . 
When to Use: Use this when you need full control over the iteration process, such as breaking out of the loop early or skipping certain elements.

*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  // console.log(element);
}
// So in this for loop I have array of numbers that is from 1 to 8 what I did I am iterating from 0 index of array to lastIndex of array and printing the values .

/*
2.forEach() => is a method that goes through each element of the array without manually writing it to go on each element of array . 
When to Use: Ideal for iterating over arrays when you just need to perform an action (like logging or modifying elements) without needing to break out of the loop or access the index. 
*/

// fruits.forEach((element) => console.log(element));

/* 
3.for...of => It is a modern form of array without it directly access value of array without need of index .
When to Use: This is ideal when you just need to access the elements themselves and don’t need the index.
*/
for (const element of superhero) {
  // console.log(element);
}

/*
4.for...in => is generally used to iterate over the keys (or indices) of an object, but it can also be used with arrays. However, it’s not ideal for arrays because it may iterate over non-index properties.
When to Use: Generally, for...in is better suited for objects, but you can use it for arrays when you need to work with indices. However, for...of is usually preferred for array traversal.
*/
for (const index in superhero) {
  // console.log(superhero[index]);
}
/*
5.while loop => is a more general loop that continues to execute a block of code as long as a specified condition is true. It can be used for array traversal, though it’s typically less common for simple array iteration since it requires manual control over the index or counter
*/
let i = 0;
while (i < array.length) {
  i++;
}
/*
6.map() => Creates a new array by applying some functions on each element of array. 
When to Use: Use map() when you need to transform each element of an array and return a new array with those transformed elements.
*/
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const map = nums.map((number) => number * 2);
// console.log(map);

/*
7.reduce() => is a powerful method that iterates through the array and accumulates a result, which can be a number, string, or even an array. It’s used to derive a single value based on the array.
When to Use: Use reduce() when you need to accumulate a single result from all elements in an array (e.g., summing values, concatenating strings).
*/

let arrayNums = [1, 2, 3];

// const reduce = arrayNums.reduce(function (accumulator, currentvalue) {
//   console.log(`accumalator: ${accumulator} + currentValue: ${currentvalue}`);
//   // return accumulator + currentvalue;
// }, 0);
// console.log(reduce);

let shoppingCart = [
  {
    itemName: "Blue berry",
    price: 299,
  },
  {
    itemName: "Green berry",
    price: 899,
  },
  {
    itemName: "Black berry",
    price: 699,
  },
  {
    itemName: "Red berry",
    price: 499,
  },
  {
    itemName: "Yellow berry",
    price: 599,
  },
];

// const total = shoppingCart.reduce(
//   (accumalator, item) => accumalator + item.price,
//   0
// );
// console.log(total);
/*
8.filter() => s used to create a new array with only the elements that satisfy a specific condition. It's ideal for selecting elements based on a test.
When to Use: Use filter() when you need to select only specific elements from an array that meet a condition.
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filter = numbers.filter((nums) => nums > 4);
// console.log(filter);

/*
9. some() and every() => Both of these methods check whether any or all elements in an array meet a condition. They don't actually traverse the entire array unless necessary.
some(): Returns true if at least one element meets the condition.
every(): Returns true if all elements meet the condition.
When to Use:
Use some() when you need to check if any element meets the condition.
Use every() when you need to check if all elements meet the condition.
*/

let exampleArray = [1, 2, 3, 4, 5, 6];

let some = exampleArray.some((number) => number % 2 === 0);
let every = exampleArray.every((number) => number % 2 === 0);
// console.log(some);
// console.log(every);

/* 
Array Searching => Array searching refers to the process of finding a specific element or elements within an array. It involves checking each element of the array until the target is found or the array has been completely searched.
*/

/*
1.Linear Search : Description: The simplest method where you check each element of the array one by one until you find the target element or reach the end of the array.
Use case : Works on both sorted and un-sorted array . 
When to Use:
-When the array is unsorted or you don't know whether the array is sorted.
-For small arrays where performance isn't a concern.
-When you need to find multiple occurrences of the target element (can easily modify to track all occurrences).
*/

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
}
// console.log(linearSearch([1, 2, 3, 4, 5], 6));

/*
2.Binary Search :  This method works on sorted arrays by repeatedly dividing the search range in half. The middle element is compared to the target, and based on whether the target is smaller or larger, the search continues in the left or right half.
Use Case: Only works on sorted arrays.
When to Use:
- When the array is sorted (either in ascending or descending order).
- When you need a fast search and performance is a priority, especially for large arrays.
- If you're working with a sorted data structure like a sorted list of integers.
*/

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    } else if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5], 3));
// console.log(binarySearch([1, 2, 3, 4, 5], 1));
/*
3.Jump Search 
Description: Jump Search is used on sorted arrays by jumping ahead by a fixed number of elements (usually the square root of the array length) and then performing a linear search within the block where the target may be found.
Use Case: Best for large sorted arrays.
When to Use:
-When the array is sorted, and you're looking for an alternative to Binary Search.
-If the array is large and the performance of Binary Search might be a concern.
-When you want a more optimized search than Linear Search but without the requirement of exact midpoints in Binary Search.
*/

function jumpSearch(array, target) {
  let length = array.length;
  let start = 0;
  let jump = Math.floor(Math.sqrt(length));

  while (start < length && array[Math.min(jump, length) - 1] < target) {
    start = jump;
    jump += Math.floor(Math.sqrt(length));
  }
  for (let i = start; i < Math.min(jump, length); i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
// console.log(jumpSearch([12, 13, 23, 34, 45, 54, 65, 78], 23));
/*
4. Exponential Search 
Description: This is a variation of binary search, where you first find the range in which the target element lies by exponentially increasing the range, and then perform binary search within that range.
Use Case: Efficient for large sorted arrays with unknown lengths.
When to Use:
- When the size of the array is unknown or when the array is of dynamic size.
- When the array is sorted, and you want a more efficient search than Linear Search for a large array.
- In situations where data may not be indexed (e.g., an infinite or very large data set).
*/
function exponentialSearch(arr, target) {
  let n = arr.length;

  if (arr[0] === target) return 0;

  let bound = 1;
  while (bound < n && arr[bound] < target) {
    bound *= 2;
  }

  let left = Math.floor(bound / 2);
  let right = Math.min(bound, n - 1);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
// console.log(exponentialSearch([1, 3, 5, 7, 9, 11, 13, 15, 17], 11));

/*
5.Interpolation Search 
Description: A variation of binary search, which is optimized for uniformly distributed data. It estimates the position of the target element based on a formula, and then performs a binary search-like operation.
When to Use:
- When the array is sorted and contains uniformly distributed values.
- When you expect the target value to be near the mean of the data distribution (e.g., numeric data that follows a roughly linear distribution).
- When the array is large, and you want a potentially faster alternative to Binary Search.
Use Case: Searching for a value in a large sorted array of numbers (e.g., finding a price in a list of stock prices sorted by increasing value).
*/
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    let pos =
      low +
      Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (arr[pos] === target) {
      return pos;
    } else if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}
// console.log(interpolationSearch([1, 3, 5, 7, 9, 11, 13, 15, 17], 11));
/**/
/*
6.Ternary Search
Description: Similar to binary search but instead of dividing the array into two parts, it divides the array into three parts. The element is compared with two midpoints, and the search proceeds in the appropriate third.
When to Use:
- When the array is sorted.
- If you're looking for a more balanced search between Binary Search and Linear Search.
- In cases where the array is small to medium-sized, and you want an efficient search with fewer comparisons.
Use Case: Searching for an element in a sorted array when you prefer dividing the array into three parts rather than two (useful in divide-and-conquer algorithms).
*/
function ternarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] === target) {
      return mid1;
    } else if (arr[mid2] === target) {
      return mid2;
    } else if (target < arr[mid1]) {
      right = mid1 - 1;
    } else if (target > arr[mid2]) {
      left = mid2 + 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }

  return -1;
}
// console.log(ternarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17], 11))
/*
7.Fibonacci Search
Description: A search algorithm based on Fibonacci numbers. It works by dividing the array into parts using Fibonacci numbers, and progressively narrowing down the search range.
When to Use:
- When the array is sorted, and you want an alternative to Binary Search.
- When you're dealing with arrays that are small to medium-sized.
- When you're working with specific algorithms (e.g., Fibonacci-related problems or applications).
Use Case: Searching for a value in a sorted array where you want to exploit the Fibonacci sequence for efficient searching.
*/
function fibonacciSearch(arr, target) {
  let n = arr.length;
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm1 + fibMMm2;

  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm1 + fibMMm2;
  }

  let offset = -1;

  while (fibM > 1) {
    let i = Math.min(offset + fibMMm2, n - 1);

    if (arr[i] < target) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibMMm2;
      fibMMm2 = fibMMm1 - fibMMm2;
      fibMMm1 = fibM - fibMMm2;
    } else {
      return i;
    }
  }

  if (fibMMm1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}
// console.log(fibonacciSearch([1, 3, 5, 7, 9, 11, 13, 15, 17], 11));
/*
Sorting and Reversing 
.sort() =>  The .sort() method sorts elements as strings by default. To sort numbers correctly, you need a comparison function.
*/

function sort(array) {
  let sort = array.sort((a, b) => b - a);
  return sort;
}
// console.log(sort([7, 6, 4, 3, 1, 5, 2]));

/*
.reverse => The .reverse() method reverses the order of the array.
*/

function reverse(array) {
  array.reverse();
  return array;
}
// console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
