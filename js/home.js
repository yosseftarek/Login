var userName=document.getElementById("welcomeuser");
var logoutbtn=document.getElementById("logoutbtn");
if(localStorage.getItem("userName")!=null){
    userName.innerHTML="Welcome "+localStorage.getItem("userName");
}
function logout(){
    window.location.href="index.html";
    localStorage.removeItem("userName");
}

logoutbtn.addEventListener("click",logout);