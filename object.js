// Three methods to convert objects into array
// Object.keys() -> Converts object keys into array
// Object.values() -> Converts object values into array
// Object.entries() -> Converts both into array

const person={
    name:"John",
    age:25,
    salary:'500$'
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

const result=Object.entries(person)

// Map method

const newResult= result.map((item)=>{
    console.log(item);
    const [first,second]=item
    console.log(first,second);
    return first
})

console.log(newResult);

// For of
for (const iterator of result) {
    const [first,second]=iterator
    console.log(first,second);
}
for (const [first,second] of result) {
 //   const [first,second]=iterator
    console.log(first,second);
}