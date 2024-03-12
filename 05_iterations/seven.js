const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newnums = mynums.map( (num) => {
//     return num + 10
// } )

let newnums = mynums
        .map( (num) => num * 5 )
        .map( (num) => num + 2)
        .filter((num) => num < 25)
console.log(newnums)