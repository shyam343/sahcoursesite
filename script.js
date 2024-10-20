// Toggle mobile menu
document.getElementById("hamburger").addEventListener("click", function() {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});
