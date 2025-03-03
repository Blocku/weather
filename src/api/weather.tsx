async function weatherApi(city: string, setWeather: Function, setLoading: Function) {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_WEATHER_KEY}`)
    .then(res => res.json())
    .then(res => (setWeather(res), setLoading(false)))
    .catch(() =>{
        console.log(`Error ${city}`)
    })
}

export default weatherApi