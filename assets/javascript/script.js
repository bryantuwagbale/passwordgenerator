// Assignment code here


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword e=> {
  //e.preventDefault()
  //const password = generatePassword(characterAmount, )
//});


//const generate = document.getElementById("generate")

//function passwordPrompt() {
  //alert("Password must be at least 8 characters in length, contain one lowercase letter, one uppercase letter, and one special character.");

const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")

characterAmountRange.addEventListener("input", syncCharacterAmount)
characterAmountNumber.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}