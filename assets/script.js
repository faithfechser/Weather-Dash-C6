// Html connections
const searchBar = document.getElementById("#search-bar");
const userInput = document.getElementById("#city-input");
const currentCity = document.querySelector(".currentCity");
const currentDate = document.querySelector(".currentDate");
const currentWeatherIcon = document.querySelector(".currentWeatherIcon");
const currentTemp = document.getElementById("#currentTemp");
const currentWind = document.getElementById("#currentWind");
const currentHumidity = document.getElementById("#currentHumidity");

// API key
const apiKey = 'f1b556da313e25b68a91bca1a8c4b597';
// API connections
const apiLat = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${apiKey}`;
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`;

async function fetchLat(){
  const response = await fetch(apiLat)
  const data = await response.json()
  console.log(data)
}