// Unique method
// map returns all objects
// new set returns object of unique values
// [...] returns object value in array form
const menu=[{
    name:"roti",
    category:"dinner"
},
{
    name:"rice",
    category:"lunch"
},
{
    name:"bread",
    category:"breakfast"
},
{
    name:"egg",
    category:"breakfast"
},{
    name:"chicken",
    category:"dinner"
}]

const res= new Set(menu.map((item)=>{
   return item.category 
}))
console.log(res) // returns unique values in object format
const res1= [...new Set(menu.map((item)=>{
    return item.category 
 }))]
 console.log(res1) // returns unique values in array format