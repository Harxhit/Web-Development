//Que-1 Create variables for the following data types and print their values: a number, a string, a boolean, undefined, and null.

// let num = 38;
// console.log(num);

// let value = true;
// console.log(value);

// let name = 'Travis Scott';
// console.log(name);

// let nothing = null;
// console.log(nothing);

// let notDefined = undefined;
// console.log(notDefined);

//Que 2- Check if the type of a variable is a string using typeof?

let num = 38;
console.log(num);
console.log(typeof num);

let value = true;
console.log(value);
console.log(typeof value);

let name = "Travis Scott";
console.log(name);
console.log(typeof name);
//This is a string data type. 

let nothing = null;
console.log(nothing);
console.log(typeof nothing);

let notDefined = undefined;
console.log(notDefined);
console.log(typeof notDefined);


//Create an array of 5 colors and print the third color.

let colors = ['red', 'blue', 'green', 'teal', 'yellow'];
console.log(colors[2]);

//Add a new color to the end of the array and print the updated array.

colors.push('black');
console.log(colors);

//Remove the first item from an array and print the updated array.

colors.shift(); 
console.log(colors);

// Create an array of 3 numbers and calculate their total (manually, without using a loop).

let nums = [1, 2, 3];
result = nums[0] + nums[1] + nums[2];
console.log(result); 


//Create an object to represent a book with properties like title, author, and pages.

let book = {
  title: 'Nightmares',
  author: 'God',
  pages:21,
}

//Update the pages property of the book object to a new number and print the object.

book.pages = 20; 
console.log(book);

//Add a new property genre to the book object and set its value.

book.genre = 'Fiction'; 
console.log(book); 

//Create an object and an array, then print their types using typeof.

console.log(typeof (book));
console.log(typeof (colors));  