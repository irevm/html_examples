//Variables
const form = document.querySelector('#form');
const buttonLogin = document.querySelector("#button-login");
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');
const userPassword = document.querySelector('#user-password');
const userPasswordRepeat = document.querySelector('#user-password-repeat');
const errors = document.querySelector('#errors');
let errorMessages = [];

function validate (event) {
  event.preventDefault();
  errorMessages = [];

  if(userName.value.trim().length === 0){
    errorMessages = errorMessages.concat('Nom és un camp obligatori');
  }

  if (userPassword.value.trim().length < 8 || userPasswordRepeat.value.trim().length < 8) {
    errorMessages = errorMessages.concat('La contrassenya és massa curta');
  }

  if (userPassword.value.trim() !== userPasswordRepeat.value.trim()) {
    errorMessages = errorMessages.concat('Les dues contrassenyes no coincideixen');
  }

  // Falten més validacions

  if (errorMessages.length === 0) {
    // Enviar formulari si no hi ha errors
    form.submit();
  } else {
   
    errors.textContent = '';
    errorMessages.forEach(function (message) {
        const myLi = document.createElement('li');
        myLi.textContent = message;
        errors.appendChild(myLi);
    });
  }
}

form.addEventListener('submit', validate);
