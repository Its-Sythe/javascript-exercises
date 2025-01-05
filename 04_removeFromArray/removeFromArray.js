const removeFromArray = function(array, ...elementsToRemove) {
    for (let x = 0; x <= elementsToRemove.length - 1; x++) {
        const arrayIndex = array.indexOf(elementsToRemove[x]);
        array.splice(arrayIndex, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
