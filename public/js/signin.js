const $signinForm = $('#signinFormele');
const $attachAlert = $('#attach');

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
      window.location.replace('/welcome');
    } else {
      $attachAlert.empty();
      const signinUser = $('<div>');
      signinUser.text(`Signin Failed! Invalid username or password`);
      signinUser.addClass('alert alert-danger');
      signinUser.attr('role', 'alert');
      $attachAlert.append(signinUser);
    }
  }
};

$('#cancel').click(function() {
  window.location.href = '/';
});

$signinForm.on('submit', loginFormHandler);
