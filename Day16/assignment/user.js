let usersData = []; // Store user data globally

async function fetchData() {
    try {
        let response = await fetch("https://fakestoreapi.com/users");
        let ans = await response.json();
        console.log(ans);
        usersData = ans; 
        document.querySelector(".loader-container").style.display = "none"; 
        showData(usersData); 
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

function showData(array) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; // Clear previous data

    array.forEach((item) => {
        let userBox = document.createElement("div");
        userBox.className = "product-box";

        let img = document.createElement("img");
        img.src = "https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small_2x/profile-icon-login-head-icon-vector.jpg";

        let name = document.createElement("h3");
        name.textContent = `${item.name.firstname} ${item.name.lastname}`;

        let username = document.createElement("p");
        username.textContent = `Username: ${item.username}`;

        let email = document.createElement("p");
        email.textContent = `Email: ${item.email}`;

        let address = document.createElement("p");
        address.textContent = `Address: ${item.address.city}, ${item.address.street}`;

        let button = document.createElement("button");
        button.textContent = "View Details";
        button.addEventListener("click", () => {
            viewDetails(item);
        });

        userBox.append(img, name, username, email, address, button);
        productsContainer.appendChild(userBox);
    });
}

async function initialize() {
    await fetchData(); // Fetch data before attaching sorting event

    let sort = document.getElementById("sort");
    if (sort) { // Ensure the sorting dropdown exists
        sort.addEventListener("change", () => {
            let sortedData = [...usersData]; // Copy array to avoid modifying original

            if (sort.value === "asc") {
                sortedData.sort((a, b) => a.name.firstname.localeCompare(b.name.firstname));
            } else if (sort.value === "desc") { // Fixed typo from "dse" to "desc"
                sortedData.sort((a, b) => b.name.firstname.localeCompare(a.name.firstname));
            }

            showData(sortedData);
        });
    }

    let searchInput = document.getElementById("search");
    if (searchInput) { // Ensure the search input exists
        let debounceTimer;
        searchInput.addEventListener("input", () => {
            clearTimeout(debounceTimer);

            debounceTimer = setTimeout(() => {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredUsers = usersData.filter(user => 
                    user.name.firstname.toLowerCase().includes(searchTerm) ||
                    user.name.lastname.toLowerCase().includes(searchTerm)
                );

                showData(filteredUsers);
            }, 300); // Debounce delay to improve performance
        });
    }
}

setTimeout(() => {
    initialize();
}, 1000);
