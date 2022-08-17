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

gsap.registerPlugin(ScrollTrigger);

const master = gsap.timeline({ pause: true });
const preTl = () => {
  return gsap
    .timeline()
    .to("#loading-svg #arch,#moon,#mount1,#mount2,#mount3", {
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
};
// preTl.pause();

const homeTl = () => {
  return gsap
    .timeline()
    .from(".header-title", { y: -100, opacity: 0, duration: 1 })
    .from("nav", { y: -100, opacity: 0, duration: 0.3 })
    .from(".header-subhead", { x: -100, opacity: 0, duration: 0.5 })
    .from(".header-intro", { x: 100, opacity: 0, duration: 0.5 }, "-=0.5");
};

let work = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-works",
      start: "top center",
      toggleActions: "play complete reverse reverse",
      // markers: true,
    },
  })
  .from(".section-works h2", { y: 100, opacity: 0 })
  .from(".work", { y: 100, opacity: 0, stagger: 0.5 });

const contactTl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-contact",
      start: "top center",
      toggleActions: "play complete reverse reverse",
      // markers: true,
    },
  })
  .from(".get-in-touch h2,.greeting,.social-media-list", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  })
  // .from(".resume::before", { y: 100, opacity: 0, duration: 1 })
  .from(".resume h2,.resume-content", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });

master.add(preTl());
master.add(homeTl());
