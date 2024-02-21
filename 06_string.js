const name = "hitesh"
const repoCount = 50;

// console.log(name + repoCount  +  " value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String ("PubgMobile-bgmi")
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2))
console.log(gameName.indexOf('g'))
const newString = gameName.substring(1,3)
console.log(newString)
const anotherString = gameName.slice(-11 , 4)
console.log(anotherString)

const newStringOne = "   mohit   "
console.log(newStringOne)
console.log(newStringOne.trim())


// console.log(gameName.indexOf('M'))

// console.log(gameName.charAt(7))
// const newStringModified = gameName.substring(2, 5)
// console.log(newStringModified)

const url = "https://hitesh.com/Hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))
console.log(gameName.split('-'))
