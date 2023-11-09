document.addEventListener("DOMContentLoaded", function() {
    // Load the navigation bar
    fetch("./navbar.html")
        .then(response => response.text())
        .then(html => {
            // Inject the navigation bar HTML into the back div
            document.getElementById("nav").innerHTML = html;

            // Add event listener for clicks on the #nav container
            document.getElementById("nav").addEventListener("click", function(event) {
                // Check if the clicked element has a specific ID
                if (event.target.id === "y2023") {
                    console.log("2023 Clicked");
                    window.location.href = "./2023.html";
                } else if (event.target.id === "y2024") {
                    console.log("2024 Clicked");
                    window.location.href = "./2024.html";
                } else if (event.target.id === "y2025") {
                    console.log("2025 Clicked");
                    window.location.href = "./2025.html";
                } else if (event.target.id === "y2030") {
                    console.log("2030 Clicked");
                    window.location.href = "./2030.html";
                } else if (event.target.id === "logo") {
                    console.log("2030 Clicked");
                    window.location.href = "./index.html";
                } else if (event.target.id === "dashboard") {
                    console.log("2030 Clicked");
                    window.location.href = "./dashboard.html";
                }
                // Add similar checks for other elements
            });
        })
        .catch(error => {
            console.error("Failed to load navigation bar.", error);
        });
});
