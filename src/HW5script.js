/// SETTING CURRENT TIME

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

let currentTime = document.querySelector("#full-date");
currentTime.innerHTML = `${days[now.getDay()]}, ${now.getDate()} ${
  months[now.getMonth()]
} ${now.getHours()}:${(now.getMinutes() < 10 ? '0' : '') + now.getMinutes()}`;




/// RESPONSES TO AXIOS:


function showCurrentData(response) {
  let currentLocation = document.querySelector("#city-name");
      currentLocation.innerHTML = response.data.name;

  let flagElement = document.querySelector("#flag")
     cflag = response.data.sys.country.toString().toLowerCase();
     flagElement.setAttribute("src", `https://lipis.github.io/flag-icon-css/flags/4x3/${cflag}.svg`)
     flagElement.setAttribute("alt", `${cflag} flag`)
     flagElement.setAttribute("title", `${cflag}`)


  celsiusTemperature = response.data.main.temp;

  let roundTemp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#temperature")
      tempElement.innerHTML = roundTemp;
  //
  let description = document.querySelector("#description")
      description.innerHTML = response.data.weather[0].description;
  //
  let roundMinTemp = Math.round(response.data.main.temp_min);
  let roundMaxTemp = Math.round(response.data.main.temp_max);
  let tempMinElement = document.querySelector("#min");
  let tempMaxElement = document.querySelector("#max")
      tempMinElement.innerHTML = `${roundMinTemp}°`;
      tempMaxElement.innerHTML = ` ${roundMaxTemp}°`;

  currentMinTemp = response.data.main.temp_min;
  currentMaxTemp = response.data.main.temp_max;

  let windSpeed = document.querySelector("#wind");
      windSpeed.innerHTML = `${response.data.wind.speed} km/h`;

  let humidity = document.querySelector("#hum");
      humidity.innerHTML = `${response.data.main.humidity}%`;

  let iconNow = response.data.weather[0].icon;
  let iconElement = document.querySelector("#icon")
      iconElement.setAttribute ("src", `https://openweathermap.org/img/wn/${iconNow}@2x.png`);

  let unitsymbol = document.querySelector("#active-unit");
      unitsymbol.innerHTML = "°C";
    
}


