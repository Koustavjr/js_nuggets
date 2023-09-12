const people=[{name:"bob",
location:{street:"123 pine street",timezone:{offset:"+7:00"}}},
{name:"peter",location:{street:"123 apple street"}},
{name:"susan",location:{street:"123 GM street",timezone:{offset:"9:30"}}}]

people.forEach((person)=>{
    console.log(person?.location?.timezone?.offset || "GM");
})