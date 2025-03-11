let API_KEY="AIzaSyAzumxhW6tkkJGoi8oitqhpA0-iToQ3ZI0"

let lowerBody = document.querySelector(".videos");

let search_term= document.getElementById("search-input").value || "India gate";

async function getData(){
    let data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)
    try{
        let res =await data.json();
        showData(res.items);

    console.log(res.items);
    }catch{
        console.log("Error fetching data");
    }
}
getData();

async function showData(arr){
    arr.forEach(({snippet}) => {
        let box = document.createElement("div");
        box.className="video";
        let img=document.createElement("img");
        img.src=snippet.thumbnails.medium.url;

        let title=document.createElement("h4");
        title.innerText=snippet.title;
        title.style.color="white";

        let chanel_title=document.createElement("h4s");
        chanel_title.innerText=snippet.channelTitle;
        chanel_title.style.color="white";


        box.append(img,title,chanel_title);
        lowerBody.append(box);    

    });
}
