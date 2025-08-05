
function user(username){
    this.user = username;
    console.log("This User Will be call by Another Function!");
    
}

function Details(username, age, gender, work){
    user.call(this, username)
    this.age = age;
    this.gender = gender;
    this.work = work;
}
let print = new Details("Pirate Carabian", 23, "Male", "Thief");
console.log(print);


