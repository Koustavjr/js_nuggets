

const heading =document.querySelector('.heading')
console.log(heading);
const items = document.querySelectorAll(".list-items")
console.log(items);

/*const element=(selector,list)=>{
    if(list)
    {
        const ele =[...document.querySelectorAll(selector)]
        if(ele.length<1)
            {
                throw new Error("Please recheck")
            }
            return ele
    }
    const ele=document.querySelector(selector)
    if(ele) return ele;
    throw new Error("Please recheck")
}
*/

const element=(selector,list)=>{
    const ele = list? [...document.querySelectorAll(selector)]:document.querySelector(selector)
    if((!list && ele) || (list && ele.length>1)) return ele;
    throw new Error("Please recheck")
}

//console.log(element('.heading'));
// console.log(element('.headig))
console.log(element('.list-item',true));
//console.log(element('list-item',true));