const getNameDay = (weekDays) =>{
    const names = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    return names[weekDays.getDay()]
}

const getNameMonth = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[date.getMonth()]
}

const createDay = (weatherData,i) => {
    
    const unixtime = weatherData[i].dt;
    const daydate = new Date(unixtime * 1000);
    const iconid = weatherData[i].weather[0].icon;
    const iconurl = "http://openweathermap.org/img/wn/" + iconid + "@2x.png";
    const temp = Math.round(weatherData[i].temp.day) + "°C";
    const des = weatherData[i].weather[0].description;

    const section = document.createElement('section');
    section.classList = "card";


    const header = document.createElement('div');
    header.classList = "card-header";

    const dayName = document.createElement("h2")
    const date = document.createElement("h3");

    const dayInMonth = document.createElement("span")
    const month = document.createElement("span")



    dayName.innerText = getNameDay(daydate);
    dayInMonth.innerText = daydate.getDate() ;
    month.innerText = getNameMonth(daydate);


    const img = document.createElement("img");
    img.setAttribute("src", iconurl);

    const desEl = document.createElement("p");
    desEl.innerHTML = des;
    
    const tempP = document.createElement("p");
    tempP.className = "temp";
    tempP.innerText = temp


    container.appendChild(section);
    section.append(header, img, desEl, tempP);
    header.append(dayName, date);
    date.append(dayInMonth, month)
}
export {createDay}