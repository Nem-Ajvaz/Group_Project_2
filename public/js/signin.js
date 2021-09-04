//signin
const loginFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#InputUsername-signin').value.trim();
  const password = document.querySelector('#InputPassword-signin').value.trim();
  
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/welcome');
    } else {
      alert(response.statusText);
    }
  }
};

//signup
const signupFormHandler = async (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#InputUsername-signup').value.trim();
  const email = document.querySelector('#InputEmail-signup').value.trim();
  const password = document.querySelector('#InputPassword-signup').value.trim();
  
  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/welcome');
    } else {
      alert(response.statusText);
    }
  }
};
  
document.querySelector('#siginin').addEventListener('submit', loginFormHandler);
  
document.querySelector('#signup').addEventListener('submit', signupFormHandler);
  