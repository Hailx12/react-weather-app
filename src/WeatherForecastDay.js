import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="card">
        <div className="card-body">
          <div className="row"></div>
          <div className="col-6">{day()}</div>
          <div className="col-2">
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
          </div>
          <div className="col-4">
            <span className="temp-max">{maxTemp()}</span>|
            <span className="temp-min">{minTemp()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
