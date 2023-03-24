import Book from './book.js';

export default class AllBooks {
  constructor() {
    this.booksSection = document.getElementById('all-books');
    this.titleInput = document.getElementById('title-input');
    this.authorInput = document.getElementById('author-input');
    this.books = [];
    if (localStorage.getItem('localBooks')) {
      this.books = JSON.parse(localStorage.getItem('localBooks'));
      this.displayAllBooks();
    }
  }

  formAddBook() {
    const title = this.titleInput.value;
    const author = this.authorInput.value;
    const newBook = new Book(title, author);
    this.books.push(newBook);
    this.displayAllBooks();
    this.storeInLocalStorage();
    this.titleInput.value = '';
    this.authorInput.value = '';
  }

  storeInLocalStorage() {
    localStorage.setItem('localBooks', JSON.stringify(this.books));
  }

  displayAllBooks() {
    this.books.forEach((book, index) => {
      this.bookDetails = `
        <div class='book-details'>
          <h3>${book.title} by ${book.author}</h3>
          <button class='remove-btn' id='removeBtn'>Remove</button>
        </div>
      `;
      this.booksSection.innerHTML += this.bookDetails;
      this.deleteBtn = document.getElementById('removeBtn');
      this.deleteBtn.addEventListener('click', () => this.deleteBook(index));
    });
  }

  deleteBook(index) {
    this.books.splice(index, 1);
    this.booksSection.innerHTML = '';
    this.displayAllBooks();
    this.storeInLocalStorage();
  }
}