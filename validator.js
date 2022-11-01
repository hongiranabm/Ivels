function submitRegistrationForm(){
    var applicationForm = document.getElementById("applicationForm");    
    if (checkRegistrationInputs())
        applicationForm.submit();

}
function submitLoginForm(){
    var applicationForm = document.getElementById("applicationForm");    
    if (checkLoginInputs())
        applicationForm.submit();

}
function checkRegistrationInputs(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    return (checkName(name) && checkEmailFormat(email) && checkPassword(password)
        && checkConfirmPassword(password, confirmPassword));
}
function checkLoginInputs(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    return (checkEmailFormat(email) && checkPassword(password));
}
function checkName(name){
    document.getElementById("nameError").style.visibility = name != "" ? "hidden" : "visible";
    return name != "";
}
function checkEmailFormat(email){
    var matched = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    document.getElementById("emailError").style.visibility = matched ? "hidden" : "visible";				
    return matched;
}
function checkPassword(password){
    document.getElementById("passwordError").style.visibility = password != "" ? "hidden" : "visible";
    return password != "";
}
function checkConfirmPassword(password, confirmPassword){
    document.getElementById("confirmPasswordError").style.visibility = confirmPassword == password ? "hidden" : "visible";
    return confirmPassword == password;
}



function checkInvalidUser(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    var isInvalidUser = params.invalidUser;
    document.getElementById("invalidUserError").style.visibility = isInvalidUser == "true" ? "visible" : "hidden";
}

function checkInvalidEmail(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    var isInvalidEmail = params.invalidEmail;
    document.getElementById("invalidEmailError").style.visibility = isInvalidEmail == "true" ? "visible" : "hidden";
}

function showLoggedinUser(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    var name = params.name;
    document.getElementById("loggedinUser").innerHTML = name;

    // document.getElementById("invalidEmailError").style.visibility = isInvalidEmail == "true" ? "visible" : "hidden";
}