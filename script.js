// Assignment code here

var passwordLength 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()-+<>?|/"

var lowercaseConfirm
var uppercaseConfirm
var numericConfirm
var specialCharConfirm

var passwordChars = ""


var lengthPrompt = function() {
  var length = prompt("How many characters in the password?");
  while (length < 8 || length > 128) {
    length = prompt('Entered value must be at least 8 characters and no more than 128 characters.');
  }
  passwordLength = length;
}

var lowercaseChar = function() {
  lowercaseConfirm = confirm("Select 'Ok' to include lowercase characters in the password.");
  if (lowercaseConfirm) {
    passwordChars = passwordChars.concat(lowercase);
  }
  console.log(passwordChars);
}

var uppercaseChar = function() {
  uppercaseConfirm = confirm("Select 'Ok' to include uppercase characters in the password.");
  if (uppercaseConfirm) {
    passwordChars = passwordChars.concat(uppercase);
  }
  console.log(passwordChars);
}

var numericChar = function() {
  numericConfirm = confirm("Select 'Ok' to include numeric characters in the password.");
  if (numericConfirm) {
    passwordChars = passwordChars.concat(numeric);
  }
  console.log(passwordChars);
}

var specialChar = function() {
  specialCharConfirm = confirm("Select 'Ok' to include special characters in the password.");
  if (specialCharConfirm) {
    passwordChars = passwordChars.concat(special);
  }
  console.log(passwordChars);
}


function generatePassword() {
  lengthPrompt();
  lowercaseChar();
  uppercaseChar();
  numericChar();
  specialChar();

  while (!lowercaseConfirm && !uppercaseConfirm && !numericConfirm && !specialCharConfirm) {
    alert("You must select at least one character type.");
    passwordChars = "";
    lowercaseChar();
    uppercaseChar();
    numericChar();
    specialChar();
    
    console.log(passwordChars);
  };

  var randomPassword = "";

  for (i = 0; i < passwordLength; i++) {
    randomPassword += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }
  return randomPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  passwordChars = "";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
