//Variables
const apiKey = process.env.api_key;
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');

// Search form event listener
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city !== '') {
        getWeatherData(city);
        cityInput.value = '';
    }
});