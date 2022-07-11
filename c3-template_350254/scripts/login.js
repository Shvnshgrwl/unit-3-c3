var arr = JSON.parse(localStorage.getItem("users"))

function login(){
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var count = 0

    for(var i=0;i<arr.length;i++){
        if(email==arr[i].Email && password==arr[i].Password){
            alert("Login success")
            count++
        }
    }
    if(count==0){
        alert("wrong password")
    }
    else{
        window.location.href = "index.html"
    }





}