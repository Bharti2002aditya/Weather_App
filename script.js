const apiKey = "5f17aa42127496e7a78ffa55c56c9dfd";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const result = await fetch(`${apiurl} + ${city}+ &appid=${apiKey}`);
  var data = await result.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp)+"°C";

  document.querySelector(".humidity").innerHTML = data.main.humidity +" :% Humidity";

  document.querySelector(".wind").innerHTML = data.wind.speed+" :km/h Wind";
}

  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
  })

  
