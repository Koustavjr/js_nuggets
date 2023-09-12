const form = document.querySelector('.form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const entries = [...formData.entries()]
    console.log(entries);
    const values = [...formData.values()]
    console.log(values);
    const key =[...formData.keys()]
    console.log(key);

    // converting to object
    const obj = Object.fromEntries(entries)
    console.log(obj);
})