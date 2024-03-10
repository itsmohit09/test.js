// For loop 

for (let index = 0 ; index <= 10 ; index++){
    const element = index
    if(element == 5){
        // console.log("5 is best number")
    }
    // console.log(element)
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(`outer loop value : ${element}`)

    for (let j = 0; j <= 5;  j++) {
        const element2 = j;
        // console.log(`innner loop value : ${element2}`)
        // console.log(i + '*' + j + ' = ' + i*j)
        
    }
    
}

const myArray = ["batman" , "superman", "ironman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue 

for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index == 5) {
        console.log("detacted 5");
        break;
    }
    
    console.log(`value of i is : ${element}`)
    
}