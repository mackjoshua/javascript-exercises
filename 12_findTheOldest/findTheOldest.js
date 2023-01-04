const findTheOldest = function(obj) {
	let year = new Date();
    	year = year.getFullYear();
     
  obj.sort(function(a, b) {
    

    a.age = a.yearOfDeath - a.yearOfBirth;
    b.age = b.yearOfDeath - b.yearOfBirth;
    
       	if (a.yearOfDeath === undefined) {
    	a.age = year - a.yearOfBirth;
      /* return a.age; */
    }
    
    if (b.yearOfDeath === undefined) {
      b.age = year - b.yearOfBirth;
      /* return b.age; */
    }
    
    
    if (a.age > b.age) {
        return -1;
    } else {
        return 1;
    }
   })
	console.log(obj);
   return obj[0];
};

// Do not edit below this line
module.exports = findTheOldest;
