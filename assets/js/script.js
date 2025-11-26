// ============================
// MOBILE MENU TOGGLE
// ============================
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});

// ============================
// PAGE PRELOADER
// ============================
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 400);
    }
});

