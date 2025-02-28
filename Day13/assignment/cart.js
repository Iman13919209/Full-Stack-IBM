document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
    // console.log(cartItems);
    const cartTable = document.getElementById("cart");
  
    cartItems.forEach((el,index) => {
    let productBox=document.createElement("div");
    productBox.className="product-box";
    let heading=document.createElement("h2");
    heading.innerText= el.category;
    let img=document.createElement("img");
    img.src= el.image ;
    let name=document.createElement("p");
    name.innerText= el.name ;
    let price=document.createElement("p");
    price.innerText= el.price ;
    let rating=document.createElement("p");
    rating.innerText= el.rating ;
    let button=document.createElement("button");
    button.innerText="Delete";
    button.addEventListener("click", () => {
        removeItem(index);
    })
  
  
    productBox.append(heading,img,name,price,rating,button);
    cartTable.append(productBox);
    });
    
   
  });
  function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(cartItems));
    location.reload();
    
  }
  
  