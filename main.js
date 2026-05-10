// hamburger menu javascript logic
const hamburger = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".navigation-links");
const navBgd = document.querySelector(".navigation-section");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("open");
  navBgd.classList.toggle("open");
});
