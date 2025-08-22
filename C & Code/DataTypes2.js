"Use strict"; // Treat All JS Code as newer version
console.log("Hello from Chai And Code");
//  alert("This is a test");  // we are using Node js so we can not use alert as of now ,will disscuss later
console.log("My Name Is : Ajay");
console.log("Gangwar");

// Data Types
// 1. Primitive Data Types
// 2. Non Primitive Data Types

//  1 . Primitive Data Types
let name = "Ajay"; // String
let age = 23; // Number
let isStudent = true; // Boolean
// bigint
let bigInt = BigInt(1234567890123456789012345678901234567890); // BigInt
// null
let emptyValue = null; // Null --> standalone value
// undefined
let notAssigned; // Undefined
// symbol
let uniqueSymbol = Symbol("unique"); // Symbol --> unique and immutable value

console.log(typeof name); // String
console.log(typeof age); // Number
console.log(typeof isStudent); // Boolean
console.log(typeof bigInt); // BigInt
console.log(typeof emptyValue); // Object
console.log(typeof notAssigned); // Undefined

// 1. Primitive Data Types
// number
// bigint
// string
// boolean
// null
// undefined
// symbol

// bigint
let bigNumber =BigInt(1234567890123456789012345678901234567890); // BigInt  OR
let bigNumber2 = 1234567890123456789012345678901234567890n; // BigInt

// 2. Non Primitive Data Types
// Object
// Array
// Function
// Reference Types

// symbol
// Symbols are unique and immutable data types introduced in ES6
const id = Symbol("56567");
const id2 = Symbol("56567"); // Symbols are unique, even if they have the same description
console.log(id === id2); // false, different symbols

// Array
let numbers = [1, 2, 3, 4, 5]; // Array
let fruits = ["Apple", "Banana", "Cherry"]; // Array of strings

// object
let person = {
  name: "Ajay",
  age: 23,
  isStudent: true,
  address: {
    city: "Delhi",
    state: "Delhi",
  },
};

// Function
function greet() {
  console.log("Hello, World!");
}
// OR
const greetFunction = function () {
  console.log("Hello, World!");
};


console.log(typeof bigNumber); // Object
console.log(typeof id); // Symbol
console.log(typeof numbers);
console.log(typeof fruits);
console.log(typeof person); // Object
console.log(typeof greet);
console.log(typeof greetFunction);



// 🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄

//  Stack vs Heap Memory
// Stack Memory: Used for primitive data types (e.g., numbers, strings, booleans)
// Heap Memory: Used for non-primitive data types (e.g., objects, arrays, functions)
//  Stack memory is faster and has a fixed size, while heap memory is slower but can grow dynamically.
//  Stack (PRIMITIVE Data Types): Stores values directly.
//  Heap (NON-PRIMITIVE Data Types): Stores references to objects, arrays, and functions.

let MyAddress = "Bareilly"; // Stack Memory (Primitive Data Type)
let MyNewAddress = MyAddress; // Stack Memory (Primitive Data Type)
MyNewAddress = "Ghaziabad"; // Changing NewAddress does not affect MyAddress
console.log("MyOldAddress: ", MyAddress); // Bareilly
console.log("MyNewAddress: ", MyNewAddress); // Ghaziabad

let MyDetails = {
    name: "Ajay",
    age: 23,
    city: "Bareilly",
    }; // Heap Memory (Non-Primitive Data Type)

    console.log("My Old Details: ", MyDetails); // { name: 'Ajay', age: 23, city: 'Ghaziabad' }
let MyNewDetails = MyDetails; // Heap Memory (Non-Primitive Data Type)
MyNewDetails.city = "Ghaziabad"; // Changing MyNewDetails affects MyDetails
console.log("My Updated Details: ", MyDetails); // { name: 'Ajay', age: 23, city: 'Ghaziabad' }
