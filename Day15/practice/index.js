let obj=[
    {name:"iman",age:20},
    {name:"dipankar",age:22},
    {name:"amit",age:24},
    {name:"aman",age:26},
    {name:"anjali",age:28},
    {name:"akash",age:30},
    {name:"ankit",age:32},
    {name:"anil",age:34},
    {name:"anurag",age:36},
 
]
// obj.sort((a,b)=> a.name.localeCompare(b.name))

// console.log(obj)
obj.sort((a,b)=>{
    return a.age-b.age;
})

console.log(obj);