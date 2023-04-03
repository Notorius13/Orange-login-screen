var x = document.getElementById("Login");
var y = document.getElementById("Register");
var z = document.getElementById("btn");
function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "115px";
}
function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "./img/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "./img/eye-close.png";
  }
};
let eyeicon1 = document.getElementById("eyeicon1");
let password1 = document.getElementById("password1");

eyeicon1.onclick = function () {
  if (password1.type == "password") {
    password1.type = "text";
    eyeicon1.src = "./img/eye-open.png";
  } else {
    password1.type = "password";
    eyeicon1.src = "./img/eye-close.png";
  }
};

let eyeicon2 = document.getElementById("eyeicon2");
let password2 = document.getElementById("password2");

eyeicon2.onclick = function () {
  if (password2.type == "password") {
    password2.type = "text";
    eyeicon2.src = "./img/eye-open.png";
  } else {
    password2.type = "password";
    eyeicon2.src = "./img/eye-close.png";
  }
};
