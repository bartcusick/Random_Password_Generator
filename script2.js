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

// Write a function that is going to generate the password
function generatePassword() {

    // This Creates a prompt box which takes in text input for length of password. 
    // Checks to see if you have entered a number between 8 and 128. 
    // It also checks to see that you entered in a number.
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

// These are the confirm pop ups that let you choose if you want to use upercase, lowercase,numbers, and special charachters in your password.
    var length = lengthOfPassword;
    // Creates a confirm box which takes in true or false.
    var upperCase = confirm("Would you like to use upercase letters?");
    var lowerCase = confirm("Would you like to use lowercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var specialCharachters = confirm("Would you like to use special Charachters?");
    ///////////////////////////
// This creates a new large array from the arrays that were chosen with the confirm pop up choices.
    var myNewArray = "";
    for (var i = 0, n = upperCharset.length; i < length; ++i) {

        if (upperCase) myNewArray += upperCharset.charAt(Math.floor(Math.random() * n));
        if (lowerCase) myNewArray += lowerCharset.charAt(Math.floor(Math.random() * n));
        if (numbers) myNewArray += numberCharset.charAt(Math.floor(Math.random() * n));
        if (specialCharachters) myNewArray += specialCharset.charAt(Math.floor(Math.random() * n));
    }
    //This for statement pulls out a new array from myNewArray that has the lenght value chosen in the Prompt lengthOfPassword.
        var newPassword = "";
        for (var i = 0, n = myNewArray.length; i < length; ++i) {
            newPassword += myNewArray.charAt(Math.floor(Math.random() * n)); 
            console.log("what am i doing = " + myNewArray);
    }
    // Passing the new final password to the text box (passwordText)
    password =  newPassword;
    return password;
    }
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

