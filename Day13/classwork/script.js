
// foreach
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((el,index)=>{
//     console.log(index, el);
// })

// let ans= arr.forEach((el,index)=>{
//     return el;
// })
// console.log(ans); ..........undefined

// map
// let ans= arr.map((el,index)=>{
//     return el*index;
// })
//  console.log(ans);

// filter

// let ans= arr.filter((el,index)=>{
//     return typeof el === "string";
// })
//  console.log(ans);

// reduce
// let ans= arr.reduce((acc,el)=>{
//     return acc+el;
// },1)
//  console.log(ans);

// let ans = arr.filter((el, index) =>{
//     return el % 2 == 0;
// }).map((el, index) =>{
//     return el * 2;
// }).reduce((acc,el) =>{
//     return acc + el;
// });
// console.log(ans);

let arr = [1,  5,2, 11,3, 4, 6, 14 , 7, 8, 9, 10,  12, 13, 18,15, 16, 17, 19, 20];
let ans= arr.sort((a,b)=>{
    return a-b;
})
console.log(ans);

let data=[
    {name:"John", age:25},
    {name:"Alice", age:28},
    {name:"Bob", age:32},
    {name:"Charlie", age:35},
    {name:"David", age:27},
    {name:"Eve", age:30},
    {name:"Frank", age:33},
    {name:"Grace", age:29},
    {name:"Harry", age:31},
    {name:"Ivy", age:26},
    {name:"Jack", age:34},
    {name:"Kate", age:36},
 ];
 data.sort((a,b)=>{
    //  return a.age - b.age;
    // let nameA=a.name.toUpperCase();
    // let nameB=b.name.toLowerCase();
    if(a.name< b.name){
        return -1;
    }
    if(a.name> b.name){
        return 1;
    }

    
 })
 console.log(data);




