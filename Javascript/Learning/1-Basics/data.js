// Notes //

//Types of Data in JavaScript-
//1- String : These are the set of alphabets 
let name = 'Harshit'; 
// 2 - Numbers : We use numbers in our daily life for arithmetic and logical operations. 
let scrore = 102; 
// 3 - Boolena : Boolean are true or false. 
let isLoggedIn = false
// 4 - Big Integer
// 5 - Undefined
// 6 - Null
// 7 - Objects 
let names = ['Harshit' , 'Arjit']
let fullName = { firstName: 'Harshit', lastName:'Parihar'}
// 9 - Symbols

// Changes in JavaScript Variable //

//Here I am able to change the firstName because I used the let keyword .
let firstName = 'Harshit';
firstName = 'Arjit'; 
console.log(firstName); 

//Here if I try to change the firstName I will get a type error because when we use const keyword we are not able to change the value stored inside the varibale . 
const firstNames = 'Harshit'; 
firstName = 'Arjit'; 

