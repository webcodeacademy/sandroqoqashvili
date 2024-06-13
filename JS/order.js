function Login(url){
    window.location.href=url;
}

var randomHour = Math.floor(Math.random() * 2);
var randomMinute = Math.floor(Math.random() * 60);

document.getElementById("time").innerHTML = randomHour + "hr " + randomMinute + "mins";

var length = 8;

var randID = Math.random().toString(36).substring(2, 2 + length);
document.getElementById("id").innerHTML = randID;






