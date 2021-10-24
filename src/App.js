import './App.css';
import './WeatherForecast.css';
import './Weather.css';
import React from "react";
import Weather from "./Weather";
import FormattedDate from './FormattedDate';


export default function App() {
  let time = FormattedDate
function background() {       
       if (time >= 5 && time < 8) {
           return ("App sunrise")
        } else {
            if (time >= 8 && time < 12) {
                return ("App morning")
            } else { 
            if (time >= 12 && time < 18) {
                return ("App afternoon")
            } else { 
                if (time >= 18 && time < 20) {
                    return ("App sunset")
                } else {
                    return ("App night")
                }
            }
        } 
    }
}
  return ( 
    <div className="App">
      <div className={background()}>
      <div className="container">
      <Weather defaultCity="Los Angeles" />
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
    </div>
  )
}

