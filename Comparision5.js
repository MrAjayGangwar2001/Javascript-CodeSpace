// console.log(2==1); // false
// console.log(2==2); // true
// console.log(5>8); // false
// console.log(5<8); // true
// console.log(5>=5); // true
// console.log(5<=5); // true
// console.log(5!=5); // false



// Avoid using these type of Conversions in JavaScript
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
console.log("5" == 5); // true, type coercion happens
console.log("5" === 5); // false, strict equality, no type coercion
console.log("8" >9); // false, string comparison
console.log("08" < 9); // true, string comparison
console.log(null >0); // false, null is treated as 0 in comparisons
console.log(null == 0); // false, null is not equal to 0
console.log(null > 0); // false, null is treated as 0 in comparisons
console.log(null >= 0); // true, null is treated as 0 in comparisons
console.log(null == undefined); // true, both are loosely equal
//⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
console.log(undefined == null); // true, both are loosely equal
console.log(undefined === null); // false, strict equality, different types
console.log(undefined == 0); // false, undefined is not equal to 0
console.log(undefined > 0); // false, undefined is not comparable to numbers
console.log(undefined < 0); // false, undefined is not comparable to numbers
console.log(undefined >= 0); // false, undefined is not comparable to numbers
console.log(undefined <= 0); // false, undefined is not comparable to numbers

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️




