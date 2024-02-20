// primitives data types

//  7 types : - string, number, boolean, null, undefined, symbol, bigInt

 const score = 11
const scoreValue = 101.2

const loggedIn = false

const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 11111111111111111111n

// console.log(id === anotherId)


// Referance data types 
// Arrays, Objects, functions

const myArrays = [ "mohit" , "Rohit" , "Ankit"]  // Arrays

let myObj = {
    name: "mohit",
    age: 20,
    height: 6,
}

const myFunction = function (){
    console.log("Hello World")

}

// console.log(typeof bigNumber)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  memory types  : -  Stack , Heap

let myYoutubeName = "HiteshChaudharydotcom"

let anotherName = myYoutubeName

console.log(anotherName)

let userOne = {
    Email: "mohit@gmail.com",
    upi: "user@ybl"
}

userTwo = userOne
userTwo.Email = "Mohitkumar@gmail.com"

console.log(userOne.Email)
console.log(userTwo.Email)

