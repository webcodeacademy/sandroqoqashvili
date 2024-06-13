
  function Login(url) {
    window.location.href=url;
 }


// const form = document.getElementById('signUpForm');
const form = document.getElementById('signUpForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log({data }); 
  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

    form.reset(); 

    window.location.href = "./secorder.html";

});

