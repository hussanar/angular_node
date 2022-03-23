const hamburgerIcon = document.getElementById("hamburger-icon");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);


hamburgerIcon.addEventListener("click", () => {
    header.classList.toggle("active");
});

navLinks.forEach(function(nav) {
    nav.addEventListener('click', function() {
        this.classList.toggle("open");
        if (nav.classList.contains("open")) {
            navLinks.forEach(function(nav) {
                nav.classList.remove("open");
            });
            nav.classList.toggle("open");
        }
    });
});