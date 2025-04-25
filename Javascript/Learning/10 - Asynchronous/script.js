/**
JavaScript operates on a single-threaded event loop, which means it can only execute one operation at a time. However, asynchronous programming allows JavaScript to perform tasks without blocking the main execution thread. This is useful for tasks like making HTTP requests, reading files, or waiting for timers. 
Key Concepts in Asynchronous JavaScript

1 - Callback Functions
2 - Promises
3 - Async/Await
4 - Event Loop
**/

// 1- Callback Functions - A callback function is a function that is passed as an argument to another function and is executed once the asynchronous task is completed.

// Synchronous behavior
//console.log("Start");

function fetchData(callback) {
  setTimeout(() => {
    //console.log("Data fetched!");
    callback(); // Execute the callback when done
  }, 2000);
}

fetchData(() => {
  //console.log("Callback executed after data fetched");
});

//console.log("End");

// Output:
// Start
// End
// Data fetched! (after 2 seconds)
// Callback executed after data fetched

// 2. Promises - A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises can be in one of three states: pending, fulfilled (resolved), or rejected.

//console.log("Start");

let fetchDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data");
    }
  }, 2000);
});

fetchDataPromise
  .then((message) => {
    //console.log(message); // On resolve
  })
  .catch((error) => {
    //console.error(error); // On rejection
  });

//console.log("End");

// Output:
// Start
// End
// Data fetched successfully! (after 2 seconds)

// 3. Async/Await - async and await make working with asynchronous code easier by allowing asynchronous code to look and behave more like synchronous code. async is used to define an asynchronous function, and await pauses the execution of an async function until the promise is resolved or rejected.

//console.log("Start");

async function fetchDataAsync() {
  let data = await fetchDataPromise; // Waits for the promise to resolve
  console.log(data); // Executes after the promise is resolved
}

//fetchDataAsync();

//console.log("End");

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Harshit", age: 21 });
    }, 2000);
  });
}

function fetchUserBlogData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        postComment:
          "Code is like humor. When you have to explain it, it’s bad.",
      });
    }, 4000);
  });
}

async function fetchSometing() {
  try {
    //const userData = await fetchUserData();
    //const blogData = await fetchUserBlogData();
    const [userData, blogData] = await Promise.all([
      fetchUserData(),
      fetchUserBlogData(),
    ]);
    console.log(userData, blogData);
    //console.log(userData);
    //console.log(blogData);
  } catch (error) {
    console.error(error);
  }
}

//fetchSometing();

// Output:
// Start
// End
// Data fetched successfully! (after 2 seconds)
//When we uses Promise.all it will take 4 seconds because, both promises run in parallel, and the total wait time is only as long as the slowest one (4 seconds).

// 4. Event Loop - JavaScript uses the Event Loop to handle asynchronous operations. The call stack handles synchronous tasks, and the event queue handles asynchronous tasks. When the call stack is empty, the event loop picks up tasks from the event queue and places them on the call stack.

//console.log("Start");

setTimeout(() => {
  //console.log("Asynchronous task executed");
}, 1000); // Delayed task

//console.log("End");

// Output:
// Start
// End
// Asynchronous task executed (after 1 second)

// Prototypal Inheritance

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello , ${this.name}`);
};

let name1 = new Person("Harshit");
// name1.greet();

//This and binding context

const person = {
  name: "Harshit",
  greet() {
    console.log(`Hi ${this.name} `);
  },
};

// person.greet() //Name of that person

const greetFunction = person.greet;
// greetFunction(); // Return undefined

const bind = person.greet.bind({ name: "Arjit" });
// bind();

/**Generator and Iterator Functions **/
// 1. Iterator - An iterator is an object that lets you loop through a sequence step by step using .next().

/**How it works:
It must have a method called next().

next() returns an object with:

value → the current value

done → true or false (tells if the sequence is over)

**/

function createIterator() {
  let count = 0;
  return {
    next: function () {
      if (count < 3) {
        return { value: count++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const iterator = createIterator();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

//2. Generator - A generator is a special kind of function that can be paused and resumed. It makes creating iterators easier.

/** Key points:
Use function* syntax.

Use yield to return values one at a time.

Calling it returns an iterator automatically.
**/

function* myGenerator() {
  yield 10;
  yield 20;
  yield 30;
}

const gen = myGenerator();
console.log(gen.next()); // { value: 10, done: false }
console.log(gen.next()); // { value: 20, done: false }
console.log(gen.next()); // { value: 30, done: false }
console.log(gen.next()); // { value: undefined, done: true }
