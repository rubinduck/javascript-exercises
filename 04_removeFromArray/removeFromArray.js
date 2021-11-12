const removeFromArray = function(array, ...elementsToRemove) {
    for (let i = 0; i < elementsToRemove.length; i++){
        const element = elementsToRemove[i];
        let elementIndex = array.lastIndexOf(element);
        while (elementIndex !== -1){
            array.splice(elementIndex, 1);
            elementIndex = array.lastIndexOf(element);
        }
    }
    return array;
    // more advanced solution
    // return array.filter(element => !elementsToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
