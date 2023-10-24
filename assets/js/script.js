//global temp variables
var pwdLength = 0;
var characterArray = [];

//boolean variables
var lowercaseInclusion = false;
var uppercaseInclusion = false;
var numericInclusion = false;
var symbolicInclusion = false;

//character set arrays
var lowercaseGroup = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseGroup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numericGroup = '0123456789'.split('');
var symbolicGroup = '!()-.?[]_`~;:@#$%^&*+='.split(''); //symbols selected per IBM password guidelines


//generates password with randomized array indices
function generatePassword() {
    passwordLength();
    characterSet();

    var tempPwd = '';
    // console.log(tempPwd);
    for (let i = 0; i < pwdLength; i++) {
        var tempChar = Math.floor(Math.random() * characterArray.length + 1); //generates a random integer between 0 and length of characterArray minus 1
        tempPwd += characterArray[tempChar]; //adds randomized index value of characterArray to temporary password variable
        // console.log(tempPwd);
    }

    // console.log(tempPwd);
    return tempPwd;
}

//get references to the #generate element. provided by The Coding Bootcamp at UCSD.
var generateBtn = document.querySelector("#generate");

//write password to the #password input. provided by The Coding Bootcamp at UCSD.
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//add event listener to generate button. provided by The Coding Bootcamp at UCSD.
generateBtn.addEventListener("click", writePassword);


/* helper functions */
//determine password length from user input
function passwordLength() {
    pwdLength = Number(prompt('Enter a password length of 8 to 128 characters'));

    //user feedback; throws error or confirms user choice
    if (pwdLength < 8 || pwdLength > 128 || !Number.isInteger(pwdLength)) {
        return 'Invalid entry. Please try again.'
    } else {
        alert('Confirming password length of ' + pwdLength + ' characters.');
    }

    // console.log(pwdLength);
}

//determine character set(s) to use in password from user input
function characterSet() {
    lowercaseInclusion = confirm('Include lowercase characters in password?');
    uppercaseInclusion = confirm('Include uppercase characters in password?');
    numericInclusion = confirm('Include numeric characters in password?');
    symbolicInclusion = confirm('Include symbolic characters in password?');

    //concatenation logic adapted from Emily Morosoff
    if (lowercaseInclusion) characterArray = characterArray.concat(lowercaseGroup);

    if (uppercaseInclusion) characterArray = characterArray.concat(uppercaseGroup);

    if (numericInclusion) characterArray = characterArray.concat(numericGroup);

    if (symbolicInclusion) characterArray = characterArray.concat(symbolicGroup);

    // console.log(characterArray);

    //user feedback; throws error or confirms user choice(s)
    if (!lowercaseInclusion && !uppercaseInclusion && !numericInclusion && !symbolicInclusion) { //0000
        return 'Invalid entry. Please include one or more character types.'
    } else {
        var alertStr = 'Your password will include';
        if (lowercaseInclusion && !uppercaseInclusion && !numericInclusion && !symbolicInclusion) { //1000
            alert(alertStr + ' lowercase characters.');
        } else if (!lowercaseInclusion && uppercaseInclusion && !numericInclusion && !symbolicInclusion) { //0100
            alert(alertStr + ' uppercase characters.');
        } else if (!lowercaseInclusion && !uppercaseInclusion && numericInclusion && !symbolicInclusion) { //0010
            alert(alertStr + ' numeric characters.');
        } else if (!lowercaseInclusion && !uppercaseInclusion && !numericInclusion && symbolicInclusion) { //0001
            alert(alertStr + ' symbolic characters.');
        } else if (lowercaseInclusion && uppercaseInclusion && !numericInclusion && !symbolicInclusion) { //1100
            alert(alertStr + ' lower and uppercase characters');
        } else if (lowercaseInclusion && !uppercaseInclusion && numericInclusion && !symbolicInclusion) { //1010
            alert(alertStr + ' lowercase and numeric characters.');
        } else if (lowercaseInclusion && !uppercaseInclusion && !numericInclusion && symbolicInclusion) { //1001
            alert(alertStr + ' lowercase and symbolic characters.');
        } else if (!lowercaseInclusion && uppercaseInclusion && numericInclusion && !symbolicInclusion) { //0110
            alert(alertStr + ' uppercase and numeric characters.');
        } else if (!lowercaseInclusion && uppercaseInclusion && !numericInclusion && symbolicInclusion) { //0101
            alert(alertStr + ' uppercase and symbolic characters.');
        } else if (!lowercaseInclusion && !uppercaseInclusion && numericInclusion && symbolicInclusion) { //0011
            alert(alertStr + ' numeric and symbolic characters.');
        } else if (lowercaseInclusion && uppercaseInclusion && numericInclusion && !symbolicInclusion) { //1110
            alert(alertStr + ' lowercase, uppercase, and numeric characters.');
        } else if (lowercaseInclusion && uppercaseInclusion && !numericInclusion && symbolicInclusion) { //1101
            alert(alertStr + ' lowercase, uppercase, and symbolic characters.');
        } else if (lowercaseInclusion && !uppercaseInclusion && numericInclusion && symbolicInclusion) { //1011
            alert(alertStr + ' lowercase, numeric, and symbolic characters.');
        } else if (!lowercaseInclusion && uppercaseInclusion && numericInclusion && symbolicInclusion) { //0111
            alert(alertStr + ' uppercase, numeric, and symbolic characters.');
        } else { //1111
            alert(alertStr + ' lowercase, uppercase, numeric, and symbolic characters.');
        }
    }
}