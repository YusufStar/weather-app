const url = "https://api.openweathermap.org/data/2.5/"
const apikey = "84c05e93b5c3a4134c3f321d118a5357"
var icon = document.getElementsByClassName("img")


async function fetchText() {
    let ipurl = "https://ipinfo.io/json?token=68dd71c1eba45f";
    let response = await fetch(ipurl);
    let data = await response.json();
    getResult(data.city)
} fetchText()

const setQuery = (e) => {
    if(e.keyCode == '13'){
        getResult(searchbar.value)
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${apikey}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayresult)
}

const button = document.getElementById("button")
button.addEventListener("click", () => {
    getResult(searchbar.value)
})

const displayresult = (result) => {
    console.log(result)
    document.getElementById("time").innerHTML = new Date().toDateString()
    document.getElementById("city").innerHTML = `${result.name}, ${result.sys.country}`
    document.getElementById("temp").innerHTML = `${Math.round(result.main.temp)}°`
    document.getElementById("weather").innerHTML = result.weather[0].description
    document.getElementById("cloud").innerHTML = `${result.clouds.all}%`
    document.getElementById("humidity").innerHTML = `${result.main.humidity}%`
    document.getElementById("wind").innerHTML = `${Math.round(result.wind.speed)}km/h`
    icon[0].src = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`
}

const searchbar = document.getElementById("searchBar")
searchbar.addEventListener("keypress", setQuery)