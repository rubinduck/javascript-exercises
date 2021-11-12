const leapYears = function(year) {
    return isDevisableBy(year, 4) && (!isDevisableBy(year, 100) || isDevisableBy(year, 400));
};

function isDevisableBy(number, deviser){
    return number % deviser === 0;
}

// Do not edit below this line
module.exports = leapYears;
