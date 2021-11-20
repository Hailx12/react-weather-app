import React from "react";

import "./Weather.css";

export default function Weather() {
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

      <h1>Rotterdam</h1>
      <ul className="current-weather">
        <li>Saturday 16:31</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly cloudy"
            width="65"
          />
          <span className="current-temp">10 </span>
          <span className="temp-unit">°C</span>
        </div>
        <div className="col-6">
          <ul className="parameters">
            <li>Humidity: 84%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
