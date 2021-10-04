import './App.css';
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by Daria Sukhacheva and is {""}
      <a href="https://github.com/maJestic17/new-weather-app-react"
      target="_blank" rel="noreferrer">
        open-sourced on GitHub
      </a>
      </footer>
      </div>
    </div>
  )
}

