$('#form-register').submit(() => {

    if($('#name').val().length < 1) {

        Swal.fire(
            'Error in the name',
            'Field cannot be empty',
            'error'
        )

        return false;

    }

    const email = $('#email').val();

    if(email.length < 1) {

        Swal.fire(
            'Error in the email',
            'Field cannot be empty',
            'error'
        )

        return false;

    } else if (!(/\S+@\S+\.\S+/.test(email))) {

        Swal.fire(
            'Error in the email',
            'Must be a valid e-mail address',
            'error'
        )

        return false;

    }

    const number = $('#number').val();

    if(number.length < 1) {

        Swal.fire(
            'Error in the number',
            'Field cannot be empty',
            'error'
        )

        return false;

    } else if (isNaN(number)) {

        Swal.fire(
            'Error in the number',
            'Must be a number',
            'error'
        )

        return false;

    } else if (number.length > 10 && number.length < 7) {

        Swal.fire(
            'Error in the number',
            'Must be a valid phone number address',
            'error'
        )

        return false;

    }

    if($('#date').val().length < 1) {

        Swal.fire(
            'Error in the date',
            'Field cannot be empty',
            'error'
        )

        return false;

    }

    const password = $('#password').val();

    // The password must be at least 8 characters long
    // and contain at least one lowercase letter, one uppercase letter,
    // one number and one special character

    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.length < 1) {

        Swal.fire(
            'Error in the password',
            'Field cannot be empty',
            'error'
        )

        return false;

    } else if (regexPassword.test(password)) {

        Swal.fire(
            'Error in the password',
            'The password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter,one number and one special character',
            'error'
        )

        return false;

    }

});

/* const showError = (field, content = 'Field cannot be empty', icon = 'error') => {
    Swal.fire(
        `Error in the ${field}`,
        content,
        icon
    )

    return false;
} */