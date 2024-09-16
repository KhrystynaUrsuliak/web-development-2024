const books = [
  'The Count of Monte Cristo by Alexandre Dumas',
  'Three Musketeers by Alexandre Dumas',
  'Gone with the Wind by Margaret Mitchell',
  'Pride and Prejudice by Jane Austen',
  'Think and Grow Rich by Napoleon Hill',
  'To Kill a Mockingbird by Harper Lee',
  'The Great Gatsby by F. Scott Fitzgerald'
]

function showBookOfTheDay() {
  const randomIndex = Math.floor(Math.random() * books.length);
  const book = books[randomIndex];
  document.getElementById('bookOfTheDay').textContent = `Today's Book of the Day is: ${book}`;
}


const todaysBookBtn = document.getElementById('todaysBook');
todaysBookBtn.addEventListener('click', showBookOfTheDay);

