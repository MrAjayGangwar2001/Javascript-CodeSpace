class User{

    constructor(name, mail){
        this.name = name;
        this.mail = mail;
    }

    get mail(){
        return this._mail;
    }

    set mail(value){
        this._mail = value;
    }
    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }


}

const user = new User('John Doe', 'john.doe@example.com');
console.log(user.mail);
user.mail = 'ajay1223.com';
console.log(user.mail);
console.log(user.name);
user.name = 'Ajay';
console.log(user.name);


