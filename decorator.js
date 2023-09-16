// Decorators
// Decorators wrap a function with another function
// The wrappers decorate the function with new capabilities

// Example 1
/*
let sum = (...args)=>{
    return [...args].reduce((acc,num)=> acc+num);
}

let count = (fun)=>{
    let c=0
    return (...args)=>{
        console.log(`Function is called ${c=c+1}`);
        return fun(...args)
    }
}

sum=count(sum)

console.log(sum(1,2,3));
console.log(sum(4,5));

*/

// Example 2
// check for valid data and number of params
// Always use let instead of const to decorate the function
// fun.length --  returns how many arguments the function expects
// The name data property of a Function instance indicates the function's name as specified when it was created, or it may be either anonymous or '' (an empty string) for functions created anonymously.
// The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

/*
let rectangleArea=(l,b)=> // Core Function
{
    return l*b;
}

// Decorators for core function

let checkParameters=(fun)=>
{
    return (...params)=>{
        if(params.length !== fun.length){
        throw new Error ("Incorrect parameters")
        }
    return fun(...params)
    }
}

let checkType=(fun)=>
{
    //const name=fun.name
    return (...params)=>{
        
        params.forEach(it=>{
            if(!Number.isInteger(it)){
            throw new TypeError(`Wrong type parameter for ${fun.name}`)
            }
        })
        return fun(...params)
    }
}

rectangleArea=checkParameters(rectangleArea)
rectangleArea=checkType(rectangleArea)

console.log(rectangleArea(4,5));
console.log(rectangleArea(4,"avx"));
*/

// Example 3
// Decorating async API call function
// Time data request during development
// console.Time() and console.TimeEnd() -- time needed to fetch data
/*
let requestData=async (url)=>{
try {
    const res= await fetch(url)
    const data = await res.json()
    return data;
} catch (e) {
    console.log("Error");
}
}

let timeFrequency=(fn)=>{
    return async (url)=>{
            
            console.time('fn');
            const data = await fn(url)
            console.timeEnd('fn')
            return data
    }
}

let sample=async ()=>{
requestData=timeFrequency(requestData)
const url="https://jsonplaceholder.typicode.com/posts"
const data = await requestData(url)
console.log(data);
}

sample()*/


let sub = (a,b)=>{
    return a-b;
}

const positiveAns=(func)=>{
    return (a,b)=>{
        if(a>=b)
         return func(a,b)
        else
            return func(b,a)
    }
}

sub=positiveAns(sub)

console.log(sub(4,5));