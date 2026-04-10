// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".service-box").forEach(box => {
    let pos = box.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if(pos < screen - 100){
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }
  });
});