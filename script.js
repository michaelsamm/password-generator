// Character set variables and password length
var passwordLength 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()-+<>?|/"

// Charactype type inclusion variables
var lowercaseConfirm
var uppercaseConfirm
var numericConfirm
var specialCharConfirm

// Variable storing characters to use in password
var passwordChars = ""


// Function to prompt for password length
var lengthPrompt = function() {
  var length = prompt("How many characters in the password?");
  // Validate password length is between 8 and 128 characters
  while (length < 8 || length > 128) {
    length = prompt('Entered value must be at least 8 characters and no more than 128 characters.');
  }
  // Set the global variable for password length
  passwordLength = length;
}

// Function to check for lowercase character inclusion
var lowercaseChar = function() {
  lowercaseConfirm = confirm("Select 'Ok' to include lowercase characters in the password.");
  // Add lowercase characters to passwordChars list
  if (lowercaseConfirm) {
    passwordChars = passwordChars.concat(lowercase);
  }
}

// Function to check for uppercase character inclusion
var uppercaseChar = function() {
  uppercaseConfirm = confirm("Select 'Ok' to include uppercase characters in the password.");
  // Add uppercase characters to passwordChars list
  if (uppercaseConfirm) {
    passwordChars = passwordChars.concat(uppercase);
  }
}

// Function to check for numeric character inclusion
var numericChar = function() {
  numericConfirm = confirm("Select 'Ok' to include numeric characters in the password.");
  // Add numeric characters to passwordChars list
  if (numericConfirm) {
    passwordChars = passwordChars.concat(numeric);
  }
}

// Function to check for special character inclusion
var specialChar = function() {
  specialCharConfirm = confirm("Select 'Ok' to include special characters in the password.");
  // Add special characters to passwordChars list
  if (specialCharConfirm) {
    passwordChars = passwordChars.concat(special);
  }
}

// Generate password 
function generatePassword() {
  lengthPrompt();
  lowercaseChar();
  uppercaseChar();
  numericChar();
  specialChar();

  // Validate that at least one set of characters has been selected
  while (!lowercaseConfirm && !uppercaseConfirm && !numericConfirm && !specialCharConfirm) {
    alert("You must select at least one character type.");
    // Reprompt user for character types
    lowercaseChar();
    uppercaseChar();
    numericChar();
    specialChar();
  };

  // Variable to generate password into
  var randomPassword = "";

  // For the passwordLength selected, randomly select characters from passwordChars
  for (i = 0; i < passwordLength; i++) {
    randomPassword += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }

  // Return the generate password as the function value
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Reset passwordChars for next generation
  passwordChars = "";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
