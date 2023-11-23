// Assignment code here
function generatePassword() {
  var preferredLength = prompt("Select password length (between 8 and 128 characters):")


  //Alert for if password length is not between 8 and 128 or if it's NaN, try again
  if (!(preferredLength >=8 && preferredLength <=128 && !isNaN(preferredLength))) {
    alert("Must be between 8 and 128.");
    return generatePassword();
}

// confirm user passowrd preferences
var includeLower = confirm("Include lowercase characters?");
var includeUpper = confirm("Include uppercase characters?");
var includeNumbers = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

// Alert for if user decline all four character options, try again
if (!(includeLower || includeUpper || includeNumbers || includeSpecial)) {
  alert("At least one character type shoudl be selected");
  return generatePassword();
}

// All character sets avliable for password
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specialChar = "!@#$%^&*()_+[]{}|;:,.<>?";

// Combine character sets based on user preferences
var combinedChar = "";
if (includeLower) combinedChar += lowerChar;
if (includeUpper) combinedChar += upperChar;
if (includeNumbers) combinedChar += numChar;
if (includeSpecial) combinedChar += specialChar;

// Function to generate one character randomly from the combined character set
function generateOneChar() {
  var random = Math.floor(Math.random() * combinedChar.length);
  return combinedChar[random];
}

// Initialize empty string to store generated password
var generatedPassword = ""

// Recuresive function to build a password of the specified length
function buildPassword(length) {
  // when teh desired length is reached, return an empty string
  if(length === 0) {
    return "";
  }

  // Add one character to the generated password and call the function recursively
  generatedPassword += generateOneChar();
  buildPassword(length - 1);
}

//build password based on preferred length
buildPassword(preferredLength);
// Return teh generated password
return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
