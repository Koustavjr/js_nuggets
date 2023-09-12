const bob={
    first: "bob",
    last: "builder",
    city:"chicago",
    sibling:{
        sister:"jenny"
    }
    

}
const{first,last:name,city,sibling:{sister}}=bob
console.log(first,name,city,sister);