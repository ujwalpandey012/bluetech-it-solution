// SCROLL REVEAL
const revealElements = document.querySelectorAll(
    ".fade-in, .slide-up, .service-card, .pricing-card, .project-card, .page-section"
);

function reveal() {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 70) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
