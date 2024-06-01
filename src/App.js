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
            and is open-sourced on GitHub and hosted on Netlify.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
