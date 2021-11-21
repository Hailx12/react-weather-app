import React from "react";
import FormattedDate from "./FormattedDate";

export default function weatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h1>{props.data.city}</h1>
      <ul className="current-weather">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt={props.data.description} width="65" />
          <span className="current-temp">
            {Math.round(props.data.temperature)}{" "}
          </span>
          <span className="temp-unit">°C</span>
        </div>
        <div className="col-6">
          <ul className="parameters">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
