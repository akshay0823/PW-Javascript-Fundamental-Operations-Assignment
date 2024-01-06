// Q3. Differentiate between unary, binary, and ternary operators in Javascript. Give examples of each.

// 1.Unary Operators:
let num = 10;
console.log(-num); // Unary minus: Output: -10
let bool = true;
console.log(!bool); // Logical NOT: Output: false
let str = "Hello";
console.log(typeof str); // Type identification: Output: string

// 2.Binary Operators:

let a = 5;
let b = 3;
console.log(a + b); // Addition: Output: 8
let x = true;
let y = false;
console.log(x && y); // Logical AND: Output: false

// 3.Ternary Operator:

let age = 20;
let allowed = age >= 18 ? "Allowed" : "Not Allowed";
console.log(allowed); // Output depends on the condition
