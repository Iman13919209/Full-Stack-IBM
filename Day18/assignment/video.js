let videoData = JSON.parse(localStorage.getItem("videoData"));

if (!videoData) {
    console.error("No video data found in localStorage.");
} else {
    showVideo(videoData);
}

let main = document.getElementById("container");

async function showVideo(data) {
    try {
        let iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/${data.videoId}`;
        iframe.height = "500px";
        iframe.width = "60%";
        iframe.setAttribute("allowfullscreen", true);

        let title = document.createElement("p");
        title.innerText = data.snippet?.title || "No title available";

        let channel_title = document.createElement("p");
        channel_title.innerText = data.snippet?.channelTitle || "No channel name available";
        
        main.append(iframe, title, channel_title);
    } catch (error) {
        console.error("Error displaying video:", error);
    }
}
showVideo(videoData);