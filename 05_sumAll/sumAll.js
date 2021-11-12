const sumAll = function(a, b) {
    if (!isNumber(a) || !isNumber(b)) return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';
    const from = Math.min(a, b);
    const to = Math.max(a, b);
    let sum = 0;
    for (let n = from; n <= to; n++)
        sum += n;
    return sum;
};

function isNumber(value){
    return typeof value === 'number';
}

// Do not edit below this line
module.exports = sumAll;
