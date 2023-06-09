function encrypt() {
    // Encrypt the inputted phrase with caeser cipher
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
    // decrypt the inputted phrase with caeser cipher
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

function encryptArray() {
    // encrypts the message using the Shifting class or 2d Array Shifting Cipher
    const rows = parseInt(document.getElementById("rows1").value);
    const columns = parseInt(document.getElementById("columns1").value);
    const message = document.getElementById("phrase1").value;

    const shifting = new Shifting(rows, columns);
    const encryptedMessage = shifting.encryptMessage(message);

    document.getElementById("encrypted1").value = encryptedMessage;
}

function decryptArray() {
    // decrypted the message using the Shifting class or 2d Array Shifting Cipher 
    const rows = parseInt(document.getElementById("rows2").value);
    const columns = parseInt(document.getElementById("columns2").value);
    const encryptedMessage = document.getElementById("message").value;

    const shifting = new Shifting(rows, columns);
    const decryptedMessage = shifting.decryptMessage(encryptedMessage);

    document.getElementById("decrypted1").value = decryptedMessage;
}
