'use strict';
const burgerMenuToggler  = document.querySelector(".header__burger-menu-toggler");
const mobileMenu         = document.querySelector(".header__mob-menu");
const togglerBlock       = document.querySelector(".header__burger-menu-block");
const formToggler        = document.querySelector(".form__toggler");
const overlay            = document.querySelector(".overlay");
const modalForm          = document.querySelector(".modal-form-wrapper");
const formWrapper        = document.querySelectorAll(".form__wrapper")[1];

burgerMenuToggler.addEventListener('change', (e) => {

  mobileMenu.classList
    .toggle("visible-menu");

  togglerBlock.classList
    .toggle("toggler-blocks-toggled");

});

formToggler.addEventListener('change', (e) => {

  if(e.target.checked) {
    modalForm.classList.add("modal-form-wrapper-visible");
    formWrapper.classList.add("form__wrapper-modal-style");
  } else {
    modalForm.classList.remove("modal-form-wrapper-visible");
    formWrapper.classList.remove("form__wrapper-modal-style");
  }
});
