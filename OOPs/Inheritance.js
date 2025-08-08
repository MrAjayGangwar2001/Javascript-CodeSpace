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

Trainer__proto__= user, Trainer                        // Yahan Teacher bhi User ki property access kar rha hai

console.log(user);



// Modern Way of Inheritance in JavaScript....-.--------- :-)


Object.setPrototypeOf(Trainer, user); // Yahan Teacher bhi User ki property access kar rha hai




let name = "      Ajay         "

String.prototype.TrueLength = function(){
    return this.trim().length
}
console.log(name.TrueLength())

"        Gangwar  ".TrueLength();
"    Java       Full      Stack    ".TrueLength();
