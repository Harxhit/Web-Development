/* 
1.Write a function named makeTea that takes one parameter typeOfTea and returns a string like Making a green tea when called with green tea . Store the result in a variable named teaOrder. 
*/

function makeTea(typeOfTea) {
  return `Making a ${typeOfTea}`;
}
// console.log(makeTea('green tea'));

/* 
2.Create a function named orderTea that takes one parameter teaType . Inside this function , create another function named confirmOrder for chai . Call confirmOrder within orderTea and returns the result. 
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Your order is ${teaType}`;
  }
  return confirmOrder();
}
// console.log(orderTea('masala chai'));

/* 
3.Write an arrow function named calculateTotal that takes two parameter: price and quantity . The function should return the total cost by multiplying the price and quantity . Store the result in a variable named totalCost. 
*/

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

// console.log(calculateTotal(500, 100));

/* 
4. Write a function named createTeaMaker that returns another function. The returned function should accept one parameter, teaType, and use it to return a string in the format: "Making <teaType>". Assign the returned function to a variable named teaMaker, and call teaMaker with "green tea" to demonstrate its functionality. 
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

const teaMaker = createTeaMaker();
// console.log(teaMaker('green tea'));

/*
5.Write a function called processTeaOrder that takes another function makeTea as a parameter. Inside processTeaOrder, call makeTea with the argument "earl grey", and return the result of calling makeTea.
*/

function processTeaOrder() {
  return makeTea("earl grey");
}
function makeTea(teaType) {
  return `Making ${teaType} `;
}

// console.log(processTeaOrder(makeTea));
