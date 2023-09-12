function upper(t)
{
    console.log(t.toUpperCase());
}

function name(x,y) // function y is passed here as an argument
{
    const n="john"
    y(n); // Funcrtion invoked here
}

name("john",upper)
name("Peter",(v)=>{console.log(v);})