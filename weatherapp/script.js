
    const apikey = "446ab67f36ff073eeb1fb1793b5e44e6";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchbox = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");
    const weathericon=document.querySelector(".weather-icon");
    const h_text="Humidity";
    const w_text="Wind";
    async function checkweather(city) {
            const response = await fetch(apiurl + city + `&appid=${apikey}`);
            const val = await response.json();
            console.log(val);
            
            document.querySelector(".city").innerHTML = val.name;
            document.querySelector(".temp").innerHTML = Math.round(val.main.temp) + "°C";
            document.querySelector(".humid").innerHTML = val.main.humidity + "%\n"+h_text;
            document.querySelector(".wind").innerHTML = val.wind.speed + "km/h\n"+w_text;
            if(val.weather[0].main=="Clouds")
                weathericon.src="./images/clouds.png";
            else if(val.weather[0].main=="Drizzle")
                weathericon.src="./images/drizzle.png";
            else if(val.weather[0].main=="Clear")
                weathericon.src="./images/clear.png";
            else if(val.weather[0].main=="Rain")
                weathericon.src="./images/rain.png";
            else if(val.weather[0].main=="Snow")
                weathericon.src="./images/snow.png";
            else if(val.weather[0].main=="Mist")
                weathericon.src="./images/mist.png";
    }
    searchbtn.addEventListener("click", () => {
        checkweather(searchbox.value);
    });
