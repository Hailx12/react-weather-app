import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a City..."
              />
            </div>
            <div className="col-3">
              <input
                className="search-button"
                type="submit"
                value="Search"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input className="current-button" type="submit" value="Current" />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul className="current-weather">
          <li>Saturday 16:31</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly cloudy"
              width="65"
            />
            <span className="current-temp">
              {Math.round(weatherData.temperature)}{" "}
            </span>
            <span className="temp-unit">°C</span>
          </div>
          <div className="col-6">
            <ul className="parameters">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bc77907b0e11a419a6d57d1e95e42bea";
    let city = "Rotterdam";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
