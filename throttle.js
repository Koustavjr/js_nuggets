// throttling --> Throttling implies limiting the number of times a function gets called in a certain time period. 
//It will prohibit a function from executing if we have invoked it “recently.” 
//Throttling also guarantees that a function runs at a consistent rate.
const init=()=>{
    const tbtn=document.querySelector(".throttle");
    tbtn.addEventListener('click',throttle(clickLog,2000))
}

const clickLog=()=>console.log('Clicked');

document.addEventListener("DOMContentLoaded",init)

const throttle =(fn,delay)=>{
    let time =0
    console.log("Throttle Called Immediately");
    let id=0
    return (...args)=>{
        const del=new Date().getTime()
        id++
        if(del-time<delay) return;
        time =del
        console.log("Id: ",id);
         fn(...args)
    }
}

// Debounce is used when we are interest in final state
//at the end of wait time

// Throttle is used at intermediate state
// at certain interval
