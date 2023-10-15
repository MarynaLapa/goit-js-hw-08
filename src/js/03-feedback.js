import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const localStorageKey = "feedback-form-state";
let key_form = {};

lodingForm();

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener("submit", handlerSubmit);


function handlerInput(evt) {
    key_form[evt.target.name] = evt.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(key_form));
}

function lodingForm() {

    const saveForm = localStorage.getItem(localStorageKey);
    
        if (saveForm === null) {
            form.elements.email.value = '';
            form.elements.message.value = '';
        } else {
            const { email, message } = JSON.parse(saveForm);
            form.elements.email.value = email;
            form.elements.message.value = message;
        }
  
}

function handlerSubmit(evt) {
    evt.preventDefault();
    console.log(key_form);
    localStorage.removeItem(localStorageKey);
    form.reset();
}






