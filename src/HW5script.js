let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

//

//

let currentTime = document.querySelector("#full-date");
currentTime.innerHTML = `${days[now.getDay()]}, ${now.getDate()} ${
  months[now.getMonth()]
} ${now.getHours()}:${(now.getMinutes() < 10 ? '0' : '') + now.getMinutes()}`;

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "db9add1eea80b5993c21c76a9a79855d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

function showData(response){
  let currentLocation = document.querySelector("#city-name");
      currentLocation.innerHTML = response.data.name;

  let roundTemp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#current-temp")
      tempElement.innerHTML = `${roundTemp}°`;
  //
  let description = document.querySelector("#description")
      description.innerHTML = response.data.weather[0].description;
  //
  let roundMaxTemp = Math.round(response.data.main.temp_max);
  let roundMinTemp = Math.round(response.data.main.temp_min);
  let tempMinMaxElement = document.querySelector("#maxmin")
      tempMinMaxElement.innerHTML = ` ${roundMaxTemp}° /  ${roundMinTemp}°`;
}

navigator.geolocation.getCurrentPosition(showPosition);

function getCurrentPosition() {
navigator.geolocation.getCurrentPosition(showPosition);
}

let buttonCL = document.querySelector("#current-location");
buttonCL.addEventListener("click", getCurrentPosition)

///

function pickedCity(event) {
  event.preventDefault();
let input = document.querySelector("#pickCity");
let city = document.querySelector("#city-name");
  city.innerHTML = input.value;
let cityName = input.value;
let units = "metric";
let apiKey = "db9add1eea80b5993c21c76a9a79855d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`
console.log(apiUrl);

axios.get(apiUrl).then(showData);

}

let form = document.querySelector("form");
form.addEventListener("submit", pickedCity);
let buttonSC = document.querySelector("#search-city");
buttonCL.addEventListener("submit", pickedCity)
