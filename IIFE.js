// IIFE - Immediately Invoked Function Expression

// Variations:

// with anonymous arrow function

(()=>{
// do stuff
})();

// with the function keyword:

(function (){
// do stuff
})();

// with function name
(function myIIFE(){
  n++;
  console.log(n);
  n !==5?myIIFE(n):console.log("finished");
})(n=0);


// 1.Doesnot pollute the global object namespace

// global

const msg = console.log('whatever');
const helloworld=()=>console.log("Hello World");

// isolates decleration within function

(()=>{
    const msg=console.log("whatever iife");
    const helloworld=()=>console.log('Hello IIFE');
    console.log(helloworld());
})();
console.log(helloworld());

// 2. create private variables and methods from closure

const increment = (()=>{
    let c=0
    console.log(c);
    const credit= (c)=>{console.log(`I have ${c} credits`);}
    return ()=>{c++;credit(c)}
})()
// IIFE is called only once
increment()
increment() // anonymous function still have acess to private variable 
//credit(3) // ref error

// Module pattern
/*
const Score=(()=>{
    let c=0
    return     {
            current:()=>{return c},
            increment: ()=>{c++},
            reset: ()=>(c=0)
        }
    
})()

Score.increment()
console.log(Score.current());
// Revealing pattern

// Here we will be using pointers

const Game =(()=>{
    let c=0
    const current = ()=> console.log(`Current score ${c}`);
    const increment=()=>{c++}
    const reset=()=>{c=o}
    return{
        current:current,
        increment:increment,
        reset:reset
    }
})()
Game.increment()
Game.current()
*/
// injecting a namespace object
// namespace is object
/*
((namespace)=>{
    namespace.c=0
    namespace.current=function (){ console.log(`Current ${this.c}`);}
    namespace.increment=function(){ this.c++}
    namespace.reset=function(){this.c=0}
})(window.App = window.App || {})
// Any object created in global namespace is part of window object

App.increment()
App.current()*/