// let name= "synchronous";
// console.log(name);
// let surName= "code";
// console.log(surName);

// // macro task---settimeout,setinterval,setimmdiate
// setTimeout(()=>{
//     console.log("Asynchronous");
// },3000);
// console.log(name,surName);

// // micro task---promise,queueMicrotask----priority higher than macro task

// setTimeout(()=>{
//     console.log("Asynchronous-2");
// },4000)

// setTimeout(()=>{
//     console.log("Asynchronous-3");
// })


// // micro task using queueMicrotask

// queueMicrotask(()=>{
//     console.log("Microtask");
// })
// for(var i=0;i<10;i++){
//     console.log(i);
//     setTimeout(()=>{
//         console.log(i);

//     },1000)
//     console.log(i);
// }

// let myPromise=new Promise((resolve,reject)=>{
//     let flag=false;

//     if (flag){
//         resolve("Success");
//     }else{
//         reject("Failed");
//     }
// });
// console.log(myPromise);


async function fetchData(){
    try{
        let data = await fetch("https://fakestoreapi.com/products");
    let ans = await data.json();
    console.log(ans);
    }catch(error){
        console.log(error);
    }
}
fetchData();

