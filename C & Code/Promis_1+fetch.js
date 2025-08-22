// We will Disscus Promis in This Chapter

let promiseOne = new Promise((resolve, reject) => {
  // Do Async Task
  setTimeout(function () {
    console.log("Promis One");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promis One Done");
});

new Promise((resolve, reject) => {
  // Do Async Task
  setTimeout(function () {
    console.log("Promis Two");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promis Two Done");
});

const promiseThree = new Promise((resolve, reject) => {
  // Do Async Task
  setTimeout(function () {
    resolve({ Name: "Ajay", Age: 25, email: "gangwar030@gmail.com" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  // Do Async Task
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ Name: "Ajay", password: 1234 });
    } else {
      reject("Error: Something Went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.Name;
  })
  .then(function (myname) {
    console.log(myname);
    console.log("Promise Four Done");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() =>
    console.log("Finally Done ! Promise Either Resolve or Rejected")
  );

const promiseFive = new Promise((resolve, reject) => {
  // Do Async Task
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ Name: "RamBahadur", password: 1234 });
    } else {
      reject("Error: Something Went Wrong");
    }
  }, 1000);
});

async function consumepromiseFive() {
  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromiseFive();

// async and await Method is used.........
// async function GetGithubUser() {
//   try {
//     let response = await fetch(
//       "https://api.github.com/users/MrAjayGangwar2001"
//     );
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Kuch Eroor Aaya ! ", error);
//   }
// }
// GetGithubUser();


// then - catch Method are Here...
fetch('https://api.github.com/users/MrAjayGangwar2001')
.then((response) => {
  
  return response.json();
})
.then((data) => {
  console.log(data);
  console.log("The total Repository is : ",data.public_repos);
  console.log("The GitHub id is : ",data.id);
    
})
.catch((error) =>{
    console.log("Kuch Error Aaya ! ", error);
})
