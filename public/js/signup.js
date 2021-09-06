const loginFormHandler = async event => {
  event.preventDefault();

  const username = $('#InputUsername-signup')
    .val()
    .trim();
  const password = $('#InputPassword-signup')
    .val()
    .trim();
  const email = $('#InputEmail-signup')
    .val()
    .trim();

  // console.log(username);
  // console.log(password);
  // console.log(email);

  if (username && password && email) {
    const response = await fetch('/api/createUser/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password, email }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/welcome');
    } else {
      alert('Failed to sign up');
    }
  }
};

$('#signupFormInput').on('submit', loginFormHandler);
