function login(event)
{
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value
    loginuser ={};

    var Ls = JSON.parse(localStorage.getItem("usersone"));
    var flag = false;
    for(i=0;i<Ls.length;i++)
    {
        if(Ls[i].userEmail == email && Ls[i].userPassword == password)
       {
        flag = true;
        loginuser = Ls[i]; 
       }
    } 
    if(flag ==true)
    {
        localStorage.setItem("logindata",JSON.stringify(loginuser));
        alert("Login Successfull")
    }
    else
    {
        alert("Creditinal not match")
    }
}