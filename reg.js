function register(event)
{
event.preventDefault();

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var confirmpassword=document.getElementById("confirmpassword").value;

if(name && email && password && confirmpassword)

{
    if(password.length >=8 && confirmpassword.length >=8)
    {
        if(password==confirmpassword)
        {
            var Ls=JSON.parse (localStorage.getItem("myntrausers")) || []
            var flag=false;
            for (i=0;i<Ls.length;i++)
            {
                if(Ls[i].userEmail==email)
                {
                    flag=true;
                }
            }
        if(!flag)
        {
            var userdata={userName:name,userEmail:email,userPassword:password,userconfirmpassword:confirmpassword,}
            Ls.push(userdata);
            localStorage.setItem("myntrausers",JSON.stringify(Ls))
            alert("regisrtaion successful")
            window.location.href=`./login.html`;
            document.getElementById("name").value =""
            document.getElementById("email").value=""
            document.getElementById("password").value=""
            document.getElementById("confirmpassword").value=""
        }
        else
        {
            alert("Email already Exist")
        }
    }else
    {
        console.log("password not match")
    }
}
else
{
    console.log("password should be atleast 8 character")
}
}
else
{
    console.log("fill all the fields")
}
}
