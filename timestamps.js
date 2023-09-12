// Timestamps
// unix time - time elapsed from january , 1970. It is measured in MiliSecond 1s=1000ms

console.log(new Date());

// Date.now()
console.log(Date.now());

// new Date().getTime()

console.log(new Date().getTime());

// new Date().valueOf()

console.log(new Date().valueOf());

setTimeout(()=>{
    console.log(Date.now());
},1000)

// Create id 

let people=[]
people=[...people,{id:Date.now(),name:'John'}]
setTimeout(()=>{
    people=[...people,{id:Date.now(),name:'Susan'}]
    console.log(people);
},1000)

//  create/get dates

console.log(new Date(1694182625010));

const now =Date.now()
const future = new Date(now+1000*60)
console.log(new Date());
console.log(future);

// Difference

const first = new Date()
const second = new Date(2023, 9, 19)
const val1 = first.getTime()
const val2 = second.getTime()

console.log(val2-val1);