// Write a while loop that counts all the number from 1 to 50 .

let i = 0;
let sum = 0;
while (i < 50) {
  sum += i;
  i++;
}
console.log(sum);

// Write a while loop that counts from 5 to 1 and stores the number in an array named countdown .

let j = 5;
let countdown = [];
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

// Write a do while loop that promotes a user to enter their favourite tea type until they enter stop . Store each type in array named teaCollection.

let teaCollection = [];
let input;

// do {
//   input = prompt(`Please add you favourite tea types 'enter stop' to exit`);
//   if (input.toLocaleLowerCase() !=='stop') {
//     teaCollection.push(input)
//   }
// } while (input.toLowerCase() !== "stop");
console.log(teaCollection);

//Write a do while loop that adds number from 1 to 3 and stores the result in a variable named total .

let total = 0;
let k = 1;

do {
  k < 4;
  total += k;
  k++;
} while (k < 4);
console.log(total);

// Write a for loop that multiplies each element in the array [2,4,6] by 2 and stores it inside the array named multiplied numbers .

let nums = [2, 4, 6];
let multipliedNumbers = [];

for (let index = 0; index < nums.length; index++) {
  let element = nums[index] * 2;
  multipliedNumbers.push(element);
}
console.log(multipliedNumbers);

// Write a for loop that lists all the cities in the  array ['Paris' , 'New York' , 'Tokyo' , 'London'] and stores each city in a new array named   cityList .

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let index = 0; index < cities.length; index++) {
  const element = cities[index];
  cityList.push(element);
}
console.log(cityList);
