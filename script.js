function encrypt() {
    var phraseInput = document.getElementById("phrase");
    var encryptedInput = document.getElementById("encrypted");
    var shiftInput = document.getElementById("shift");

    var phrase = phraseInput.value;
    var encryptedPhrase = "";
    var shift = parseInt(shiftInput.value);

    for (var i = 0; i < phrase.length; i++) {
        var charCode = phrase.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + shift) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + shift) % 26) + 97;
        }
        encryptedPhrase += String.fromCharCode(charCode);
    }

    encryptedInput.value = encryptedPhrase;
}

function decrypt() {
    var encryptedInput = document.getElementById("encryptedInput");
    var decryptedInput = document.getElementById("decrypted");
    var shiftInput = document.getElementById("shift");

    var encryptedPhrase = encryptedInput.value;
    var decryptedPhrase = "";
    var shift = parseInt(shiftInput.value);

    for (var i = 0; i < encryptedPhrase.length; i++) {
        var charCode = encryptedPhrase.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 - shift + 26) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 - shift + 26) % 26) + 97;
        }
        decryptedPhrase += String.fromCharCode(charCode);
    }

    decryptedInput.value = decryptedPhrase;
}
