export function ceasar(text: string, key: number, encode: boolean) {
    function encodeCharacter(character: string, key: number, isUpperCase: boolean, isEncode: boolean){
        const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const offset = character.charCodeAt(0) - base;
        let encodedOffset = 0;
        if (isEncode){
            encodedOffset = (offset + key) % 26;
            return String.fromCharCode(encodedOffset + base);
        } else {
            encodedOffset = (offset - key + 26) % 26;
            return String.fromCharCode(encodedOffset + base);
        }
        
    }

    let message = "";
    // Regex for non letters
    const specialRegex = /[\d\W\s_]/g;
    for (const character of text){
        if (specialRegex.test(character)){
            message += character;
        } else if (character >= 'a' && character <= 'z'){
            message += encodeCharacter(character, key, false, encode);
        } else if (character >= 'A' && character <= 'Z') {
            message += encodeCharacter(character, key, true, encode);
        }
    }

    return message;
}