// function that syncs the slider and the number input
range.addEventListener("input", sync)
number.addEventListener("input", sync)
function sync(e) {
  var value = e.target.value 
  number.value = value
  range.value = value
}


// function that generates random password from string of characters 
function getPassword () {

  // list of numbers, characters, and symbols to pull from
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(_+?><:{[]})";
  var passwordLength = 12
  var password = ""; 

  for (var i = 0; i < passwordLength; i++){
    var randomNumber = Math.floor(Math.random()* chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password
}


// not exactly sure how to "connect" the checkboxes and output of the password just yet, so I'm just using a randomized list
// of everything