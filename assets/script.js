// Html connections
const searchBar = document.getElementById("search-bar");
const userInput = document.getElementById("city-input");
const currentCity = document.querySelector(".currentCity");
const currentDate = document.querySelector(".currentDate");
const currentWeatherIcon = document.querySelector(".currentWeatherIcon");
const currentTemp = document.getElementById("currentTemp");
const currentWind = document.getElementById("currentWind");
const currentHumidity = document.getElementById("currentHumidity");

// API key
const apiKey = 'f1b556da313e25b68a91bca1a8c4b597';

// API connections
const apiGeoLocation = `https://api.openweathermap.org/geo/1.0/direct?q={city}&appid=${apiKey}`;
const apiWeather = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`;

function displayIcon(iconCode) {
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  currentWeatherIcon.src = iconUrl;
}

// function getIcon(iconsCon) {
//   switch(iconsCon){
//     case "Clouds":
//       return "/images/WeatherIcons/Cloud.png";
//     case "Overcast":
//       return "/images/WeatherIcons/CloudyDay.png";
//     case "OvercastNight":
//       return "/images/WeatherIcons/CloudyNight.png";
//     case "Lightning":
//       return "/images/WeatherIcons/LightningCloud.png";
//     case "Moon":
//       return "/images/WeatherIcons/Moon.png";
//     case "Rain":
//       return "/images/WeatherIcons/RainCloud.png";
//     case "Snow":
//       return "/images/WeatherIcons/SnowFlake.png";
//     case "Sun":
//       return "/images/WeatherIcons/SunShine.png";
//     default:
//       return "/images/WeatherIcons/SunShine.png";
//   }
// }

async function fetchWeather(city) {
  try {
    const geoResponse = await fetch(apiGeoLocation.replace("{city}", city));
    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
      console.log('City not found');
      return;
    }

    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    const weatherResponse = await fetch(apiWeather.replace("{lat}", lat).replace("{lon}", lon));
    const weatherData = await weatherResponse.json();

    currentCity.textContent = `City: ${geoData[0].name}`;
    currentDate.textContent = `Date: ${new Date().toLocaleDateString()}`;
    displayIcon(weatherData.list[0].weather[0].icon);
    currentTemp.textContent = `Temperature: ${weatherData.list[0].main.temp}°F`;
    currentWind.textContent = `Wind Speed: ${weatherData.list[0].wind.speed} mph`;
    currentHumidity.textContent = `Humidity: ${weatherData.list[0].main.humidity}%`;
  } catch (error) {
    console.log('Error:', error.message);
  }
}

searchBar.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = userInput.value.trim();
  if (city !== "") {
    fetchWeather(city);
    userInput.value = "";
  }
});

fetchWeather("DefaultCity");