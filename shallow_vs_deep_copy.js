// Foundational knowledge of pure functions

// primitive datatypes
/*
1. undefined
2. BigInt
3. String
4. Symbol
5. Boolean
6. Number
 */
// Structural Datatypes
/*
1. Object: (new)object,array,map,weakmap,set,date
2. Function
 */

// values vs references

// primitive pass by value
var x = 10
var y=x
y++
// we can see only y is updated and not x because its only value of x passed to y
// not address of x
console.log(x);
console.log(y);

// structural datatypes uses pass by reference i.e address
xarr = [1,5,6]
yarr=xarr
yarr.push(4)
// here yarr points to xarr's address
// any changes made in yarr will be reflected on xarr
console.log(yarr);
console.log(xarr);

// mutable vs immutable

// primitives are immutable
let name ="dave"
name[0]="w"
console.log(name);

// reassignment is not mutable
name="david"
console.log(name);

// Structural data types are mutable

yarr[0]=7
console.log(yarr);
console.log(xarr);

// pure function require you to avoid mutating the data

// Impure function that mutates the data
const update =(arr,data)=>{
    arr.push(data)
    return arr
}
const arr = [1,5,6]
console.log(update(arr,7))

//This mutates the original array
// this is considered as side effect

// Notice : "const" doesnot make the array immutable

// shallow copy vs deep copy (clones)

// shallow copy

zarr = [...yarr,10]
console.log(zarr);
console.log(yarr);

console.log(xarr===yarr);
console.log(yarr===zarr);

// with object.assign

tarr = Object.assign([],zarr)

console.log(tarr);
console.log(tarr===zarr); // it gives false because tarr and zarr doesnot use same reference in the memory
// we have made a clone of zarr which is tarr and any changes on tarr will not be reflected on zarr
tarr.push(11)
console.log(tarr);
console.log(zarr);

// but if there are nested array or objects

yarr.push([21,22,23])
varr=[...yarr]
varr[4].push(12)
console.log(varr);
console.log(yarr); // we see changes are shown on yarr as well
// this is because nested structural data types still share a reference
// they will no share reference with spread operator or object.assign until there is a nested structure
// Note; Array.from() and slice() also create shallow copy


// when it comes to object what about Object.freeze()??

const obj = {
    first:12,
    second:44,
    third:{a:1,b:2}
}

console.log(obj);
Object.freeze(obj)
obj["third"]["a"]=8
console.log(obj);

// It is still mutable - it is shallow freeze


// How we can avoid shallow freeze?
// Deep Copy

/* Here is one line vanilla js solution, but it doesnot work with dates,function,undefined,regex,maps
sets,blobs,filelists,imagedatas,and other complex data types
 */

const newobj = JSON.parse(JSON.stringify(obj))

console.log(newobj);
console.log(newobj===obj);

// here is a vanilla js function

const deepclone =(obj)=>{
    if(typeof obj !== "object" || obj===null ) return obj;
    // create an array or object to hold the value
    const newObj = Array.isArray(obj)? []:{}
    for (let key in obj)
    {
        const val=obj[key]
        //recursive call
        newObj[key]=deepclone(val)
    }
    return newObj

}

const marr = deepclone(xarr)
console.log(marr);
console.log(marr===xarr);

const newObj=deepclone(obj)
console.log(newObj);
console.log(newObj===obj);

// pure function

const pureScore= (arr,score,clone)=>
{
    const newArr = clone(arr)
    newArr.push(score)
    return newArr
}

const score=[44,12,25]
const newScore=pureScore(score,30,deepclone)
console.log(newScore);
console.log(score);
// deep copy doesnot share reference
