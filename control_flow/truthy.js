const userEmail = ""

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("don't have user Email");
}

// falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value

// "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }
// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// nullish coalescing operator (??) : null, undefined 

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1)

// ternary operator 

const iceCreamPrize = 100;

iceCreamPrize <= 80 ? console.log("less than 80") : console.log("more than 80");