// if
const isUserLoggedIn = true;
const temprature = 65;

// if (temprature < 50 )  {
//     console.log("temprature is less than 50")
// } else (
//     console.log("temprature is greater than 50")
// )

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200; 

// if(score > 100) {
//     const power = "fly"
//     console.log(`your power : ${power}`)
// }
// console.log(`your power : ${power}`)

// const balance = 1000;
// if(balance > 200) console.log("test"),console.log("test2"); // This is not good practice

// const balance = 1000;

// if(balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");  
// }else if (balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userloggedin = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if(userloggedin && debitcard && 3 == 2) {
    console.log("Allow to but course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User LoggedIn")
}