let num = 999;
let num2 = 999.879;
let num3 = 1000000000000000;

console.log(num.toString()); // Convert number to string
console.log(num.toFixed(3)); // Convert number to string with 2 decimal places
console.log(num2.toPrecision(4)); // Convert number to exponential notation with 2 decimal places
console.log(num3.toLocaleString('en-IN')); // Convert number to localized string




// ==========================================================MATHS==============================================
console.log(Math);
console.log(Math.PI); // Get the value of PI
console.log(Math.E); // Get the value of Euler's number
console.log(Math.abs(-5)); // Get the absolute value of -5
console.log(Math.ceil(4.2)); // Round up to the nearest integer
console.log(Math.floor(4.8)); // Round down to the near integer
console.log(Math.round(4.5)); // Round to the nearest integer
console.log(Math.max(1, 2, 3, 4, 5)); // Get the maximum value from a list of numbers
console.log(Math.min(1, 2, 3, 4, 5)); // Get the minimum value from a list of numbers
console.log(Math.sqrt(4)); // Get the square root of 16
console.log(Math.pow(2, 3)); // Get 2 raised to the power of 3
console.log(Math.log(10)); // Get the natural logarithm of 10
console.log(Math.random()*10); // Generate a random number between 0 and 1  *** Important
console.log(Math.floor(Math.random() * 10)); // Generate a random number between 0 and 1

let max = 50;
let min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Generate a random number between min and max
console.log(Math.trunc(4.8)); // Remove the decimal part of a number

let random = (Math.floor(Math.random() * (max - min + 1)) + min); // Generate a random number between min and max
console.log(Math.trunc(random)); // Display the random number without decimal part