// Contact form submission
document.querySelector(".contact-box form").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form submission
    alert("Thank you for your feedback! We'll get back to you soon.");
    this.reset(); // Clear the form
});

// Smooth scroll for nav links
document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        const target = this.getAttribute("href");
        if (target.startsWith("#") && target.length > 1) {
            e.preventDefault();
            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// Project website buttons alert
document.querySelectorAll(".project-card button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Project link will be available soon!");
    });
});

// Scroll-down behavior (if you add a scroll-down button later)
const scrollDown = document.querySelector(".scroll-down");
if (scrollDown) {
    scrollDown.addEventListener("click", () => {
        document.querySelector(".info-section").scrollIntoView({ behavior: "smooth" });
    });
}
