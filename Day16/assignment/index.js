let productsData = []; // Store fetched data globally

async function fetchData() {
    try {
        // document.querySelector(".loader-container").style.display = "block"; // Show loader
        let response = await fetch("https://fakestoreapi.com/products");
        let ans = await response.json();
        console.log(ans);
        productsData = ans; // Store fetched data globally
        document.querySelector(".loader-container").style.display = "none"; // Hide loader
        showData(productsData); // Call showData with fetched data
    } catch (error) {
        console.log(error);
    }
}
console.log(productsData);

function showData(array) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; // Clear previous data

    array.forEach((item) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let img = document.createElement("img");
        img.src = item.image;

        let heading = document.createElement("h3");
        heading.textContent = item.title;

        let description = document.createElement("p");
        description.textContent = item.description;

        let price = document.createElement("p");
        price.innerText = "Price: $" + item.price;

        let rating = document.createElement("p");
        rating.innerText = "Rating: ⭐" + item.rating.rate;

        let button = document.createElement("button");
        button.textContent = "View Details";
        button.addEventListener("click", () => {
            viewDetails(item);
        });

        productBox.append(img, heading, price, rating, button);
        productsContainer.appendChild(productBox);
    });
}

fetchData(); // Fetch data immediately

function viewDetails(item) {
    let details = JSON.parse(localStorage.getItem("details")) || [];
    details.push(item);
    localStorage.setItem("details", JSON.stringify(details)); // Update localStorage
    console.log(details);
}

// Sorting function
let sort = document.getElementById("sort");
sort.addEventListener("change", () => {
    let sortedData = [...productsData]; // Copy array to avoid modifying original

    if (sort.value === "low") {
        sortedData.sort((a, b) => a.price - b.price);
    } 
    if (sort.value === "high") {
        sortedData.sort((a, b) => b.price - a.price);
    } 
    if (sort.value === "rating") {
        sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    showData(sortedData);
});

// Price filter
let sort1 = document.getElementById("price");
sort1.addEventListener("change", () => {
    let filteredData = [];

    if (sort1.value === "low") {
        filteredData = productsData.filter(item => item.price <= 50);
    } else if (sort1.value === "mid") {
        filteredData = productsData.filter(item => item.price >= 50 && item.price <= 100);
    } else if (sort1.value === "high") {
        filteredData = productsData.filter(item => item.price >= 100);
    } else {
        filteredData = productsData; // Reset filter
    }

    showData(filteredData);
});

// Category filter
let sort2 = document.getElementById("category");
sort2.addEventListener("change", () => {
    let filteredData = [];

    if (sort2.value === "all") {
        filteredData = productsData;
    } else {
        filteredData = productsData.filter(item => item.category.toLowerCase() === sort2.value.toLowerCase());
    }

    showData(filteredData);
});

// Search functionality with debounce
let searchInput = document.getElementById("search");
let debounceTimer;

searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = productsData.filter(product => 
            product.title.toLowerCase().includes(searchTerm)
        );

        showData(filteredProducts);
    }, 300); // Debounce delay to improve performance
});
