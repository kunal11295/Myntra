function login(event){
event.preventDefault();

var userEmail = document.getElementById("useremail").value;
var userPassword = document.getElementById("userpassword").value;
var loginuser={};
var Ls = JSON.parse(localStorage.getItem("myntrausers"));
var flag=false;
for( var i=0;i <Ls.length;i++){
    if(Ls[i].userEmail == userEmail && Ls[i].userPassword== userPassword){
        flag=true;
        loginuser=Ls[i];
    }
}
if(flag == true){
    localStorage.setItem("myntraCurrentUser",JSON.stringify(loginuser));
    alert("login successful")
    window.location.href=`./homepage.html`;
}
else{
    alert("credintials not match")
}
}
