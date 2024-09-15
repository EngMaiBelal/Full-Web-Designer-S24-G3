
document.getElementById('myForm').onsubmit = function(event) {
    let isValid = true;
    if (!fnameValidation()) {
        isValid = false;
    }
    if (!PasswordValidation()) {
        isValid = false;
    }
    if (!EmailValidation()) {
        isValid = false;
    }
    if (!PhoneValidation()) {
        isValid = false;
    }
    if (!isValid) {
        event.preventDefault(); 
    }
}

function PasswordValidation() {
    let myPassword = document.querySelector("#password").value.trim();
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let passError = document.querySelector("#passwordError");
    
    if (!pattern.test(myPassword)) {
        passError.textContent = 'Password must be at least 8 characters long and include both letters and numbers.';
        return false;
    } else {
        passError.textContent = ''; 
        return true;
    }
}

function fnameValidation() {
    let fname = document.querySelector("#fname").value.trim();
    let fnameError = document.querySelector("#fnameError");
    
    if (fname.length < 3 || fname.length > 10) {
        fnameError.textContent = 'Name must be between 3 and 10 characters.';
        return false;
    } else {
        fnameError.textContent = ''; 
        return true;
    }
}

function PhoneValidation() {
    let myPhone = document.querySelector("#phone").value.trim();
    let pattern = /^\d{11}$/;
    let phoneError = document.querySelector("#phoneError");
    
    if (!pattern.test(myPhone)) {
        phoneError.textContent = 'Phone number must be 11 digits.';
        return false;
    } else {
        phoneError.textContent = ''; 
        return true;
    }
}

function EmailValidation() {
    let myEmail = document.querySelector("#email").value.trim();
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailError = document.querySelector("#emailError");
    
    if (!pattern.test(myEmail)) {
        emailError.textContent = 'Invalid email format.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}
