function WeatherInfo(props: any){
    return(
        <div className="h-max w-full flex flex-col justify-center items-center" >
            <div className="flex flex-col space-y-1">
                <span className="text-6xl font-medium flex" >{Math.ceil(props.weather.main.temp - 273.15)}
                    <span className="text-2xl " >°С</span>
                </span>

                <span className="text-base font-medium" >
                    {props.weather.weather[0].main}
                </span>
            </div>
        </div>
    )
}
export default WeatherInfo