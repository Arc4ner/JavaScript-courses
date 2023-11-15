
let books = [
  { id: 1, title: "Start with why",author: "Simon Sinek", price: 80.0, quantity: 13 },
  { id: 2,  title: "But how do it know", author: "J. Clark Scott", price: 59.9, quantity: 22 },
  { id: 3, title: "Clean Code", author: "Robert Cecil Martin", price: 50.0, quantity: 5 },
  {  id: 4, title: "Zero to One", author: "Peter Thiel", price: 45.0, quantity: 12 },
  { id: 5, title: "You don't know JS", author: "Kyle Simpson", price: 39.9, quantity: 9 }
];


function addBook(id, title, author, price, quantity) {
  books.push({ id, title, author, price, quantity });
}


function searchBook(searchKey, searchValue) {
  for (let i = 0; i < books.length; i++) {
    if (books[i][searchKey] === searchValue) {
      
      return books[i];
    }
  }
  return null;
}


function sellBooks(bookTitle, quantity, balance) {
  const book = searchBook("title", bookTitle);


  if (book && book.quantity >= quantity && book.price * quantity <= balance) {
    book.quantity -= quantity;
    const totalPrice = book.price * quantity;

    return `Book(s) sold successfully. total price: ${totalPrice} sar.`;
  } else {
    return "failed to complete the transaction. the book is not available, or the quantity is insufficient, or the balance is not enough.";
  }
}




addBook(6, "New Book", "New Author", 90.0, 10); 
const searchedBook = searchBook("id", 5); 
console.log("Searched Book:", searchedBook);




const invoiceResult = sellBooks("You don't know JS", 2, 160); 
console.log(invoiceResult);