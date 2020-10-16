$(document).ready(function() { 
     $('#usernameError').hide();
     $('#emailError').hide();
     $('#password2Error').hide();
     $('#passwordError').hide();
     $('#userError').hide();
     
    
    var form = document.getElementById('form');
    
    form.addEventListener('submit',function(e)  {
    e.preventDefault();
    checkInputs();
       
});
});



function checkInputs(){

    // get the values from the inputs
    var usernameValue = $('#username').val().trim();
    var emailValue = $('#email').val().trim();
    var passwordValue = $('#password').val().trim();
    var password2Value = $('#password2').val().trim();
    var usertypeValue = $('#usertype').val().trim();

    
    if(usernameValue && emailValue &&  passwordValue && password2Value && usertypeValue){
         $('#usernameError').hide();
         $('#emailError').hide();
         $('#password2Error').hide();
         $('#passwordError').hide();
         $('#userError').hide();
        
        var person = {
                username: usernameValue,
                email: emailValue,
                password: passwordValue,
                usertype:usertypeValue,
  
            };
        
            var tempuser = [];
//            if ( JSON.parse(window.localStorage.getItem('userlist')) != null) {
//                tempuser =  JSON.parse(window.localStorage.getItem('userlist'));
//            }
//            tempuser[usernameValue] = person;
//        console.log(tempuser);
            
        if (window.localStorage.getItem(usernameValue)) {
                window.localStorage.removeItem(usernameValue);
            }
        
        window.localStorage.setItem(usernameValue, JSON.stringify(person));

            var users = JSON.parse(window.localStorage.getItem(usernameValue));   
       console.log(users);
//            window.localStorage.clear();
//        window.location.href
        
            window.location.assign('login.html');       
        
        
    }else{
        if (!usernameValue) {
            $('#usernameError').show();
        }
        
        if (!emailValue) {
            $('#emailError').show();
        }
        if (!usertypeValue) {
            $('#userError').show();
        }
         if (!passwordValue) {
            $('#passwordError').show();
        }
         if (!password2Value) {
            $('#password2Error').show();
        }
       
   
    }
    
    
   



    
}


//function setErrorFor(input, message){
//    var formControl = input.parantElement;
//    var small = formControl.querySelector('small');
//    
//    // add error message inside small
//    small.innerText = message;
//    
//    // add error class
//    formControl.className = 'from-control error';
//    
//}
