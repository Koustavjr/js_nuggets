// Currying - It takes function which takes more than one parameter and breaks it into series of unary(one parameter]) functions
// Curried function takes only one parameter
// Basic Exxample
/*
const sandwich = (it1)=>{
    return (it2)=>{
        return (it3)=>{
            return `${it1},${it2},${it3}`
        }
    }
}

console.log(sandwich('tomato')('letuce')('spinach'));

const pizza = it1=>it2=>it3=>
 `${it1},${it2},${it3}`;

 console.log(pizza('bread')('chicken')('tomato'));

*/

 /*
 // Another example
 const mul=(a,b)=> a*b;
 console.log(mul(2,3));

 // partial function are common use of currying
 const multiply= a=>b=> a*b;
 const fun1 = multiply(10)
 console.log(multiply(10));
 console.log(fun1(3));

 */

/*
 // Another use of currying is function composition
 // allowing smaller function to call in specific order

 let customer=fn=>(...args)=>{
    console.log("Saving Info...");
    return fn(...args)
 }
 let confirm=fn=>(...args)=>{
    console.log(`Order no ${args[0]} confirmed`);
    return fn(...args)
 }

 let shiped = (...args)=>{
    console.log(`Order #${args.toString()} Shipped`);
 }

 confirm=confirm(shiped)
 console.log(confirm);
 customer=customer(confirm)
 customer('1000')
*/
 //
/*
 const fun1=(...args)=>{
    console.log('saving Info');
    return (...args)=>{
        console.log(`Order no#${args} confirmed`);
        return (...args)=>{
            console.log(`Order no#${args}Shipped`);
        }
    }
 }

 fun1('1000')('1000')('1000')

 */

 // Converting normal function to curried function using curry function
// Requires a function with fixed number of Parameters
/*
let curry=(fn)=>{
    console.log(fn.length);
    return curried=(...args)=>{
        console.log(args.length);
        if(fn.length!==args.length)
        {
            return curried.bind(this,...args)
        }
        return fn(...args)
    }


}


let total=(x,y,z)=>x+y+z
const curryTotal=curry(total)

console.log(curryTotal(10)(20)(30));

*/