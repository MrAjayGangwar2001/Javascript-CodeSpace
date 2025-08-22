// const btn = document.querySelectorAll(".button");
// const bdy = document.querySelector("body");
// console.log(btn);
// btn.forEach((buttn) => {
//     buttn.addEventListener("click", (e) => {
//         if (e.target.id === "red") {
//             bdy.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === "blue") {
//             bdy.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === "pink") {
//             bdy.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === "green") {
//             bdy.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === "orange") {
//             bdy.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === "purple") {
//             bdy.style.backgroundColor = e.target.id;
//             alert(`you Have Clicked on ${e.target.id} color`)

//         }
//     })
// })

// ---------------PROJECT 2-------- BMI Calculator---------
// 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇

// const form = document.querySelector("form");

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     const height = parseInt(document.querySelector("#Height").value);
//     const weight = parseInt(document.querySelector("#Weight").value);
//     const result = document.querySelector("#Result");
//     const Info = document.querySelector("#info");

//     if (height === '' || height < 0 || isNaN(height)){
//              result.innerHTML = `Please Enter a Valid ${height}`;
//              console.log("result Processing");
//     }else if (weight === '' || weight < 0 || isNaN(weight)){
//              result.innerHTML = `Please Enter a Valid ${weight}`;
//              console.log("result Calculating");
//     }
//     else {
//         let BMI = ( weight / ((height * height)/10000)).toFixed(2);
//         result.innerHTML = `Your BMI is ${BMI}`;
//         console.log("result calculate");

//     if (BMI < 18.6) {
//         Info.innerHTML = "You are underweight";
//         console.log("underweight");

//     } else if(BMI < 24.9) {
//         Info.innerHTML = "You are in Normal Range";
//         console.log("Normal weight");
//     } else{
//         Info.innerHTML = "You are Overweight";
//         console.log("Over weight");
//     }
// }
// })

// ---------------PROJECT 3-------- Clock---------
// 👇👇👇👇👇👇�👇👇👇👇👇👇�👇👇👇👇👇👇�👇👇👇👇👇👇�

// const clock = document.querySelector("#time");

// setInterval( ()=> {
//     let time = new Date();
//     clock.innerHTML = time.toLocaleTimeString();

// },1000 )

// ---------------PROJECT 4----------`Guess Any Number-------

// // const RdmNum = Math.floor(Math.random() * 100) + 1;
// let RdmNum = parseInt(Math.random() * 100) + 1;
// // console.log(RdmNum);


// let Input = document.querySelector("#inpt");
// let Submit = document.querySelector("#sbmt");
// let PGuess = document.querySelector("#pgnum");
// let GRemain = document.querySelector("#rgnum");
// let Result = document.querySelector(".history");
// let msgBox = document.querySelector("#para");
// let topatt = document.querySelector("#top");

// let p = document.createElement("p");
// let prevGuess = [];
// let RemainGuess = 10;
// //let RemainGuess = 0;
// let playGame = true;

// if (playGame) {
//     console.log("This is play button");
//     Submit.addEventListener("click", (e) => {
//         e.preventDefault();
//     let guess = parseInt(Input.value);
//     ValidateGuess(guess);
//   });
// }

// function ValidateGuess(guess) {
//     if(isNaN(guess)){
//         alert("Please Enter a Number !");
//     } else if (guess < 1) {
//     alert("Please Enter a Number from 1 !");
//   } else if (guess > 100) {
//     alert("Please Enter Number Between 1 to 100 !");
//   } else {
//     prevGuess.push(guess);
//     if (RemainGuess === 1) {
//       DisplayGuess(guess);
//       Displaymssg(
//         `Game Over ! You have used all your guesses ! Random Number was ${RdmNum}`
//       );
//       EndGame();
//     } else {
//       DisplayGuess(guess);
//       CheckGuess(guess);
//     }
//   }
// }

// function CheckGuess(guess) {
//   if (guess == RdmNum) {
//     Displaymssg("Congratulation!🎉🎊 Your Guess is Correct !");
//     EndGame();
//   } else if (guess < RdmNum) {
//     Displaymssg("Number is Lower !");
//   } else if (guess > RdmNum) {
//     Displaymssg("Number is Higher !");
//   }
// }

// function DisplayGuess(guess) {
//   Input.value = "";
  
//   PGuess.innerHTML = `${prevGuess.join(", ")}`;
//   RemainGuess--;
//   // GRemain.innerHTML = `${10 - RemainGuess}`;
//    GRemain.innerHTML = `${RemainGuess}`;
//    topatt.innerHTML = `${RemainGuess}`;
// }

// function Displaymssg(msg) {
// //  let msgBox = document.createElement("p");
//   msgBox.innerHTML = `<h2>${msg}</h2>`;
//   msgBox.style.color = "red";
//   msgBox.appendChild(p);
// }

// function EndGame() {
//   Input.value = "";
//   Input.disabled = true;
//   Input.setAttribute("disabled", "");
//   Submit.setAttribute("disabled", "");
//   p.classList.add("button");
//   p.innerHTML = `<h2 id="newgame">Start New Game </h2>`;
//   Result.appendChild(p);
//   playGame = false;
//   NewGame();
// }

// function NewGame() {
//   let NewGame = document.querySelector("#newgame");
//   NewGame.addEventListener("click", function (e) {
//     let RdmNum = parseInt(Math.random() * 100) + 1;
//     prevGuess = [];
//     RemainGuess = 10;
//     GRemain.innerHTML = `${RemainGuess}`;
//     topatt.innerHTML = `${RemainGuess}`;
//     Input.removeAttribute("disabled");
//     Submit.removeAttribute("disabled");
//     Input.value = "";
//     Result.removeChild(p);
//     playGame = true;
//   });
// }
