
/* Synchronous
function someLongRunningFunction() {
    let start = Date.now();
    console.log(start);
    while (Date.now() - start < 5000) {
        // do nothing
    }
    return "Hello";
}

console.log('Starting...');

let result = someLongRunningFunction();

console.log(result);

console.log('...Finishing');
*/
/*Asynchronous
console.log("Start of script");

setTimeout(function() {
  console.log("First timeout completed");
}, 2000);

console.log("End of script");*/

/* callback- A function that is passed as argument to another function and executed only after the first func is finished 
function guest(callback)
{
    setTimeout(()=>{
        console.log("Guests arrived");
        callback();
    },2000)
}
function callback()
{
    console.log("The clown has arrived");
}
guest(callback)
console.log("Birthday party");
*/

/* callback hell 
const cart=['pants','kurta','shirt']

api.getOrder(function (){
    api.makePayment(function()
{
    api.orderConfirmation(function()
{
    api.Wallet()
})
})
})
*/
// Inversion Of control-- We loose control of code in call back hell,i.e. we give control of 
//our code to another piece of code


/* Promises 

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from the promise!");
    }, 2000);
});

console.log(myPromise);
*/
// Promise Chaining
/*
fetch('www.example.com').then((data)=>data.json()).then((data)=>processData(data)).then((processData)=>{
    // do something
}).catch((e)=>console.log(e))
*/

// Error Handling
/*
fetch("www.google.com").then((data)=>data.json).then((data)=>{
    try {
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}).catch((e)=>{
    console.log(e);
})
*/

/*
// Promise.all- It takes multiple promises as an array input and returns a promise when all the input promies are fulfilled 
// It returns the first promise when any of the input promise get rejected

const p1 = fetch("https://jsonplaceholder.typicode.com/posts/1")
const p2=  fetch("https://jsonplaceholder.typicode.com/posts/2")
const p3=  fetch("https://jsonplaceholder.typicode.com/posts/3")

Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((e)=>console.log(e))*/

/*
// Fetch API-The Fetch API is a built-in JavaScript feature that allows you to make network requests, such as fetching data from a server.
// It returns a value that needs to be completed

fetch('https://some-api.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });*/

  /*
  //Async Functions with async/await
  //async- It is a keyword used to declare a function as asynchronous
  //await- It is a keyword used inside async function to stop the execution of the function until a promise is resolved

  async function getData()
  {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    console.log(data);
  }
  getData();

  */