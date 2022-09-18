
var numbers = 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


////////////////////////////////////////////////////////

// array for special characters

// array for numbers

// array for letters 

// array for uppercase letters

// add function to get password options

// add funciton for getting random elements 
function getRandomValue(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomElement = array[randomIndex]

  return randomElement
}
// generate password from user inout


// function to write password