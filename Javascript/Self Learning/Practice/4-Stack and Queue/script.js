// ---------------- EASY ----------------

/** 1. Implement a stack using an array. */
/**  
Input:  
push(10)  
push(20)  
pop()  
push(30)  
peek()  

Output:  
30  b
*/

// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(data) {
//     this.stack.push(data);
//   }

//   pop() {
//     if (this.size() === 0) {
//       console.error("Stack is empty cannot remove element!");
//       return;
//     }
//     return this.stack.pop();
//   }

//   peek() {
//     if (this.size() === 0) {
//       console.error("There is no data tp view");
//       return;
//     }

//     return this.stack[this.size() - 1];
//   }

//   size() {
//     return this.stack.length;
//   }
// }
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.pop();
// stack.push(30);
// console.log(stack.peek());

/** 2. Implement a stack using a linked list. */
/**  
Input:  
push(5)  
push(15)  
push(25)  
pop()  
peek()  

Output:  
15  
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class Stack {
//   constructor() {
//     this.top = null;
//   }

//   push(data) {
//     const newNode = new Node(data);
//     newNode.next = this.top;
//     this.top = newNode;
//   }

//   isEmpty() {
//     return this.stack === null;
//   }

//   size() {
//     let current = this.top;
//     let count = 0;
//     if (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }

//   pop() {
//     if (this.isEmpty()) {
//       console.error("Stacl is epmty");
//       return;
//     }
//     const pop = this.top.data;
//     this.top = this.top.next;
//     return pop;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       console.error("Stack is empty");
//     }
//     return this.top.data;
//   }
// }

// const stack = new Stack();
// stack.push(5);
// stack.push(15);
// stack.push(25);
// stack.pop();
// console.log(stack.peek());

/** 3. Implement a queue using an array. */
/**  
Input:  
enqueue(10)  
enqueue(20)  
dequeue()  
enqueue(30)  
front()   

Output:  
20  
*/

// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(data) {
//     this.queue.push(data);
//     return;
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       console.error("Queue is empty");
//       return;
//     }
//     return this.queue.shift();
//   }

//   isEmpty() {
//     return this.queue.length === 0;
//   }
//   size() {
//     return this.queue.length;
//   }
//   front() {
//     if (this.isEmpty()) {
//       console.error("Queue is epmty");
//       return;
//     }
//     return this.queue[0];
//   }
// }
// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.dequeue();
// queue.enqueue(30);
// console.log(queue.front());

/** 4. Implement a queue using a linked list. */
/**  
Input:  
enqueue(1)  
enqueue(2)  
enqueue(3)  
dequeue()  
peek()  

Output:  
2  
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class Queue {
//   constructor() {
//     this.front = null;
//     this.rear = null;
//     this.count = 0;
//   }

//   enqueue(data) {
//     const newNode = new Node(data);
//     if (this.rear === null) {
//       this.front = this.rear = newNode;
//     } else {
//       this.rear.next = newNode;
//       this.rear = newNode;
//     }
//     this.count++;
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       console.error("Queue is empty cannot perform dequeue");
//       return;
//     }
//     const dequeueData = this.front;
//     this.front = this.front.next;
//     if (this.front === null) {
//       this.rear = null;
//     }
//     this.count--;
//   }

//   isEmpty() {
//     return this.front === null;
//   }

//   size() {
//     return this.count;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       console.error("Queue is empty there is no first element");
//       return;
//     }
//     return this.front.data;
//   }
// }

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();
// console.log(queue.peek());

/** 5. Implement a stack with push, pop, and peek operations. */
/**  
Input:  
push(50)  
push(60)  
pop()  
peek()  

Output:  
50  
*/

// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(data) {
//     this.stack.push(data);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       console.error("Stack is empty!");
//       return;
//     }
//     return this.stack.pop();
//   }

//   isEmpty() {
//     return this.stack.length === 0;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       console.error("Stack is empty");
//       return;
//     }
//     return this.stack[0];
//   }

//   size() {
//     return this.stack.length;
//   }
// }

// const stack = new Stack();
// stack.push(50);
// stack.push(60);
// stack.pop();
// console.log(stack.peek());

/** 6. Implement a queue with enqueue, dequeue, and front operations. */
/**  
Input:  
enqueue(100)  
enqueue(200)  
dequeue()  
front()  

Output:  
200  
*/

// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(data) {
//     this.queue.push(data);
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       console.error("Queue is empty");
//       return;
//     }
//     this.queue.shift();
//   }

//   isEmpty() {
//     return this.queue.length === 0;
//   }

//   front() {
//     if (this.isEmpty()) {
//       console.error("Queue is empty");
//       return;
//     }
//     return this.queue[0];
//   }
// }
// const queue = new Queue();
// queue.enqueue(100);
// queue.enqueue(200);
// queue.dequeue();
// console.log(queue.front());

/** 7. Check if a given string has balanced parentheses using a stack. */
/**  
Input:  
"({[]})"  

Output:  
Balanced  
*/

/** 8. Reverse a string using a stack. */
/**  
Input:  
"hello"  

Output:  
"olleh"  
*/
// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(data) {
//     this.stack.push(data);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       console.error("Stack is empty cannot remove element");
//       return;
//     }
//     return this.stack.pop();
//   }

//   peek() {
//     if (this.isEmpty()) {
//       console.error("Stack is empty cannot show first element");
//       return;
//     }
//     return this.stack[0];
//   }

//   isEmpty() {
//     return this.stack.length === 0;
//   }

//   size() {
//     return this.stack.length;
//   }

//   reverseStack() {
//     let result = "";
//     while (!this.isEmpty()) {
//       result += this.pop();
//     }
//     return result;
//   }
// }

// const stack = new Stack();
// stack.push("h");
// stack.push("e");
// stack.push("l");
// stack.push("l");
// stack.push("o");
// console.log(stack.reverseStack());

/** 9. Implement a circular queue using an array. */
/**  
Input:  
enqueue(10)  
enqueue(20)  
dequeue()  
enqueue(30)  
front()  

Output:  
20  
*/

class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  isEmpty() {
    return this.front === -1;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.error("Queue is full cannot add any elements");
      return;
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.error("Queue is empty cannot remove any element");
      return;
    }
    const removedElement = this.queue[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return removedElement;
  }

  peek() {
    if (this.isEmpty()) {
      console.error("Queue is empty cannot remove first element");
      return;
    }
    return this.queue[this.front];
  }
}

const circularQueue = new CircularQueue(3);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.dequeue();
circularQueue.enqueue(30);
// console.log(circularQueue.peek());

/** 10. Find the next greater element for each element in an array using a stack. */
/**  
Input:  
[4, 5, 2, 10]  

Output:  
[5, 10, 10, -1]  

*/

// class Stack {
//   constructor(array) {
//     this.array = array;
//   }

//   greaterElement() {
//     let stack = [];
//     let num = this.array.length;
//     let result = new Array(num).fill(-1);

//     for (let i = num - 1; i >= 0; i--) {
//       while (stack.length > 0 && stack[stack.length - 1] <= this.array[i]) {
//         stack.pop();
//       }
//       if (stack.length > 0) result[i] = stack[stack.length - 1];
//       stack.push(this.array[i]);
//     }
//     return result;
//   }
// }
// const stack = new Stack([4, 5, 2, 10]);
// console.log(stack.greaterElement());

// ---------------- MEDIUM ----------------

/** 11. Implement two stacks in a single array. */
/**  
Input:  
push1(10)  
push2(20)  
push1(30)  
pop1()  

Output:  
30  
*/

class Stack {
  constructor(size) {
    this.size = size;
    this.array = new Array(size);
    this.right = size;
    this.left = -1;
  }

  push1(value) {
    if (this.left + 1 < this.right) this.array[this.left++] = value;
    else {
      console.error("Stack overflow : Stack 1 is empty");
    }
  }
  push2(value) {
    if (this.left + 1 < this.right) this.array[this.right--] = value;
    else {
      console.error("Stack overflow : Stack 2 have no space left");
    }
  }

  pop1() {
    if (this.left >= 0) return this.array[this.left++];
    else {
      console.error("Stack empty");
      return null;
    }
  }

  pop2() {
    if (this.right < this.size) return this.array[this.right--];
    console.error("Stack empty");
    return null;
  }

  printStack() {
    console.log("Stack 1:", this.array.slice(0, this.left + 1));
    console.log("Stack 2:", this.array.slice(this.right, this.size));
  }
}

const twoStack = new Stack(10);
twoStack.push1(10);
twoStack.push1(20);
twoStack.push2(30);
twoStack.pop1();
// twoStack.printStack();

