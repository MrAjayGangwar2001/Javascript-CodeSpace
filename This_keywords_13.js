//  this keywords represent the current context

let user = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(this);
    }
    
}
// console.log("user:", user);
// user.greet(); // Outputs: Hello, my name is John and I am 30 years old.
// user.name = "Ajay";
// console.log("user:", user);

