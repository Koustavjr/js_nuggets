// Promises Example
/* simple
const btn = document.querySelector(".btn")

btn.addEventListener('click',()=>{
    addColor(1000,"red",".first").then(addColor(3000,"blue",".second")).then(addColor(5000,"green",".third")).catch((data)=>console.log(data))

})
function addColor(time,color,sel)
{
    const ele = document.querySelector(sel)
    return new Promise((resolve,reject)=>{
           if(ele)
           {
            setTimeout(()=>{
            ele.style.color=color
            resolve()
            },time)
           }
           else
           reject("Wrong choice") 
    })
} 
*/
// complex
const btn = document.querySelector(".btn")

btn.addEventListener('click',()=>{
    addColor(1000,"red",".first","Correct").then((data)=>addColor(3000,"blue",".second",data)).then((data)=>{
        console.log(data)
        addColor(5000,"green",".third")}).catch((data)=>console.log(data))

})
function addColor(time,color,sel,data)
{
    const ele = document.querySelector(sel)
    return new Promise((resolve,reject)=>{
           if(ele)
           {
            setTimeout(()=>{
            ele.style.color=color
            resolve(data)
            },time)
           }
           else
           reject("Wrong choice") 
    })
}