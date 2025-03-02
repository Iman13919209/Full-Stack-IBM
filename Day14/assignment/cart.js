document.addEventListener("DOMContentLoaded", () => {
  const cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
  const tbody = document.getElementById("tbody"); // Get tbody

  cartItems.forEach((el, index) => {
      let tr = document.createElement("tr"); // Create a new row

      let categoryTd = document.createElement("td");
      categoryTd.innerText = el.category;

      let imgTd = document.createElement("td");
      let img = document.createElement("img");
      img.src = el.image;
      
      imgTd.appendChild(img);

      let nameTd = document.createElement("td");
      nameTd.innerText = el.name;

      let priceTd = document.createElement("td");
      priceTd.innerText = el.price;

      let ratingTd = document.createElement("td");
      ratingTd.innerText = el.rating;

      let buttonTd = document.createElement("td");
      let button = document.createElement("button");
      button.innerText = "Delete";
      button.addEventListener("click", () => {
          removeItem(index);
      });
      buttonTd.appendChild(button);

      // Append all <td> elements to <tr>
      tr.append(nameTd, imgTd, categoryTd, priceTd, ratingTd, imgTd,buttonTd);

      // Append <tr> to <tbody>
      tbody.appendChild(tr);

      let totalPrice = 0;
      let quantity= document.createElement("button");
      let quantityText = document.createElement("span");
      quantityText.innerText = cartItems.length;
      quantity.appendChild(quantityText);
      let totalPriceElement = document.getElementById("totalPrice");
      cartItems.forEach(item => {
          totalPrice += item.price;
      });
      totalPriceElement.innerText = "Total Price: " + totalPrice;
      
      

  });
  
});

  function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(cartItems));
    location.reload();
    
  }

  function updateQuantity(productId, change) {
    const cart = JSON.parse(localStorage.getItem('cartData')) || [];
    const product = cart.find(item => item.id === productId);
    
    if (product) {
        product.quantity += change;
        if (product.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems();
        }
    }
  }
  
  