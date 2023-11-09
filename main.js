document.addEventListener("DOMContentLoaded", function() {
    // Load the navigation bar
    fetch("./main.html")
        .then(response => response.text())
        .then(html => {
            // Inject the navigation bar HTML into the back div
            document.getElementById("main").innerHTML = html;
        })
        .catch(error => {
            console.error("Failed to load navigation bar.", error);
        });
});
