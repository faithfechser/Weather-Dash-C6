//Variables
const apiKey = process.env.api_key;
const searchBar = document.getElementById('search-bar');
const cityInput = document.getElementById('city-input'); 
const historySection = document.getElementById('history');
const currentCityHeader = document.querySelector('.currentCity');
const currentDateHeader = document.querySelector('.currentDate');
const currentWeatherIcon = document.querySelector('.currentWeatherIcon');
const currentTemp = document.getElementById('currentTemp');
const currentWind = document.getElementById('currentWind');
const currentHumidity = document.getElementById('currentHumidity');
const forecastDays = document.querySelector('.forecast-days');

// API fetch function
async function fetchWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
}

// Current weather function
function displayCurrentWeather(weatherData) {
    // Basic city info
    currentCityHeader.textContent = weatherData.name;
    const date = new Date();
    currentDateHeader.textContent = date.toLocaleDateString();
    // Weather icons
    const weatherIcon = weatherData.weather[0].icon;
    const weatherIconSrc = `./assets/images/WeatherIcons/${weatherIcon}.png`;
    currentWeatherIcon.src = weatherIconSrc;
    // Basic weather info 
    currentTemp.textContent = `Temperature: ${weatherData.main.temp}°C`;
    currentWind.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;
    currentHumidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
}

// 5-day forecast fetch function
async function fetchForecastData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
}

// 5-day forecast display function
function displayForecast(forecastData) {
  forecastDays.innerHTML = ''; // Clear existing forecast data

  // Loop through forecastData.list to get the 5-day forecast information
  for (let i = 0; i < forecastData.list.length; i++) {
    const forecastDayData = forecastData.list[i];
    // Create elements to display the forecast information for each day and append them to the forecastDays div
    // Format the date, display weather icon, temperature, wind speed, and humidity for each day
  }
}

// City event listener
searchBar.addEventListener('submit', async function (event) {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (!city) {
    alert('Please enter a valid city name.');
    return;
  }

  const weatherData = await fetchWeatherData(city);
  displayCurrentWeather(weatherData);

  const forecastData = await fetchForecastData(city);
  displayForecast(forecastData);

});

// History event listener
historySection.addEventListener('click', async function (event) {
  if (event.target.tagName === 'BUTTON') {
    const city = event.target.dataset.city;
    if (city) {
      const weatherData = await fetchWeatherData(city);
      displayCurrentWeather(weatherData);

      const forecastData = await fetchForecastData(city);
      displayForecast(forecastData);
    }
  }
});

  