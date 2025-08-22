const User = {
    _name: 'Ajay Gangwar',
    _email : 'ajay@gmail.in',
    _password : 'Aj@123',

    get email(){
        return this._email;
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return this._password;
    },

    set password(value){
        this._password = value;
    }
}

let user = Object.create(User);
console.log(user.email);
user.password = "A123";
console.log(user.password);
user.email = "Aj@121gmail.com"
console.log(user.email);
