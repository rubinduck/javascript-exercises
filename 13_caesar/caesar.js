const caesar = (string, shift) => {
    let resultString = '';
    for (const char of string){
        if (isPunctuationChar(char)){
            resultString += char;
            continue;
        }
        resultString += shiftChar(char, shift);
    }
    return resultString;
};

const punctuationChars = new Set(['.', ',', ';', ':', '?', '!', ' ']);
const isPunctuationChar = (char) =>
    punctuationChars.has(char);

const asciiLettersLowercase = 'abcdefghijklmnopqrstuvwxyz';
const asciiLettersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLenght = 26
const shiftChar = (char, shift) => {
    const alphabet = isLowerCaseLetter(char) 
        ? asciiLettersLowercase
        : asciiLettersUppercase;
    const charIndex = alphabet.indexOf(char);
    let newCharIndex = charIndex + shift;
    newCharIndex %= alphabetLenght;
    if (newCharIndex < 0)
        newCharIndex = alphabetLenght + newCharIndex;
    return alphabet.charAt(newCharIndex);

    function isLowerCaseLetter(char){
        return char >= 'a' && char <= 'z';
    }
}

module.exports = caesar;
