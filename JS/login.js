function Login(url){
  window.location.href=url;
}

const loginForm = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');




loginForm.addEventListener('submit', (event) => {
  
  event.preventDefault();
   var userInputedName = localStorage.getItem("firstName")
  var userInputedPassword = localStorage.getItem("password")
 
  
  if (username.value === userInputedName && password.value === userInputedPassword) {
    window.location.href = './orderform.html'; 
  
  } else {
    alert('Invalid username or password');
  }
 
});
  