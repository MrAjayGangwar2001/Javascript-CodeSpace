// let x = 10
// const y = 20;
// var z = 30;

// console.log("x:", x);
// console.log("y:", y);
// console.log("z:", z);

if (true) {
    let x = 10
    const y = 20;
    var z = 30;
}
// console.log("x:", x);
// console.log("y:", y);
console.log("z:", z);


function displayVariables() {
    //console.log("x:", x);
    //console.log("y:", y);
    console.log("z:", z);
}

displayVariables(); // Outputs: x: 10, y: 20, z: 30


function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        let innerVar = "I am from inner function";
        console.log(outerVar); // Accessing outer variable
        console.log(innerVar); // Accessing inner variable
    }
    // console.log(innerVar);
     innerFunction();
    console.log(outerVar);
}
outerFunction() // Outputs: I am from outer function, I am from inner function



if (true) {
    let blockScopedVar = "I am block scoped";
    let name = "John";
    if (name === "John") {
        let innerBlockVar = "I am inside inner block";
        console.log(blockScopedVar); // Outputs: I am block scoped
        console.log(innerBlockVar); // Outputs: I am inside inner block
        
    }
    // console.log(innerBlockVar);
    
}
// console.log(blockScopedVar); // Outputs: I am block scoped
// Function declaration is hoisted, so it can be called before its definition

console.log("Sum:", calculateSum(5, 10)); // it Also works because calculateSum is hoisted
function calculateSum(a, b) {
    return a + b;
}
console.log("Sum:", calculateSum(5, 10)); // Outputs: Sum: 15  // It works because calculateSum is hoisted

// console.log("Product:", multiply(5, 10)); // It Will throw an error because multiply is not defined yet

// if we create functionlike this, it will not be hoisted
let multiply = function(a, b) {
    return a * b;
}
console.log("Product:", multiply(5, 10)); // Outputs: Product: 50