/** 12. Implement a stack using two queues. */
/**  
Input:  
push(1)  
push(2)  
pop()  
peek()  

Output:  
1  
*/

// class StackUsingQueues {
//   constructor() {
//     this.queue1 = [];
//     this.queue2 = [];
//   }
//   push(value) {
//     this.queue1.push(value);
//   }
//   pop() {
//     if (this.queue1.length === 0) {
//       console.error("Stack empty");
//       return null;
//     }
//     while (this.queue1.length > 1) this.queue2.push(this.queue1.shift());
//     let removeElement = this.queue1.shift();
//     [this.queue1, this.queue2] = [this.queue2, this.queue1];
//     return removeElement;
//   }
//   peek() {
//     if (this.queue1.length === 0) {
//       console.error("Stack empty");
//       return null;
//     }
//     while (this.queue1.length > 1) this.queue2.push(this.queue1.shift());
//     let firstElement = this.queue1[0];
//     [this.queue1, this.queue2] = [this.queue2, this.queue1];
//     return firstElement;
//   }
// }
// let stack = new StackUsingQueues();
// stack.push(1);
// stack.push(2);
// stack.pop();
// console.log(stack.peek());

/** 13. Implement a queue using two stacks. */
/**  
Input:  
enqueue(1)  
enqueue(2)  
dequeue()  
front()  

Output:  
2  
*/

class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    if (this.stack2.length === 0) {
      console.error("Stack is empty cannot dequeue element");
      return null;
    }
    return this.stack2.pop();
  }

  front() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    if (this.stack2.length === 0) {
      console.error("Stack is empty cannot show first element");
      return null;
    }
    return this.stack2[this.stack2.length - 1];
  }
}
const queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
//console.log(queue.front());

