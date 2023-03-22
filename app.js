class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.booksSection = document.getElementById('all-books');
    this.booksInLocalStorage = JSON.parse(localStorage.getItem('allBooks'));
    this.titleInput = document.getElementById('title-input').value;
    this.authorInput = document.getElementById('author-input').value;
    this.form = document.getElementById('add-book-form');
  }

  displayAllBooks() {
    localStorage.setItem('allBooks', JSON.stringify(this.books));
    // get books from local storage
    let elements = '';

    // Loop through the books
    if (this.booksInLocalStorage) {
      this.booksInLocalStorage.forEach((book) => {
        elements += `
          <div class='book-details'>
            <h3>${book.title} by ${book.author}</h3>
            <button onclick={deleteBook(${book.index})} class='delete-button'>Remove</button>
          </div>
        `;
      });
      this.booksSection.innerHTML = elements;
    }
  }

  addNewBook(title, author) {
    // new book object
    const newBook = new Book(title, author);
    this.books.push({ title: newBook.titleInput, author: newBook.authorInput });
    this.displayAllBooks();
  }

  // submit form
  submitForm() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addNewBook();
    });
  }

  // delete book
  deleteBook(index) {
    this.books.splice(index, 1);
    this.displayAllBooks();
  }
}

this.displayAllBooks();