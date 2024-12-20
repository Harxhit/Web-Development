// 1. String
let str1 = "Hello"; // Primitive type
console.log(typeof str1); // Output: string

// 2. Number
let num1 = 2; // Primitive type
let num2 = new Number(128);
console.log(typeof num2); // Output : Object
console.log(typeof num1); // Output: number

// 3. Boolean
let isTrue = true; // Primitive type
console.log(typeof isTrue); // Output: boolean

// 4. Undefined
let notDefined; // Primitive type
console.log(typeof notDefined); // Output: undefined

// 5. Null
let emptyValue = null; // Primitive type
console.log(typeof emptyValue); // Output: object (special case in JavaScript)

// 6. Symbol
let symbol1 = Symbol("id"); // Primitive type
console.log(typeof symbol1); // Output: symbol

// 7. BigInt
let bigNumber = 123n; // Primitive type
console.log(typeof bigNumber); // Output: bigint
