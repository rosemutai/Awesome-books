const allBooks = [];
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.allBooksSection = document.getElementById('all-books');
    this.titleInput = document.getElementById('title-input');
    this.authorInput = document.getElementById('author-input');
    this.form = document.getElementById('add-book-form');
    this.books = JSON.parse(localStorage.getItem('books'));
  }

  displayAllBooks() {
    // this.allBooksSection.innerHTML = '';
    this.books.forEach((book, index) => {
      const bookDetails = `
        <div class='book-details>
            <h3 class='title'>${book.title} by ${book.author} </h3>
        </div>
      `;

      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = 'Remove';
      deleteBtn.classList.add('delete-button');
      deleteBtn.addEventListener('click', () => {
        this.books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(this.books));
        this.displayAllBooks();
      });
      const div = document.createElement('div');
      div.innerHTML += bookDetails;
      div.appendChild(deleteBtn);
      this.allBooksSection += (div);
      console.log(this.allBooksSection);
    });
  }

  addNewBook(title, author) {
    const newBook = new Book(title, author);
    allBooks.push({ title: newBook.titleInput.value, author: this.authorInput.value });
    localStorage.setItem('books', JSON.stringify(allBooks));
    console.log(newBook);
    this.resetForm();
    this.displayAllBooks();
  }

  resetForm() {
    this.titleInput.value = '';
    this.authorInput.value = '';
  }

  submitForm() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addNewBook();
      this.resetForm();
    });
  }
}