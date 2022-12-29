const reverseString = function(userString) {
    let string = userString;
    let splitString = string.split('');
    splitString.reverse();
    let finalString = splitString.join('');
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
