// Array includes()--> checks if item is present in array
// useful in conditional statements

const fruits = ['apple','lemon','orange']

const item = 'guava'

const res = fruits.includes(item)
console.log(res);

console.log(fruits.includes('lemon'));

console.log(fruits.includes('lemon',1));
console.log(fruits.includes('lemon',2));

const fruit='apple'
if(fruits.includes(fruit))
    console.log('Item found');