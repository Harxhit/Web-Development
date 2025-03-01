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

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList1 {
  constructor() {
    this.head = null;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  findIntersection() {}
}
class LinkedList2 {
  constructor() {
    this.head = null;
  }
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}
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

/* 23. Swap Nodes in a Linked List */
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
