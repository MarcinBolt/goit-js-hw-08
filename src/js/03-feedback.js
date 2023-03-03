const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

let userInputSubmittedData = { email: '', message: '' };

function handleInputs() {
  localStorage.setItem(
    'feedback-form-state',
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
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(userInputSubmittedData)
  );

  event.currentTarget.reset();
}

if (!localStorage.getItem('feedback-form-state')) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(userInputSubmittedData)
  );
}
let localStorageSavedFeedback = JSON.parse(
  localStorage.getItem('feedback-form-state')
);
if (localStorageSavedFeedback.email || localStorageSavedFeedback.message) {
  emailInput.value = localStorageSavedFeedback.email;
  messageTextarea.value = localStorageSavedFeedback.message;
}

form.addEventListener('input', throttle(handleInputs, 1000));
form.addEventListener('submit', handleSubmit);
