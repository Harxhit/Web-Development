/* 🔹 Easy (30 Problems) */

/* 1. Implement a Singly Linked List */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
Output:
  head → [1] → [2] → [3] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head->", output, "null");
//   }
// }

// const list = new LinkedList();
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
//list.printList();

/* 2. Implement a Doubly Linked List */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
Output:
  null ← [1] ⇄ [2] ⇄ [3] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       return;
//     }
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//   }

//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] <-> `;
//       current = current.next;
//     }
//     console.log("null", output, "null");
//   }
// }
// const doublyList = new LinkedList();
// doublyList.addLast(1);
// doublyList.addLast(2);
// doublyList.addLast(3);
// doublyList.printList();

/* 3. Find the Length of a Linked List */
/*
Input:
  list.addLast(10);
  list.addLast(20);
  list.addLast(30);
  list.size();
Output:
  3
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   size() {
//     let current = this.head;
//     let count = 0;
//     while (current) {
//       count++;
//       current = current.next;
//     }

//     console.log(count);
//   }
// }
// const list = new LinkedList();
// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.size();

/* 4. Search for an Element in a Linked List */
/*
Input:
  list.addLast(5);
  list.addLast(15);
  list.addLast(25);
  list.search(15);
Output:
  true
*/

/* 5. Insert at the Beginning of a Linked List */
/*
Input:
  list.addLast(2);
  list.addLast(3);
  list.addFirst(1);
Output:
  head → [1] → [2] → [3] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addFirst(data) {
//     const newNode = new Node(data);
//     newNode.next = this.head;
//     this.head = newNode;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }
//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head ->", output, "null");
//   }
// }
// const list = new LinkedList();
// list.addLast(2);
// list.addLast(3);
// list.addFirst(1);
// list.printList();

/* 6. Insert at the End of a Linked List */
/*
Input:
  list.addFirst(1);
  list.addLast(2);
  list.addLast(3);
Output:
  head → [1] → [2] → [3] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head ->", output, "null");
//   }
// }
// const list = new LinkedList();
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
// list.printList();

/* 7. Insert at a Given Position in a Linked List */
/*
Input:
  list.addLast(10);
  list.addLast(30);
  list.addAtIndex(1, 20);
Output:
  head → [10] → [20] → [30] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   size() {
//     let current = this.head;
//     let count = 0;
//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }
//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head ->", output, "null");
//   }

//   addAtIndex(index, data) {
//     if (index < 0 || index > this.size()) {
//       console.error("Invalid Index");
//     }
//     const newNode = new Node(data);
//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     let current = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       current = current.next;
//     }
//     newNode.next = current.next;
//     current.next = newNode;
//   }
// }

// const list = new LinkedList();
// list.addLast(10);
// list.addLast(30);
// list.addAtIndex(1, 20);
// list.printList();

/* 8. Delete the First Node of a Linked List */
/*
Input:
  list.addLast(10);
  list.addLast(20);
  list.addLast(30);
  list.deleteFirst();
Output:
  head → [20] → [30] → null
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head ->", output, "null");
//   }

//   deleteFirst() {
//     if (!this.head) {
//       return;
//     }
//     this.head = this.head.next;
//   }
// }

// const list = new LinkedList();
// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.deleteFirst();
// list.printList();

/* 9. Delete the Last Node of a Linked List */
/*
Input:
  list.addLast(10);
  list.addLast(20);
  list.addLast(30);
  list.deleteLast();
Output:
  head → [10] → [20] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }

//     console.log("head -> ", output, null);
//   }

//   deleteLast() {
//     if (!this.head) {
//       return;
//     }
//     let current = this.head;
//     while (current.next.next) {
//       current = current.next;
//     }
//     current.next = current.next.next;
//   }
// }
// const list = new LinkedList();
// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.deleteLast();
// list.printList();

/* 10. Delete a Node at a Given Position */
/*
Input:
  list.addLast(10);
  list.addLast(20);
  list.addLast(30);
  list.deleteAtIndex(1);
Output:
  head → [10] → [30] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   size() {
//     let count = 0;
//     let current = this.head;
//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }

//   deleteAtIndex(index) {
//     if (!this.head) {
//       return;
//     }
//     if (index == 0) {
//       this.head = this.head.next;
//       return;
//     }
//     let current = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       current = current.next;
//     }
//     current.next = current.next.next;
//   }
//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head -> ", output, "null");
//   }
// }
// const list = new LinkedList();
// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.deleteAtIndex(1);
// list.printList();

/* 11. Reverse a Linked List (Iterative) */
/*
Input:
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.reverse();
Output:
head → [3] → [2] → [1] → null
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }
//   reverse() {
//     let next = null;
//     let prev = null;
//     let current = this.head;
//     while (current !== null) {
//       next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }
//     this.head = prev;
//   }
//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head", output, "null");
//   }
// }

// const list = new LinkedList();
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
// list.reverse();
// list.printList();

/* 12. Reverse a Linked List (Recursive) */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.reverseRecursive();
Output:
  head → [3] → [2] → [1] → null
