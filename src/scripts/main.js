'use strict';
const formSubmit = document.querySelector(".form__wrapper");
const formToggler = document.querySelector(".form__toggler");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form__wrapper");
const formSection = document.querySelector(".form");
const formHeading = document.querySelector(".form__heading");
const formInputEmail = document.querySelector(".form__input-email");
const formInput = Array.from(document.querySelectorAll(".form__input"));
const formSubmitButton = document.querySelector(".form__submit");

formSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
});

formToggler.addEventListener('change', (event) => {
  if (event.target.checked) {
    overlay.style.cssText = `
      display: block;
      transition: 0.5s;
    `;
    form.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
    `;
    formSection.style.cssText = `
      width: 516px;
    `;
    formHeading.style.cssText = `
    text-align: center;
    width: 347px;
    font-size: 26px;
  `;
    formSubmitButton.style.cssText = `
      width: 398px;
      margin-bottom: 20px;
    `;
    formInput.forEach(input => {
      input.style.cssText = `
      display: block;
      width: 398px;
    `
    });
  }

  if (!event.target.checked) {
    overlay.style.cssText = "";
    form.style.cssText = "";
    formSection.style.cssText = "";
    formHeading.style.cssText = "";
    formInputEmail.style.display = "none";
    formSubmit.style.cssText = "";
    formInput.forEach(input => {
      input.style.cssText = ""
    });
  }
});
