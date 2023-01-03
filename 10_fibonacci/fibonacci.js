const fibonacci = function(num, ourArray = [0,1,1]) {
    num = Number(num);
    if (num < 0) {
    return 'OOPS';
    }
    for (i = 2; i <= num; i++) {
        ourArray[i] = ourArray[i-2] + ourArray[i-1];
    }
    console.log(ourArray[num]);
    return ourArray[num];
};

// Do not edit below this line
module.exports = fibonacci;
