function generatePassword(length, includeNumbers, includeSpecialChars, includeUpperCase) {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecialChars) charset += "!@#$%^&*()_+";
    if (includeUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
 }
 document.addEventListener("DOMContentLoaded", function() {
    const lengthRange = document.getElementById("length")
    const lengthValue = document.getElementById("lengthValue")
    const passwordForm = document.getElementById("passwordForm");
    const passwordLengthInput = document.getElementById("passwordLength");
    const includeNumbersCheckbox = document.getElementById("includeNumbers");
    const includeSpecialCharsCheckbox = document.getElementById("includeSpecialChars");
    const includeUpperCaseCheckbox = document.getElementById("includeUpperCase");
    const generatedPasswordDiv = document.getElementById("generatedPassword");

    lengthRange.addEventListener("input", function(){
        lengthValue.textContent = lengthRange.value;
    });
    

    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const length = lengthRange.value;
        const includeNumbers = includeNumbersCheckbox.checked;
        const includeSpecialChars = includeSpecialCharsCheckbox.checked;
        const includeUpperCase = includeUpperCaseCheckbox.checked;
        const generatedPassword = generatePassword(length, includeNumbers, includeSpecialChars, includeUpperCase);
        generatedPasswordDiv.textContent = generatedPassword;
    });
    
 });