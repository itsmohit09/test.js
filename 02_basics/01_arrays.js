// Arrays

const myArr = [1, 2, 3, 4, 5, 6]
const myHeros = ["saktiman", "naagraj"]
const myArr2 = new Array(1, 3, 4, 5, 6)

// console.log(myArr[3])


// Arrays method

// myArr.push(7)
// myArr.push(12)
// myArr.pop()

// myArr.unshift(23)
// myArr.shift()

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(5))

// const NewArr = [11, 21, 31, 41, 51, 61]
// console.log(myArr);
// console.log(typeof (NewArr.join()));


console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myn2);
