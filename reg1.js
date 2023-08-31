function register(event)
{
    event.preventDefault();


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    if(name && email && password && confirmpassword)
    {
        if(password.length >=8 && confirmpassword.length >=8)
        {
            if(password == confirmpassword)
            {
                var Ls = JSON.parse(localStorage.getItem("usersone")) || []
                var flag =false
                for(var i=0;i<Ls.length;i++)
                {
                    if(Ls[i].userEmail==email)
                    {
                        flag=true;
                    }
                }
                if(!flag)
                {
                    var userdata ={userName:name,userEmail:email,userPassword:password,userConfirmpassword:confirmpassword}
                    Ls.push(userdata);
                    localStorage.setItem("usersone",JSON.stringify(Ls))
                    alert("Registration Successful")
                }
                else{
                    alert("Email already exist")
                }
            }else
            {
                console.log("password not match")
            }
        }else{
            console.log("password should 8")
        }
    }else{
        console.log("fill all field")
    }
}