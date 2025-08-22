console.log("Hello from Chai And Code");
console.log("This is a test");
console.log("My Name Is Ajay");


let sum=0;
let i=0;
do{
    console.log("This is a test");
    i++;
    sum+=i;
    console.log("Sum is: " + sum);
}
while(i<5);

// replace(old, add);
let namee = "JavaScript is a JavaScript Scripting JavaScript programming language ";
let msg = "Hello Hi Hello Hi";     
console.log(msg.replace("Hello", "Hio"));           // replace first occurrence only...........Hio Hi Hello Hi
console.log(msg.replaceAll("Hello", "Hio"));        // replace all occurrences...........Hio Hi Hio Hi
console.log(namee.replace("JavaScript", "Hio")); // replace first occurrence only...........Hio is a JavaScript Scripting JavaScript programming language
console.log(namee.replace(/JavaScript/g, "Hio")); // global method /value/g
console.log(msg.replace(/Hello/g, "that")); // global method /value/g.........that Hi that Hi