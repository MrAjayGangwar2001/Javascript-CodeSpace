
function Multiply(num){
    this.num = num;
    return num * 8;
}
console.log(Multiply(5));
Multiply.power = 3
console.log(Multiply.power);
console.log(Multiply.prototype);


function User(username, email) {
    this.username = username;
    this.email = email;
    return `${this.username} and ${this.email}`;
}
console.log(User('aj', 'aj121@gmail.com'));


User.prototype.greet = function() {
    console.log(`Hello, I'm ${this.username}!`);
}
User.prototype.contact = function(){
    console.log(`You can contact me at ${this.email}.`);
}
let user = new User('Ajay', 'aj@example.com');
let user2 = new User('Rahul', 'rah@example.com');
user.greet();
user.contact();
user2.greet();
user2.contact();



