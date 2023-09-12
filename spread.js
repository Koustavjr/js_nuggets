// ...spread operator
// allows and iterable to spread/expand individually inside reciever
// split into single item and copy them
const name = "Neymar"
const letters=[...name]
console.log(letters)
// Arrays
const players=["ronaldo","messi","kaka"]
const idol=["neymar"]
const legends=[players,idol]
console.log(legends);
const legend=[...players,...idol]
console.log(legend);

// reference
const soccer =legend
soccer[0]="CR7"
console.log(soccer);
console.log(legend);

// COPY
const footballer = [...legend]
footballer[0]="ronaldo"
console.log(legend);
console.log(footballer);

// Object

const obj={name:'Neymar',position:'winger'}
const bio={...obj}
console.log(bio);
const update={...obj,nation:'brazil'}
console.log(update);