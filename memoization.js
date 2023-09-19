// Memoization -- Remebering the result which is used  again and again
// Memory consumption increases and speed increases
const init=()=>{
    /*   //const mul = memoizeMul()
       const memo = memoize(mul)
       //console.log( mul(10))
       //console.log( mul(10))
       console.log(memo(10))
       console.log(memo(5))
       console.log(memo(10))*/
       const fibo=memoize(fib)
       console.log(fibo(40))
       console.log(fibo(40))
       console.log(fib(40));
       console.log(fib(40));
    }
    const mul=(x)=> x*10
    
//    document.addEventListener("DOMContentLoaded",init)
  
    const memoizeMul = ()=>{
      const cache ={}
      return (num)=>{
          if(num in cache)
          {
            console.log(cache)
            return cache[num]
          }
          const res=num*10
          cache[num]=res
          return res
      }
    }
    
    const memoize=(fn)=>{
      let cache={}
      return (...args)=>{
        if(args.toString() in cache)
        {
          console.log(cache);
          return cache[args.toString()]
        }
        const res = fn(...args)
        cache[args.toString()]=res
        return res
      }
    }
    
    const fib=(pos)=>{
      if(pos<2) return pos
      return fib(pos-1)+fib(pos-2)
    }
    init()  