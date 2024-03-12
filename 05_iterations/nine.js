const myarray = [1, 2, 3, 4]

const total = myarray.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
//  total = myarray.reduce( (acc, val) => acc+val , 0)
// console.log(total)

const item = [
    {
        itemName: 'js course',
        price: 2999,
    },
    {
        itemName: 'py course',
        price: 999,
    },
    {
        itemName: 'java course',
        price: 299,
    },
    {
        itemName: 'cpp course',
        price: 499,
    },
]

const payTotalAmount = item.reduce( (acc, item) => acc + item.price, 0 )
console.log(payTotalAmount)