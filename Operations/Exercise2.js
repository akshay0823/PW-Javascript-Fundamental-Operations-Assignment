// Q2. Describe the categorization of operators in JavaScript based on their functionality. Provide examples for
// each category.

// 1.Arithmetic Operators:
let a = 2,
  b = 3;
let sum = a + b;
let minus = a - b;
let multi = a * b;
let divide = a / b;
let rem = a % b;
console.log(sum + " " + minus + " " + multi + " " + divide + " " + rem);

// 2.Assignment Operators:
let x = 5;
x += 10; // x = x + 10
console.log("Value of x after addition is : " + x);

// 3.Comparison Operators
let p = 10;
let q = 5;
console.log(p > q); // Output: true
console.log(p === q); // Output: false

// 4.Logical Operators:
let condition1 = true;
let condition2 = false;
console.log(condition1 && condition2); // Output: false
console.log(condition1 || condition2); // Output: true

// 5.Unary Operators:
let num = 10;
console.log(-num); // Output: -10
console.log(typeof num); // Output: number

// 6.Bitwise Operators:
let x1 = 5; // Binary representation: 101
let y2 = 3; // Binary representation: 011
console.log(x1 & y1); // Output: 1 (binary 001)
