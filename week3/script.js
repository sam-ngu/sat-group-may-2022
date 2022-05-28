const generateButton = document.getElementById("generate");


function askPasswordLength(){

  // ask the user how long will the password be
  const passwordLength = Number(prompt("How long is the password? Must between 8 - 128"));
  
  console.log(passwordLength);
  
  
  // can only accept numeric value
  // only in the range of 8 - 128
  // if user type in rubbish, reask the question
  // NaN
  const passwordLengthIsNan = isNaN(passwordLength);
  // 0
  const userDidntEnterAnything = passwordLength === 0;
  // < 8  or > 128
  const passwordLengthIsOutsideOfRange = passwordLength < 8 || passwordLength > 128


  if(passwordLengthIsNan || userDidntEnterAnything || passwordLengthIsOutsideOfRange){
    return askPasswordLength();
  }

  return passwordLength;

}

function askCriteria() {
  
  // ask do you want lowercase
  const lowercaseWanted = confirm("Do you want lowercase?")
  const uppercaseWanted = confirm("Do you want uppercase?")
  const symbolWanted = confirm("Do you want symbol?")
  const numberWanted = confirm("Do you want number?")
  
  // ask do you want uppercase
  // ask do you want symbols
  // ask do you want numbers
  
  // user needs to select at least one criteria
  if( lowercaseWanted || uppercaseWanted || symbolWanted || numberWanted ){
  
    return {
      // lowercaseWanted: lowercaseWanted,
      lowercaseWanted,
      uppercaseWanted,
      symbolWanted,
      numberWanted,
      
    };
  }

  // if user didnt do that, reask the criteria questions
  return askCriteria();
}

// when the user click on the button
generateButton.addEventListener('click', function(event){

  const passwordLength = askPasswordLength();
  
  const criteria = askCriteria();
  
  // generate the password
  // build the character set
  let characterSet = "";

  if(criteria.lowercaseWanted){
    characterSet = characterSet + "abcde";
  }

  if (criteria.uppercaseWanted) {
    characterSet = characterSet + "ABCDEFG";
  }

  if (criteria.symbolWanted) {
    characterSet = characterSet + "!@#$%^";
  }

  if (criteria.numberWanted) {
    characterSet = characterSet + "0123456789";
  }
  
  // generate the random password based on the char set

  let password = "";
  // loop for passwordLength times, 
  for (let index = 0; index < passwordLength; index++) {
    // for each iteration
    // we want to generate a random character based on char set
    const randomCharacter = characterSet[ Math.floor(Math.random() * characterSet.length) ]

    // add this random char to password
    password += randomCharacter;
    
  }

  // show the generated password on the DOM (textarea)
  document.getElementById('password').value = password;

});


























