// for of loop

const arr = [1, 2, 3, 4, 5, 6]

for (const i of arr) {
    // console.log(i)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == ""){
        // console.log(greet);
        // break;
    }
    // console.log(`Each char is ${greet}`)
    
}

// map

const map = new Map ()
map.set('IN', 'India')
map.set('USA', 'United states of America')
map.set('Fr', 'France')

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-" , value);
// }

const myObject = {
    'game1': 'pubg',
    'game2': 'freefire'
}

for (const [key, value] of myObject) {
    console.log(key, ":-" , value);
}