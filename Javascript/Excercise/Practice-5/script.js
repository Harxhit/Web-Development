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

class Animal {
  speak() {
    return `This animals make this sounds`;
  }
}

class Dog extends Animal {
  speak() {
    return `Dog makes bark sound`;
  }
}

class Cat extends Animal {
  speak() {
    return `Cat makes meow sound`;
  }
}

const dog = new Dog();
const cat = new Cat();
// console.log(dog.speak());
// console.log(cat.speak());

/* 7. Create a `Circle` class with a radius property. Add a method `area()` to calculate the area of the circle. */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    const area = Math.PI * this.radius * this.radius;
    return `The area of the circle is ${area}`;
  }
}
let circle = new Circle(2);
// console.log(circle.area());

/* 8. Create an `Employee` class with properties `name`, `id`, and `salary`. Add a method to display employee details. */

class Employee {
  constructor(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }
  detail() {
    return `Name of the employee is ${this.name}. Id is ${this.id} and its salary is $${this.salary}`;
  }
}
const employee1 = new Employee("Sam Altman", 1554, 5000000);
// console.log(employee1.detail());

/* 9. Implement a class `Book` with properties `title`, `author`, and `price`. Add a method `applyDiscount(percent)` to reduce the price by a given percentage. */

class Book {
  constructor(title, author, price) {
    this.price = price;
    this.author = author;
    this.title = title;
  }
  detail() {
    return `The name of the book is ${this.title} written by ${this.author} the price of the book is $${this.price}`;
  }
  applyDiscount(discount) {
    const discountedPrice = this.price - this.price * (discount / 100);
    return `The price of the book after a $${discount} of discount is $${discountedPrice}`;
  }
}
let book1 = new Book("Atomic Habits", "James Clear", 500);
// console.log(book1.detail());
// console.log(book1.applyDiscount(20));

/* 10. Create a class `Shape` with a method `getArea()`. Extend it to create classes `Square` and `Triangle`, overriding the `getArea()` method. */

class Shape {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return `Area of something shape`;
  }
}

class Square extends Shape {
  getArea(side) {
    const area = side * side;
    return `The area of square is ${area}`;
  }
}

class Triangle extends Shape {
  getArea(height, base) {
    const area = 0.5 * base * height;
    return `The area of the triangle is ${area}`;
  }
}
const square = new Square();
const triangle = new Triangle();
// console.log(square.getArea(2));
// console.log(triangle.getArea(2,5));

/* 11. Implement a `Student` class with a method `introduce()` that logs a greeting. Then, create a `Teacher` class that extends `Student` and overrides `introduce()` with a special message. */

class Student1 {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  introduce() {
    return `Hi, my name is ${this.name}, I am ${this.age} years old, and I study in grade ${this.grade}.`;
  }
}

class Teacher extends Student1 {
  constructor(name, age, subject) {
    super(name, age, "N/A"); // Teachers don't have a grade, so set it as "N/A"
    this.subject = subject;
  }

  introduce() {
    return `Hello, I am ${this.name}, a ${this.age}-year-old teacher, and I teach ${this.subject}.`;
  }
}

let student1 = new Student1("Alice", 14, 9);
// console.log(student1.introduce());

let teacher1 = new Teacher("Mr. Smith", 35, "Mathematics");
// console.log(teacher1.introduce());

/* 12. Implement a class `Movie` with properties `title`, `director`, and `year`. Add a method `getDetails()` to return a string with the movie details. */

class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
  getDetails() {
    return `The name of movie is ${this.title} it is directed by ${this.director} and released on ${this.year}`;
  }
}

const movie = new Movie("Demolition", "Someone", 2015);
// console.log(movie.getDetails());

/* 13. Create a class `Library` that contains an array of books. Implement methods to add a book, remove a book, and display all books. */

class Library {
  constructor() {
    this.books = []; // Array to store books
  }

  addBook(title, author) {
    this.books.push({ title, author });
    return `${title} by ${author} added to the library.`;
  }

  removeBook(title) {
    let index = this.books.findIndex((book) => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
      return `${title} has been removed from the library.`;
    }
    return `Book not found!`;
  }

  displayBooks() {
    if (this.books.length === 0) {
      return "No books available in the library.";
    }
    return this.books
      .map((book) => `${book.title} by ${book.author}`)
      .join("\n");
  }
}

let myLibrary = new Library();
// console.log(myLibrary.addBook("Atomic Habits", "James Clear"));
// console.log(myLibrary.addBook("The Alchemist", "Paulo Coelho"));
// console.log(myLibrary.displayBooks());
// console.log(myLibrary.removeBook("Atomic Habits"));
// console.log(myLibrary.displayBooks());

/* 14. Create an `Item` class with properties `name` and `price`. Implement a method to calculate the total price after applying tax. */

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  finalPrice(tax) {
    const taxCalculation = this.price + (this.price * tax) / 100;
    return `The final price of the ${this.name} after $${tax} is $${taxCalculation}`;
  }
}
let item1 = new Item("Speaker", 500);
// console.log(item1.finalPrice(20));

/* 15. Implement a class `Counter` with methods `increment()` and `decrement()`. Add a method `getCount()` to retrieve the current count value. */

class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
    return `Current incemented count is ${this.count}`;
  }
  decrement() {
    this.count--;
    return `Current decremented count is ${this.count}`;
  }
  getCount() {
    return `Current count is ${this.count}`;
  }
}

let counter = new Counter();
// console.log(counter.getCount()); 
// console.log(counter.increment()); 
// console.log(counter.increment()); 
// console.log(counter.decrement()); 
// console.log(counter.getCount());  
