

class User{
    constructor(name){
        this.name = name;
    }

    print(){
        console.log(this.name);
    }
}

class Teacher extends User {
    constructor(name, email, Address) {
        super(name)

        this.email = email;
        this.Address = Address;
    }

    AddCourse(){
        console.log(`Course Added by ${this.name}`);
    }
}

let teacher = new Teacher("Ajay", "Ajay@example.com", "123 Main St.");
console.log(teacher);
teacher.AddCourse();
teacher.print();

// let student = new User("vivek")
// student.print();

