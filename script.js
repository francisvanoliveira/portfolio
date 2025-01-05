const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuToggle.classList.toggle("open");
    overlay.classList.toggle("active"); // Exibe ou esconde o overlay
});

// Fecha o menu se clicar no overlay
overlay.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle.classList.remove("open");
    overlay.classList.remove("active");
});