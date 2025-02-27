async function weatherApi(city: string, setWeather: Function) {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_WEATHER_KEY}`)
    .then(res => res.json())
    .then(res => (setWeather(res), console.log(res)))
    .catch(() =>{
        console.log(`${city}`)
    })
}

export default weatherApi