const repeatString = function(word, numb) {

    if (numb < 0){
        return "ERROR";
    }

    let final = "";
    for (let i = 0; i < numb; i++){
        final += word;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
