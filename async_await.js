// async/await is used to return asynchronous code in synchronous manner
// async always returns a promise
// await waits suntil promise is settled
// error handling - try/catch
// we can only use await if we have sync in front of the function

/* Example 

const res = async()=>{
    return "hello world";
}
console.log(res());

async function example()
{
    const ans = await res()
    console.log(ans);
    console.log("Hello everyone");
}
example()
*/

const users=[{id:1,name:'John'},{id:2,name:'susan'},{id:3,name:"anna"}]

const articles=[{userId:1,articles:['one','two','three']},
{userId:2,articles:['four','five']},
{userId:3,articled:['six','seven','eight','nine']}
]

/*  By promise chain
getUser('susan').then((data)=>getArticles(data.id)).then((article)=>console.log(article)).catch((err)=>console.log(err))
*/
// by async/await
const user=async()=>{
try {
    const person=await getUser('Johns')
    const articles=await getArticles(person.id)
    console.log(articles)
}
 catch (error) {
    console.log(error);   
  }
}
user()
function getUser(name)
{
    return new Promise((resolve, reject)=>{
        const user=users.find((data)=>{
            return data.name===name
        })
        if(user)
   return resolve(user)
else
 reject("Wrong input")
    })
    
}

function getArticles(userId)
{
    return new Promise((resolve,reject)=>{
        const res = articles.find((data)=>data.userId===userId)
        if(res)
            return resolve(res.articles)
        else
            reject("Wrong input")
    })
}