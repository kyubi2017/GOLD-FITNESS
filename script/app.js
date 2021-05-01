const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");
const body = document.querySelector("body");
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);


gsap.registerPlugin(ScrollTrigger)
gsap.from(".animate-hero", {
  duration :1,
  opacity:0,
  y: -300,
  stagger: 0.3,
  delay:0.5
});
gsap.from(".animate-services", {
  scrollTrigger: '.animate-services',
  duration :0.9,
  opacity:1,
  x: -300,
  stagger: 0.12,
  delay:1
});
gsap.from(".animate-img", {
  scrollTrigger: ".animate-img",
  duration: 1.2,
  opacity: 0,
  x: -350,
  delay: 1.5,
});
gsap.from(".animate-membership", {
  scrollTrigger: ".animate-membership",
  duration: 1,
  opacity: 0,
  x: -300,
  stagger: 0.5,
  delay: 2,
});
gsap.from(".animate-team", {
  scrollTrigger: ".animate-team",
  duration: 1,
  opacity: 0,
  x: -300,
  stagger: 0.3,
  delay:2.5
});
gsap.from(".animate-email", {
  scrollTrigger: ".animate-email",
  duration: 0.8,
  opacity: 0,
  x: -300,
  stagger: 0.25,
  delay:3
});
