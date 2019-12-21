// Initialize storage
const storage = new Storage();

// get stored weather location
const weatherLocation = storage.getStorageData();
console.log(weatherLocation);

// Initialize Weather
const weather = new Weather();

// Initialize UI
const ui = new UI();

// DOM Load event to load weather data
document.addEventListener('DOMContentLoaded',loadWeather(weatherLocation.city,weatherLocation.state))

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // get and display weather
  loadWeather(city, state)

  // Set location in LS
  storage.setStorageData(city,state)

  // close modal
  $('#locModal').modal('hide')
})

function loadWeather(city, state){
  weather.getWeather(city, state)
    .then((weatherData) => {
      console.log(weatherData)
      ui.paint(weatherData)
    })
    .catch(err => console.log(err));
}

// Get Location from app
// write to local storage
// pass location to weather.js
// update UI
