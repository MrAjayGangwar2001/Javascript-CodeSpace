

let student1 = {
    name : "Ajay",
    age : 24,
    isLogin: true,

    Deatils : function(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Login: ${this.isLogin}`);
       // console.log(this);
        
    }
}
// console.log(student1);

student1.Deatils();

function Student(name, age, isLogin) {
    this.Name = name;
    this.Age = age;
    this.IsLogin = isLogin;

    this.greet = function() {
        console.log(`Hello, my name is ${this.Name}, I am ${this.Age} years old, and it is ${this.IsLogin} that I amsLogin.`);
    }

    return this; // This line is not necessary and will not work as expected
}

let student2 = new Student("Vijay", 22, false);
let student3 = new Student("Ravi", 21, true);

// Note :- In the above code, we have created a student object using the constructor function and the new keyword.

// When we use the new keyword, it creates a new instances/object and sets the context of 'this' to that new object. The function returns 'this', which is the newly created object.
// Reason of new keyword it call a Constructor 
// this keyword inject inside of the constructor function.
//  tha's why we can access the properties of the object using 'this' inside the constructor function.

 console.log(student2); // This will log undefined because the function does not return anything
console.log(student3); 
console.log(student3.constructor); 



