const repeatString = function(string, repeatAmount) {
    if (repeatAmount < 0) return 'ERROR';
    let result = '';
    for (let i = 0; i < repeatAmount; i++)
        result += string;
    return result;

};

// Do not edit below this line
module.exports = repeatString;
