$(document).ready(function() { 
     $('#usernameError').hide();
     $('#emailError').hide();
     $('#usertype').hide();
     $('#password2Error').hide();
     $('#passwordError').hide();
     
    
    var form = document.getElementById('form');
    
    form.addEventListener('submit',function(e)  {
    e.preventDefault();
    validateLogin();
});
});

function validateLogin() {
    console.log($('#password').val());
    var usernameValue = $('#username').val().trim();
    var passwordValue = $('#password').val().trim();
    
console.log(window.localStorage);
    var user = JSON.parse(window.localStorage.getItem(usernameValue));
    console.log(user);
    
    if (user && (user.password == passwordValue)) {
        console.log('login success');
        if (user.usertype == 'admin') {
            console.log('admin');
            window.location.assign("dashboard.html");
        } else {
            console.log('user');
            window.location.assign("Home.html");
        }
    } else {
        console.log('login failed');
    }
    
}
