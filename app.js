const url = "https://api.openweathermap.org/data/2.5/"
const apikey = "84c05e93b5c3a4134c3f321d118a5357"

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

const displayresult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description


    let minmax = document.querySelector(".minmax")
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

const searchbar = document.getElementById("searchBar")
searchbar.addEventListener("keypress", setQuery)