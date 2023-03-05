import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

let userInputSubmittedData = { email: '', message: '' };

function handleInputs() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: emailInput.value,
      message: messageTextarea.value,
    })
  );
}

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }
  userInputSubmittedData = { email: email.value, message: message.value };
  console.log(userInputSubmittedData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userInputSubmittedData));
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userInputSubmittedData));
}
let localStorageSavedFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (localStorageSavedFeedback.email || localStorageSavedFeedback.message) {
  emailInput.value = localStorageSavedFeedback.email;
  messageTextarea.value = localStorageSavedFeedback.message;
}

form.addEventListener('input', throttle(handleInputs, 500));
form.addEventListener('submit', handleSubmit);
