// const marvelHeros = ["Thor", "Ironman", "Spiderman"];
// const dc = ["superman", "flash", "Batman"];

// // marvelHeros.push(dc)
// // console.log(marvelHeros[3][2]);

// // const allHeros = marvelHeros.concat(dc)
// // console.log(allHeros)

// // const allNewHeros = [...marvelHeros, ...dc]
// // console.log(allNewHeros);

// const anotherArray = [1,2,3,[4,5,6],7,8,[23,34,45,[45,56]]]

// // const newAnotherArray = anotherArray.flat(Infinity)
// // console.log(newAnotherArray)

// // console.log(Array.isArray("Hitesh"))
// // console.log(Array.from("Hitesh"))
// // console.log(Array.from({name: "Hitesh"}))   // intersting

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3))

const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dc = ["superman", "flash", "Batman"];

// marvelHeros.push(dc)
// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dc)
// console.log(allHeros)

const newHeros = [...marvelHeros, ...dc]
// console.log(newHeros)

const anotherArray = [1,2,4 ,[4,3,6], [5,6,7,[6,7,9,0]]]
// console.log(anotherArray.flat(Infinity))

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name : "hitesh"})) // interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3))