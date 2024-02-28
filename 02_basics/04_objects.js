// const tinderUser = new Object()  // single tang object
const tinderUser = {}  // non single tang

tinderUser.id ="123abc"
tinderUser.name = "mohit"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    fullName: {
         userFullName:{
            firstName: "mohit",
            lastName: "kumar",
         }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

 const obj1 = {1: "a" , 2: "b"}
 const obj2 = {3: "c" , 4: "d"}

//  const obj3 = Object.assign({} , obj1, obj2)
const obj3 = {...obj1, ...obj2}
//  console.log(obj3)

const user = [
    {
        id:1,
        email:"mohit@gmail.com"
    },
    {
        id:1,
        email:"mohit@gmail.com"
    },
    {
        id:1,
        email:"mohit@gmail.com"
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));