const user = {
    username: "Mohit",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username} , Welcome to website `)
        // console.log(this)
    }
}

// user.welcomeMassage()
// user.username = "sam"
// user.welcomeMassage()

// console.log(this)


// function chai (){
//     let user = "mohit"
//     console.log(this.user);
// }
// chai()

// const chai = function ()  {
//     let user = "mohit"
//     console.log(this.user);
// }


const chai = () => {
    let user = "mohit"
    // console.log(this);
}
chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2) =>  ({username : "hitesh"})

console.log(addTwo(4 , 5));