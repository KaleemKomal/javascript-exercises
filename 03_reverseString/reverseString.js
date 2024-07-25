const reverseString = function(myString) {
    let reverseString = '';

    for (let i = myString.length; i >= 0; i--){
        reverseString += myString.charAt(i);
    }

    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
