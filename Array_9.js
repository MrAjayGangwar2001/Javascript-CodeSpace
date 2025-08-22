// Array --

const arr = [1, 2, 3, 4, 5];
const arr2 = ["Ajay", "Sanjay", "Aditya", "Mohit", "Rohit"];

const arr3 = new Array (1, 2, 3, 4, 5, 6) /// We can Initialize like this

console.log(arr[2]);

//  Methods  ------------>

// 1. push()  - Add element at the end of the array

arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

// console.log("After Using Push/Adding Method", arr); // [1, 2, 3, 4, 5, 6]

// 2. pop()  - Remove element from the end of the array

arr.pop();
arr.pop();
 console.log(`After Using Popping/Removing Method ${arr}`); 

arr.unshift(0);           // It adds element at the beginning of the array
// console.log(arr);

arr.shift()                 // It removes element from the beginning of the array
// console.log(arr);

// console.log(arr.includes(5));       // It checks if the element is present in the array or not
// console.log(arr.indexOf(5));       // It returns the index of the element in the array

let modearr = arr.join();
 console.log("This is join method" , modearr); // It converts the array type into string
// console.log(typeof arr);  //object
// console.log(typeof modearr);  // string

// 🙄🤦‍♂️🙄🤦‍♂️🙄🤦‍♂️🙄🤦‍♂️🙄🙄

// slice VS Splice

// 3. splice()  - It is used to add or remove elements from the array.
// It takes three parameters: index, how many elements to delete, and what to add.

let tukde = arr.slice(1, 5);
// console.log(tukde); // [2, 3, 4, 5]
// console.log(arr);  //  [1, 2, 3, 4, 5, 7, 8, 9]

let tukde2 = arr.splice(1, 5);
// console.log(tukde2);   // [ 2, 3, 4, 5, 7 ]
// console.log(arr);     //  [ 1, 8, 9 ]

//  🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️

const Marval = ["Thor", "IronMan", "Thanos", "SpiderMan" ]
const IPL = ["Rohit", "Hardik", "Chahal", "Surya", "Tilak"]

// Marval.push(IPL)
// console.log(Marval); // ['Thor','IronMan','Thanos','SpiderMan',[ 'Rohit', 'Hardik', 'Chahal', 'Surya', 'Tilak' ]]
// console.log(Marval.indexOf("Thanos"));
// console.log(Marval[4])
// console.log(Marval[4][2])

const merg = Marval.concat(IPL)
console.log(merg); //

// Spread is Another Method to concat Array
const Avengers = [...Marval, ...IPL];
// console.log(Avengers); // ['Thor',   'IronMan','Thanos', 'SpiderMan','Rohit',  'Hardik','Chahal', 'Surya','Tilak']

// Flat Method  ----- it sort or merge all nested array into one array

const AllInOne = [1, 2, 3, 4, 5, ["A", "B", "C",[1, 2, 3, 4,["i", "ii", "iii"],5, 6],"D", "E", "F"], 7, 8, 9];   // mIX oR nESTED aRRAY
//---  .flat(Infinity)..........This method is used to sort all the nested arrays into one array in depth by auto.
console.log(AllInOne.flat(Infinity));   // [1,   2,   3,   4,    5,'A', 'B', 'C', 1,    2,3,   4,   'i', 'ii', 'iii',5,   6,   'D', 'E',  'F',7,   8,   9]

//console.log(Array.isArray("Ajay_Gangwar")); // false...... It checks if the element is array or not
console.log(Array.from("Ajay_Gangwar"));     // It converts the string into array

console.log({name : "Ajay"}); /// []   ... It returns Empty Array it not convert in Array


let sc = 100
let sc2= 200
let sc3= 300
let sc4= 400
let sc5= 500
let sc6= 600
let sc7= 700
// console.log(sc + sc2 + sc3 + sc4 + sc5 + sc6 +sc7)
//console.log(Array.of(sc, sc2, sc3, sc4, sc5, sc6, sc7));












