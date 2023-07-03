// Assignment Code
var generateBtn = document.querySelector("#generate");
var password;
var random;
var generateBtn;
var response;
var lowerCaseAnswerArray;
var upperCaseAnswerArray;
var numAnswerArray;
var specialCharacterAnswerArray;
var passwordArray = [];

function randomGenerate(min,max){
  var random = Math.floor(Math.random() * (max - min +1)+min);
  return random
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//------------- Lower Case Question -------------//

function lowerCaseFunction(lowerCase) {
  var lowerCase = prompt ("Would you like lower case letters?");
  var lowerCaseYes = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
  var lowerCaseNo = [];

  if (lowerCase === "Yes"|| lowerCase === "yes"|| lowerCase === "Y"|| lowerCase === "y"|| lowerCase === "Sure"|| lowerCase === "sure") {
    lowerCaseAnswerArray = lowerCaseYes ; 
    upperCaseFunction();
    console.log(lowerCase);
    console.log(lowerCaseAnswerArray) ;
  } else {
    lowerCaseAnswerArray = lowerCaseNo;
    upperCaseFunction();
    console.log(lowerCase);
    console.log(lowerCaseAnswerArray) ;
   }
}

//------------- Upper Case Question -------------//

function upperCaseFunction(upperCase) {
  var upperCase = prompt ("Would you like upper case letters?");
  var upperCaseYes = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
  var upperCaseNo = [] ;

  if (upperCase === "Yes"|| upperCase === "yes" || upperCase === "Y" || upperCase=== "y" || upperCase === "Sure" || upperCase === "sure") {
    upperCaseAnswerArray = upperCaseYes ;
    numCharacterFunction();
    console.log(upperCase) ;
    console.log(upperCaseAnswerArray) ;
  } else {
    upperCaseAnswerArray = upperCaseNo;
    numCharacterFunction();
    console.log(upperCase);
    console.log(upperCaseAnswerArray) ;
  }
}

//------------- Numeric Character Question -------------//

function numCharacterFunction (num) {
  var num = prompt ("Would you like numeric characters?");
  var numAnswerYes = ['0','1','2','3','4','5','6','7','8','9',];
  var numAnswerNo = [] ;

  if (num === "Yes" || num === "yes" || num === "Y" || num === "y"|| num === "Sure" || num ==="sure") {
    numAnswerArray = numAnswerYes ; 
    specialCharacterFunction();
    console.log(num) ;
    console.log(numAnswerArray) ;
  } else {
    numAnswerArray = numAnswerNo;
    specialCharacterFunction() ;
    console.log(num);
    console.log(numAnswerArray);
  }
}

//------------- Special Character Question -------------//

function specialCharacterFunction(specialCharacters) {
  var specialCharacters = prompt ("Would you like special characters?");
  var specialCharacterYes = [' ','!','"','#','$','%','&',',','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~', ];
  var specialCharacterNo = [] ;

  if (specialCharacters === "Yes" || specialCharacters === "yes" || specialCharacters === "Y" || specialCharacters === "y" || specialCharacters === "Sure" || specialCharacters === "sure") {
    specialCharacterAnswerArray = specialCharacterYes ;
    passwordArrayMaker();
    console.log(specialCharacters) ;
    console.log(specialCharacterAnswerArray);
  } else {
    specialCharacterAnswerArray = specialCharacterNo;
    passwordArrayMaker() ;
    console.log(specialCharacters);
    console.log(specialCharacterAnswerArray);
  }
}

//------------- Password Array -------------//

function passwordArrayMaker() { 
  var passwordMaker
  passwordMaker = passwordArray
  
  console.log(lowerCaseAnswerArray);
  console.log(upperCaseAnswerArray) ;
  console.log(numAnswerArray);
  console.log(specialCharacterAnswerArray) ;

  passwordMaker.push(...lowerCaseAnswerArray);
  passwordMaker.push(...upperCaseAnswerArray);
  passwordMaker.push(...numAnswerArray);
  passwordMaker.push(...specialCharacterAnswerArray);

  console.log(passwordArray);

  makePassword(passwordArray);
}

//------------- Password Maker? -------------//
function makePassword(passwordArray) {
  var password = ""
  for (i=0 ; i < response ; i++) { 
     password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
     console.log(password);
  }
  console.log(password);
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//------------- The Start -------------//

function generatePassword() {
  var response = prompt ("How many characters would you like? (Must be between 8-128)");

  if (response < 8) {
    alert ("Must be between 8-128 characters. Please try again.");
  } else if (response > 128) {
    alert ("Must be between 8-128 characters. Please try again.");
  } else { 
    lowerCaseFunction() ;
    console.log(response);
  }
  var password = ""
  for (i=0 ; i < response ; i++) { 
     password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
     console.log(password);
  }
  console.log(password);
  return password
}