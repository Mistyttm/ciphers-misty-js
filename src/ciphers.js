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

module.exports = {ceasar, vigenere};
