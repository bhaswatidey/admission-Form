function validateform(){
    var name=document.loginform.name.value;
    var password=document.loginform.password.value;
    var address=document.loginform.address.value;
    var email=document.loginform.email.value;

    if(name==""){
        alert("name should be filled");
        return false;
    }
    else if(password.length<6){
        alert("password should be 6 digit");
        return false;
    }
    else if(address==""){
        alert("address should be filled");
        return false;
    }
    else if(email==""){
        alert("email should be filled");
        return false;
    }
    
}

