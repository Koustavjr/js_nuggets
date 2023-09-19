// prototypal inheritance and chain

const person={
    alive:true
}
const musician ={
    plays:true
} 
console.log(musician.plays);
console.log(musician.alive);

musician.__proto__=person // inheritance

// missing property-- will go to person object(prototype chain)
console.log(musician.alive);

// JS now has getPrototypeOf and setPrototypeOf methods instead of __proto__

Object.setPrototypeOf(musician,person)
console.log(Object.getPrototypeOf(musician));

// extending prototype chain

const guitarist={
    strings:6,
    __proto__:musician
}
console.log(guitarist);
console.log(guitarist.alive);

// Rules for protypal inheritance
// 1. No circular references allowed (person.__proto__ cannot be guitarist)
// 2. The __proto__ can either be object or null
// 3. An object can directly inherit from another object

//getter and setter

const car={
    doors:2,
    seat:"vinyl",
    get seatMaterial()
    {
        return this.seat
    },
    set seatMaterial(material)
    {
        this.seat=material
    } 
}

const bmw={}
Object.setPrototypeOf(bmw,car)
bmw.seatMaterial="leather"
console.log(bmw);
console.log(bmw.doors);
console.log(car);

// WALKING UP THE CHAIN -- methods and properties are not copied
console.log(bmw.valueOf());

// Getting the keys of an object
console.log(Object.keys(bmw));

// iterate over keys
Object.keys(bmw).forEach(key=>console.log(key))

// to iterate over inherited keys we use for in

for (const key in bmw) {
   console.log(key);
    
}

// object constructor
function Animal(species)
{
    this.species=species
    this.eat=true
}

Animal.prototype.walk= function(){
    return `A ${this.species} is walking`
}
const Bear = new Animal("Bear")
console.log(Bear.species);
console.log(Bear);
console.log(Bear.walk());
// The prototype property is where the props and methods of inheritance are
console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);
console.log(Animal.prototype);
console.log(Bear);

// ES inheritance

class vehicle{
    constructor(){
        this.wheel=4
        this.motorized=true
    }
    ready()
    {
        return "ready to go"
    }
}

 class motorbile extends vehicle
 {
    constructor()
    {
        super() // if we want to use members from vehicle we have to use super to invoke it
        this.wheel=2
    }
    wheelie()
    {
        return 'lets go'
    }
 }

 const bike=new motorbile()
 console.log(bike);
 console.log(bike.wheelie());
 