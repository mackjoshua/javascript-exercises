const repeatString = function(userString, quantity) {
    let output = '';

    if (quantity <= -1) {
        return 'ERROR';
    }

    for (i = 0; i < quantity; i++) {
        output += userString;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
