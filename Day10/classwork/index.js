let str ="i am iman";
console.log(str.length);
console.log(str.length-1);
console.log(str[2]);

console.log(str[str.length-1]);
let arr = [1,2,3,"iman",1.23,true,false,null,undefined,""];
console.log(arr);
console.log(arr[arr.length-5]);
// arr.push("sima")
arr[4]="dipankar"
console.log(arr)
arr.pop()
console.log(arr)
// slice&splice

let obj ={
    iman:{className:"Btech",roll:"196",subjects:["nm","dbms","dsa","rm"]},
    dipankar:{className:"Btech",roll:"195",subjects:["nm","dbms","dsa","rm"]},
    1:undefined

    
}
console.log(obj)
console.log(obj.dipankar)
console.log(obj["dipankar"].subjects[2])

// obj.dipankar="bokachoda"
// console.log(obj.dipankar)

delete obj.dipankar
console.log(obj)

obj.sima={className:"Btech",roll:"92",subjects:["nm","dbms","dsa","rm"]};
console.log(obj)

let name = "subrata"
let Class="btech"
let roll = "167"
let subjects = ["nm","dbms","dsa","rm"]

let newObj={
    name,Class,roll,subjects
}
console.log(newObj);

let ans=[1,2,3,[4,5,6,[7,8,9]]];
console.log(ans[3][3][1]);

let superHeroes={
    a:{
        // id:objId(73486426482),
        name:"superman",
        power:['intelligence','money'],
        helth:45,
        villains:[{name:"redhood",health:34}],
    }
}
console.log(superHeroes['a'].villains[0].health)


