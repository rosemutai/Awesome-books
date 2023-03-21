const books = [
  {
    title: 'Python',
    author: 'Ken',
  },

  {
    title: 'C#',
    author: 'June',
  },
];

const displayAllBooks = () => {
  localStorage.setItem('allBooks', JSON.stringify(books));
  const booksSection = document.getElementById('all-books');

  // get books from local storage
  const booksInLocalStorage = JSON.parse(localStorage.getItem('allBooks'));
  console.log(booksInLocalStorage);
  let elements = '';

  // Loop through the books
  if (booksInLocalStorage) {
    booksInLocalStorage.forEach((book) => {
      elements += `
        <div class='book-details'>
          <h3>${book.title} by ${book.author}</h3>
          <button onclick={deleteBook(${book.index})} class='delete-button'>Remove</button>
        </div>
      `;
    });
    booksSection.innerHTML = elements;
  }
};

displayAllBooks();

const addNewBook = () => {
  // get user inputs
  const titleInput = document.getElementById('title-input').value;
  const authorInput = document.getElementById('author-input').value;

  // new book object
  const newBook = {
    title: titleInput,
    author: authorInput,
  };
  books.push(newBook);
  displayAllBooks();
};

// submit form
const form = document.getElementById('add-book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewBook();
});

// delete book
const deleteBook = (index) => {
  books.splice(index, 1);
  displayAllBooks();
};