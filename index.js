let button = document.querySelector('#btn')
const apiKey = "db70a4c0a67b7b278f977ca5d9e51dae";
let cityTitle = document.querySelector('.city')
let temperature = document.querySelector('.temperature')
let icon = document.querySelector('.icon')
let description = document.querySelector('.description')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')
let input = document.querySelector('#search-bar')

button.addEventListener('click', (e) =>{
    e.preventDefault()
    getCity()
})

function getCity(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                cityTitle.textContent = `Weather in ${data.name}`
                temperature.textContent = `${data.main.temp}°C`
                description.textContent = data.weather[0].description
                humidity.textContent = `Humidity: ${data.main.humidity}%`
                wind.textContent = `Wind speed: ${data.wind.speed} m/s`
            })
.catch((err) => alert("Wrong City Name"))
}


// button.addEventListener('click', (e) =>{
//     e.preventDefault()
//     displayWeather()
// })    
        
// function displayWeather (){
    
//                 // if(input.value == city){
//                     cityTitle.textContent = data.name
//                     temperature.textContent = data.main.temp
//                     icon.value = data.weather.icon
//                     description.textContent = data.weather.description
//                     humidity.textContent = data.main.humidity
//                     wind.textContent = data.wind.speed
//     // }
// } 
