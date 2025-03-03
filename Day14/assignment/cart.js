
function getData(){
  let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
  console.log(cartItems);
  cartItems.forEach((el, index) => {
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
    button.innerText="Delete";
    button.addEventListener("click", () => {
        removeItem();
    })


    productBox.append(img,heading,name,price,rating,button);
    document.getElementById("products").append(productBox);
    
  })
}
getData();

  function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(cartItems));
    // showData(removeItem)
    // document.getElementById("cart").innerHTML = "";
    // showData(data);
    window.location.reload();
    
    
  } 



  
  