*/

/* 13. Find the Middle of a Linked List */
/*
Input:
  list.addLast(10);
  list.addLast(20);
  list.addLast(30);
  list.addLast(40);
  list.addLast(50);
  list.findMiddle();
Output:
  30
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   findMiddle() {
//     if (!this.head) {
//       return null;
//     }
//     let slow = this.head;
//     let fast = this.head;
//     while (fast !== null && fast.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     return `Middle element is : ${slow.data}`;
//   }
// }
// const list = new LinkedList();
// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.addLast(40);
// list.addLast(50);
// console.log(list.findMiddle());

/* 14. Detect a Cycle in a Linked List (Floyd’s Cycle Detection) */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.addLast(4);
  list.createCycle(2);
  list.hasCycle();
Output:
  true
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   size() {
//     let count = 0;
//     let current = this.head;
//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }

//   createCycle(index) {
//     if (index < 0 || index > this.size()) console.error("Invalid Index");
//     let targetNode = null;
//     let current = this.head;
//     for (let i = 0; current !== null; i++, current = current.next) {
//       if (i === index) {
//         targetNode = current;
//       }
//       if (current.next === null) {
//         current.next = targetNode;
//         return;
//       }
//     }
//   }

//   haveCycle() {
//     let fast = this.head;
//     let slow = this.head;
//     while (fast !== null && fast.next !== null) {
//       fast = fast.next.next;
//       slow = slow.next;
//       if (fast === slow) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// const list = new LinkedList();
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
// list.addLast(4);
// list.createCycle(2);
// console.log(list.haveCycle());

/* 15. Remove a Cycle from a Linked List */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.addLast(4);
  list.createCycle(2);
  list.removeCycle();
  list.hasCycle();
Output:
  false
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   size() {
//     let count = 0;
//     let current = this.head;
//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }

//   createCycle(index) {
//     if (index < 0 || index > this.size()) console.error("Invalid Index");
//     let targetNode = null;
//     let current = this.head;
//     for (let i = 0; current !== null; i++, current = current.next) {
//       if (i === index) {
//         targetNode = current;
//       }
//       if ((current.next = null)) {
//         current.next = targetNode;
//         return;
//       }
//     }
//   }

//   haveCycle() {
//     let fast = this.head;
//     let slow = this.head;
//     while (fast !== null && fast.next !== null) {
//       fast = fast.next.next;
//       slow = slow.next;
//       if (fast === slow) {
//         return true;
//       }
//     }
//     return false;
//   }

//   removeCycle() {
//     let fast = this.head;
//     let slow = this.head;

//     while (fast !== null && fast.next !== null) {
//       fast = fast.next.next;
//       slow = slow.next;
//       if (fast === slow) {
//         break;
//       }
//     }

//     if (fast === null || fast.next === null) {
//       return;
//     }

//     slow = this.head;
//     while (fast !== slow) {
//       slow = slow.next;
//       fast = fast.next;
//     }
//     while (fast.next !== slow) {
//       fast = fast.next;
//     }
//     fast.next = null;
//   }
// }

// const list = new LinkedList();
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
// list.addLast(4);
// list.createCycle(2);
// list.removeCycle();
// console.log(list.haveCycle());

/* 16. Find the Nth Node from the End of a Linked List */
/*
Input:
  list.addLast(10);
  list.addLast(20);
  list.addLast(30);
  list.addLast(40);
  list.findNthFromEnd(2);
Output:
  30
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   size() {
//     let count = 0;
//     let current = this.head;
//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }

//   findNthNodeEnd(number) {
//     let positionFromStart = this.size() - number;
//     if (positionFromStart < 0) return null;
//     let current = this.head;
//     for (let i = 0; i < positionFromStart; i++) {
//       current = current.next;
//     }
//     return current;
//   }
// }
// const list = new LinkedList();
// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.addLast(40);
// console.log(list.findNthNodeEnd(2));

/* 17. Remove Duplicates from a Sorted Linked List */
/*
Input:
  list.addLast(1);
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.addLast(3);
  list.removeDuplicates();
Output:
  head → [1] → [2] → [3] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head -> ", output, "null");
//   }

//   removeDuplicates() {
//     let current = this.head;
//     while (current !== null && current.next !== null) {
//       if (current.data === current.next.data) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }
//   }
// }

// const list = new LinkedList();
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
// list.addLast(3);
// list.addLast(3);
// list.addLast(4);
// list.removeDuplicates();
// list.printList();

/* 18. Remove Duplicates from an Unsorted Linked List */
/*
Input:
  list.addLast(1);
  list.addLast(3);
  list.addLast(2);
  list.addLast(3);
  list.addLast(1);
  list.removeDuplicatesUnsorted();
Output:
  head → [1] → [3] → [2] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   removeDuplicatesUnsorted() {
//     let current = this.head;
//     let prev = null;
//     let seen = new Set();
//     while (current !== null) {
//       if (seen.has(current.data)) {
//         prev.next = current.next;
//       } else {
//         seen.add(current.data);
//         prev = current;
//       }
//       current = current.next;
//     }
//   }

//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head->", output, "null");
//   }
// }

// const list = new LinkedList();
// list.addLast(1);
// list.addLast(3);
// list.addLast(2);
// list.addLast(3);
// list.addLast(1);
// list.removeDuplicatesUnsorted();
// list.printList();

/* 19. Find Intersection of Two Linked Lists */
/*
Input:
  list1.addLast(10);
  list1.addLast(20);
  list2.addLast(30);
  list2.head.next = list1.head.next;
  list1.findIntersection(list2);
Output:
  20
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   size() {
//     let count = 0;
//     let current = this.head;
//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }

//   findIntersection(otherList) {
//     let size1 = this.size();
//     let size2 = otherList.size();
//     let difference = Math.abs(size1 - size2);

//     let longer;
//     let shorter;
//     if (size1 > size2) {
//       longer = this.head;
//       shorter = otherList.head;
//     } else {
//       shorter = this.head;
//       longer = otherList.head;
//     }

//     for (let i = 0; i < difference; i++) {
//       longer = longer.next;
//     }

//     while (longer !== null && shorter !== null) {
//       if (longer === shorter) {
//         console.log("Intersection between two linked list is:", longer.data);
//         return;
//       }
//       longer = longer.next;
//       shorter = shorter.next;
//     }
//     console.log("No intersection found");
//     return null;
//   }
// }
// const list1 = new LinkedList();
// const list2 = new LinkedList();
// list1.addLast(10);
// list1.addLast(40);
// list2.addLast(20);
// list2.addLast(30);

// list2.head.next = list1.head.next;
// list1.findIntersection(list2);

/* 20. Merge Two Sorted Linked Lists */
/*
Input:
  list1.addLast(1);
  list1.addLast(3);
  list1.addLast(5);
  list2.addLast(2);
  list2.addLast(4);
  list2.addLast(6);
  list1.mergeSorted(list2);
Output:
  head → [1] → [2] → [3] → [4] → [5] → [6] → null
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   mergeSortedList(otherList) {
//     let list1Pointer = this.head;
//     let list2Pointer = otherList.head;
//     let dummyNode = new Node(0);
//     let current = dummyNode;

//     while (list1Pointer !== null && list2Pointer !== null) {
//       if (list1Pointer.data < list2Pointer.data) {
//         current.next = list1Pointer;
//         list1Pointer = list1Pointer.next;
//       } else {
//         current.next = list2Pointer;
//         list2Pointer = list2Pointer.next;
//       }
//       current = current.next;
//     }
//     if (list1Pointer !== null) {
//       current.next = list1Pointer;
//     } else {
//       current.next = list2Pointer;
//     }

//     return dummyNode.next;
//   }

//   printList() {
//     let output = "";
//     let current = this.head;
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head ->", output, "null");
//   }
// }

// const list1 = new LinkedList();
// const list2 = new LinkedList();
// list1.addLast(1);
// list1.addLast(3);
// list1.addLast(5);
// list2.addLast(2);
// list2.addLast(4);
// list2.addLast(6);
// let mergedList = new LinkedList();
// mergedList.head = list1.mergeSortedList(list2);
// mergedList.printList();

/* 21. Check if a Linked List is Palindrome */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(1);
  list.isPalindrome();
Output:
  true
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   isPalindrome() {
//     if (!this.head || !this.head.next) {
//       console.log("It is a palindrome");
//       return;
//     }

//     let fast = this.head;
//     let slow = this.head;

//     // Find the middle of the linked list
//     while (fast !== null && fast.next !== null) {
//       fast = fast.next.next;
//       slow = slow.next;
//     }

//     // Reverse the second half of the linked list
//     let prev = null;
//     let current = slow;
//     while (current !== null) {
//       let next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }

//     // Compare first half and reversed second half
//     let firstHalf = this.head;
//     let secondHalf = prev;
//     while (secondHalf !== null) {
//       if (firstHalf.data !== secondHalf.data) {
//         console.log("It is not a palindrome");
//         return;
//       }
//       firstHalf = firstHalf.next;
//       secondHalf = secondHalf.next;
//     }
//     console.log("It is a palindrome");
//   }
// }

// const list = new LinkedList();
// list.addLast(1);
// list.addLast(2);
// list.addLast(1);
// list.isPalindrome();

/* 22. Remove Elements with a Given Value */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(6);
  list.addLast(3);
  list.addLast(6);
  list.removeElements(6);
Output:
  head → [1] → [2] → [3] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   printList() {
//     let output = "";
//     let current = this.head;
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head->", output, "null");
//   }

//   removeElements(number) {
//     while (this.head && this.head.data === number) {
//       this.head = this.head.next;
//     }
//     let current = this.head;
//     while (current && current.next) {
//       if (current.next.data === number) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }
//   }
// }
// const list = new LinkedList();
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
// list.addLast(6);
// list.addLast(4);
// list.addLast(5);
// list.addLast(6);
// list.addLast(6);
// list.addLast(7);
// list.removeElements(6);
// list.printList();

/* 23. Swap Nodes in let a Linked List */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.addLast(4);
  list.swapNodes(1, 3);
Output:
  head → [3] → [2] → [1] → [4] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let currentNode = this.head;
//     while (currentNode.next) {
//       currentNode = currentNode.next;
//     }
//     currentNode.next = newNode;
//   }

//   printList() {
//     let output = "";
//     let currentNode = this.head;
//     while (currentNode) {
//       output += `[${currentNode.data}] -> `;
//       currentNode = currentNode.next;
//     }
//     console.log("head ->", output, "null");
//   }

//   swapNodes(num1, num2) {
//     if (num1 === num2) return;
//     let pointer1 = null;
//     let node1 = this.head;
//     let pointer2 = null;
//     let node2 = this.head;

//     while (node1 && node1.data !== num1) {
//       pointer1 = node1;
//       node1 = node1.next;
//     }

//     while (node2 && node2.data !== num2) {
//       pointer2 = node2;
//       node2 = node2.next;
//     }

//     if (!node1 || !node2) return;

//     if (pointer1) {
//       pointer1.next = node2;
//     } else {
//       this.head = node2;
//     }
//     if (pointer2) {
//       pointer2.next = node1;
//     } else {
//       this.head = node1;
//     }
//     let temp = node1.next;
//     node1.next = node2.next;
//     node2.next = temp;
//   }
// }

// const list = new LinkedList();
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
// list.addLast(4);
// list.swapNodes(1, 4);
// list.printList();

/* 24. Rotate a Linked List to the Right */
/*
Input:
  list.addLast(10);
  list.addLast(20);
  list.addLast(30);
  list.rotateRight(1);
Output:
  head → [30] → [10] → [20] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   printList() {
//     let output = "";
//     let current = this.head;
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head ->", output, "null");
//   }

//   rotateRight(number) {
//     let count = 0;
//     let current = this.head;
//     while (current) {
//       count++;
//       current = current.next;
//     }

//     let rotation = number % count;
//     if (rotation === 0) return this.head;

//     let newTail = this.head;

//     for (let i = 0; i < count - rotation - 1; i++) {
//       newTail = newTail.next;
//     }

//     let newHead = newTail.next;
//     newTail.next = null;

//     let temp = newHead;
//     while (temp.next) {
//       temp = temp.next;
//     }
//     temp.next = this.head;

//     this.head = newHead;
//   }
// }
// const list = new LinkedList();
// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.rotateRight(1);
// list.printList();

/* 25. Add Two Numbers Represented by Linked Lists */
/*
Input:
  list1.addLast(2);
  list1.addLast(4);
  list1.addLast(3);
  list2.addLast(5);
  list2.addLast(6);
  list2.addLast(4);
  list1.addNumbers(list2);
Output:
  head → [7] → [0] → [8] → null
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   printList() {
//     let output = "";
//     let current = this.head;
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head->", output, "null");
//   }

//   addNumbers(otherList) {
//     function reverseList(head) {
//       let current = head;
//       let prev = null;
//       let next = null;
//       while (current !== null) {
//         let next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//       }
//       return prev;
//     }
//     function isFirstOrder(head) {
//       if (head === null || head.next === null) return false;
//       return head.data < head.next.data;
//     }
//     let reverseNeeded = isFirstOrder(this.head);
//     if (reverseNeeded) {
//       this.head = reverseList(this.head);
//       otherList.head = reverseList(otherList.head);
//     }
//     let dummyNode = new Node(0);
//     let current = dummyNode;
//     let carry = 0;
//     let pointer1 = this.head;
//     let pointer2 = otherList.head;

//     while (pointer1 !== null || pointer2 !== null || carry !== 0) {
//       let sum = carry;
//       if (pointer1 !== null) {
//         sum += pointer1.data;
//         pointer1 = pointer1.next;
//       }
//       if (pointer2 !== null) {
//         sum += pointer2.data;
//         pointer2 = pointer2.next;
//       }

//       carry = Math.floor(sum / 10);
//       current.next = new Node(sum % 10);
//       current = current.next;
//     }
//     if (reverseNeeded) {
//       dummyNode.next = reverseList(dummyNode.next);
//     }
//     return reverseList(dummyNode.next);
//   }
// }
// const list1 = new LinkedList();
// const list2 = new LinkedList();
// list1.addLast(2);
// list1.addLast(4);
// list1.addLast(3);
// list2.addLast(5);
// list2.addLast(6);
// list2.addLast(4);

// const resultList = new LinkedList();
// resultList.head = list1.addNumbers(list2);
// resultList.printList();

/* 26. Delete a Node Without Head Pointer */
/*
Input:
  list.addLast(4);
  list.addLast(5);
  list.addLast(1);
  list.addLast(9);
  list.deleteNodeWithoutHead(list.head.next);
Output:
  head → [4] → [1] → [9] → null
*/

/* 27. Find Loop Starting Point in a Linked List */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.addLast(4);
  list.createCycle(2);
  list.detectCycleStart();
Output:
  2
*/

/* 28. Split a Linked List into Two Halves */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.addLast(4);
  list.splitList();
Output:
  List1: head → [1] → [2] → null
  List2: head → [3] → [4] → null
*/

/* 29. Convert Binary Number in a Linked List to Integer */
/*
Input:
  list.addLast(1);
  list.addLast(0);
  list.addLast(1);
  list.binaryToDecimal();
Output:
  5
*/

/* 30. Remove Nth Node from End of List */
/*
Input:
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.addLast(4);
  list.addLast(5);
  list.removeNthFromEnd(2);
Output:
  head → [1] → [2] → [3] → [5] → null
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   size() {
//     let count = 0;
//     let current = this.head;
//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }

//   removeNthFromEnd(number) {
//     let positionFromEnd = this.size() - number;
//     if (positionFromEnd < 0) return null;
//     if (positionFromEnd === 0) return this.head.next;
//     let current = this.head;
//     for (let i = 0; i < positionFromEnd - 1; i++) {
//       current = current.next;
//     }
//     current.next = current.next.next;
//   }

//   printList() {
//     let output = "";
//     let current = this.head;
//     while (current) {
//       output += `[${current.data}] -> `;
//       current = current.next;
//     }
//     console.log("head ->", output, "null");
//   }
// }

// const list = new LinkedList();
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
// list.addLast(4);
// list.addLast(5);
// list.removeNthFromEnd(2);
// list.printList();
