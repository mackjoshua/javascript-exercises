const getTheTitles = function(obj) {
    let books = [];
    obj.forEach(book => {
        books.push(book.title);
    })
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
