// var c = 300
let a = 300;

if (true) {
    let a = 10 
    const b = 20
    // console.log("INNER :", a);
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Mohit"

    function two (){
        const website = "Youtube"
        // console.log(username)
    }
    // console.log(website)

    two()
}
one()

function username (){
    const name = "mohit kumar"

    function userEmail () {
        const email = "mohit@gamil.com"

        function userage () {
            const age = 20
            // console.log(name)
            // console.log(email)
            // console.log(age)
        }
        userage()
        
    }
    userEmail()
}
username()


if(true) {
    const userName = "Mohit"
    if(userName === "Mohit"){
        const Website = "youtube"
        // console.log(userName + " Website")
    }
    // console.log(Website)
}
// console.log(userName)

// ++++++++++++++++++++++ Intersting ++++++++++++++++++++

function addone (num){
    return num + 1
}
console.log(addone(5))



// console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}