


// objects literals


const mySym = Symbol ("myKey1")


const jsUser = {
    name: "mohit",
    "full name": "mohit kumar",
    [mySym]: "myKey1",
    age: 20,
    location: "faridabad",
    email: "mohit@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser ["email"] )
// console.log(jsUser["full name"])
// console.log(typeof jsUser[mySym])

jsUser.email = "mohit@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "mohit@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())