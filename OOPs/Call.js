
function user(username){
    this.user = username;
    console.log("This User Will be call by Another Function!");
    
}

function Details(username, age, gender){
    user.call(this, username)

    this.age = age;
    this.gender = gender;
}
let print = new Details("Ajay", 23, "Male");
console.log(print);


