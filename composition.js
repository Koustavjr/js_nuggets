/*
class pizza{
    constructor(size,crust,sauce)
    {
        this.size=size
        this.crust=crust
        this.sauce=sauce
        this.topplings=[]
    }
    prepare(){console.log("preparing");}
    bake(){console.log("baking");}
}

// problem code repetion
class salad{
    constructor(size,dressing)
    {
        this.size=size
        this.dressing=dressing
    }
    prepare(){console.log("preparing");}
    bake(){console.log("baking");}
}

class stuffedcrustpizza extends pizza
{
    stuff(){console.log("stuffing");}
}

class buttercrustpizza extends pizza
{
    butter(){console.log("buttering");}
}

// problem

class stuffedbutterpizza extends pizza
{
    stuff(){console.log("stuffing");}
    butter(){console.log("buttering");}
}

const order = new stuffedbutterpizza()
order.stuff()
order.butter()
*/
// To make it D.R.Y
// use composition

const bake = ()=>{
    return {
        bake: ()=>console.log("baking")
    }
}

const butter =()=>{
    return {
        buttering : ()=> console.log("butter")
    }
}

const ready = ()=>{
    return {
        ready: ()=>console.log("Ready")
    }
}

const createPizza=(size,crust)=>{
    const pizza={
        size:size,
        crust:crust,
        toppings:[]
    }
    return{
        ...pizza,
        ...bake(),
        ...ready()
    }
}
const stuffButterpizza=(pizza)=>{
    return{
        ...pizza,
        ...butter()
    }
}
const myOrder = createPizza("medium","thin")
const bill =stuffButterpizza(myOrder)
bill.buttering()
bill.ready()
console.log(bill.size);
const addTopping = (pizza,toping)=>{
    pizza.toppings.push(toping)
    return pizza
}

const newPizza=createPizza("large","thin")
console.log(newPizza);
const afterToping = addTopping(newPizza,"chicken")
console.log(afterToping);
console.log(newPizza); // mutated

// we need to clone the pizza object to avoid mutation
// Function composition

/*
const shallowPizzaClone = (fn)=>{
    return (obj,array)=> {
        const newObj = {...obj}
        return fn(newObj,array)

    }
}
let addToppings =(pizza,topings)=>{
    pizza.toppings=[...pizza.toppings,...topings]
    return pizza
}
let cheeseBuster = createPizza("medium","thick")
 addToppings= shallowPizzaClone(addToppings)
 const finalOrder = addToppings(cheeseBuster,["pepper","sauce"])
 console.log(finalOrder);
console.log(finalOrder===cheeseBuster); // false hence cloned and not mutated
*/
let addToppings =(pizza,topings)=>{
    pizza.toppings=[...pizza.toppings,...topings]
    return pizza
}
let cheeseBuster = createPizza("medium","thick")
const shallowPizzaClone=(fn)=>(obj,array)=>fn({...obj},array)
let finalOrder=shallowPizzaClone(addToppings)(cheeseBuster,["extra cheese"])
//finalOrder(cheeseBuster,["sauce","extra cheese"])
console.log(finalOrder);
