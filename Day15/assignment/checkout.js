
function handleCheckout(event) {
    event.preventDefault();
    const cart = JSON.parse(localStorage.getItem('cartData')) || [];
    // const orderSummary = document.getElementById('orderSummary');
    document.getElementById("orderSummary").innerHTML = '<h2>Order Summary</h2>';
    console.log(cart);
    cart.forEach(item => {
        document.getElementById("orderSummary").innerHTML += `<p>${item.name} - Quantity: ${item.quantity} - Price: ₹${item.price }</p>`;
    });

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById("orderSummary").innerHTML += `<h3>Total Price: ₹${totalPrice}</h3>`;
    
    
    localStorage.removeItem('cart');
    alert('Order placed successfully!');
    setTimeout(() => {
        window.location.href = 'index.html'; 
        
    }, 3000);
}


// Initialize the product listing on page load
if (document.getElementById('productList')) {
    displayProducts();
}

// Initialize the cart items on cart page load
if (document.getElementById('cartItems')) {
    displayCartItems();
}

// Handle checkout form submission
if (document.getElementById('checkoutForm')) {
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
}