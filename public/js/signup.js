const $attachAlert = $('#attach');

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
      $attachAlert.empty();
      const signupUser = $('<div>');
      signupUser.text(`Signup Failed! Username or email is already taken`);
      signupUser.addClass('alert alert-danger');
      signupUser.attr('role', 'alert');
      $attachAlert.append(signupUser);
    }
  }
};

$('#cancel').click(function() {
  window.location.href = '/';
});

$('#signupFormInput').on('submit', loginFormHandler);
