const sumAll = function(lowBound, upBound) {

    if (!Number.isInteger(lowBound) || !Number.isInteger(upBound)){
        return "ERROR";
    }

    if (lowBound < 0 || upBound < 0){
        return "ERROR";
    }

    let total = 0;

        if (lowBound < upBound){
            for (let i = lowBound; i <= upBound; i++){
                total += i;
            }
        }
        else if(lowBound > upBound){
            for (let i = lowBound; i >= upBound; i--){
                total += i;
            }
        }

        return total;
};

// Do not edit below this line
module.exports = sumAll;
