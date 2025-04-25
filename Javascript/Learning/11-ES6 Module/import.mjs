//Default Import
import multiplication from "./export.mjs";

//Named Import

import { add, subtraction } from "./export.mjs";

console.log(multiplication(2, 2));
console.log(add(2, 4));
console.log(subtraction(2, 4));

// ❌ Error:
// SyntaxError: Cannot use import statement outside a module

// ✅ Fix Options:

// -------------------------
// Option 1: Enable ES Modules
// -------------------------

// 1. In package.json, add:
// {
//   "type": "module"
// }

// 2. Use import/export syntax:
// import multiplication from "./export.js";

// -------------------------
// Option 2: Use .mjs Extension
// -------------------------

// Rename your files:
// import.mjs
// export.mjs

// Then use ES module syntax:
// import multiplication from "./export.mjs";

// Run using:
// node import.mjs

// -------------------------
// Option 3: Use CommonJS Syntax
// -------------------------

// export.js
// function multiplication(a, b) {
//   return a * b;
// }
// module.exports = multiplication;

// import.js
// const multiplication = require('./export.js');
// console.log(multiplication(2, 3)); // 6

// -------------------------

// 👉 Use Option 1 or 2 for ES Modules (import/export)
// 👉 Use Option 3 for CommonJS (require/module.exports)
