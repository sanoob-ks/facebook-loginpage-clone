function checkPasswordStrength() {
	var number = /([0-9])/;
	var alphabets = /([a-zA-Z])/;
	var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
	var password = $('#password').val().trim();
	if (password.length < 6) {
		$('#password-strength-status').removeClass();
		$('#password-strength-status').addClass('weak-password');
		$('#password-strength-status').html("Weak (should be atleast 6 characters.)");
	} else {
		if (password.match(number) && password.match(alphabets) && password.match(special_characters)) {
			$('#password-strength-status').removeClass();
			$('#password-strength-status').addClass('strong-password');
			$('#password-strength-status').html("Strong");
		}
		else {
			$('#password-strength-status').removeClass();
			$('#password-strength-status').addClass('medium-password');
			$('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
		}
	}
}

/*
$(document).ready(function(){
    $("#signupForm").validate({
        rules:{
            mobNumber:{
                required:true,
                minlength:3,
                maxlength:100
            },
            password:{
                required:true,
                minlength:6,
                maxlength:100,
                /*useLowercase:true,
                useUppercase:true,
                useNumbers:true,
                useSpecial:true 


            }
        },
        messages:{
            password:{
                required:"Required",
                minlength:"min 6 character needed",
                useLowercase:"need lowercase",
                useUppercase:"need uppercase",
                useNumbers:"need number",
                useSpecial:"need special character" 

        },
        }})
    }

    
) */