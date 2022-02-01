import  Data  from "./config.js";
import {createDay} from "./createDay.js";
const submitButton = document.getElementById("submit")
const submitInput = document.getElementById("cityInput");
const container = document.getElementById("container");

const getLatLong = () => {
    let userInput = submitInput.value
    container.innerHTML="";
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&appid=' + Data.key)
    .then(response => response.json())
    .then(data => {

        let nameValue = data['city']['name']
        const span = document.getElementById("currentCity")
        span.innerHTML = nameValue;
            
        let lat = data["city"]["coord"].lat;
        let lon = data["city"]["coord"].lon;

    getData(lat, lon)
        

    })
    .catch(err => alert("Sorry can't seem to find that city, would you like to try again?")) 
}

const getData = (lat, lon) => {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=metric&appid=" + Data.key )
        .then(response => response.json())
        .then(data => { 
            let weatherData = data.daily;
            console.log(weatherData);
            for (let i = 0; i < 5; i++) {
                createDay (weatherData, i)
                
            }    
        })
    
}

submitButton.addEventListener("click", getLatLong);

submitInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
     getLatLong()
     }

});





