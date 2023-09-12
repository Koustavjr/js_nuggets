const fetchTabs=()=>{
    return fetch("https://www.course-api.com/react-tabs-project").then((res)=>res.json())
}

export default fetchTabs