let Name = "      Ajay      ";
let user = "      Rohan      ";

// String.prototype.TrueLength = function(){
//     return this.trim().length;
// }
console.log(user.TrueLength())
 console.log(Name.TrueLength());

console.log(Name.trim().length);
console.log(user.trim().length);


let Actor = ["Akshay", "Sunil", "Paresh"];

let ActorMovie = {
    "Akshay" : "Garam Masala",
    "Sunil" : "Dhamaal",
    "Paresh" : "Golmaal",

    ActorMixMovie : function(){
        console.log(`Thes all three Actor Movie is ${this.paresh}`);
        
    }
}

// Object.prototype.Ajay = function () {                      // It is Injecting Ajay FunctionUnder the Objects
//         console.log("Hello ! I am Ajay Under The Prototype of Object");
// }