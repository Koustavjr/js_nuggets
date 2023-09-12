// Bracket Notation
const people=
{
    name:"alex",
    age:23,
'hobbies-list':['guitar','reading','cooking']
}

console.log(people["hobbies-list"])
people["hobbies-list"][0]="sudoku"
console.log(people["hobbies-list"])
const mobile="samsung"
const people1=
{
    name:"alex",
    age:23,
'hobbies-list':['guitar','reading','cooking'],
[mobile] : "A23",
}
people1["laptop"]="HP"
people1[mobile]= "iphone"
console.log(people1)
