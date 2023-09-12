// set object- Stores a collection of unique values of various types

// new Set()
// add(value)
// delete(value)
// clear() -- removes all items
// has(value)

// iterators
// entries(),keys(),values(),forEach()

const unique = new Set()
unique.add('first')
// unique.add('first')  // It will take only same value only once
unique.add('second')
unique.add(4)
console.log(unique);
const bool = unique.delete('second')
console.log(bool);
const bool1 = unique.delete('third')
console.log(bool1);
console.log(unique);

const check = unique.has(4)
console.log(check);

// new Set() --> Accepts iterable objects

const products=[{
    title:"chair",
    company:'ikea'

},{
    title:'table',
    company:'Morrison'
},{
    title: 'cup',
    company:'Lorris'
},{
    title:'desk',
    company:'ikea'
}]

const companies1 = products.map((name)=>name.company)

console.log(companies1);

const uniqueCompanies = new Set(companies1)
console.log(uniqueCompanies);

// to pass it in array

const arr = [...uniqueCompanies]
console.log(arr);

// one liner

const result = [...new Set(products.map((item)=>item.company))]
console.log(result);