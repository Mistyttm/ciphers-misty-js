export function ceasar(text: string, key: number, encode: boolean) {
    const characterSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const characterSetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const textArray = text.split('');

    let message = "";

    const specialRegex = /[\d\W\s_]/g;
    switch(encode){
        case true:
            for (const character of textArray){
                if (specialRegex.test(character)){
                    message += character;
                } else if (characterSet.includes(character)){
                    let index = characterSet.indexOf(character);
                    if ((index + key) > 25) {
                        index = (index + key) % 26;
                    } else {
                        index = index + key
                    }
                    message += characterSet[index];
                } else {
                    let index = characterSetUpper.indexOf(character);
                    if ((index + key) > 25) {
                        index = (index + key) % 26;
                    } else {
                        index = index + key
                    }
                    message += characterSetUpper[index];
                }
            }
            break;
        case false:
            message = "decode"
            break;
    }
    

    return message;
}