document.addEventListener("DOMContentLoaded", function() {
    // fetch header
    fetch("/src/templates/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // fetch footer
    fetch("/src/templates/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});