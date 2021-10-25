import './App.css';
import './WeatherForecast.css';
import './Weather.css';
import React from "react";
import Weather from "./Weather";



export default function App() {
  let time = new Date();
  console.log(time);
function background() {       
       if (time.getHours() >= 5 && time.getHours() < 8) {
           return ("App sunrise")
        } else {
            if (time.getHours() >= 8 && time.getHours() < 12) {
                return ("App morning")
            } else { 
            if (time.getHours() >= 12 && time.getHours() < 18) {
                return ("App afternoon")
            } else { 
                if (time.getHours() >= 18 && time.getHours() < 20) {
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

