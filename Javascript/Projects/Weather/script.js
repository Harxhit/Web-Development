document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("cityInput");
  const searchButton = document.getElementById("searchButton");
  const cityDisplay = document.getElementById("cityName");
  const currentDate = document.getElementById("currentDate");
  const weatherIcon = document.getElementById("weatherIcon");
  const temperature = document.getElementById("temperature");
  const weatherCondition = document.getElementById("weatherCondition");
  const highestTemp = document.getElementById("tempHigh");
  const lowTemp = document.getElementById("tempLow");
  const windSpeed = document.getElementById("windSpeed");
  const errorDisplay = document.getElementById("errorMessage");

  const apiKey = "1d67e4251028f762586cbd723effe22a";

  searchButton.addEventListener("click", async () => {
    const cityName = cityInput.value.trim();

    if (!cityName) errorMessage();

    try {
      const weatherData = await fetchData(cityName);
      displayData(weatherData);
    } catch (error) {
      errorMessage();
    }
  });

  async function fetchData(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) errorMessage();
    const data = await response.json();
    console.log(data);
    return data;
  }

  function displayData(data) {
    cityDisplay.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    highestTemp.textContent = `${Math.round(data.main.temp_max)}°C`;
    lowTemp.textContent = `${Math.round(data.main.temp_min)}°C`;
    currentDate.textContent = date();
    weatherCondition.textContent = data["weather"][0]["main"];
    data["weather"][0]["main"];
    windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)}km/h`;

    const changeFavicon = data["weather"][0]["description"];
    if (changeFavicon === "clear sky") {
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    } else if (changeFavicon === "rainy") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
    } else if (changeFavicon === "broken clouds") {
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
    } else if (changeFavicon === "thunderstorm") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/1146/1146860.png";
    } else if (changeFavicon === "snowy") {
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/642/642102.png";
    } else if (changeFavicon === "haze") {
      weatherIcon.src = href =
        "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
    } else if (changeFavicon === "overcast clouds") {
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
    }
  }

  function date() {
    const today = new Date();

    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      today
    );
    return formattedDate;
  }

  function errorMessage() {
    // Clear previous error message
    errorDisplay.textContent = "";

    const city = cityInput.value.trim();
    errorDisplay.textContent = `Couldn't find ${city}. Please enter valid city name or try again later.`;
  }

  cityInput.addEventListener("input", () => {
    errorDisplay.textContent = "";
  });
});
