// Functions for handling various operations

function Test() {
  console.log("Test function executed Successfully!");
}
Test();

function Add(a, b) {
  // let result = a + b;
  // return result;
  console.log("Adding two numbers:", a, "and", b);

  return a + b; // Directly returning the sum
  console.log("This line will not execute because return exits the function.");
}
let sum = Add(5, 10); // Returns 15
console.log("Sum:", sum);

function isLoggedIn(user = "Guest") {         // Default/fixed name(Guest) to handle undefined case
//   if (user.isLoggedIn) {
//     console.log(`${user.name} is logged in.`);
//   } else {
//     console.log(`${user.name} is not logged in.`);
//   }

  //  if(user === undefined || user == null) {    // OR
    if (!user) { // This checks for both undefined and null
        console.log("User is not defined or null.");
        return;
    }
    // else{
    //     console.log(`${user} is logged in.`);
    // }

}
// isLoggedIn({ name: "Rahul",
//        isLoggedIn: false
// });

// isLoggedIn("Ajay")
 isLoggedIn(); // No user object passed, should handle undefined case
// isLoggedIn(null); // Passing null, should handle null case


function greetuser(name = "Guest") { // Default name is "Guest" if no name is passed
  if (name) {
    console.log(`Hello, ${name}!`);
  }
}
greetuser("Sanjay");
greetuser(); // No name passed, should greet as Guest