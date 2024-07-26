// function sayMyName () {
//     console.log("M")
//     console.log("o")
//     console.log("h")
//     console.log("i")
//     console.log("t")
// }

// // sayMyName()

// // function addTwoNumbers(number1, number2) {
// //     console.log(number1 + number2)
// // }


// function addTwoNumbers(number1, number2) {
//     const result = number1 + number2 
//     // console.log("mohit")  
//     return result
// }

// const result = addTwoNumbers(23 , 23)
// // console.log("result:",   result);

// function userLoggedIn (userName = "sam") {
//     if(!userName){
//         // console.log("please enter a username");
//         return;
//     }
//     return `${userName} Just Logged In`
// } 

// // console.log(userLoggedIn("mohit"))


// // *************************new*************************

// function calculateCartPrize (val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrize(200, 300, 600, 1000, 2100));

// const user = {
//     userName : "mohit",
//     price : 199,
// }

// function myObject (anyobject) {
//     console.log(`username is ${anyobject.userName} and Price is ${anyobject.Price}`)
// }

// // myObject(user)
// myObject({
//     userName : "Mohit",
//     Price : 399
// })

// const myNewArray = [100, 200, 300 ,500]
// function returnThirdValue (getArray){
//     return getArray[2]
// }

// console.log(returnThirdValue(myNewArray));

function sayMyName () {
    console.log("M")
    console.log("o")
    console.log("h")
    console.log("i")
    console.log("t")
}

// sayMyName()

// function addTwoNumbers (number1, number2){
//     console.log(number1+number2)
// }
function addTwoNumbers (number1, number2){
    // let result = number1 + number2;
    // console.log("hitesh")
    // return result
    return number1 + number2

}

const result = addTwoNumbers(5, 7)

// console.log("Result: ",  result);

function loginUserMassage (username = "sam"){
    if (!username){
        // console.log("please Enter username")
        return;
    }
    return    ` ${username} just logged in`
}
// console.log(loginUserMassage("hitesh"))

function calculateCardPrize(val1, val2, ...num1){
    return num1
}

// console.log(calculateCardPrize(100, 200, 300, 500))

const user = {
    usernmae : "hitesh", 
    price : 399,
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username : "mohit",
    price : 599,
})

const myNewArray = [200, 100, 400, 590]

function returnSecondValue (formArray){
        return formArray[3]
}

console.log(returnSecondValue(myNewArray))