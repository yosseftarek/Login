var nameUp = document.getElementById('nameUp');
var passwordUp = document.getElementById('passwordUp');
var emailUp = document.getElementById('emailUp');
var signupBtn = document.getElementById('signupBtn');
var alertMessage = document.getElementById('alertMessage');
var container = [];

signupBtn.addEventListener("click", signUp);

if (localStorage.getItem('users') != null) {
    container = JSON.parse(localStorage.getItem('users'));
}

function signUp() {
    var data = {
        name: nameUp.value,
        pass: passwordUp.value,
        email: emailUp.value,
    }
    if (check() == true) {
        getMessage('red', 'All inputs are required');
    }
    else {
        if (checkEmail() == true) { getMessage('red', 'Email already exists'); }
        else {
            container.push(data);
            localStorage.setItem('users', JSON.stringify(container));
            getMessage('green', 'Success');
            clear();
        }

    }

}
function clear() {
    nameUp.value = '';
    passwordUp.value = '';
    emailUp.value = '';
}
function check() {
    if (nameUp.value == '' || passwordUp.value == '' || emailUp.value == '') {
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
function checkEmail() {
    for (var i = 0; i < container.length; i++) {
        if (container[i].email == emailUp.value) {
            return true;
        }
    }
}