/** 14. Implement a min stack that supports push, pop, top, and retrieving the minimum element in O(1). */
/**  
Input:  
push(5)  
push(2)  
push(8)  
getMin()  

Output:  
2  
*/

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(value) {
    this.stack.push(value);
    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }
  pop() {
    if (this.stack.length === 0) {
      console.error("Stack is empty cannot remove element");
      return null;
    }
    let removedElement = this.stack.pop();
    if (
      this.minStack.length > 0 &&
      removedElement === this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.pop();
    }
    return removedElement;
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
const minStack = new MinStack();
minStack.push(5);
minStack.push(2);
minStack.push(8);
minStack.pop();
//console.log(minStack.getMin());

/** 15. Sort a stack using recursion. */
/**  
Input:  
Stack: [5, 1, 4, 2]  

Output:  
Stack: [1, 2, 4, 5]  
*/

/** 16. Implement an LRU (Least Recently Used) cache using a queue and a hashmap. */
/**  
Input:  
put(1,10)  
put(2,20)  
get(1)  

Output:  
10  
*/

class LeastRecentlyUsed {
  constructor(size) {
    this.capacity = size;
    this.queue = new Map();
  }
  put(key, value) {
    if (this.queue.has(key)) this.queue.delete(key);
    if (this.queue.size >= this.capacity)
      this.queue.delete(this.queue.keys().next().value);
    this.queue.set(key, value);
  }
  get(key) {
    if (!this.queue.has(key)) return -1;
    let removedKey = this.queue.get(key);
    this.queue.delete(key, removedKey);
    return removedKey;
  }
}
const leastRecentlyUsed = new LeastRecentlyUsed(10);
leastRecentlyUsed.put(1, 10);
leastRecentlyUsed.put(2, 20);
//console.log(leastRecentlyUsed.get(1));

/** 17. Evaluate a postfix expression using a stack. */
/**  
Input:  
"2 3 * 5 +"  

Output:  
11  
*/

class ReversePolishExpression {
  constructor(expression) {
    this.expression = expression;
    this.stack = [];
  }
  operation() {
    let temp = this.expression.split(" ");
    for (let i = 0; i < temp.length; i++) {
      if (!isNaN(temp[i])) this.stack.push(Number(temp[i]));
      else if (["+", "-", "*", "/"].includes(temp[i])) {
        let second = this.stack.pop();
        let first = this.stack.pop();
        let operator = temp[i];
        let result;
        switch (operator) {
          case "+":
            result = first + second;
            break;
          case "-":
            result = first - second;
            break;
          case "*":
            result = first * second;
            break;
          case "/":
            result = first / second;
            break;
        }
        this.stack.push(result);
      }
    }
    return this.stack[0];
  }
}
const postfixExpression = new ReversePolishExpression("2 3 * 5 +");
// console.log(postfixExpression.operation());

/** 18. Implement a deque (double-ended queue). */
/**  
Input:  
insertFront(10)  
insertLast(20)  
deleteFront()  
getFront()  

Output:  
20  
*/

class DoubleEndedQueue {
  constructor(size) {
    this.size = size;
    this.array = new Array(size);
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
  isEmpty() {
    return this.front === -1;
  }
  insertLast(value) {
    if (this.isFull()) {
      console.error("Queue is full cannot add element");
      return null;
    }
    if (this.isEmpty()) {
      this.rear = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.array[this.rear] = value;
  }
  insertFront(value) {
    if (this.isFull()) {
      console.error("Queue is full cannot add element");
      return null;
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.front = (this.front + 1) % this.size;
    this.array[this.front] = value;
  }
  deleteFront() {
    if (this.isEmpty()) {
      console.error("Queue is empty cannot remove elements");
    }
    let removedElement = this.array[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front - 1) % this.size;
    }
    return removedElement;
  }
  deleteLast() {
    if (this.isEmpty()) {
      console.error("Cannot remove element from queue it is empty");
      return null;
    }
    let removeElement = this.array[this.rear];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.rear = (this.rear - 1) % this.size;
    }
    return removeElement;
  }
  getFront() {
    return this.array[this.front];
  }
}
const doubleEndedQueue = new DoubleEndedQueue(5);
doubleEndedQueue.insertFront(10);
doubleEndedQueue.insertLast(20);
doubleEndedQueue.deleteFront();
//console.log(doubleEndedQueue.getFront());

/** 19. Check if a given sequence of pushed and popped values is valid for a stack. */
/**  
Input:  
push: [1, 2, 3, 4, 5]  
pop: [4, 5, 3, 2, 1]  

Output:  
true  
*/

class ValidStack {
  constructor() {
    this.stack = [];
  }
  operation(pushed, popped) {
    let poppedIndex = 0;
    for (let i = 0; i < pushed.length; i++) {
      this.stack.push(pushed[i]);
      while (
        this.stack.length > 0 &&
        this.stack[this.stack.length - 1] === popped[poppedIndex]
      ) {
        this.stack.pop();
        poppedIndex++;
      }
    }
    return this.stack.length === 0;
  }
}
const validStack = new ValidStack();
// console.log(validStack.operation([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));

/** 20. Find the largest rectangular area in a histogram using a stack. */
/**  
Input:  
[2, 1, 5, 6, 2, 3]  

Output:  
10  
*/

// ---------------- HARD ----------------

/** 21. Implement a stack that supports getMin() in O(1) without using extra space. */
/**  
Input:  
push(5)  
push(2)  
push(10)  
getMin()  

Output:  
2  
*/

/** 22. Implement a max stack that supports push, pop, top, and retrieving the max element in O(1). */
/**  
Input:  
push(3)  
push(1)  
push(5)  
getMax()  

Output:  
5  
*/

/** 23. Implement a k-stacks in a single array. */
/**  
Input:  
push(1, 10)  
push(2, 20)  
push(3, 30)  
pop(1)  

Output:  
10  
*/

/** 24. Design a data structure that supports push, pop, increment operations efficiently. */
/**  
Input:  
push(10)  
push(20)  
increment(2, 5)  
pop()  

Output:  
25  
*/

/** 25. Implement a sliding window maximum using a deque. */
/**  
Input:  
[1,3,-1,-3,5,3,6,7], k = 3  

Output:  
[3, 3, 5, 5, 6, 7]  
*/

/** 26. Find the maximum area of water trapped between bars (Rainwater Trapping). */
/**  
Input:  
[0,1,0,2,1,0,1,3,2,1,2,1]  

Output:  
6  
*/

/** 27. Find the number of valid substrings with balanced parentheses. */
/**  
Input:  
"(()())"  

Output:  
3  
*/

/** 28. Design a food ordering system using a queue. */
/**  
Input:  
order(101)  
order(102)  
serve()  

Output:  
101  
*/

/** 29. Implement a stack with O(1) time complexity for push, pop, and median. */
/**  
Input:  
push(10)  
push(20)  
push(30)  
median()  

Output:  
20  
*/

/** 30. Implement an expression parser using a stack. */
/**  
Input:  
"(1+(4+5+2)-3)+(6+8)"  

Output:  
23  
*/
