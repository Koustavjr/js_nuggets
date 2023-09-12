// easier way to access/unpack arrays or objects
friends=['kelly','john','roger','abraham','bob']
let [a,b,c]=friends
console.log(a,b,c);
let l1='kelly';
let l2='bob';
[l2,l1]=[l1,l2]
console.log(l1,l2)