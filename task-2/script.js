document.addEventListener('DOMContentLoaded', () => {
  const sp500PriceEl = document.getElementById('sp500-price');
  const updateTimeEl = document.getElementById('update-time');

  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=^GSPC&apikey=96JR8M3B00R55E3C`;

  async function fetchSP500Data() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const sp500Price = data.price;
      const updateTime = new Date().toLocaleTimeString;
    
      sp500PriceEl.textContent = `S&P 500: $${sp500Price}`;
      updateTimeEl.textContent = `Updated: ${updateTime}`;
    } catch (error) {
      sp500PriceEl.textContent = 'Could not fetch data';
    }
  }

  fetchSP500Data();
  setInterval(fetchSP500Data, 60000);
});
