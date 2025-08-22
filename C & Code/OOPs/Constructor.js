class Student{

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    fullname(surname){
        return this.name + '_' + surname;
    }
}

let print = new Student("Ajay", 34, "A");
console.log(print);

console.log("My Name is ",print.fullname("Gangwar"));

function user(username, age, email) {
    this.username = username;
    this.age = age;
    this.email = email;

    console.log(`UserName is : ${username}, Age is : ${age}, Email is : ${email}`);
    
}
user("@Jay", 21, "jay@gmail.com");
// console.log(user.prototype);
// console.log(user.);


user.prototype.fullname = function(surname){
    return this.username + ' ' + surname;

}

let printt = new user("Ajay", 34, "ajaygangwar@gmail.com");
console.log(printt);

console.log(printt.fullname("Gangwar"));


