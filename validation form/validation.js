var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var confirmpasswordError = document.getElementById('confirmpassword-error'); 
var submitError = document.getElementById('submit-error'); 

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z ]*$/)){
        nameError.innerHTML = 'Enter valid name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits'
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Enter valid phone number';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true; 
}

function validate_password() {
 

    var pass = document.getElementById('pass').value;

    var confirm_pass = document.getElementById('confirm_pass').value;

    if (pass != confirm_pass) {

        document.getElementById('wrong_pass_alert').style.color = 'red';

        document.getElementById('wrong_pass_alert').innerHTML

            = '<i class="fa-solid fa-circle-check"></i>';

        document.getElementById('create').disabled = true;

        document.getElementById('create').style.opacity = (0.4);

    } else {

        document.getElementById('wrong_pass_alert').style.color = 'green';

        document.getElementById('wrong_pass_alert').innerHTML =

        '<i class="fa-solid fa-circle-check"></i>';

        document.getElementById('create').disabled = false;

        document.getElementById('create').style.opacity = (1);

    }

}

function wrong_pass_alert() {

    if (document.getElementById('pass').value != "" &&

        document.getElementById('confirm_pass').value != "") {

        alert("Your response is submitted");

    } else {

        alert("Please fill all the fields");

    }

}