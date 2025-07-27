let name = 'Ajay';

for (let i = 0; i <= 10; i++) {
    console.log(`My Name Is ${name}`);

}
for (let i = 0; i < 5; i++) {
   console.log(i);
   
    
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
    
}

// for of Loop
// for of is used of an Array

let arr1 = [11, 12, 13, 14, 15]
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

for (const num of arr1) {
    console.log(num+10);
    
}
for (const frt of fruits) {
    console.log(frt);
}

// Map Loop
// Map is a collection of key-value pairs
// It is used to store unique keys and their corresponding values

let map = new Map();
map.set('name', 'Ajay');
map.set('age', 25);
map.set('city', 'Delhi');

console.log(map);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

for (const [key, value] of map) {
    //console.log(key);
    console.log(key, value);
}

let obj = {
    Math: 90,
    Science: 85,
    English: 88
}

// for (const [subject, marks] of obj) {               // it is not iterable direct like this
for (const [subject, marks] of Object.entries(obj)) {
    console.log(`${subject}: ${marks}`);
}

// for in Loop
// for in is used to iterate over the properties of an object

let dist = {
    UP : 'Lucknow',
    MP : 'Bhopal',
    Maharashtra : 'Mumbai',
    Delhi : 'New Delhi'

}

for (const key in dist) {
    // console.log(key);
    console.log(`${key} : A City ${dist[key]}`);

}

let arry = [101, 'Ajay', 'Gangwar', 25, 'Delhi'];

for (const index in arry) {
    // console.log(index);
    // console.log(arry[index]);
     console.log(`${index} : ${arry[index]}`);
    
}

// for each Loop
// forEach is a method that executes a provided function once for each array element
let numbers = [11, 12, 13, 14, 15];

numbers.forEach((num) => {
    console.log(num);
})

numbers.forEach((num, index, arr) => {
     console.log(`Index: ${index}, Value: ${num}`)
    // console.log(`Index: ${index}, Value: ${num}, Array: ${arr}`);
});


// numbers.forEach((num, index) => {
//     console.log(`Index: ${index}, Value: ${num}`);
// });