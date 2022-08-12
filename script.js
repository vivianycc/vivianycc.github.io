const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-panel>li>a");
const mobileScreen = window.matchMedia("(max-width: 576px)");

menuButton.addEventListener("click", toggleMenu);

menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    if (mobileScreen.matches) {
      toggleMenu();
    }
  })
);

function toggleMenu() {
  menu.classList.toggle("active");
}
