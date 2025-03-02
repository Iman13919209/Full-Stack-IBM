let data = [
  {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.5,
      "image": "https://img.clevup.in/16980/rd-bh202-onear-headphone-with-fm-and-memory-card-s-1702018681276_SKU-0202_0.jpg?width=600&format=webp"
  },
  {
      "id": 2,
      "name": "Gaming Mouse",
      "category": "Electronics",
      "price": 29.99,
      "rating": 4.2,
      "image": "https://m.media-amazon.com/images/I/71fEUcsDDEL.jpg"
  },
  {
      "id": 3,
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.7,
      "image": "https://m.media-amazon.com/images/I/71LBvbVa95L._AC_UF1000,1000_QL80_.jpg"
  },
  {
      "id": 4,
      "name": "Smartwatch",
      "category": "Wearable",
      "price": 199.99,
      "rating": 4.8,
      "image": "https://www.gonoise.com/cdn/shop/files/Carousel-500x500-1_5079e67e-c1ae-48f3-bf9a-d8a4c6a57e74.png?v=1697711374"
  },
  {
      "id": 5,
      "name": "Running Shoes",
      "category": "Fashion",
      "price": 59.99,
      "rating": 4.3,
      "image": "https://assets.ajio.com/medias/sys_master/root/20230906/39JF/64f8e275ddf7791519bad18b/-473Wx593H-469496383-black-MODEL.jpg"
  },
  {
      "id": 6,
      "name": "Leather Wallet",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.0,
      "image": "https://m.media-amazon.com/images/I/61-LnuaRONS._AC_SL1000_.jpg"
  },
  {
      "id": 7,
      "name": "Digital Camera",
      "category": "Electronics",
      "price": 349.99,
      "rating": 4.6,
      "image": "https://pyxis.nymag.com/v1/imgs/ac2/ecc/356e919cdf152299805e6b22e0042a1fbd-1----.2x.h473.w710.jpg"
  },
  {
      "id": 8,
      "name": "Backpack",
      "category": "Accessories",
      "price": 39.99,
      "rating": 4.4,
      "image": "https://icon.in/cdn/shop/files/1_28c80d52-0741-4d5e-9661-010607b51977.jpg?v=1735286540&width=1200"
  },
  {
      "id": 9,
      "name": "Sunglasses",
      "category": "Fashion",
      "price": 24.99,
      "rating": 4.1,
      "image": "https://www.soigne.co.in/product-images/DSC04482.1.jpg/583024000001329033/600x600"
  },
  {
      "id": 10,
      "name": "Water Bottle",
      "category": "Home & Kitchen",
      "price": 14.99,
      "rating": 4.2,
      "image": "https://glossier-prod.imgix.net/files/glossier-waterbottle-carousel-01_89aca6a5-75ef-471f-8e03-1197e2aeb13a.png?auto=compress,format&cs=srgb&w=1374"
  },
  {
      "id": 11,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.5,
      "image": "https://trueview.co.in/wp-content/uploads/2023/06/T29989-AE-1.webp"
  },
  {
      "id": 12,
      "name": "Electric Kettle",
      "category": "Home & Kitchen",
      "price": 34.99,
      "rating": 4.6,
      "image": "https://instacuppastore.com/cdn/shop/files/51mCqq7f1GL._SL1500.jpg?v=1689315327"
  },
  {
      "id": 13,
      "name": "Portable Power Bank",
      "category": "Electronics",
      "price": 39.99,
      "rating": 4.3,
      "image": "https://ghostek.in/cdn/shop/files/NRGpak-R207_1_700x700.jpg?v=1724773772"
  },
  {
      "id": 14,
      "name": "Smart LED Bulb",
      "category": "Home & Kitchen",
      "price": 19.99,
      "rating": 4.7,
      "image": "https://i03.appmifile.com/422_item_in/04/07/2024/109d2f07b639c8164303dee5e44eaffc!800x800!85.png"
  },
  {
      "id": 15,
      "name": "Noise Cancelling Earbuds",
      "category": "Electronics",
      "price": 89.99,
      "rating": 4.8,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7Kf-Z4t_4swVO-_mXNPb-UWhP0nG08cHdg&s"
  },
  {
      "id": 16,
      "name": "Travel Pillow",
      "category": "Accessories",
      "price": 22.99,
      "rating": 4.2,
      "image": "https://cdn.shopify.com/s/files/1/0294/1911/0444/files/dr-ortho-orthopaedic-360-travel-neck-rest-pillow-1_250x@2x.jpg?v=1730195938"
  },
  {
      "id": 17,
      "name": "Yoga Mat",
      "category": "Fitness",
      "price": 29.99,
      "rating": 4.5,
      "image": "https://wiselife.in/cdn/shop/files/1_c32957ca-8b92-4e21-b32d-395717efbd7d.jpg?v=1708681826"
  },
  {
      "id": 18,
      "name": "Men's Wrist Watch",
      "category": "Fashion",
      "price": 129.99,
      "rating": 4.6,
      "image": "https://5.imimg.com/data5/YU/EK/IC/SELLER-8169004/1.jpg"
  },
  {
      "id": 19,
      "name": "Wireless Charger",
      "category": "Electronics",
      "price": 27.99,
      "rating": 4.3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJFRuY7-b4T2v1FYeSMk5LXAHF7uN8jg2fg&s"
  },
  {
      "id": 20,
      "name": "Graphic T-Shirt",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.1,
      "image": "https://i.etsystatic.com/32836336/r/il/ec0e01/4617875256/il_570xN.4617875256_513r.jpg"
  }
]

