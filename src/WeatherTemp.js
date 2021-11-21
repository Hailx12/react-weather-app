import React from "react";

export default function WeatherTemp(props) {
  return (
    <span className="WeatherTemp">
      <span className="current-temp">{Math.round(props.celsius)} </span>
      <span className="temp-unit">°C</span>
    </span>
  );
}
