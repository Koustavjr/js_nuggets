// Strinc includes() --> Check if a string contains another string or not. Its case Sensitive
const name ='neymar'
const res = name.includes('ney')
console.log(res);
const res1 = name.includes('Ney')
console.log(res1); // case sensitive
const res2= name.includes('y',2)
console.log(res2);

const products=[{title:'chair'},{title:'table'},{title:'armchair'},{title:'desk'}]
// Includes in object
const product={title:'chair'}
const bool = product.title.includes('ch')
console.log(bool);

// to filter items from array of objects

const match='A'
const result = products.filter((items)=>items.title.toUpperCase().includes(match))
console.log(result);
