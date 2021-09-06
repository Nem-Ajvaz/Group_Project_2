const $signUpEle = $('#signup');

const newUsers = [];

const userSignUp = e => {
  e.preventDefault();

  let user = {
    displayName: $('#InputUsername-signup').val(),
    email: $('#InputEmail-signup').val(),
    password: $('#InputPassword-signup').val()
  };
  newUsers.push(user);
  return newUsers;
};

$signUpEle.on('submit', () => {
  console.log($('#InputUsername-signup').val());
});
console.log(newUsers);
