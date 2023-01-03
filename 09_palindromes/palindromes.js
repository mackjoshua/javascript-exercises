const palindromes = function (string) {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
    let reversedString = string.split('').reverse().join('');
    return reversedString.toLowerCase() === string.toLowerCase();
    };

// Do not edit below this line
module.exports = palindromes;
