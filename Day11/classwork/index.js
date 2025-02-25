// let obj = { name: 'John Doe', 
//     age: 30,
//      city: 'New York',
//      myFunction: function() {   
//             console.log(this);
//             // console.log('Hello'+ this.name); 
//      },
//      sub: ["DBMS", "OS", "AI"],
//      newObj: {
//         1:20,
//         nestedFunction:()=> {
//             console.log(this);
//             console.log('Nested Function Called');
//         },
//         newobj1: {
//             2:"iman",
//             newFunction: function() {
//                 console.log(this);
//                 console.log('New Function Called');
//             }
//         }
//      }
//     };

//      obj.myFunction();
//      obj.newObj.nestedFunction();
//      obj.newObj.newobj1.newFunction();

// condition.........
// let num1=10;
// let num2=90;
// if(num1<num2){
//     console.log(`${num1} is less than ${num2}`);
// }else if(num1=num2){
//     console.log(`${num1} is equal to ${num2}`);
// }
// else{
//     console.log(`${num1} is graeter than ${num2}`);
// }

// let num=10;
// if(num%3==0 && num%5==0){
//     console.log("FizzBuzz")
// }else if(num%3==0){
//     console.log("Fizz")
// }
// else if(num%5==0){
//     console.log("Buzz")
// }
//  else{
//     console.log("number is not divisible by 3 or 5")
// }
    
// let a =10;
// for(let i=0;i<a;i++){
//     console.log(i);
// }

// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i);
// }
// let str="sima chowdhury";
// for(let i=0;i<str.length;i++){
//     console.log("a"+str[i]);
// }

// let arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u"];
// for(let name of arr){
//     console.log(name);
// }

// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(`${arr[i]} is even`);
//     }else{
//         console.log(`${arr[i]} is odd`);
//     }
// }

let num=0;
while(num<=10){

    console.log(num);
    num++;
}