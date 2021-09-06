// const loginFormHandler = async event => {
//   event.preventDefault();

//   const display_name = $('#InputUsername-signup')
//     .val()
//     .trim();
//   const pass_word = $('#InputPassword-signup')
//     .val()
//     .trim();
//   const email = $('#InputEmail-signup')
//     .val()
//     .trim();

//   if (display_name && pass_word) {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       body: JSON.stringify({ display_name, pass_word, email })
//     });

//     if (response.ok) {
//       document.location.replace('/welcome');
//     } else {
//       alert('Failed to log in');
//     }
//   }
// };

// $('#signupFormInput').on('submit', loginFormHandler);

//FRED TEST123
