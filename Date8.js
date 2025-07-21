// Date & Time\


let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toISOString());
console.log(mydate.toDateString());
console.log(mydate.getTime());
console.log(mydate.getDate());
console.log(mydate.getFullYear());
console.log(mydate.getHours());
console.log(mydate.getMinutes());

// Custom Date

let MyCreatedDate = new Date(2020, 3, 29, 7, 9)
// let MyCreatedDate1 = new Date("2021-04-30")
let MyCreatedDate1 = new Date("09-29-2026")
console.log(MyCreatedDate.toString());
console.log(MyCreatedDate1.toLocaleString());
console.log(MyCreatedDate.toDateString());

// Time Stamp

let TimeStamp = Date.now()
console.log(TimeStamp);

console.log(MyCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

console.log(mydate);
console.log(mydate.getDay());
console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleString(
//     {
//         weekday: "long",
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//     }
// ));













