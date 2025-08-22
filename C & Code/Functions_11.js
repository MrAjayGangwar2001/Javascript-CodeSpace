function Shopping_cart(var1, var2, ...num){
    return num
}
console.log("Total items in the cart: " + Shopping_cart(10,50,120)); // Outputs: Total items in the cart: 10

const user = {
    name: "John",
    age: 30
}
function displayUserInfo(anyObj) {
    console.log(`Name: ${anyObj.name}, Age: ${anyObj.age}`);
}
// displayUserInfo(user);
displayUserInfo({ 
    name: "Alice",
    age: 25 }); // Outputs: Name: Alice, Age: 25

    let arr = [1, 2, 3, 4, 5];
function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log("Sum of array elements:", sumArrayElements(arr)); // Outputs: Sum of array elements: 15

function arrfn(arrow){
    return arrow[2]
}
console.log(arrfn(arr));
console.log(arrfn([10, 20, 30, 40, 50])); // Outputs: 30

