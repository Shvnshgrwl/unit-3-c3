// document.querySelector("form").addEventListener(signup())
var userStack = JSON.parse(localStorage.getItem("users")) || []

function signup(){
    event.preventDefault()

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var Data = {
        Name:name,
        Email:email,
        Password:password,
    }

    userStack.push(Data)
    localStorage.setItem("users",JSON.stringify(userStack))
    alert("congratulations your account has been created")
    window.location.href = "login.html"
}