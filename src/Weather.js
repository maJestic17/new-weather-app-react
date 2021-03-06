import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import axios from "axios";



export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);
function handleResponse(response){
    setWeatherData({
    ready:true,
    coordinates: response.data.coord,    
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date:new Date(response.data.dt*1000),
    wind:response.data.wind.speed,
    description:response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    city: response.data.name
    
}); 
}

function search(){
    const apiKey = "78077238f4ea41548bb4d14fbbe9813d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
}
function handleSubmit(event){
   event.preventDefault(); 
   search();
}
function handleCityChange(event){
setCity(event.target.value);
}



if (weatherData.ready){
   return (
       <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-xs-8 col-9">
            <input type="search" placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
            />
            </div>
             <div className="col-xs-4 col-3">
            <input type="submit" value="Search" className="btn btn-primary btn-block" />
            </div>
            </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates}/>
</div>
        );
   } else{
    search();
    return "Loading...";
   } 
}
