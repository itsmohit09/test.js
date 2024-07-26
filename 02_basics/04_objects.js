// const tinderUser = new Object()  // singleton object
// const tinderUser = {}  // non singleton

// tinderUser.id ="123abc"
// tinderUser.name = "mohit"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser)

// const regularUser = {
//     fullName: {
//          userFullName:{
//             firstName: "mohit",
//             lastName: "kumar",
//          }
//     }
// }

// // console.log(regularUser.fullName.userFullName.firstName)

//  const obj1 = {1: "a" , 2: "b"}
//  const obj2 = {3: "c" , 4: "d"}

// //  const obj3 = Object.assign({} , obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// //  console.log(obj3)

// const user = [
//     {
//         id:1,
//         email:"mohit@gmail.com"
//     },
//     {
//         id:1,
//         email:"mohit@gmail.com"
//     },
//     {
//         id:1,
//         email:"mohit@gmail.com"
//     },
// ]

// user[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('name'));


// const course = {
//     courseName: "JS in Hindi",
//     coursePrize: "999",
//     courseinstructor:"hitesh"
// }

// // const a = course.courseinstructor
// // console.log(a);

// const {courseinstructor: instructor} = course
// console.log(instructor)

// {
//     "name": "mohit",
//     "coursename": "js in hindi",
//     "prize": "free"
// }

// [
//     {},
//     {},
//     {}
// ]


// const tinderUser = new Object ()

const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "mohit"
tinderUser.isLoggedIn = false

// console.log(tinderUser)  

const regularUser = {
    fullName : {
        userFullName :{
            firstName : "mohit",
            LastName : "prajapati"
        }
    }
}

// console.log(regularUser.fullName)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj4 = {5: "c" , 7: "d"}

// const obj9 = Object.assign(obj1 , obj2 , obj4)
// console.log(obj9)

const obj3 = {...obj1, ...obj2 , ...obj4}
console.log(obj3)

const user = [
    {
        id : 1,
        email : "mohit@gmail.com"
    },
    {
        id : 1,
        email : "mohit@gmail.com"
    },
    {
        id : 1,
        email : "mohit@gmail.com"
    }
]

// console.log(user[2].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

