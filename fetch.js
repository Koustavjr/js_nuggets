// Fetch API - Use to get HTTP request from the browser
// Returns a promise
// Default - GET Requests, Supports other methods as well
// .json returns promise

/* promise approach 

const url = 'https:www.course-api.com/react-tours-project'
console.log(fetch(url))

*/ 
/* Async await
const url = 'https:www.course-api.com/react-tours-project'
async function getData()
{
  const res= await fetch(url)
  //let data = await res.json()
 // console.log(res)
  // return res
 // return res.json()
}
//getData()
// .json also returns promise console.log(getData().then((res)=>console.log(res.json())))
//console.log(getData().then((res)=>console.log(res)))

*/
