const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar__mobile");
const button = document.querySelector(".burger");
// const checkbox = document.getElementById("checkbox");

// checkbox.addEventListener("change", function () {
//   document.body.classList.toggle("dark");
// });

button.addEventListener("click", function () {
  mobileNavbar.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add("active");
  return navbar.classList.remove("active");
});

window.sr = ScrollReveal({ reset: true });

sr.reveal(".header__left", { distance: "50px", duration: 2000 });

sr.reveal(".header__image", {
  duration: 2000,
  distance: "100px",
  origin: "top",
});

sr.reveal(".about__left", {
  distance: "100px",
  origin: "left",
  duration: 1800,
});

sr.reveal(".about__right", {
  distance: "100px",
  origin: "right",
  duration: 2000,
});

sr.reveal(".li-1", { distance: "300px", origin: "left", duration: 1500 });

sr.reveal(".li-2", { distance: "300px", origin: "right", duration: 1700 });

sr.reveal(".li-3", { distance: "300px", origin: "left", duration: 1900 });

sr.reveal(".li-4", { distance: "300px", origin: "right", duration: 2100 });

sr.reveal(".skills__item", {
  distance: "100px",
  origin: "bottom",
  duration: 3000,
});
