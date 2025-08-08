//   Here We are Going to Learn ProtoType Inheritance
//   ProtoType Inheritance is a Old way of Inheritance in JavaScript
//   Also We will See Modern Way of Inheritance in JavaScript


//  Old Methods.............
let user = {
    name: "Ajay",
    age: 24,
    Academy : "UnCodeMy",
    occupation: "Software Engineer"
}

const Trainer = {
    Trainer_Name : "Snehank",
    Traning_and_Guiding : true
}

const PlacementSupport = {
    isSupport : false
}

const OfficeSupport = {
    isAvailable24x7 : 'Not 24x7',
    isSupport : true,
  //  __proto__:PlacementSupport
}

Trainer__proto__= user                        // Yahan Teacher bhi User ki property access kar rha hai
OfficeSupport__proto__ = PlacementSupport

 console.log(user);
// console.log(PlacementSupport);
//console.log(Trainer);



// Modern Way of Inheritance in JavaScript....-.--------- :-)


Object.setPrototypeOf(Trainer, user); // Yahan Teacher bhi User ki property access kar rha hai




let name = "      Ajay  _ Gangwar         "

String.prototype.TrueLength = function(){
    return this.trim().length
}
console.log("Actual Length : ", name.TrueLength())

let surname = "        Gangwar  ".TrueLength();
let course = "    Java       Full      Stack    ".TrueLength();

console.log("Surname Length is : ", surname);
console.log("Course Length is : ", course);

