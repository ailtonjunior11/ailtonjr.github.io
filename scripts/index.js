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
