// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate password using criteria from prompts  
function generatePassword() {

  //Password criteria prompts

    //Prompt for desired length -- use do/while to repeat prompt if invalid desired length is entered
    do {  
      var desiredLength = prompt("How many characters does your password need to be?");
        
      //Validate that selection is between 8 & 128 characters
      if (parseInt(desiredLength) < 8 || parseInt(desiredLength) > 128) {
        alert ("Password length must be between 8 and 128 characters. Please try again.");
      }
    } while (parseInt(desiredLength) < 8 || parseInt(desiredLength) > 128)
    console.log(desiredLength);
    
    //Prompt for character types to include -- lowercase, uppercase, numeric, and/or special 
    do {
      var includeLowercase = confirm ("Do you want to include lowercase letters?");
      var includeUppercase = confirm ("Do you want to include uppercase letters?");
      var includeNumbers = confirm ("Do you want to include numbers?");
      var includeSpecial = confirm ("Do you want to include special characters?");
        
      //If all charTypes are declined, alert that at least one must be selected || should this block be within the else above? Or does it not matter?
      if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial === false) {
        alert ("At least one character type selection must be included. Please try again.");
      }
    } while (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial === false)
    

  //Define charTypes
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = lowercase.toUpperCase();
    var numbers = "1234567890";
    var special = "!@$-%#(^&*)<?_>+~";

  //Generate string of random characters from selected charTypes 
  //Use do/while loop with each char selection to get a random char from that string on each pass and append it to a var until that var's length == desired length

    //Function for getting a random character from the charType definitions
    function getRandomChar(charType) {
      var randomCharNumber = Math.floor(Math.random() * charType.length); 
      return charType.charAt(randomCharNumber);
    }
    
    //Define empty string variable to hold the string of characters as they're determined
    var randomPass = "";

    //Loop through each selected charType to get a character from that type until the desired length is satisfied
    do {
      if (includeLowercase === true && randomPass.length < parseInt(desiredLength)) {
        randomPass = randomPass + getRandomChar(lowercase);
        console.log(randomPass);
      }
      if (includeUppercase === true && randomPass.length < parseInt(desiredLength)) {
        randomPass = randomPass + getRandomChar(uppercase);
        console.log(randomPass);
      }
      if (includeNumbers === true && randomPass.length < parseInt(desiredLength)) {
        randomPass = randomPass + getRandomChar(numbers);
        console.log(randomPass);
      }
      if (includeSpecial === true && randomPass.length < parseInt(desiredLength)) {
        randomPass = randomPass + getRandomChar(special);
        console.log(randomPass);
      }
    }
    while (randomPass.length < parseInt(desiredLength)); 

  //Return the string
  return randomPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

