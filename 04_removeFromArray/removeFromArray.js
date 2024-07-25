const removeFromArray = function(myArray, ...removed) {
    return myArray.filter(val => !removed.includes(val));
};

removeFromArray([1, 2, 2, 3], 2);

// Do not edit below this line
module.exports = removeFromArray;
