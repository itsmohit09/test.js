//  immediately invoked function expression ( IIFE )

(function chai (){
//  Named iife
    console.log(`BD CONNECTED`)
})();

((name) => {
    console.log(`BD CONNECTED TWO ${name}`)
})("Mohit") 