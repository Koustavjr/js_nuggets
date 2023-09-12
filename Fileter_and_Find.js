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
// filter method returns an array whose size can be modified and return empty if conditionnis not satisfied
// find method returns an object on first search depending on condition else undefined
const young=people.filter((person)=>{
    if(person.age<23)
        return person
})
console.log(young)

const young1 = people.find((person)=>{
    if(person.age<23)
        return person
})
console.log(young1)