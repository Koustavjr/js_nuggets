const first =document.querySelector(".first")
const second =document.querySelector(".second")
const third =document.querySelector(".third")
const btn=document.querySelector(".btn")
btn.addEventListener('click',()=>{
    setTimeout(()=>{
        first.style.color="red"
        
    },1000)
    setTimeout(()=>{
        second.style.color="blue"
      
    },3000)
    setTimeout(()=>{
        third.style.color="green"
    },4000)
})
 