// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCharset = "abcdefghijklmnopqrstuvwxyz"
var numberCharset = "1234567890"
var specialCharset = "!@#$%^&*()_+"
var finalPassword = ""
var lengthOfPassword = "null";

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log("I am writing a password = " + password);

}

// Write the function that is going to generate the password
function generatePassword() {
    // var finalPassword = [];
    // Creates a prompt box which takes in text input for length of password.
    lengthOfPassword = parseInt(prompt("Your number must be between 8 and 128 charachters", placeholder = "Select your password length.", "10"));
    if (lengthOfPassword < 8) {
        alert("Your password has to be greater than 8 charachters");
    }
    else if (lengthOfPassword > 128) {
        alert("Your password has to be less than 128 charachters");
    }
    if (isNaN(lengthOfPassword)) {
        alert("You have to at least enter a number.");
        return;
    }


    var length = lengthOfPassword;
    console.log("my length of pasword is now: " + lengthOfPassword);
    // Creates a confirm box which takes in true or false.
    // var x = parseInt(prompt("Enter a Value", "0"), 10);
    var upperCase = confirm("Would you like to use upercase letters?");
    var lowerCase = confirm("Would you like to use lowercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var specialCharachters = confirm("Would you like to use special Charachters?");
    ///////////////////////////

    // while (!upperCase && !lowers && !numbers && !specialCharachters) {
    //     alert("You must select at least one character type!");
    //     return;
    // }
    //////////////////////////
    // var myArray = "";
    // function generateNewPassword() {
    //     var password = "";

    //     var allowed = {};
    //     if (upperCase) password += upperCharset.charAt(Math.floor(Math.random() * n));
    //     if (lowerCase) password += lowerCharset.charAt(Math.floor(Math.random() * n));
    //     if (numbers) password += numberCharset.charAt(Math.floor(Math.random() * n));
    //     if (specialCharachters) password += specialCharset.charAt(Math.floor(Math.random() * n));

    //     for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

    //     document.getElementById("password").value = randoSequence(password).join("");
    //

    retVal = "";
    for (var i = 0, n = upperCharset.length; i < length; ++i) {

        retVal += upperCharset.charAt(Math.floor(Math.random() * n));
        retVal += lowerCharset.charAt(Math.floor(Math.random() * n));
        retVal += numberCharset.charAt(Math.floor(Math.random() * n));
        retVal += specialCharset.charAt(Math.floor(Math.random() * n));

        console.log("retVal = " + retVal);
    }
    //joining the array into a string.
    // return retVal.join("");
    return retVal;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

