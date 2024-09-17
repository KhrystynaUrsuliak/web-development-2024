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

function submitGenre() {
  const genre = document.getElementById('genre').value;
  if (genre) {
    document.getElementById('recommendation').textContent = `You entered: ${genre}. We recommend exploring the best books in the ${genre} genre!`;
  } else {
    document.getElementById('recommendation').textContent = 'Please enter a genre!';
  }
}

function dangerClick() {
  alert("Oops! You clicked the forbidden button!");
}

const todaysBookBtn = document.getElementById('todaysBook');
todaysBookBtn.addEventListener('click', showBookOfTheDay);

document.getElementById('submitGenre').addEventListener('click', submitGenre);

const dangerBtn = document.getElementsByClassName('btn')[0];
dangerBtn.onclick = dangerClick;

document.querySelector('#mainTitle').addEventListener('mouseover', function() {
  this.style.color = 'gold';
});
document.querySelector('#mainTitle').addEventListener('mouseout', function() {
  this.style.color = '';
});

const socialLinks = document.getElementsByClassName('socialLink');
for (let link of socialLinks) {
  link.onclick = function(event) {
    event.preventDefault();
    alert(`You clicked on the ${this.textContent} link!`);
  };
}

const navbarLinks = document.getElementsByTagName('a');
for (let link of navbarLinks) {
  link.onclick = function(event) {
    event.preventDefault();
    alert(`Navigating to: ${this.textContent}`);
  };
}
