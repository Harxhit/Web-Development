/* 1. Create a class `Person` with properties `name` and `age`. Add a method `greet()` that logs a greeting message. */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Greeting's from ${this.name} who is ${this.age} year old.`;
  }
}
let person1 = new Person("Harshit", 21);
// console.log(person1.greet());

/* 2. Create a class `Car` with properties `make`, `model`, and `year`. Add a method `displayInfo()` that logs the car's details. */

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    return `Car make is ${this.make} , its model is ${this.model} and made in ${this.year}. `;
  }
}
const car1 = new Car("Ferrai", "Daytona SP3 Rosso", 2022);
// console.log(car1.displayInfo());

/* 3. Implement inheritance by creating a `Student` class that extends `Person`. Add a method `study()` to the `Student` class. */

class Student extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  study() {
    return `Have these subject ${this.subject} for his current class.`;
  }
}
let person2 = new Student("John", 18, "Physics, Chemistry , Maths");
// console.log(person2.greet())
// console.log(person2.study());

/* 4. Create a class `BankAccount` with methods `deposit(amount)` and `withdraw(amount)`. Implement balance tracking. */

class BankAccount {
  currentBalance = 5000;
  constructor(name, bank) {
    this.name = name;
    this.bank = bank;
  }
  greet(name, bank) {
    return `Hello ${this.name} and welcome to ${this.bank}`;
  }
  deposit(amount) {
    if (amount > 0) {
      this.currentBalance += amount;
      return `You current balance after deposit is $${this.currentBalance}`;
    }
  }
  withdraw(amount) {
    if (amount > 0) {
      this.currentBalance -= amount;
      return `You current balance after withdrawl is $${this.currentBalance}`;
    }
  }
}

const holder1 = new BankAccount("Travis Scott", "JP Morgan");
// console.log(holder1.greet());
// console.log(holder1.withdraw(500));
// console.log(holder1.deposit(1000));

/* 5. Write a class `Rectangle` with properties `length` and `width`. Implement methods to calculate area and perimeter. */

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  area() {
    const area = this.length * this.width;
    return `The area of rectangle is ${area}`;
  }
  perimeter() {
    const perimeter = 2 * (this.length + this.width);
    return `The Perimeter of rectangle is ${perimeter}`;
  }
}
let rectangle = new Rectangle(5, 4);
// console.log(rectangle.area());
// console.log(rectangle.perimeter());

/* 6. Create a class `Animal` with a method `speak()`. Extend it to create `Dog` and `Cat` classes that override the `speak()` method. */



/* 7. Create a `Circle` class with a radius property. Add a method `area()` to calculate the area of the circle. */

/* 8. Create an `Employee` class with properties `name`, `id`, and `salary`. Add a method to display employee details. */

/* 9. Implement a class `Book` with properties `title`, `author`, and `price`. Add a method `applyDiscount(percent)` to reduce the price by a given percentage. */

/* 10. Create a class `Shape` with a method `getArea()`. Extend it to create classes `Square` and `Triangle`, overriding the `getArea()` method. */

/* 11. Implement a `Person` class with a method `introduce()` that logs a greeting. Then, create a `Teacher` class that extends `Person` and overrides `introduce()` with a special message. */

/* 12. Implement a class `Movie` with properties `title`, `director`, and `year`. Add a method `getDetails()` to return a string with the movie details. */

/* 13. Create a class `Library` that contains an array of books. Implement methods to add a book, remove a book, and display all books. */

/* 14. Create an `Item` class with properties `name` and `price`. Implement a method to calculate the total price after applying tax. */

/* 15. Implement a class `Counter` with methods `increment()` and `decrement()`. Add a method `getCount()` to retrieve the current count value. */
