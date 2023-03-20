const addBtn = document.getElementById('add-btn');
const displayArea = document.getElementById('all-books');

const books = [];

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const formInputs = document.querySelectorAll('form input');
  const addedBook = {};
  for (let i = 0; i < formInputs.length; i += 1) {
    addedBook.id = Math.floor(Math.random() * 1000);
    addedBook[formInputs[i].name] = formInputs[i].value;
    formInputs[i].value = '';
  }
  books.push(addedBook);
  const booksData = JSON.stringify(books);
  localStorage.setItem('allBooks', booksData);
});

const booksInLocalStorage = Array.from(JSON.parse(localStorage.getItem('allBooks')));
if (booksInLocalStorage) {
  booksInLocalStorage.forEach((book) => {
    const bookContent = `
      <div class="book-details">
        <h3>${book.title}</h3>
        <p>${book.author}</p
        <button type="button" id='delete-book-${book.id}'>Remove</button>
      </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = bookContent;
    displayArea.append(div);
  });
}

const id = booksInLocalStorage.map(({ id }) => id);
console.log(id);
const deleteBtn = document.getElementById(`delete-book-${id}`);
deleteBtn.addEventListener('click', () => {
  booksInLocalStorage.filter((book) => book.id !== id);
});
