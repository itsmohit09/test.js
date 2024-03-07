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

if(userEmail.length === 0){
    console.log("Array is empty")
}
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
