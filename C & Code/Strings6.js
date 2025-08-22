let Name = "Ajay_Gangwar"; // String
let Age = 23; // Number
console.log("My Name Is " + Name + " and I am " + Age + " years old."); // Old And OutDated Method to concatenate Strings 
console.log(`My Name is ${Name} and I am ${Age} Years old.`); //  New and Modern Method to concatenate Strings

console.log(`This is the Origionl String:\n ${Name}`); 

console.log(Name.length); // Length of the String
console.log(Name.toUpperCase()); // Convert to Uppercase
console.log(Name.toLowerCase()); // Convert to Lowercase
console.log(Name.indexOf("G")); // Find the index of a character
console.log(Name.charAt(4)); // Get character at index 4
console.log(Name.charAt(5)); // Get character at index 5
console.log(Name.substring(5,12)); // Get substring from index 5 to 12
console.log(Name.slice(-5,12)); // Get substring from index 7 to 12

let NewName = "    Mr.Jay   "; // String with extra spaces
console.log(NewName.trim()); // Remove extra spaces from both ends
console.log(NewName.trimStart()); // Remove extra spaces from the start
console.log(NewName.trimEnd()); // Remove extra spaces from the end

console.log(Name.replace("Ajay", "Jay")); // Replace "Ajay" with "Jay"
console.log(Name.includes("jay")); // Check if "Jay" is in the string
console.log(Name.includes("Ajay")); // Check if "Jay" is in the string
console.log(NewName.includes(".")); // Check if "Jay" is in the string


let MyWebsite = "https://www.Code-On-Road.com";
console.log(MyWebsite);

console.log(MyWebsite.startsWith("https://")); // Check if the string starts with "https://"
console.log(MyWebsite.replace("Code", "AjCode")); // Replace "Code" with "AjCode"

console.log(MyWebsite.split(".")); // Split the string by "-"

// Some Other Methods for Strings
console.log(Name.at(2)); // Get character at index 2 using at() method
console.log(NewName.big()); // Display the string in big font--------- not used Now Days and Removed like this Another is blink(),bold(), Also it create HTML tags

let Course = "This Is The JavaScript Course by Chai And Code on YouTube";
console.log(Course.charCodeAt(12)); // Get the Unicode of character at index 12
console.log(Course.match(/[A-Z]/g)); // Match the string with a regular expression ---- output ==> ['T', 'I', 'T', 'J','S', 'C', 'C', 'A','C', 'Y', 'T']


let Emoji = "🔥😂👌🤷‍♂️🎯"; // Emoji
console.log(Emoji.codePointAt(0)); // Get the Unicode of character at index 0 in Emoji
console.log(Emoji.codePointAt(1)); // Get the Unicode of character at index 1 in Emoji
console.log(Emoji.codePointAt(2)); // Get the Unicode of character at index 2 in Emoji
console.log(Emoji.codePointAt(4)); // Get the Unicode of character at index 4 in Emoji

let Text = "\u0045\u0046\u0047\u0048\u0049\u0050\u0051\u0052\u0053";
let Text2 = "\u0041\u0042\u0043\u0044\u0045"; // Unicode characters
console.log(`${Text} and ${Text2}`); // Display the string with Unicode characters


let normalForm = Text.normalize(); // Normalize the string to normal form
let normalForm2 = Text2.normalize(); // Normalize the second string to normal form
console.log(`${normalForm2} , ${normalForm}`); // Display the normalized form



















