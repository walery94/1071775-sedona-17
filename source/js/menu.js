var openMenu = document.querySelector(".main-header__toggle");
// var closeMenu = document.querySelector(".main-header__toggle--close");
var mobileMenu = document.querySelector(".navigation");

openMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("hello");
  mobileMenu.classList.add("navigation__open");
});
