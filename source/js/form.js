var form = document.querySelector(".main-form__form");
var button = document.querySelector(".main-form__button");

var myName = document.getElementById("name");
var surname = document.getElementById("surname");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var patronymic = document.getElementById("patronymic");

var sendingModal = document.querySelector(".modal-sending");
var closeSendingModal = document.querySelector(".modal-sending__button");
var errorModal = document.querySelector(".modal-error");
var closeErrorModal = document.querySelector(".modal-error__button");

var validateInput = function(input) {
  if (isEmpty(input)) {
    return input.style.borderColor = "#e32636";
  }
  return input.style.borderColor = "#f2f2f2";
};

var isEmpty = function(input) {
  if (input.value === "") {
    return true;
  }
  return false;
};

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  validateInput(myName);
  validateInput(surname);
  validateInput(phone);
  validateInput(email);
  if (isEmpty(myName) || isEmpty(surname) || isEmpty(phone) || isEmpty(email)) {
    errorModal.classList.add("modal-error__show");
  } else {
    sendingModal.classList.add("modal-sending__show");
    myName.value = "";
    surname.value = "";
    phone.value = "";
    email.value = "";
    patronymic.value = "";
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if(sendingModal.classList.contains("modal-sending__show")) {
      sendingModal.classList.remove("modal-sending__show");
    }
    if(errorModal.classList.contains("modal-error__show")) {
      errorModal.classList.remove("modal-error__show");
    }
  }
});

closeErrorModal.addEventListener("click", function(evt) {
  evt.preventDefault();
  errorModal.classList.remove("modal-error__show");
});

closeSendingModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  sendingModal.classList.remove("modal-sending__show");
});