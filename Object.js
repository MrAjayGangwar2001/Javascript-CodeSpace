// We can create two types of object
// 1. singleton --------> in this singleton object create by constructer
// 2. Object literal

const smbl = Symbol("Uniquee")
const obj = {
    name: 'Ajay',
    age: 25,
    [smbl] : "Uniquee",
    "Full Name" : "Ajay Gangwar",
    address: {
        House_No: 59,
        village : "Saidpur Saraura",
        Post : "Bhojipura",
        city : "Bareilly"
    },
    email : "ajay@gmail.com",
    isLoggenIn :false
}
     //console.log(obj)
     // console.log(obj.name);
     // console.log(obj["name"]);
  // console.log(obj["Full Name"]);
 // console.log(obj["address"]["village"]);
// console.log(obj.address.village);
 // console.log(obj["smbl"]);
  // console.log(obj[smbl]);
   // console.log(typeof obj[smbl]);

// obj.email = "gangwar030@gmail.com"
// Object.freeze(obj);                    // This Method is used to prevent the changes in object (obj is now immutable)
// obj.email = "gangwar@gmail.com";
// console.log(obj)

obj.greet = function(){
    console.log("Hello Ajay");
}
obj.greet2 = function(){
    console.log(`Hello, ${this.name} `);
}
console.log(obj.greet());
console.log(obj.greet2());
