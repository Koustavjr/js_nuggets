// global scope
let x=2;

// lexical scope
/*const parent=()=>{
    // local scope
    console.log(x);
    let y=3;
    console.log(y);
    const child=()=>{
        console.log(x+1);
        console.log(y+1);
    }
    child()
}

parent()
console.log(parent());*/

// Closure -- allows to access parent function even after its execution
/*
const parent1=()=>{
    // local scope
    console.log(x);
    let y=3;
    console.log(y);
    const child=()=>{
        console.log(x=x+1);
        console.log(y=y+1);
    }
  return  child
}

//console.log(parent1());

const res=parent1()
console.log(res);
res()
res()

// console.log(y);  //reference error

*/

// IIFE - Immediately Invoked Function Expression

const func=(()=>{
let c=0
console.log(`initial ${c}`);
return ()=>{
    c=c+1
    console.log(c);
}
})()

func()
func()
func()