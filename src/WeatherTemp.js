import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemp">
        <span className="current-temp">{Math.round(props.celsius)} </span>
        <span className="temp-unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemp">
        <span className="current-temp">{Math.round(fahrenheit())} </span>
        <span className="temp-unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </span>
    );
  }
}
