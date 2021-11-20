import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        Weather App
        <Weather />
        <footer>
          <a
            href="https://github.com/Hailx12/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Sohaily Kerpens
        </footer>
      </div>
    </div>
  );
}

export default App;
