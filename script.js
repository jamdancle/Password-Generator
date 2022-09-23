// lower case letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
  "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// uppercase letter array
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"];

// number array
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// special character array
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];


var combinedCharacters = []


// Assignment Code
var generateBtn = document.querySelector("#generate");

function promptUser() {
  while (combinedCharacters.length == 0) {
    promptPasswordLength()
    promptUseLowercase()
    promptUseUppercase()
    promptUseNumbers()
    promptuseSpecialCharacters()
    if (combinedCharacters.length == 0) {
      console.log("error. must have characters in password");
      alert("Error! Must select at least one character set to generate password")
    }
    else {
      console.log("combined character suitable to work");
    }
  }
}

var passwordLength

function promptPasswordLength() {
  var isPasswordPromptValid = false;

  while (isPasswordPromptValid == false) {

    passwordLength = prompt("How many characters would you like your password be?\n" +
      "(Limit is 8-128 characters)")

    //convert password length to number & record in console.log//
    passwordLength = parseInt(passwordLength)
    console.log("convert passwordLength to number", passwordLength)

    if (isNaN(passwordLength)) {
      console.log("REJECTED! A number was not entered");
    }
    else if (passwordLength < 8) {
      console.log("short password");
      alert("Entered password number too low");
    }
    else if (passwordLength > 128) {
      console.log("long password");
      alert("Entered password number too high");
    }
    else {
      isPasswordPromptValid = true
      console.log("Password length correct");
    }
    console.log("valid =", isPasswordPromptValid)
  }
}

function promptUseLowercase() {
  var isLowerCasePromptValid = false
  while (isLowerCasePromptValid == false) {

    var useLowerCase = prompt("Do you want to use lowercase letters?\n" +
      "(Yes/No)")

    console.log('before lower case:', useLowerCase);

    useLowerCase = useLowerCase.toLowerCase();

    console.log("choice to include lowerCase letters in password:", useLowerCase);

    var response;
    if (useLowerCase == "yes") {

      // Add the lowercase array to combinedCharacters
      combinedCharacters = combinedCharacters.concat(lowerCase)
      console.log("combined characters now =", combinedCharacters);

      isLowerCasePromptValid = true;
      console.log("Thank you for adding lower case letters");
    }

    else if (useLowerCase == "no") {
      isLowerCasePromptValid = true
      console.log("No lower case letters selected");
    }
    else {
      isLowerCasePromptValid = false
      alert("Please enter Yes or No");
    }

    // console.log("Responses to lower case prompt request:", response);
  }
}

function promptUseUppercase() {
  var isUpperCasePromptValid = false
  while (isUpperCasePromptValid == false) {

    var useUpperCase = prompt("Do you want to use uppercase letters?\n" +
      "(Yes/No)")

    console.log('before upper case:', useUpperCase);

    useUpperCase = useUpperCase.toLowerCase();

    console.log("choice to include uppercase letters in password:", useUpperCase);

    var response;
    if (useUpperCase == "yes") {

      // Add the uppercase array to combinedCharacters

      combinedCharacters = combinedCharacters.concat(upperCase)
      console.log("combined characters now =", combinedCharacters);

      isUpperCasePromptValid = true;
      console.log("Thank you for adding upper case letters");
    }
    else if (useUpperCase == "no") {
      isUpperCasePromptValid = true
      console.log("No uppercase letters will be added to password");
    }
    else {
      isUpperCasePromptValid = false
      alert("Please enter Yes or No");
    }

    // console.log("Responses to uppercase prompt request:", response);
  }
}

function promptUseNumbers() {
  var isNumberPromptValid = false
  while (isNumberPromptValid == false) {

    var useNumbers = prompt("Do you want to use numbers?\n" +
      "(Yes/No)");
    console.log("choice to include numbers in password:", useNumbers);

    var response;
    if (useNumbers == "yes") {

      combinedCharacters = combinedCharacters.concat(numbers)
      console.log("combined characters now = ", combinedCharacters)

      isNumberPromptValid = true;
      console.log("Thank you for adding numbers");
    }
    else if (useNumbers == "no") {
      isNumberPromptValid = true
      console.log("No numbers will be added to password");
    }
    else {
      isNumberPromptValid = false
      alert("Please enter Yes or No");
    }
  }
}

function promptuseSpecialCharacters() {

  var isSpecialPromptValid = false
  while (isSpecialPromptValid == false) {

    var useSpecial = prompt("Do you want to use special characters?\n" +
      "(Yes/No)");
    console.log("choice to include special characters in password:", useSpecial);

    var response;
    if (useSpecial == "yes") {

      combinedCharacters = combinedCharacters.concat(specials)
      console.log("combined characters now = ", combinedCharacters)

      isSpecialPromptValid = true;
      console.log("Thank you for adding special characters");
    }
    else if (useSpecial == "no") {
      isSpecialPromptValid = true
      console.log("No special characters will be added to password");
    }
    else {
      isSpecialPromptValid = false
      alert("Please enter Yes or No");
    }
  }
}


function generatePassword() {
  console.log("click working")
  console.log("password length selected is" + passwordLength)

  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    console.log('randElement', randElement);
    return randElement;

  }

  var lowerCaseChar = getRandom(lowerCase);
  var upperCaseChar = getRandom(upperCase);
  var numbersChar = getRandom(numbers);
  var specialsChar = getRandom(specials);

  combinedCharacters.push(lowerCaseChar);
  combinedCharacters.push(upperCaseChar);
  combinedCharacters.push(numbersChar);
  combinedCharacters.push(specialsChar);

  console.log('array', combinedCharacters)
  console.log('capture random character', lowerCaseChar);
  console.log('array', combinedCharacters)
  console.log('capture random character', lowerCaseChar);


}

// Write password to the #password input

function writePassword() {
  promptUser()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


////////////////////////////////////////////////////////
/*
// add funciton for getting random elements 

function getRandomValue(randomValue) {
  var randomIndex = Math.floor(Math.random() * )
  var randomElement = array[]

  return randomElement
}
// generate password from user inout


// function to write password
*/