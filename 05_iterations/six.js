const coding = ["js", "ruby", "python", "java", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// } )
// console.log(values)

// filter 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num < 5 )
// const newNums = myNums.filter( (num) => {
//     return num > 6
// } )

// const newNums = [10, 20 ,30]

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);
// const pop = newNums.pop()
// console.log(pop);
// console.log(pop)

const myBooks = [
    { Title: 'Book1', genre: 'history', publish: '1988', edition: '2000'},
    { Title: 'Book2', genre: 'science', publish: '1928', edition: '2003'},
    { Title: 'Book3', genre: 'fiction', publish: '1938', edition: '2004'},
    { Title: 'Book4', genre: 'english', publish: '1948', edition: '2006'},
    { Title: 'Book5', genre: 'fiction', publish: '1958', edition: '2007'},
    { Title: 'Book6', genre: 'non-fiction', publish: '1968', edition: '1990'},
    { Title: 'Book7', genre: 'science', publish: '1978', edition: '2010'},
    { Title: 'Book8', genre: 'history', publish: '1988', edition: '2014'},
    { Title: 'Book9', genre: 'hindi', publish: '1998', edition: '2001'},
    { Title: 'Book10', genre: 'history', publish: '1990', edition: '2024'},
]

// const newBooks = myBooks.filter( (bk) => bk.genre === 'science' )
const newBooks = myBooks.filter( (bk) => {
     return bk.edition > '2000' , 
    bk.genre === 'history'} )


console.log(newBooks);