function showData(arr){

    arr.forEach((el,index) => {
    let productBox=document.createElement("div");
    productBox.className="product-box";
    let img=document.createElement("img");
    img.src= el.image ;
    let heading=document.createElement("h2");
    heading.innerText= el.category;
    let name=document.createElement("p");
    name.innerText= el.name ;
    let price=document.createElement("p");
    price.innerText= el.price ;
    let rating=document.createElement("p");
    rating.innerText= el.rating ;
    let button=document.createElement("button");
    button.innerText="Add to Cart";
    button.addEventListener("click", () => {
        addtocart(el,index);
    })


    productBox.append(img,heading,name,price,rating,button);
    document.getElementById("products").append(productBox);
    });
    
    
}
showData(data);
function addtocart(el, index) {
  let cart = JSON.parse(localStorage.getItem("cartData")) || []; // Get existing cart data
  cart.push(el); // Add new item to cart
  localStorage.setItem("cartData", JSON.stringify(cart)); // Update localStorage
  alert("Item added to cart");
  
}

// function sorting(el ){
//     let btn1=document.getElementById("btn1");
//     btn1.addEventListener("click", () => {
//         showData(data.sort((a, b) => a.price - b.price));
//         sorting(data);
//     })

// }


let sort = document.getElementById("sort");
sort.addEventListener("change", () => {
    if (sort.value == "low") {
        let sorteddata=data.sort((a,b)=>{
            return a.price - b.price;
        })
        products.innerHTML = "";
        showData(sorteddata);
    }if (sort.value == "high") {
        let sorteddata=data.sort((a,b)=>{
            return b.price - a.price;
        })
        products.innerHTML = "";
        showData(sorteddata);
    }if (sort.value == "Ratting") {
        let sorteddata=data.sort((a,b)=>{
            return b.rating - a.rating;
        })
        products.innerHTML = "";
        showData(sorteddata);
    }
});

let sort1 = document.getElementById("price");
sort1.addEventListener("change", () => {
    let filteredData = []; 

    if (sort1.value === "low") {
        filteredData = data.filter(item => item.price <= 50);
    }if (sort1.value === "mid") {
        filteredData = data.filter(item => item.price >= 50 && item.price<=100); 
    } if (sort1.value === "high"){
        filteredData = data.filter(item => item.price >=100);  
    }

    document.getElementById("products").innerHTML = ""; 
    showData(filteredData); 
})

let sort2 = document.getElementById("category");
sort2.addEventListener("change", () => {
    let filteredData = [];
    if (sort2.value === "all") {
        filteredData = data;
    }if (sort2.value === "Electronics") {
        filteredData = data.filter(item => item.category === "Electronics");
    }if (sort2.value === "Home & Kitchen") {
        filteredData = data.filter(item => item.category === "Home & Kitchen");
    }if (sort2.value === "Accessories") {
        filteredData = data.filter(item => item.category === "Accessories");
    }if (sort2.value === "Fitness") {
        filteredData = data.filter(item => item.category === "Fitness");
    }if (sort2.value === "Fashion") {
        filteredData = data.filter(item => item.category === "Fashion");
    }if (sort2.value === "Wearable") {
        filteredData = data.filter(item => item.category === "Wearable");
    }
    document.getElementById("products").innerHTML = "";
    showData(filteredData);
})



