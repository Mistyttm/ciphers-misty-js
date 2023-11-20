// Regex for non letters
const specialRegex = /[\d\W\s_]/g;

function encodeCharacter(character, key, isUpperCase, isEncode) {
    const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
    const offset = character.charCodeAt(0) - base;
    let encodedOffset = 0;
    if (isEncode) {
        encodedOffset = (offset + key) % 26;
        return String.fromCharCode(encodedOffset + base);
    } else {
        encodedOffset = (offset - key + 26) % 26;
        return String.fromCharCode(encodedOffset + base);
    }
}

function ceasar(text, key, encode) {
    let message = "";
    for (const character of text) {
        if (specialRegex.test(character)) {
            message += character;
        } else if (character >= "a" && character <= "z") {
            message += encodeCharacter(character, key, false, encode);
        } else if (character >= "A" && character <= "Z") {
            message += encodeCharacter(character, key, true, encode);
        }
    }

    return message;
}

function vigenere(text, keyword, encode) {
    if (keyword === keyword.toLowerCase()) {
        keyword = keyword.toUpperCase();
    }

    let message = "";

    let keywordIndex = 0;
    for (const character of text) {
        if (specialRegex.test(character)) {
            message += character;
        } else {
            const key =
                keyword[keywordIndex % keyword.length]
                    .toLowerCase()
                    .charCodeAt(0) - "a".charCodeAt(0);

            message += encodeCharacter(
                character,
                key,
                character === character.toUpperCase(),
                encode
            );
            keywordIndex++;
        }
    }

    return message;
}

function trifid(text, keyword, groupsize, encode) {
    let message = '';
    let messageArray = [];

    let square1 = [];
    let square2 = [];
    let square3 = [];

    let cube = []

    for (let i=0; i<=keyword.length; i+= 3){
        let tempArray = [];
        const tempString = keyword.substring(i, i+3);

        tempArray = tempString.split('');

        if (i <= 8) {
            square1.push(tempArray);
        } else if (i <= 17) {
            square2.push(tempArray);
        } else if (i <= 26) {
            square3.push(tempArray);
        }
    }

    cube.push(square1, square2, square3);


    
    return cube;
}

module.exports = {ceasar, vigenere, trifid};