function showForecast (response) {
  let time01 = new Date(response.data.list[0].dt*1000);
  let time02 = new Date(response.data.list[1].dt*1000);
  let time03 = new Date(response.data.list[2].dt*1000);
  let time04 = new Date(response.data.list[3].dt*1000);
  let time05 = new Date(response.data.list[4].dt*1000);


  let icon01 = (response.data.list[0].weather[0].icon);
  let icon02 = (response.data.list[1].weather[0].icon);
  let icon03 = (response.data.list[2].weather[0].icon);
  let icon04 = (response.data.list[3].weather[0].icon);
  let icon05 = (response.data.list[4].weather[0].icon);

  let minTemp01 = Math.round(response.data.list[0].main.temp_min);
  let minTemp02 = Math.round(response.data.list[1].main.temp_min);
  let minTemp03 = Math.round(response.data.list[2].main.temp_min);
  let minTemp04 = Math.round(response.data.list[3].main.temp_min);
  let minTemp05 = Math.round(response.data.list[4].main.temp_min);

  let maxTemp01 = Math.round(response.data.list[0].main.temp_max);
  let maxTemp02 = Math.round(response.data.list[1].main.temp_max);
  let maxTemp03 = Math.round(response.data.list[2].main.temp_max);
  let maxTemp04 = Math.round(response.data.list[3].main.temp_max);
  let maxTemp05 = Math.round(response.data.list[4].main.temp_max);

  minTemp01value = response.data.list[0].main.temp_min;
  minTemp02value = response.data.list[1].main.temp_min;
  minTemp03value = response.data.list[2].main.temp_min;
  minTemp04value = response.data.list[3].main.temp_min;
  minTemp05value = response.data.list[4].main.temp_min;

  maxTemp01value = response.data.list[0].main.temp_max;
  maxTemp02value = response.data.list[1].main.temp_max;
  maxTemp03value = response.data.list[2].main.temp_max;
  maxTemp04value = response.data.list[3].main.temp_max;
  maxTemp05value = response.data.list[4].main.temp_max;

  let day01time = document.querySelector("#day01");
  let day02time = document.querySelector("#day02");
  let day03time = document.querySelector("#day03");
  let day04time = document.querySelector("#day04");
  let day05time = document.querySelector("#day05");

  let day01icon =  document.querySelector("#icon01");
  let day02icon =  document.querySelector("#icon02");
  let day03icon =  document.querySelector("#icon03");
  let day04icon =  document.querySelector("#icon04");
  let day05icon =  document.querySelector("#icon05");

  let day01minmax = document.querySelector("#minmax01");
  let day02minmax = document.querySelector("#minmax02");
  let day03minmax = document.querySelector("#minmax03");
  let day04minmax = document.querySelector("#minmax04");
  let day05minmax = document.querySelector("#minmax05");

  day01time.innerHTML = `${time01.getHours()}h`;
  day02time.innerHTML = `${time02.getHours()}h`;
  day03time.innerHTML = `${time03.getHours()}h`;
  day04time.innerHTML = `${time04.getHours()}h`;
  day05time.innerHTML = `${time05.getHours()}h`;

  day01icon.setAttribute ("src", `https://openweathermap.org/img/wn/${icon01}@2x.png`);
  day02icon.setAttribute ("src", `https://openweathermap.org/img/wn/${icon02}@2x.png`);
  day03icon.setAttribute ("src", `https://openweathermap.org/img/wn/${icon03}@2x.png`);
  day04icon.setAttribute ("src", `https://openweathermap.org/img/wn/${icon04}@2x.png`);
  day05icon.setAttribute ("src", `https://openweathermap.org/img/wn/${icon05}@2x.png`);

  day01minmax.innerHTML = `${minTemp01}° <br> ${maxTemp01}°`;
  day02minmax.innerHTML = `${minTemp02}° <br> ${maxTemp02}°`;
  day03minmax.innerHTML = `${minTemp03}° <br> ${maxTemp03}°`;
  day04minmax.innerHTML = `${minTemp04}° <br> ${maxTemp04}°`;
  day05minmax.innerHTML = `${minTemp05}° <br> ${maxTemp05}°`;

}

/// GEOLOCATION & LOCATION BY CITY 


function getCurrentPosition() {
navigator.geolocation.getCurrentPosition(showPosition);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#pickCity");
  pickedCity(cityInputElement.value);
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "db9add1eea80b5993c21c76a9a79855d";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCurrentData);

  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&cnt=5`;
  axios.get(apiUrlForecast).then(showForecast);

}

function pickedCity(cityName) {
let units = "metric";
let apiKey = "db9add1eea80b5993c21c76a9a79855d";
let apiUrlC = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
let apiUrlF = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}&cnt=5`;

axios.get(apiUrlC).then(showCurrentData);
axios.get(apiUrlF).then(showForecast);
}


/// TEMPERATURE BY UNIT

