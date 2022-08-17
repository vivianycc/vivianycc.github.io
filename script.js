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

var tl = gsap.timeline();
tl.to("#loading-svg #arch,#moon,#mount1,#mount2,#mount3", {
  strokeDashoffset: 0,
  duration: 3,
})
  .to(".loading-bg", {
    background: "hsla(247, 9%, 19%, 1)",
    duration: 1,
    delay: -2,
  })

  .to(".loading-bg", { opacity: 0, display: "none", duration: 0.5 })
  .to("#loading-svg", { opacity: 0, duration: 2 })
  .to("#main-svg", { opacity: 1, duration: 1, delay: -2 });
