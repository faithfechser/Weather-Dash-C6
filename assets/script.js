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
// const apiLat = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${apiKey}`;
const lat = `http://api.openweathermap.org/geo/1.0/direct?q=Chicago&appid=${apiKey}`;
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

const iconsCon = '/images/weathericons/'  

function getIcon(iconsCon) {
  switch(iconsCon){
    case "Clouds":
      return "/images/WeatherIcons/Cloud.png";
    case "Overcast":
      return "/images/WeatherIcons/CloudyDay.png";
    case "OvercastNight":
      return "/images/WeatherIcons/CloudyNight.png";
    case "Lightning":
      return "/images/WeatherIcons/LightningCloud.png";
    case "Moon":
      return "/images/WeatherIcons/Moon.png";
    case "Rain":
      return "/images/WeatherIcons/RainCloud.png";
    case "Snow":
      return "/images/WeatherIcons/SnowFlake.png";
    case "Sun":
      return "/images/WeatherIcons/SunShine.png";
    default:
      return "/images/WeatherIcons/SunShine.png";
  }
}

async function fetchWeather(userInput){
  fetch(apiURL)
  .then(response => {
      return response.json();
  })
  .then(weatherData => {
      displayForecastInfo(weatherData);
  })
  .catch(error => {
      console.log('Error:', error.message);
  });
};
  // console.log('Function fired')
  // const response = await fetch(apiLat)
  // const data = await response.json()
  // console.log(data)


fetchWeather()