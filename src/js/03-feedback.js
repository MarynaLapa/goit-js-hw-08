import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const localStorageKey = "feedback-form-state";
let key_form = { email: '', message: '' };

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener("submit", handlerSubmit);
lodingForm();

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
        // console.log({ email, message } );
    }
}

function handlerSubmit(evt) {
    evt.preventDefault();
    const sumbitForm = localStorage.getItem(localStorageKey);
    console.log(JSON.parse(sumbitForm));
    localStorage.removeItem(localStorageKey);
    form.reset();
}






