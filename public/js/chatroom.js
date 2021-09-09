$(document).ready(async () => {
  const response = await fetch('/api/chat');
  const data = await response.json();
  console.log(data, 'here');
});
