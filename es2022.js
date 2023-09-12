// ES2022

//at() -- Takes an integer and returns the item at that index -- string or array

const arr = [100,200,300]
console.log(arr.at(-1));
console.log(arr.at(0));
const name ="Neymar"
console.log(name.at(2));
//Top level await--Baisc example

const resp = await fetch("https://www.course-api.com/react-tabs-project")
const data = await resp.json()
console.log(data);

import fetchTabs  from "./fetchTabs.js";
const info = await fetchTabs()
console.log(info);