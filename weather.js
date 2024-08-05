const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_Image = document.querySelector(".weather-image");
const temp = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".loaction-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city) {
  const api_key = "490fc59738b0a1cbe11fd2ba4cace827";
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );


  if (weather_data.cod === "404") {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }

  // function onKeyPress () {
  //   fetch('./configfile/currentcityandlist.json')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error));
  // }

  console.log(weather_data.weather_data.main.humidity);

  temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;

  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    
    case "Clouds":
      weather_Image.src = "./Images/cloudy.gif";
      break;
    case "Rain":
      weather_Image.src = "./Images/rainy.gif";
      break;
    case "Clear":
      weather_Image.src = "./Images/sunny.gif";
      break;
    case "Snow":
      weather_Image.src = "./Images/snow.gif";
      break;
    case "Thunderstorm":
      weather_Image.src = "./Images/thunder.gif";
      break;
    case "Haze":
      weather_Image.src = "./Images/haze.gif";
      break;  
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
