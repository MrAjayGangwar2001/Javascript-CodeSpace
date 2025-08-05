
function user(username){
    this.user = username;
    console.log("This User Will be call by Another Function!");
    
}

function Details(username, age, gender, work, place){
    user.call(this, username)
    this.age = age;
    this.gender = gender;
    this.work = work;
    this.place = place;
    console.log("This User Details will Print When function Will be Call");
}
let print = new Details("Pirate Carabian", 23, "Male", "Thief", "Ships");
console.log("Here are Some Detail of User : ", print);


