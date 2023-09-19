// Pure Function - A part of program paradigm
// Why Pure Function?
/*
1. Clean code
2. Easy to test
3. Easy to debug
4. Decoupled and independent
5. could be added to utility function
 */

// Rules for pure functions
// 1. Same input will give same output
// 2. There should not be any side effects

// Example for rule 1
const add = (a,b)=> a+b
console.log(add(2,3));

const name = (first,last)=> `${first} ${last}`
console.log(name("Dave","Gray"));
// We can replace the function with output
// This is called 'referential transparency'
// A pure function should have atleast one parameter
//otherwise it is same as a constant because a pure function can only work with their input

//example
const first =()=>"dave"
const firstName = "dave" 

// Example for rule 2
// Accessing the scope outside the function makes the function impure

const z=5
const sum=(a,b)=>a+b+z
console.log(sum(2,2));
// here z is available within the lexical scope of the function but it is outside the function body
// making the function impure

// Pure function cannot access API,database,storage etc., modify DOM , or console log
// Further no input state can be modified and no data should be mutated

// Example of impure function

var x=1
const increment=()=>x+=1

console.log(increment()); // 2
console.log(x); // 2
//  we can see value of x also get mutated with the calling of the function

// Example 2
const array=[1,2,3]
const arr= (a,v)=>
{
    a.push(v)
    return a
}

arr(array,4)
console.log(array);

// Refactoring to pure functions

const pureIncrement = (num)=>num+=1

console.log(pureIncrement(x))
console.log(x);

// Refactoring example 2

const pureArr=(a,val)=> [...a,val]

console.log(pureArr(array,5));
console.log(array);

// Pure function always returns something
// IF it doesnot return then it is not a pure function

// These higher order functions have been using pure functions

const num = [1,2,3,4,5]
const odd = num.filter(ele=>ele%2!=0)
console.log(odd);

const double = num.map(ele=>ele*2)
console.log(double);

const summed = num.reduce((prev,curr)=>prev + curr)
console.log(summed);