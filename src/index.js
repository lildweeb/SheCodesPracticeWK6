//last updated on 11.15
let now = new Date();

let currentDay = document.querySelector("#week-day");
let currentTime = document.querySelector("#time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let month = now.getMonth();
let ampm = hours >= 12 ? "PM" : "AM";

currentDay.innerHTML = `${day} ${month}/${date}`;
currentTime.innerHTML = `${hours}:${minutes} ${ampm}`;
//3.........................................................
function displayTemperature(response) {
  //document.querySelector("#current-city-temp").innerHTML = Math.round(
  //response.data.main.temp
  //);
  document.querySelector("#current-city-temp").innerHTML = `${Math.round(
    response.data.main.temp
  )} °F`;
  document.querySelector("#current-city-name").innerHTML = response.data.name;
}

function search(city) {
  let units = "imperial";
  let apiKey = "c6ce8d51b8f185a66119a5dd74f32320";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemperature);
}
// 6
function searchCurrentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "c6ce8d51b8f185a66119a5dd74f32320";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(displayTemperature);
}

function retrieveCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
}

let locationButton = document.querySelector("#current-location-button");
locationButton.addEventListener("click", retrieveCurrentPosition);

//2 ............................................................

function searchCity(event) {
  event.preventDefault();
  let cityEntered = document.querySelector("#city-search-bar");
  let cityInput = document.querySelector("#current-city-name");
  cityInput.innerHTML = `${cityEntered.value}`;
  search(cityEntered.value);
}

let searchInput = document.querySelector("#city-form");
searchInput.addEventListener("submit", searchCity);
//°F
//wk7
let celsiusTemperature = null;

function showFTemp(event) {
  event.preventDefault();
  let fahrenheiTemperature = (${celsiusTemperature} * 9) / 5 + 32;
  let displayTemperature = document.querySelector("#current-city-temp");
  displayTemperature = Math.round(fahrenheiTemperature.innerHTML);
}
let fLink = document.querySelector("#f-link");
fLink.addEventListener("click", showFTemp);

function showCTemp (event){
  event.preventDefault();
  let displayTemperature = document.querySelector("#current-city-temp");
  displayTemperature.innerHTML=Math.round(celsiusTemperature);
}

let cLink = document.querySelector("#c-link");
fLink.addEventListener("click", showCTemp);