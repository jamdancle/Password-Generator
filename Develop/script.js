
var lettersAllowed = "abcdefghijklmnopqrstuvwxyz0123456789" +
  "ABCDEFGHIJKLMNOPQRSTUVWYXZ!@#$%^&*()";

var i = 7
do {
  console.log("i =" + i)
  i++
} while (i < 5);


console.log("---")

var i = 7
while (i < 5) {
  console.log("i =" + i)
  i++
}




function generatePassword() {
  console.log("click working")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

var valid = false

while (valid == false) {


  var passwordLength = prompt("How many characters would you like your password be?\n" +
    "(Limit is 8-128 characters)")
  //convert password length to number //

  passwordLength = parseInt(passwordLength)
  /*
  console.log("convert passwordLength to number", passwordLength)
  */
  if (isNaN(passwordLength)) {
    console.log("REJECTED! A number was not entered");
  }
  else if (passwordLength < 8) {
    console.log("short password");
  }
  else if (passwordLength > 128) {
    console.log("long password");
    alert("Entered password is too long");
  }
  else {
    valid = true
    console.log("Password length correct");
  }
  console.log("valid =", valid)
}

/*
var useLowercase = prompt("Do you want to use lowercase letters?\n" +
  "(Yes/No)")

var useUppercase = prompt("Do you want to use uppercase letters?\n" +
  "(Yes/No)")

var useNumbers = prompt("Do you want to use numbers?\n" +
  "(Yes/No)")

var useSpecial = prompt("Do you want to use special characters?\n" +
  "(Yes/No)")

*/

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