/* 
Stack is a fundamental data structure which follows the LIFO principle which is Last in First out meaning the last element that was put in stack will be the fast to be removed . 

Operations Performed on a Stack
1) Push: Adds an element to the top of the stack.
2) Pop: Removes and returns the top element from the stack.
3) Peek (or Top): Returns the top element without removing it.
4) isEmpty: Checks if the stack is empty.
5) Size: Returns the number of elements in the stack.

*/

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "The Stack is empty";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "The Stack is empty";
    }
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
// console.log(stack.peek());
// console.log(stack.size());
stack.push(18);
stack.pop();
// console.log(stack.peek());
// console.log(stack.isEmpty());

/* 
Queue is the linear data structure that follows First In and First Out principal. 
Meaning the first thing that we put in the stack will be removed first . 
Queue Operations
1) enqueue(item) – Adds an element to the end of the queue.
2) dequeue() – Removes and returns the first element from the queue.
3) peek() – Returns the first element without removing it.
4) isEmpty() – Checks if the queue is empty.
5) size() – Returns the number of elements in the queue.
6) clear() – Removes all elements from the queue.
7) print() – Prints the elements of the queue.
*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.join("->"));
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
// queue.print(); // Output: 1 -> 2 -> 3
// console.log(queue.dequeue()); // Output: 1
// queue.print(); // Output: 2 -> 3
// console.log(queue.peek()); // Output: 2
queue.clear();
//console.log(queue.isEmpty()); // Output: true