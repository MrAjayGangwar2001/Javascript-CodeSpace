const accountId = 14578;
let accountEmail = "gangwar637@gmail.com";
var accountPassword = "123456789";
accountName = "Ajay Gangwar";
accountCity = "Delhi";
// accountId = 12345; // This will throw an error because accountId is a constant
// console.log(accountId);

accountEmail = "ajaygangwar53@gmail.com";
accountPassword = "987654321";
accountName = "Ajay";
// console.log(accountEmail);
// console.log(accountPassword);         // Instead of these print method many times we can use console.table
console.table({ accountId, accountEmail, accountPassword, accountName });

// Don not Use var keyword because of issue of Block scoop and functional scoop
