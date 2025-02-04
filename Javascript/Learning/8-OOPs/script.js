// 1. Defining a Class (Encapsulation)
class Animal {
  constructor(name, sound) {
    this.name = name; // Property
    this.sound = sound; // Property
  }

  // Method
  makeSound() {
    // console.log(`${this.name} makes a ${this.sound} sound.`);
  }
}

// 2. Creating an Object (Instantiation)
const dog = new Animal("Dog", "Bark");
// dog.makeSound(); // Output: Dog makes a Bark sound.

// 3. Inheritance (Extending a Class)
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Bark"); // Call parent constructor
    this.breed = breed; // Additional property
  }

  // Method Overriding
  makeSound() {
    // console.log(`${this.breed} ${this.name} barks loudly!`);
  }
}

// Creating an instance of the subclass
const husky = new Dog("Dog", "Husky");
// husky.makeSound(); // Output: Husky Dog barks loudly!

// 4. Encapsulation (Private Properties & Methods using #) => Means restricting direct access to data of an object outside the class . 
class BankAccount {
  #balance; // Private Property

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  // Getter for balance
  getBalance() {
    return `Balance: $${this.#balance}`;
  }

  // Setter for balance
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      // console.log(`Deposited $${amount}. New Balance: $${this.#balance}`);
    } else {
      // console.log("Invalid deposit amount!");
    }
  }
}

const account = new BankAccount("John", 1000);
// console.log(account.getBalance()); // Output: Balance: $1000
// account.deposit(500); // Output: Deposited $500. New Balance: $1500

// 5. Polymorphism (Overriding Methods)
class Bird {
  makeSound() {
    // console.log("Chirp Chirp!");
  }
}

class Parrot extends Bird {
  makeSound() {
    // console.log("Parrot says Hello!");
  }
}

const genericBird = new Bird();
const myParrot = new Parrot();

genericBird.makeSound(); // Output: Chirp Chirp!
myParrot.makeSound(); // Output: Parrot says Hello!

// 6. Static Methods (Shared by all instances)
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 10)); // Output: 15

// 7. Factory Function (Alternative to Classes)
function createCar(model, year) {
  return {
    model,
    year,
    drive() {
      // console.log(`${this.model} is driving!`);
    },
  };
}

const car = createCar("Toyota", 2022);
// car.drive(); // Output: Toyota is driving!

// 8. Prototype Inheritance
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  // console.log(`Hello, my name is ${this.name}.`);
};

const john = new Person("John");
// john.greet(); // Output: Hello, my name is John.
