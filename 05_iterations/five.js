const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach( function  (val) {
//     console.log(val);
// } )
// coding.forEach(  (item) => {
//     console.log(item);
// } )

// function printme (value){
//     console.log(value);
// }
// coding.forEach(printme)

// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )