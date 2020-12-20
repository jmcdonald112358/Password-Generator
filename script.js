// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate password using criteria from prompts  
function generatePassword() {

  //Password criteria prompts

    //Prompt for desired length
    //Use do/while to repeat prompt if invalid desired length is entered
    do {  
      var desiredLength = prompt("How many characters does your password need to be?");
        
      //Validate that entry is between 8 & 128 characters
      if (parseInt(desiredLength) < 8 || parseInt(desiredLength) > 128) {
        alert ("Password length must be between 8 and 128 characters. Please try again.");
      }

      //Break out of the function early if user cancels prompt
      if (desiredLength === null) {
        return;
      }
    } while (parseInt(desiredLength) < 8 || parseInt(desiredLength) > 128);
    console.log("Desired password length is: " + desiredLength); //Remove before submitting assignment
    

    //Prompt for character types to include -- lowercase, uppercase, numeric, and/or special 
    //Use do/while loop to repeat prompts if all are declined and user confirms they want to try again
    do {
      //Define empty array to hold selected charTypes
      var selectedChars = [];
      
      //Prompt for charTypes to include and append array with selected charTypes
      var includeLowercase = confirm ("Do you want to include lowercase letters?");
        if (includeLowercase === true) {
          selectedChars.push("lowercase");
          console.log(selectedChars);
        }

      var includeUppercase = confirm ("Do you want to include uppercase letters?");
        if (includeUppercase === true) {
          selectedChars.push("uppercase");
          console.log(selectedChars);
        }

      var includeNumbers = confirm ("Do you want to include numbers?");
        if (includeNumbers === true) {
          selectedChars.push("numbers");
          console.log(selectedChars);
        }

      var includeSpecial = confirm ("Do you want to include special characters?");
        if (includeSpecial === true) {
          selectedChars.push("special");
          console.log(selectedChars);
        }

      //If all charTypes are declined, alert that at least one must be selected
      if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial === false) {
        var tryAgain = confirm ("At least one character type selection must be included. Do you want to try again?");
      }

      //Break out of function early if user cancels confirm (doesn't want to try again)
      if (tryAgain === false) {
          return;
        }
    } while (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial === false);
    

  //Define charTypes
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = lowercase.toUpperCase();
    var numbers = "1234567890";
    var special = "!@$-\%#(^&/*)<?_>|+~";

  //Generate string of random characters from selected charTypes 
  //Use do/while loop with conditions on each charType to get a random char from the corresponding string and append it to a var until that var's length == desired length
    
    //Function for randomizing which of the selected charTypes should be used for the next character in the password
    function getNextCharType() {
      let nextCharTypeIndex = Math.floor(Math.random() * selectedChars.length)
      console.log("The next selected charType index is " + nextCharTypeIndex); //Remove before submitting assignment
      return selectedChars[nextCharTypeIndex];
    }

    //Function for getting a random character from the charType definitions
    function getRandomChar(charType) {
      var randomCharIndex = Math.floor(Math.random() * charType.length); 
      return charType.charAt(randomCharIndex);
    }
    
    //Define empty string variable to hold the string of characters as they're determined
    var randomPass = "";

    //Loop through each selected charType to get a character from that type until the desired length is satisfied
    do {
      //Determine next charType to pull from
      var nextCharType = getNextCharType();
      console.log("The next character should be from the " + nextCharType + " string"); //Remove before submitting assignment

      //Get next character by determining what the next randomized selected charType is and append character from that charType to the string
      if (nextCharType === "lowercase" && randomPass.length < parseInt(desiredLength)) {
        randomPass += getRandomChar(lowercase);
        console.log(randomPass); //Remove before submitting assignment
      }
      if (nextCharType === "uppercase" && randomPass.length < parseInt(desiredLength)) {
        randomPass += getRandomChar(uppercase);
        console.log(randomPass); //Remove before submitting assignment
      }
      if (nextCharType === "numbers" && randomPass.length < parseInt(desiredLength)) {
        randomPass += getRandomChar(numbers);
        console.log(randomPass); //Remove before submitting assignment
      }
      if (nextCharType === "special" && randomPass.length < parseInt(desiredLength)) {
        randomPass += getRandomChar(special);
        console.log(randomPass); //Remove before submitting assignment
      }

      //Version of character getter to ensure at least one character from each selectedType gets included 
      //Use without nextCharType and getNextCharType
        // if (includeLowercase === true && randomPass.length < parseInt(desiredLength)) {
        //   randomPass += getRandomChar(lowercase);
        //   console.log(randomPass); //Remove before submitting assignment
        // }
        // if (includeUppercase === true && randomPass.length < parseInt(desiredLength)) {
        //   randomPass += getRandomChar(uppercase);
        //   console.log(randomPass); //Remove before submitting assignment
        // }
        // if (includeNumbers === true && randomPass.length < parseInt(desiredLength)) {
        //   randomPass += getRandomChar(numbers);
        //   console.log(randomPass); //Remove before submitting assignment
        // }
        // if (includeSpecial === true && randomPass.length < parseInt(desiredLength)) {
        //   randomPass += getRandomChar(special);
        //   console.log(randomPass); //Remove before submitting assignment
        // }
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

