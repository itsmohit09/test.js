const myObject = {
    js: 'javascript',
    cpp: 'C++',
    py: 'python',
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for  ${myObject[key]}`);
}

const programming = ["js", "py", "Ru", "java"]

for (const key in programming) {
    // console.log(`${key} and ${programming[key]}`)
}

const map = new Map ()
map.set('IN', 'India')
map.set('USA', 'United states of America')
map.set('Fr', 'France')

for (const key in map) {
    console.log(key)
}

// iteratable values pe loop work ni krta 