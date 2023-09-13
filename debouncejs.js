const init=()=>{
    const button = document.querySelector('.btn');
    button.addEventListener('click',debounce(func,2000))
}

const func=()=>console.log('clicked');

document.addEventListener('DOMContentLoaded',init)

const debounce=(fn,delay)=>{
    let id;
    console.log(`id at immediate load ${id}`);

    return (...args)=>{
        console.log(`prev id: ${id}`);
        if(id)clearTimeout(id);
        id=setTimeout(()=>{
            fn(...args)
        },delay)
    }
}