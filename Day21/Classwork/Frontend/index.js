let parent =document.getElementById('parent');
async function getdata(){
    let data = await fetch(`http://localhost:3000/posts`);
    let  res = await data.json();

    showData(res);
    console.log(res);
}
getdata() 

async function showData(arr){
    arr.forEach((el) => {
       let box = document.createElement('div');
       box.className="box";
       let id =document.createElement('p');
       id.innerText=el.id;

       let title = document.createElement('p');
       title.innerText=el.title;

       let views=document.createElement('p');
       views.innerText=el.views;

       let btn1 = document.createElement('button');
       btn1.className="btn1";
       btn1.innerText="Update";
       btn1.addEventListener('click',async()=>{
        let newTitle = prompt("Enter new title:", el.title);
        if (newTitle) {
            try {
                let updateRes = await fetch(`http://localhost:3000/posts/${el.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title: newTitle }),
                });
                let updateData = await updateRes.json();
                if (updateData){
                    getdata();
                    alert("Title updated successfully")
                }
                 
            } catch (error) {
                console.error("Error updating data:", error);
            }
        }
       });    
       let btn2 = document.createElement('button');
       btn2.className="btn2";
       btn2.innerText="Delete";  
       btn2.addEventListener('click',async()=>{
        try{
            let deleteRes = await fetch(`http://localhost:3000/posts/${el.id}`, {
                method: "DELETE",
            });
            let deleteData = await deleteRes.json();
            if (deleteData){
                getdata();
                alert("Data deleted successfully")
            }
        }catch{
            console.error("Error deleting data:", error);
        }
       });
       
       box.append(id,title,views,btn1,btn2);
       parent.append(box);
    });
}

let button = document.getElementById("add");
button.addEventListener('click',async()=>{
    let value =document.getElementById("input").value;
    
    if (value == ""){
        alert("Please enter a  title");
        return;
    }
    let obj={
        title : value,
        views : Math.random(100,1000)
    }
    let res = await fetch(`http://localhost:3000/posts`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    });

    let response= await res.json();
    console.log(response);

    if(response){
        getdata();
        alert("Data saved successfully")
        
    }

})



