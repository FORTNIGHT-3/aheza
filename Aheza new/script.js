document.addEventListener("DOMContentLoaded", () => {
    // Display a welcome alert
    alert("Welcome to AHEZA IWACU COMPANY!");

    // Example of adding an event listener to the navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            alert(`You clicked on ${link.textContent}`);
        });
    });

    // Example of a form validation (for contact.html)
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const message = document.querySelector("#message").value;

            if (name === "" || email === "" || message === "") {
                alert("All fields are required!");
                event.preventDefault();
            } else {
                alert("Form submitted successfully!");
            }
        });
    }
});