function displayFahrenheitTemperature(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  let currentMinTempElement = document.querySelector("#min");
  let currentMaxTempElement = document.querySelector("#max");
  let MinMaxTemp01Element = document.querySelector("#minmax01");
  let MinMaxTemp02Element = document.querySelector("#minmax02");
  let MinMaxTemp03Element = document.querySelector("#minmax03");
  let MinMaxTemp04Element = document.querySelector("#minmax04");
  let MinMaxTemp05Element = document.querySelector("#minmax05");

  let fahrenheitTemperatureNow = (celsiusTemperature * 9) / 5 + 32;
  let fahrenheitTemperatureMin = (currentMinTemp * 9) / 5 + 32;
  let fahrenheitTemperatureMax = (currentMaxTemp * 9) / 5 + 32;

 let minTemp01FValue = (minTemp01value * 9) / 5 + 32;
 let minTemp02FValue = (minTemp02value * 9) / 5 + 32;
 let minTemp03FValue = (minTemp03value * 9) / 5 + 32;
 let minTemp04FValue = (minTemp04value * 9) / 5 + 32;
 let minTemp05FValue = (minTemp05value * 9) / 5 + 32;

 let maxTemp01FValue = (maxTemp01value * 9) / 5 + 32;
 let maxTemp02FValue = (maxTemp01value * 9) / 5 + 32;
 let maxTemp03FValue = (maxTemp01value * 9) / 5 + 32;
 let maxTemp04FValue = (maxTemp01value * 9) / 5 + 32;
 let maxTemp05FValue = (maxTemp01value * 9) / 5 + 32;
  

  temperatureElement.innerHTML = Math.round(fahrenheitTemperatureNow);
  currentMinTempElement.innerHTML = `${Math.round(fahrenheitTemperatureMin)}°`;
  currentMaxTempElement.innerHTML = `${Math.round(fahrenheitTemperatureMax)}°`;


  MinMaxTemp01Element.innerHTML = `${Math.round(minTemp01FValue)}°  <br>  ${Math.round(maxTemp01FValue)}°`;
  MinMaxTemp02Element.innerHTML = `${Math.round(minTemp02FValue)}°  <br>  ${Math.round(maxTemp02FValue)}°`;
  MinMaxTemp03Element.innerHTML = `${Math.round(minTemp03FValue)}°  <br>  ${Math.round(maxTemp03FValue)}°`;
  MinMaxTemp04Element.innerHTML = `${Math.round(minTemp04FValue)}°  <br>  ${Math.round(maxTemp04FValue)}°`;
  MinMaxTemp05Element.innerHTML = `${Math.round(minTemp05FValue)}°  <br>  ${Math.round(maxTemp05FValue)}°`;

  

  let unitsymbol = document.querySelector("#active-unit");
  unitsymbol.innerHTML = "°F";
  
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let currentMinTempElement = document.querySelector("#min");
  let currentMaxTempElement = document.querySelector("#max");
  let MinMaxTemp01Element = document.querySelector("#minmax01");
  let MinMaxTemp02Element = document.querySelector("#minmax02");
  let MinMaxTemp03Element = document.querySelector("#minmax03");
  let MinMaxTemp04Element = document.querySelector("#minmax04");
  let MinMaxTemp05Element = document.querySelector("#minmax05");

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  currentMinTempElement.innerHTML = `${Math.round(currentMinTemp)}°`;
  currentMaxTempElement.innerHTML = `${Math.round(currentMaxTemp)}°`;
  MinMaxTemp01Element.innerHTML = `${Math.round(minTemp01value)}°  <br>  ${Math.round(maxTemp01value)}°`;
  MinMaxTemp02Element.innerHTML = `${Math.round(minTemp02value)}°  <br>  ${Math.round(maxTemp02value)}°`;
  MinMaxTemp03Element.innerHTML = `${Math.round(minTemp03value)}°  <br>  ${Math.round(maxTemp03value)}°`;
  MinMaxTemp04Element.innerHTML = `${Math.round(minTemp04value)}°  <br>  ${Math.round(maxTemp04value)}°`;
  MinMaxTemp05Element.innerHTML = `${Math.round(minTemp05value)}°  <br>  ${Math.round(maxTemp05value)}°`;


  let unitsymbol = document.querySelector("#active-unit");
  unitsymbol.innerHTML = "°C";
}

let celsiusTemperature = null;
let  currentMinTemp = null;
let  currentMaxTemp = null;
 let minTemp01value = null;
 let minTemp02value = null;
 let minTemp03value = null;
 let minTemp04value = null;
 let minTemp05value = null;

 let maxTemp01value = null;
 let maxTemp02value = null;
 let maxTemp03value = null;
 let maxTemp04value = null;
 let maxTemp05value = null;

/// EVENT LISTENERS

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

let buttonSC = document.querySelector("#search-city");
buttonSC.addEventListener("submit", handleSubmit)

let buttonCL = document.querySelector("#current-location");
buttonCL.addEventListener("click", getCurrentPosition)

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

/// STARTING COMMAND

//navigator.geolocation.getCurrentPosition(showPosition);
pickedCity("Berlin");

///

