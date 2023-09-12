// Map method
//return a new array
// size of the original array doesn't change

// returning value from an array of object
const people=[{
    name: "john",
    age:21
},
{
    name:"smith",
    age:22
},{
    name:"oliver",
    age:23
}]
const age=people.map((person)=>{
    return person.age
})

console.log(age)

// Return an object
const people2=people.map((item)=>{
    return {
        name:item.name,
        age:item.age
    }
})
console.log(people2)