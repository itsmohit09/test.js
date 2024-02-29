function sayMyName () {
    console.log("M")
    console.log("o")
    console.log("h")
    console.log("i")
    console.log("t")
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }


function addTwoNumbers(number1, number2) {
    const result = number1 + number2 
    // console.log("mohit")  
    return result
}

const result = addTwoNumbers(23 , 23)
// console.log("result:",   result);

function userLoggedIn (userName = "sam") {
    if(!userName){
        console.log("please enter a username");
        return;
    }
    return `${userName} Just Logged In`
} 

console.log(userLoggedIn("mohit"))