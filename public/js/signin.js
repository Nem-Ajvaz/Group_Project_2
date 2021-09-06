const $signinForm = $('#signinFormele');

const loginFormHandler = async event => {
  event.preventDefault();

  const username = $('#InputUsername-signin')
    .val()
    .trim();
  const password = $('#InputPassword-signin')
    .val()
    .trim();

  if (username && password) {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/welcome');
    } else {
      alert('Failed to log in');
    }
  }
};

$signinForm.on('submit', loginFormHandler);

// $('#signupFormInput').on('submit', loginFormHandler);

// $signInEle.on('submit', loginFormHandler);

// $signinForm.on('submit', e => {
//   e.preventDefault();

//   const $username = $('#InputUsername-signin').val();
//   const $password = $('#InputPassword-signin').val();

//   console.log($username);
//   console.log($password);
// });
