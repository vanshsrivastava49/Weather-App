
const apikey = "446ab67f36ff073eeb1fb1793b5e44e6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
async function checkweather(city) {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        const data = await response.json();
        console.log(data);
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humid").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if(data.main.weather[0]=="Clouds")
            weathericon.src="images/clouds/png";
        else if(data.main.weather[0]=="Drizzle")
            weathericon.src="images/drizzle/png";
        else if(data.main.weather[0]=="Clear")
            weathericon.src="images/clear/png";
        else if(data.main.weather[0]=="Rain")
            weathericon.src="images/rain/png";
        else if(data.main.weather[0]=="Snow")
            weathericon.src="images/snow/png";
        else if(data.main.weather[0]=="Mist")
            weathericon.src="images/mist/png";
}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});
