// Promises-Its an object that returns a  value but not now but for future
//async and await
// consume/use promises

// result of promise--> pending, rejected,fulfilled

// initially we are always pending--



/*  Sample code 
const promise = new Promise((resolve,reject)=>{
//resolve("Hello World") // resolve is a ststic method
//reject("Error")
//resolve([1,2,3])
reject("Error")
})

console.log(promise);
//promise.then((data)=>{console.log(data)})  // to access the value of resolve we use .then() with promise and can pass another call back function inside it
promise.catch((msg)=>{
console.log(msg);
}) //  for reject we use catch in place of then() for call back

*/

// Example
const val = 1
const promise = new Promise((resolve,reject)=>{
    const guess = Math.floor(Math.random()*3)
    console.log(guess);
    if(guess === val)
    {
        resolve("Correct Guess")
    }
    else
        reject("Wrong Guess")
})
console.log(promise);