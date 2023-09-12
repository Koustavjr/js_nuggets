// Array.From-not prototype
// returns array object from objects with a length property or an iterable object
// from-turns array likeish into array-string,nodelist,sets

const name ="Koustav"
console.log(Array.from(name));
const arr=Array.from({length:20})
console.log(arr);

const items=Array.from({length:12},(_,ind)=>{
    return ind;
})

console.log(items);