const books = [
  {
    title: 'Book',
    author: 'Name'
  }
]
const getTheTitles = function(book) {
  const bookTitle = []
  for (let i = 0; i <= book.length - 1; i++) {
    let foundTitle = book[i].title;
    bookTitle.push(foundTitle);
  }
  return bookTitle;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
