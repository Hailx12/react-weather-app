import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
