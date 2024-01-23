var signinEmail = document.getElementById('signinEmail');
var signinPass = document.getElementById('signinPass');
var LoginBtn = document.getElementById('LoginBtn');
var alertMessage = document.getElementById('alertMessage');
var container = [];

if (localStorage.getItem('users') != null) {
    container = JSON.parse(localStorage.getItem('users'));
}

LoginBtn.addEventListener("click", logIn);

function logIn() {
    if (checkEmailAndPassword() == true) {
        window.location.href = "home.html";
    }
    else {
        if (check() == true) {
            getMessage("red", "All inputs are required");
        }

        else {
            getMessage("red", "Data isn't correct");
        }
    }
}

function checkEmailAndPassword() {
    for (var i = 0; i < container.length; i++) {
        if (container[i].email == signinEmail.value && container[i].pass == signinPass.value) {
            localStorage.setItem("userName", container[i].name);
            return true;
        }
    }

}
function check() {
    if (signinEmail.value == '' || signinPass.value == '') {
        return true;
    }
    else {
        return false
    }
}
function getMessage(color, text) {
    alertMessage.classList.replace("d-none", "d-block");
    alertMessage.style.color = color;
    alertMessage.innerHTML = text;
}