//Logic
const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")",
  "-","_","=","+","[","]","{","}","|",";",
  ":","'",'"',",",".","<",">","/","?","`","~","\\"
];
const numOfPasswordCharacters = 15;
let randomPasswordCharacters = [];
let randomPassword = [];

//DOM Elements
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("random-password-input");
const noSpaces = document.getElementById("no-spaces");
const copyBtn = document.getElementById("copy-btn");

//Event Listeners
passwordForm.addEventListener("submit", generatePassword);
copyBtn.addEventListener("click", copyPassword);

//Functions
function generatePassword (e) {
    //Clear Out Input
    randomPasswordCharacters = [];
    randomPassword = [];

    //for loop
    for (let i = 0; i < numOfPasswordCharacters; i++) {

        let randomIndex = Math.floor(Math.random() * characters.length);

        randomPasswordCharacters.push(randomIndex);
        randomPassword.push(characters[randomIndex]);
    }
    
    passwordInput.value = randomPassword.join(" ");

    // Join with or without spaces
  //passwordInput.value = randomPassword.join(noSpaces.checked ? "" : " ");

  let seperator;

  if (noSpaces.checked) {
    seperator = ""; // No Spaces
  } else {
    seperator = " "; // Put spaces
  }

  passwordInput.value = randomPassword.join(seperator);

    e.preventDefault();
}

//Copy Button Function 

function copyPassword () {

    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");

}
