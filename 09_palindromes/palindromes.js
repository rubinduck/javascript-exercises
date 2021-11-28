'use strict'
const PUNCTUATION_CHARS = '.,:;?!';

const palindromes = (string) => {
    if (string.length == 1)
        return true;
    string = string.toLowerCase();
    string = removePunctuationMarks(string);
    string = string.replaceAll(' ', '');
    const stringMiddle = Math.floor(string.length / 2);
    const stringStart = string.substring(0, stringMiddle);
    let stringEnd;
    if (isOdd(string.length)){
        stringEnd = string.substring(stringMiddle + 1);
    } else {
        stringEnd = string.substring(stringMiddle);
    }
    return stringStart === reverse(stringEnd);
}

function removePunctuationMarks(string){
    return string
        .split('')
        .filter(char => !PUNCTUATION_CHARS.includes(char))
        .join('');
}

function isOdd(number){
    return number % 2 !== 0;
}

function reverse(string){
    return string.split('').reverse().join('');
}

// Do not edit below this line
module.exports = palindromes;
