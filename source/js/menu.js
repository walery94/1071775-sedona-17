var buttonMenu = document.querySelector(".main-header__toggle");
var mobileMenu = document.querySelector(".navigation");

mobileMenu.classList.remove("navigation--no-js");
buttonMenu.classList.remove("main-header__toggle--no-js");

buttonMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  if(buttonMenu.classList.contains("main-header__toggle--close")) {
    mobileMenu.classList.remove("navigation__open");
    buttonMenu.classList.remove("main-header__toggle--close");
  }else{
    buttonMenu.classList.add("main-header__toggle--close");
    mobileMenu.classList.add("navigation__open");
  }
});
