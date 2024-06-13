function Login(url){
    window.location.href=url;
} 
 

const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');

document.getElementById("user-info").innerHTML = firstName;
document.getElementById("welcome-info").innerHTML = firstName +lastName;