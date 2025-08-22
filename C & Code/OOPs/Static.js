// In this file we Will Learn Static Method in Javascript

// static Method can't be used in another class also can not call in other place 
// static method is used to call in same class only.
// static method prevents from creating object of class.
// static method prevent to use or Access by Others.


class Customer{
    constructor(name){
        this.name = name;
    }

    static CID(){
        return this.name + "123 ";
    }

    loged(){
        console.log(`${this.name}is Loged in`);
    }
}
let check = new Customer("John ");
check.loged();
check.CID()

class Client extends Customer{
    constructor(name, email){
        super(name)
        this.email = email;
    }

}
let owner = new Client("John ","john@gmail.com");

console.log(owner);

console.log(owner.CID())
owner.loged()


