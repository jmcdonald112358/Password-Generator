# Password-Generator
> This project is to create a functioning password generator that accepts input from the user and generates a randomized sequence of characters matching the desired length.

Creating a strong password is tedious - especially in this day and age where there are so many different passwords a person needs for various websites/apps and the recommendation to use a different password for each site/app. Coming up with something strong and sufficiently unique tends to get annoying by the fourth or fifth site/app, which often is what results in someone getting lazy and just starting to re-use the same password for multiple sites/apps. 

Enter the password generator! Combined with a password manager app, the need for the mentally taxing exercise of coming up with your own strong, sufficiently unique, AND memorable passwords for tens of different sites/apps is no more! Simply answer a few questions, and before you can say "Password", you'll have one that you can plug into a password manager and not have to remember, and that you won't have to worry about nefarious parties guessing or brute-force cracking. 

For an extra layer of security, we do recommend also using 2FA for any site/app that offers it, as even the strongest passwords become useless if a site/app's database becomes compromised and all login credentials are freely available. For that same reason, use this tool to set a truly unique password for every site/app so that, if one is compromised, you don't have to worry about that compromised password potentially compromising any of your other logins.

## Application usage

1. Navigate to the site
2. Click to generate password
![Generate Password button](https://user-images.githubusercontent.com/73570812/102865458-03839100-43f3-11eb-8c40-9e5509b9cb16.png)
3. Enter the length you desire your password to be
![Prompt for desired password length](https://user-images.githubusercontent.com/73570812/102865559-2e6de500-43f3-11eb-9b5b-371789f01405.png)
4. Confirm whether or not to include lowercase letters
![Confirm or decline using lowercase letters in password](https://user-images.githubusercontent.com/73570812/102865673-5c532980-43f3-11eb-8111-536a47b8c858.png)
5. Confirm whether or not to include uppercase letters
![Confirm or decline using uppercase letters in password](https://user-images.githubusercontent.com/73570812/102865742-74c34400-43f3-11eb-8b13-fa984178e124.png)
6. Confirm whether or not to include numbers
![Confirm or decline using numbers in password](https://user-images.githubusercontent.com/73570812/102865810-8a386e00-43f3-11eb-89c5-dcee1e565888.png)
7. Confirm whether or not to include special characters
![Confirm or decline using special characters in password](https://user-images.githubusercontent.com/73570812/102865863-9cb2a780-43f3-11eb-8f43-b1f4708294bb.png)
8. Upon confirming the final prompt, the password will appear in the box for you to copy accordingly
![Successfully generated password](https://user-images.githubusercontent.com/73570812/102866084-f4e9a980-43f3-11eb-88b9-c827cbab789c.png)

## Elements used in this project

1. Provided HTML & CSS starter code
   1. No modifications were made to either of these files. The provided code included all of the components necessary to complete the project
2. Provided starter JavaScript code
   1. Provided code included necessary components for tying the various functions back to the provided HTML and CSS references.
   2. The only modifications necessary in this file was the bulk of the assignment itself -- creating the prompts, functions, loops, and variables necessary to produce a randomized password using the inputs provided by the user
3. Do/While loops
   1. Standard for loops could have been used, but do/while made more sense for ensuring certain things, such as the prompts, got repeated while the conditions were unmet
4. Functions
   1. I created two separate functions within the main generator function to handle randomizing the next type of character utilized in the sequence, and to randomize the character used from the randomized character type

## Resources

1. W3schools.com 
   1. Usage of push()
      1. Used to assemble an array of selected character types as the user clicks through the prompts, which is then used for running the function for randomizing the character type used for each iteration
   2. How to break a function early
      1. Used for exiting while loops that run the series of prompts if the user wants to cancel out early
   3. Usage of includes(), forEach(), and some()
      1. None of these ended up actually getting used. I was attempting to figure out how to use one or more of them to validate that at least one character from each user-selected character type was included in the final output, but was unsuccessful in getting it to work. Since that level of validation was not required, I opted to run with what I had for this submission and wait until getting through a few more class sessions in which use of these will presumably be covered. At that point, if only just for practice, I'll come back to this and try working in this validation.
2. Class activities
   1. Activity 21 for proper syntax in random number generation
   2. Activity 27 for refresher on functions and usage of charAt()
   3. Activity 30 for usage of objects before deciding against using an object to hold the characters for each character type

## Links

- Project: https://jmcdonald112358.github.io/Password-Generator/ 
- Repository: https://github.com/jmcdonald112358/Password-Generator 

## Additional notes

- There is a block of code commented out in the JavaScript file. This was the original sequence of if statements that executed for each character until the desired password length was achieved. 
   - This approach was what I came up with before working in the function for randomizing the next character type to use with each iteration. 
   - The advantage of this approach was that it _did_ guarantee that at least one character from each user-selected character type was included, but it was not truly random because it just loops through the four types in the same order until the desired length is achieved. 
   - After working in the function for randomizing the next character type to iterate, I left the block in for reference and to demonstrate having worked out at least one alternate approach to generating the randomized characters that would ensure that at least one of each selected type was included, since I was unable to work out a way to validate the final result for the same.