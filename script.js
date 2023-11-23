// Assignment code here

function generatePassword() {
  var preferredLength = prompt("Select password length (between 8 and 128 characters):")

  //Alert for if password length is not between 8 and 128 or if it's NaN, try again
  // ! Try putting bang operator specifically to first 2 conditions
  if (!(preferedLength >=8 && preferredLength <=128 && !isNaN(preferredLength))) {
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
