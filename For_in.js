// For in Loop
const person={
    name:"John",
    age:25,
    salary:'$500'
}

for(propery in person)
{
    console.log(`${propery}: ${person[propery]}`);
}