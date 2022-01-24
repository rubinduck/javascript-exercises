const findTheOldest = (people) => {
    return maxBy(people, getAge)
}

const getAge = (human) => {
    const yearOfDeath = human.yearOfDeath ?? getCurrentYear();
    return yearOfDeath - human.yearOfBirth;

    function getCurrentYear(){
        return new Date().getFullYear();
    }
}

const maxBy = (array, f) => {
    if (array.length === 0)
        throw new Error("Max by called on empty array");
    return array.reduce((a, b) => f(a) > f(b) ? a : b);
}

// Do not edit below this line
module.exports = findTheOldest;
