import AllBooks from './AllBooks.js';

const books = new AllBooks();

const form = document.getElementById('add-book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  books.formAddBook();
});

const formSection = document.getElementById('form-section');
const formLink = document.getElementById('form-link');
const homeLink = document.getElementById('home-link');
const contactLink = document.getElementById('contact-link');
const booksSection = document.getElementById('all-books');
const titleSection = document.getElementById('titleSection');
const contactSection = document.getElementById('contact-section');

formSection.style.display = 'none';
contactSection.style.display = 'none';

formLink.addEventListener('click', () => {
  formSection.style.display = 'flex';
  booksSection.style.display = 'none';
  titleSection.style.display = 'none';
  contactSection.style.display = 'none';
  formLink.classList.add('active');
  homeLink.classList.remove('active');
  contactLink.classList.remove('active');
});

homeLink.addEventListener('click', () => {
  formSection.style.display = 'none';
  booksSection.style.display = 'block';
  contactSection.style.display = 'none';
  titleSection.style.display = 'block';
  homeLink.classList.add('active');
  formLink.classList.remove('active');
  contactLink.classList.remove('active');
});

contactLink.addEventListener('click', () => {
  formSection.style.display = 'none';
  booksSection.style.display = 'none';
  titleSection.style.display = 'none';
  contactSection.style.display = 'block';
  contactLink.classList.add('active');
  homeLink.classList.remove('active');
  formLink.classList.remove('active');
});

const dateSection = document.getElementById('dateLine');
const displayCurrentDate = () => {
  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  }).format(date);
  dateSection.innerHTML = formattedDate;
};

document.addEventListener('DOMContentLoaded', displayCurrentDate);