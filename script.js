// Smooth scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Simple form validation
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us!");
});
