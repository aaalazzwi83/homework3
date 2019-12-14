function genPwd() {
    var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numChars = "0123456789";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pwdLen = null;
    var pwdCharType = null;
    var pwdCharTypesSel = [];

    while (1 == 1) {
        pwdLen = prompt("Please specify the length (must be between 8 and 128 characters)", "8");

        if (pwdLen != null) {
            if (pwdLen.includes(".") == true || isNaN(pwdLen) == true) {
                alert("Please enter only a number between 8 and 128 without decimal");
            }
            else {
                pwdLen = parseInt(pwdLen);
                break;
            }
        }
        else {
            break;
        }
    }

    if (pwdLen != null) {
        userPrompt("Do you want to use special characters", pwdCharTypesSel, "s");
        userPrompt("Do you want to use Numeric characters", pwdCharTypesSel, "n");
        userPrompt("Do you want to use lowercase characters", pwdCharTypesSel, "l");
        userPrompt("Do you want to use uppercase characters", pwdCharTypesSel, "u");
    }

    if (pwdCharTypesSel.length !== 0){

    
    var randNum = 0;
    var password = null;
    var charSet = null;
    var charTypesToUse = pwdCharTypesSel.slice();  

    for (var i = pwdLen; i > 0; i--) {

        
        if (charTypesToUse.length >= i) {
            if (charTypesToUse[0] == "s") charSet = specialChars;
            else if (charTypesToUse[0] == "n") charSet = numChars;
            else if (charTypesToUse[0] == "l") charSet = lowerChars;
            else charSet = upperChars;
            
        }
        else {
            randNum = Math.floor(Math.random() * (pwdCharTypesSel.length));

            if (pwdCharTypesSel[randNum] == "s") charSet = specialChars;
            else if (pwdCharTypesSel[randNum] == "n") charSet = numChars;
            else if (pwdCharTypesSel[randNum] == "l") charSet = lowerChars;
            else charSet = upperChars;

            charTypesToUse.pop(pwdCharTypesSel[randNum]);


        };

        randNum = 0; 

        randNum = Math.floor(Math.random() * (charSet.length));

        if (password == null) password = charSet[randNum];
        else password = password + charSet[randNum];

    }
};
    if (password != null || password !== "") {
        document.querySelector("#password").textContent = password;
    } 
};


function copyPwd() {
    window.navigator.clipboard.writeText(document.querySelector("#password").textContent).then(function() {
        alert("Password copied to clipboard");
      }, function() {
        alert("Password copy failed due to permission security");
      });

};

function userPrompt(promptText, selections, charType) {
    while (1 == 1) {
        var userInput = prompt(promptText);

        if (userInput != null) {
            if (userInput.toLowerCase() === "yes" || userInput.toLowerCase() === "y") {
                //pwdCharTypesSel[0] = true;
                selections.push(charType);
                break;
            }
            else if (userInput.toLowerCase() === "no" || userInput.toLowerCase() === "n") {
                break;
            }
            else {
                alert("Please enter valid input (Yes or No)");
            };
        }
        else {
            break;
        }
    }
}
