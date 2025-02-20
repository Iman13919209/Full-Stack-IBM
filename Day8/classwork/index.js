document.getElementById("parent").style.backgroundColor="cyan";
document.getElementById("parent").style.border="2px solid black";
document.getElementById("parent").style.height="300px";
document.getElementById("parent").style.width="80%";
document.getElementById("parent").style.textAlign="center";
let element=document.createElement("button");
element.innerText="click me";
element.style.border="2px solid black";
element.style.width="50px";
element.style.height="50px";
element.style.backgroundColor="red";
document.getElementById("parent").append(element);

// let num=10;
// console.log(num);

// num=20;




function iman(){
    let num=30;
    console.log(num);
}
iman();
console.log(num);
