// script.js

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const url = event.target.action;
  fetch(url, {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
}

// Add event listener to forms
document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', handleSubmit);
});

// Function to handle password reset
function handlePasswordReset(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const url = event.target.action;
  fetch(url, {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
}

// Add event listener to password reset form
document.querySelector('#reset-password-form').addEventListener('submit', handlePasswordReset);

// Function to handle login
function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const url = event.target.action;
  fetch(url, {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
}

// Add event listener to login form
document.querySelector('#login-form').addEventListener('submit', handleLogin);

// Function to handle registration
function handleRegistration(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const url = event.target.action;
  fetch(url, {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
}

// Add event listener to registration form
document.querySelector('#registration-form').addEventListener('submit', handleRegistration);