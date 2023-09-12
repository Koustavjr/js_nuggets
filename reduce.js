// reduce
// iterates, callback functions
// returns a single value--- number, object, array
// first parameter ("acc")--- total of all the calculations
// second parameter ("curr")--- current value/iteration
const people=[{
    name: "john",
    age:21,
    salary:12
},
{
    name:"smith",
    age:22,
    salary:15
},{
    name:"oliver",
    age:23,
    salary: 16
}]
const age=people.map((person)=>{
    return person.age
})
//const total=0
const money = people.reduce((total,person)=>{
    console.log(total);
    total=total+person.age;
    return total
},0)
console.log(money);


//objects
const {ageTotal,salaryTotal}=people.reduce((total,person)=>{
    total.ageTotal+=person.age
    total.salaryTotal+=person.salary
    return total

},{

    ageTotal: 0,
    salaryTotal:0
})
console.log({ageTotal,salaryTotal});