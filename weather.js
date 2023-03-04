const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "7b8480a1b16bef361f1521518a57dade";

function onGeoSucsess(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
    });
}
function onGeoError() {
  alert("I can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSucsess, onGeoError);