import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <div className="footer">
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/aqiyla"
              target="_blank"
              rel="noreferrer"
            >
              Aqiyla McLean
            </a>{" "}
            on{" "}
            <a
              href="https://github.com/aqiyla/weather-app-react-hw"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://spiffy-gumdrop-5d0553.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify.{" "}
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
