// Javascript Hoisting -- When the js interpreter or engine processes the script it takes the function or variable declaration and moves to the top
//not physically but in memory
// declarations are hoisted, initializations are not

/*
console.log(x); will show error

let x=5; // initialization
// let x; declaration

*/
/*
Declaration
print();
function print()
{
    console.log("Hoisted");
}

*/

/* 
print() //Cannot access 'print' before initialization 
const print=()=>{
    console.log("Not Hoisted");
}
*/

/*
// let var const are not hoisted.
// function is a declaration
// arrow method is hoisted when called inside function and eventlistener is useds
const init=()=>{
    console.log(print)
     print();
 }
 // init() Cannot access 'print' before initialization 
 
 // While dom content is loaded the js engine initialize the print variable hence its called
 document.addEventListener("DOMContentLoaded",init) 
 const print = ()=>{
 
     console.log("Hoisted");
 }*/