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

sr.reveal(".li-1", {
  rotate: {
    x: 0,
    y: 80,
    z: 0,
  },
  duration: 1600,
  delay: 300,
});

sr.reveal(".li-2", {
  rotate: {
    x: 0,
    y: 80,
    z: 0,
  },
  duration: 1600,
  delay: 700,
});

sr.reveal(".li-3", {
  rotate: {
    x: 0,
    y: 80,
    z: 0,
  },
  duration: 1600,
  delay: 900,
});

sr.reveal(".li-4", {
  rotate: {
    x: 0,
    y: 80,
    z: 0,
  },
  duration: 1600,
  delay: 1000,
});

sr.reveal(".skills__item", {
  distance: "90px",
  origin: "bottom",
  duration: 2000,
});
