function sm(){
    var Email = document.getElementById("Email").Value;
    var Passaword = document.getElementById("Passaword").Value;
    
    if(Email=="maliksoumyadip2018@gmail.com" && Passaword=="12sm"){
        window.location.assign("https://www.google.com");
        alert("log in successfully");
    }
    else{
        alert("Invalid informatin");
        return;
    }
}
function auth(){
    var email = document.getElementById("email").Value;
    var passaword = document.getElementById("passaword").Value;
    var username = document.getElementById("user-name").Value;
    if(email=="maliksoumyadip2018@gmail.com" && Passaword=="12sm" && user=="Soumya"){
        window.location.assign("https://www.google.com");
        alert("log in successfully");
    }
    else{
        alert("Invalid informatin");
        return;
    }
}
