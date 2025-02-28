let obj=[
    {name:"Iman",age:22},
    {name:"Charlie",age:28},
    {name:"Alice",age:32},
    {name:"Bob",age:35},
    {name:"Grace",age:29},
    {name:"Harry",age:31},
    {name:"Eve",age:30},
    {name:"David",age:27},
    {name:"Frank",age:33},
    {name:"Jack",age:26},
    {name:"Ivy",age:34},    
]
 obj.sort((a,b)=>{
    return a.age-b.age;
 })
 console.log(obj);