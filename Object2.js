// The second Type of Mehod to create Object is Singleton
// 1. singleton --------> in this singleton object create by constructer

// let app = new Object();  // singleton object create by constructor

let app = {}; // non-singleton object create by object literal

app.id = "A101";
app.name = "Rahul";
app.isLoggedIn = false;

const user = {
  id: "U101",
  name: "Ajay",
  isLoggedIn: false,
  Address: {
    User_Full_Add: {
      vill: "Saidpur Saraura",
      city: "Bareilly",
      state: "U.P",
    },
  },
};

console.log(user);

console.log(user.Address.User_Full_Add.vill);
console.log(user.Address.User_Full_Add.city);

let obj1 = {
    1:"A",
    2: "B",
    3: "C"
}
let obj2 = {
    4: "D",
    5: "E",
    6: "F"
}

console.log(obj1[1]); // A
let obj3 = Object.assign(obj1, obj2)
let obj4 = Object.assign({}, obj1, obj2)
//let obj5 = {...obj1, ...obj2};    ///  by spread method
console.log(obj3);
console.log(obj4);


let dbvalue = [
    {
        id: 1,
        name: "Rahul"
    },
    {
        id: 2,
        name: "Ajay"
    },
    {
        id: 3,
        name: "Mohit"
    }
]
console.log(dbvalue[0].name);
console.log(dbvalue[1].id);

console.log(Object.keys(user));
console.log("This is the entries Method: " );

console.log(Object.entries(user));
console.log(Object.keys(user.Address.User_Full_Add));
console.log(Object.values(user.Address.User_Full_Add));

//  hasOwnProperty()   ----- It checks the given value/ properties is Available or not in object
console.log(user.hasOwnProperty('isLoggedIn'));
console.log(user.hasOwnProperty('isLoggedOut'));



// Ab Hum Sekhenge object ko De-Structure karna

const Course = {
    CName : "Java Full Stack Development",
    CPrice : 25000,
    CDuration : "6-7 Months",
    CInstructer : "Snehank"
}
console.log(Course);

const {CName, CPrice, CDuration, CInstructer:Teacher} = Course;   // CInstructer : Teacher ---> Means we can rename the variable name acc. yourself
console.log(CName);
console.log(CPrice);
console.log(CDuration);
console.log(Teacher);
