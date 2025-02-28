// let obj=[
//     {name:"iman",age:20},
//     {name:"dipankar",age:22},
//     {name:"amit",age:24},
//     {name:"aman",age:26},
//     {name:"anjali",age:28},
//     {name:"akash",age:30},
//     {name:"ankit",age:32},
//     {name:"anil",age:34},
//     {name:"anurag",age:36},
 
// ]
// // obj.sort((a,b)=> a.name.localeCompare(b.name))

// // console.log(obj)
// obj.sort((a,b)=>{
//     return a.age-b.age;
// })

// console.log(obj);

let arr =[3,6,9,2,56,34,98,56,23,12,90]

// function bubbleSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }

arr.sort((a,b)=>{
    return a-b;
})

console.log((arr));

