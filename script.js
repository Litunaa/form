// Marcus H TE21B

function validateForm(){   
    let SSNVerification = validateSocialSecurityNumber();    
    if (!SSNVerification){
        return false;
    }

    let passwordVerification = validatePassword();
    if (!passwordVerification){
        return false;
    }
    
    return true;

}

function validateSocialSecurityNumber(){
    let SSN = document.getElementById("SSN").value;

    if (SSN){ // Checks wheter the user has inputted a SSN value, which has to be done since an SSN input isn't mandatory

        // "Year" and "Personal Number" isn't necessary to check since they are valid for all numbers. 
        let month = parseInt(SSN.substring(2, 4));
        let day = parseInt(SSN.substring(4, 6));


        // Validates wheter the inputted day and month is withing the correct range
        if (!(month >= 1 && month <= 12)){
            alert("Month out of range");
            return false;
        }

        if (month === 2 && !(day >= 1 && day <= 28)){
            alert("Day out of range");
            return false;
        }

        let evenMonth = month % 2 === 0;

        if (evenMonth){
            if (!(day >= 1 && day <= 30)){
                alert("Day out of range");
                return false;
            }
        }

        else if (!(day >= 1 && day <= 31)){
            alert("Day out of range");
            return false;
        }
    }
    return true;
}

function validatePassword(){
    let password = document.getElementById("password").value;
    let verification = document.getElementById("verification").value;

    // Checks wheter password and "Confirm password" are the same
    if (password != verification){
        alert("Passwords do not match.");
        return false;
    }

    // Checks wheter the password is longer than 6 characters (7+)
    if (password.length < 7){
        alert("Password must be atleast 7 characters long");
        return false;
    }

    let hasNumber = false;

    // Checks wheter the password contains a number
    for (let char of password){
        if (!isNaN(parseInt(char))){
            hasNumber = true;
            break;
        }
    }
    
    if (!hasNumber){
        alert("Password must contain at least one number");
        return false;
    }

    return true;
}

