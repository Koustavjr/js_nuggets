// rest operator
// gathers items
//destructuring,functions
//placement important, same name should be avoided
//rest used when declare function, spread used when invoked function
let fruit =["apple","lemon","orange","mango"]
const[first,...restOfFruits]=fruit
console.log(first,restOfFruits);
restOfFruits.find((item)=>{
    if(item=='lemon')
        console.log(item);
})

// object
let person={name:"john",last:"smith",role:"developer"}
const{last,...rest}=person
console.log(last,rest);
function fun(first,...scores)
{
    console.log(first);
    console.log(scores);
}
fun(last,12,24,35)