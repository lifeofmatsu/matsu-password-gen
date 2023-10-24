var pwdLength = 0;
var characterArray = [];

var lowercaseInclusion = false;
var uppercaseInclusion = false;
var numericInclusion = false;
var symbolicInclusion = false;

var lowercaseGroup = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseGroup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numericGroup = '0123456789'.split('');
var symbolicGroup = '!()-.?[]_`~;:@#$%^&*+='.split(''); 


function generatePassword() {
    passwordLength();
    characterSet();
}

//get references to the #generate element
var generateBtn = document.querySelector("#generate");

//write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function passwordLength() {

}

function characterSet() {

}