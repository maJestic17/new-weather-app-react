import './App.css';
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Daria Sukhacheva and is {""}
      <a href="https://github.com/maJestic17/new-weather-app-react"
      target="_blank" rel="noreferrer">
        open-sourced on GitHub 
      </a> and is {""} <a href="https://kind-joliot-d69c4c.netlify.app"
      target="_blank" rel="noreferrer">
        hosted on Netlify
      </a>
      </footer>
      </div>
    </div>
  )
}

