/* 
Question 1: Write a while loop that counts all the numbers from 1 to 50.
 */
let i = 0;
let sum = 0;
while (i < 50) {
  sum += i;
  i++;
}
// console.log(sum);

/* 
Question 2: Write a while loop that counts from 5 to 1 and stores the numbers in an array named countdown. 
*/
let j = 5;
let countdown = [];
while (j > 0) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

/* 
Question 3: Write a do-while loop that prompts a user to enter their favorite tea type until they enter "stop". Store each type in an array named teaCollection.
 */
let teaCollection = [];
let input;

// do {
//   input = prompt(Please add you favourite tea types 'enter stop' to exit);
//   if (input.toLocaleLowerCase() !== 'stop') {
//     teaCollection.push(input);
//   }
// } while (input.toLowerCase() !== "stop");
// console.log(teaCollection);

/*
 Question 4: Write a do-while loop that adds numbers from 1 to 3 and stores the result in a variable named total.
  */
let total = 0;
let k = 1;

do {
  k < 4;
  total += k;
  k++;
} while (k < 4);
// console.log(total);

/* 
Question 5: Write a for loop that multiplies each element in the array [2, 4, 6] by 2 and stores it inside the array named multipliedNumbers.
 */
let nums = [2, 4, 6];
let multipliedNumbers = [];

for (let index = 0; index < nums.length; index++) {
  let element = nums[index] * 2;
  multipliedNumbers.push(element);
}
// console.log(multipliedNumbers);

/* 
Question 6: Write a for loop that lists all the cities in the array ['Paris', 'New York', 'Tokyo', 'London'] and stores each city in a new array named cityList. 
*/
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let index = 0; index < cities.length; index++) {
  const element = cities[index];
  cityList.push(element);
}
// console.log(cityList);

/* 
Question 7: Write a for loop that loops through the array ['green tea', 'black tea', 'chai', 'oolong tea'] and stops the loop when it finds 'chai'. Store all teas before 'chai' in a new array named selectedTeas.
 */

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

/* 
Question 8: Write a for loop that loops through the array ['London', 'New York', 'Paris', 'Berlin'] and skips 'Paris'. Store the other cities in a new array named visitedCities.
*/

let cityArray = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cityArray.length; i++) {
  if (cityArray[i] === "Paris") {
    continue;
  }
  visitedCities.push(cityArray[i]);
}
// console.log(visitedCities);

/* 
Question 9: Use a for-of loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number 4 is found. Store the numbers before 4 in an array named smallNumbers.
 */

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const nums of numbers) {
  if (nums === 4) {
    break;
  }
  smallNumbers.push(nums);
}
// console.log(smallNumbers);

/*
 Question 10: Use a for-of loop to iterate through the array ['chai', 'green tea', 'herbal tea', 'black tea'] if chai found skip and store the other teas in an array named preferredTeas. 
*/

let myTea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of myTea) {
  if (tea === "chai") {
    continue;
  }
  preferredTeas.push(tea);
}
// console.log(preferredTeas);

/* Question 11: Use a for-in loop to loop through an object containing city populations. Stop the loop when the population of 'Berlin' is found and store all previous cities' populations in a new object named cityPopulations. 
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
*/
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityPopulations = {};

for (const key in citiesPopulation) {
  if (key === "Berlin") {
    break;
  }
  cityPopulations[key] = citiesPopulation[key];
}

// console.log(cityPopulations);

/*Question 12: Use a for-in loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named largeCities. 

let worldCities = {
'Sydeny': 5000000 , 
'Tokyo' : 9000000, 
'Berlin' : 35000000, 
'Paris' : 2200000
}*/

let worldCities = {
  Sydeny: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};

for (const key in worldCities) {
  if (worldCities[key] < 3000000) {
    continue;
  }
  largeCities[key] = worldCities[key];
}
// console.log(largeCities);

/* 
Question 13: Write a forEach loop that iterates through the array ['earl grey', 'green tea', 'chai', 'oolong tea']. 
Stop the loop when chai is found and store all previous tea types in an array named avaibleTeas.
*/

let tea = ["earl grey", "green tea", "chai", "oolong tea"];
let avaibleTeas = [];

tea.forEach((element) => {
  if (element === "chai") {
    return;
  }
  avaibleTeas.push(element);
});
// console.log(avaibleTeas);

/*
Question 14: Write a forEach loop that iterates through the array ['Berlin' , 'Tokyo' , 'Sydney' , 'Paris'] . 
Skip Sydney and store the other cities in and array named traveledCities.
*/

let myCity = ["Berlin", "Tokyo", "Sydeny", "Paris"];
let traveledCities = [];

myCity.forEach((element) => {
  if (element === "Sydney") {
    return;
  }
  traveledCities.push(element);
});
// console.log(traveledCities);

/*
Question 15: Write a for loop that iterates through the array [2,5,7,9] . 
Skip the value 7 and multiply the rest by 2 and store the result in a new array named doubledNumbers . 
*/

let number = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < number.length; i++) {
  if (number[i] === 7) {
    continue;
  }
  const mult = number[i] * 2;
  doubledNumbers.push(mult);
}

// console.log(doubledNumbers);

/*
Question 16: Write a for-of loop to iterate through the array ['chai', 'green tea' , 'black tea' , 'jasmine tea' , 'herbal tea'] and stop when the length of the current tea name is greater than 10 . 
Store the teas iterayed over in an array named shortTeas .  */

let chai = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const element of chai) {
  if (element.length > 10) {
    break;
  }
  shortTeas.push(element);
}

// console.log(shortTeas);
``