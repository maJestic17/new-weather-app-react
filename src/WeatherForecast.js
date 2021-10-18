import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay"
import "./WeatherForecast.css"
import axios from "axios";
export default function WeatherForecast(props){
let [loaded, setloaded] = useState(false);
let [forecast, setForecast] = useState(null);  

useEffect(() => {
setloaded(false);
}, [props.coordinates]);

function load(){
    let apiKey = "78077238f4ea41548bb4d14fbbe9813d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);    
}
function handleResponse(response){
    setForecast(response.data.daily);
    setloaded(true);
}
if (loaded){
        return(
<div className="WeatherForecast">
<div className="row">

{forecast.map(function(dailyForecast, index) {
if (index <5){        
return (
<div className="col" key={index}>          
<WeatherForecastDay data={dailyForecast} />
</div>
);
} else {
    return null;
}    
})}
</div>
</div>
);
}else{
load ()
return null; 
}
}