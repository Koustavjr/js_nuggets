// Debounce -- Programming technique used in javascript to improve performance of certain functions
const btn =document.querySelector('.btn')
/*
btn.addEventListener('click',()=>{
    console.log('clicked');
})*/
/*btn.addEventListener('click',()=>{
    
})*/
// delay logic so that it runs 20 second after the last click
// to do this setTimeOut returns id pass it to clearTimeOut
 
/*const debounce=()=>{
    setTimeout(()=>{
        console.log('clicked');
    },2000)
 }*/

/*
 const debounce =()=>{
    const id = setTimeout(()=>{
        console.log("clicked");
    },2000)
    console.log(id);
    clearTimeout(id)
    console.log('hello');
 }*/

 const debounce =()=>{
   let id;
   return ()=>{
    console.log(id);
    clearTimeout(id)
     id = setTimeout(()=>{
        console.log("clicked");
    },2000)
  
    
 }
}
 btn.addEventListener('click',debounce())