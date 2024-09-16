const books = [
  'The Count of Monte Cristo by Alexandre Dumas',
  'Three Musketeers by Alexandre Dumas',
  'Gone with the Wind by Margaret Mitchell',
  'Pride and Prejudice by Jane Austen',
  'Think and Grow Rich by Napoleon Hill',
  'To Kill a Mockingbird by Harper Lee',
  'The Great Gatsby by F. Scott Fitzgerald'
]

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function showBookOfTheDay() {
  /*
  const randomIndex = Math.floor(Math.random() * books.length);
  const book = books[randomIndex];
  document.getElementById('bookOfTheDay').textContent = `Today's Book of the Day is: ${book}`;
  */
  const todayDate = getTodayDate(); 
  const savedDate = localStorage.getItem('savedDate');
  let bookOfTheDay = localStorage.getItem('bookOfTheDay');

  if (savedDate !== todayDate || !bookOfTheDay) {
    const randomIndex = Math.floor(Math.random() * books.length);
    bookOfTheDay = books[randomIndex];
  
    localStorage.setItem('bookOfTheDay', bookOfTheDay);
    localStorage.setItem('savedDate', todayDate);
  }

  document.getElementById('bookOfTheDay').textContent = `Today's Book of the Day is: ${bookOfTheDay}`;
}



const todaysBookBtn = document.getElementById('todaysBook');
todaysBookBtn.addEventListener('click', showBookOfTheDay);

