const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dc = ["superman", "flash", "Batman"];

// marvelHeros.push(dc)
// console.log(marvelHeros[3][2]);

// const allHeros = marvelHeros.concat(dc)
// console.log(allHeros)

// const allNewHeros = [...marvelHeros, ...dc]
// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,8,[23,34,45,[45,56]]]

// const newAnotherArray = anotherArray.flat(Infinity)
// console.log(newAnotherArray)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "Hitesh"}))   // intersting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))