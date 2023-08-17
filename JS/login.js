
document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    emailField.value = '';

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    passwordField.value = '';

    if(email === 'sazalsiu@gmail.com' && password === 'sazal1234' ){
        window.location.href = 'bank.html' ;
    }
    else{
        alert ('invalid user');
    }
})