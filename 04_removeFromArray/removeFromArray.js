const removeFromArray = function(ourArray, ...moreArgs) {
   let arrayLength = ourArray.length;
//    The first for loop iterates over the array created by ...moreArgs
   for (const value of moreArgs) {
    // The next for loop then iterates over ourArray
        for (i=0; i < arrayLength;i++) {
            // This if statement then checks, for each value of moreArgs, if there is a matching value in ourArray by iterating over ourArray
            if (ourArray[i] === value) {
                ourArray.splice(i,1)
            }
        }    
   }
   return ourArray;
};

// So in sum, it grabs a value from moreArgs, 
// then iterates over ourArray to see if there are any matching values

// Do not edit below this line
module.exports = removeFromArray;
