import { useState, useEffect } from "react"
import { lat, long } from "./main"
import { Main } from "./main"

/*
let lat = 51
let long = 7*/



export function Weather(props) {

    
    const api = `https://api.openweathermap.org/data/3.0/onecall?lat=${props.lat}&lon=${props.long}&units=metric&appid=94d76cede76928778bd75e39b3d98944`
    const [weather, setWeather] = useState()
    
 
    useEffect(() => {
        fetch(api)
        .then((res) => res.json())
        .then((data) => {
        setWeather(data)
        })
    }, [api])
    /*return(
    <>
        <h1>Aca va a ir la devolucion de la API</h1>
        <div>
        {weather ? (
            <div className='weather__container'>
            <h1 className='timezone'>{weather.timezone}</h1>
            <h2 className='temp'>{weather.current.temp}°C</h2>
            <h3 className='weather'>{weather.current.weather[0].main}</h3>
            <p className='description'>{weather.current.weather[0].description}</p>
            </div>
        ) : null}
        </div>
    </>)*/
    return(
        <>
        <div>
            {weather ? (
                <div className='weather__container'>
                <h1 className='timezone'>{weather.timezone}</h1>
                </div>
            ) : <p>Cargando...</p>}
        </div>
        </>
    )
}

