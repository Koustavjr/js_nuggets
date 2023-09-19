// Functional Programming
// often uses pipe and compose = Higher Order Functions
// HOC -- A HOC is any function which takes any function as an argument anr returns a function or both

// Compose function

const add2 = (x)=> x+2
const sub1 = (x)=>x-1
const mul5 = (x)=>x*5

// the function is executed from inside to outside and from right to left
const res =mul5(sub1(add2(4))) // its not a compose function its just compose func works from right to left
console.log(res); 

// A HOC reduce takes list of values and applies a function on each of the values and returns 
// an accumulating result

const compose = (...fn)=>val=>fn.reduceRight((acc,fn)=>fn(acc),val)
console.log(compose(mul5,sub1,add2)(4));

// to do it from left to right we use pipe function
const pipe = (...fn)=>val=>fn.reduce((acc,fn)=>fn(acc),val)
console.log(pipe(add2,sub1,mul5)(4));

const divideby = (div,num)=>num/div

// This is a pointer free style where we donot see the unary parameter passed from function to function
const pipe1=pipe(
    add2,
    sub1,
    mul5,
    x=>divideby(2,x)
)(5)
console.log(pipe1);

//  A word count example

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const splitString = (string)=>string.split(' ')
const count = (arr)=>arr.length

const wordcount=pipe(
    splitString,
    count
)
console.log(wordcount(lorem));

// Nested pipe example: Palindrome check

const pal1 ="TOFU cat"
const pal2 = "taco CAT"
const split = (string)=>string.split('')
const join = (string)=>string.join('')
const lower = (string)=>string.toLowerCase()
const rev = (arr)=>arr.reverse()

const fwd= pipe(
    splitString,
    join,
    lower
)
const reverse=pipe(
    fwd,
    split,
    rev,
    join
)

console.log(reverse(pal1)===fwd(pal1));
console.log(reverse(pal2)===fwd(pal2));

// clone/ copy function on compose or pipe function

//  Approaches:

// 1. clone an object before an impure function mutates it

const obj1 ={home:0,away:0}
const shallowClone = (obj)=> Array.isArray(obj)? [...obj]:{...obj} 
const incre = (obj)=>{obj.home=obj.home+1;return obj}
const obj2 = pipe(
    shallowClone,
    incre
)

console.log(obj2(obj1));
console.log(obj1);
console.log(obj2(obj1)===obj1);

// Fewer functoion calls Adv
// Impure func disadv

// Curry function to create partial

let incre1 = (clonefn)=>(obj)=>{
    const newObj = clonefn(obj)
    newObj.home+=1
    return newObj
}

// create a partial by passing first argument in advance

 incre1 = incre1(shallowClone)

 const score = pipe(
    incre1
 )

 console.log(score(obj1));
 console.log(obj1);

 // Adv: Pure function with dependencies
 // disadv: more calls to cloning function

 // 3 Insert  clone function as dependency

 const incre2=(obj,clonefn)=>{
    const newObj = clonefn(obj)
    newObj.home+=1
    return newObj

 }

 const scoref = pipe(
    x=>incre2(x,shallowClone)
 )

 console.log(scoref(obj1));
 console.log(obj1);

 // adv; pure func with clear dependencies
 // disadv: non-unary function in your pipe
 