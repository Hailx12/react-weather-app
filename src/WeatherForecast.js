import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "bc77907b0e11a419a6d57d1e95e42bea";
  let lat = props.coords.lat;
  let lon = props.coords.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-6">Friday</div>
            <div className="col-2">
              <WeatherIcon code="01d" size={36} />
            </div>
            <div className="col-4">
              <span className="temp-max">10°</span>|
              <span className="temp-min">5°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
