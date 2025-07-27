// Immediate Invoked Function Expression (IIFE) to create a private scope

// REASON, WHY WE USE THIS TYPE OF FUNCTION:
// If we want to Execute Immediately Function Expression (IIFE), we can Create and Use this Type of Function:

// It Saves Memory and Avoids Global Scope Pollution

// It is a function that runs as soon as it is defined. We not need to call it
//    ==>  ()();


// It is A Named IFFE because we defined the name of function
( function immediat() {
    console.log("Hello from IIFE");
})();

// Arrow Function IIFE

( () => {
    console.log("Hello from Arrow Function IIFE");
} )();

( (Name) => {
    console.log(`Hello, My Name Is ${Name}. This Is from IIFE with parameter`);
})('Ajay Gangwar');