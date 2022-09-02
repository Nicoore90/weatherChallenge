import { useState, useEffect } from "react"
import { lat, long } from "./main"
import { Main } from "./main"
import "./weather.css"

/*
let lat = 51
let long = 7*/



export function Weather(props) {

    
    const api = `https://api.openweathermap.org/data/3.0/onecall?lat=51&lon=0&units=metric&appid=94d76cede76928778bd75e39b3d98944`
    const [weather, setWeather] = useState()
    
 
    useEffect(() => {
        fetch(api)
        .then((res) => res.json())
        .then((data) => {
        setWeather(data)
        })
    }, [])

    function handleLondon() {
        /*lat=51
        long=7*/
        if (props.language) {
            fetch("https://api.openweathermap.org/data/3.0/onecall?lat=51&lon=0&units=metric&appid=94d76cede76928778bd75e39b3d98944")
            .then((response) => response.json())
            .then((weather) => {
                setWeather(weather)
            })} else {
                fetch("https://api.openweathermap.org/data/3.0/onecall?lat=51&lon=0&units=metric&lang=es&appid=94d76cede76928778bd75e39b3d98944")
                .then((response) => response.json())
                .then((weather) => {
                setWeather(weather)
            })
            }
    }

    function handleMadrid() {
        /*lat=40
        long=-3*/
        if (props.language){
            fetch("https://api.openweathermap.org/data/3.0/onecall?lat=40&lon=-3&units=metric&appid=94d76cede76928778bd75e39b3d98944")
            .then((response) => response.json())
            .then((weather) => {
                setWeather(weather)
            })} else {
                fetch("https://api.openweathermap.org/data/3.0/onecall?lat=40&lon=-3&units=metric&lang=es&appid=94d76cede76928778bd75e39b3d98944")
                .then((response) => response.json())
                .then((weather) => {
                setWeather(weather)
            })
            }
    }

    function handleRome() {
       /*lat=41
        long=12*/
        if (props.language) {
            fetch("https://api.openweathermap.org/data/3.0/onecall?lat=41&lon=12&units=metric&appid=94d76cede76928778bd75e39b3d98944")
            .then((response) => response.json())
            .then((weather) => {
                setWeather(weather)
        })} else {
            fetch("https://api.openweathermap.org/data/3.0/onecall?lat=41&lon=12&units=metric&lang=es&appid=94d76cede76928778bd75e39b3d98944")
            .then((response) => response.json())
            .then((weather) => {
                setWeather(weather)
        })}
    }

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
        {props.language ? (
            <>
            <button onClick={handleLondon}>London</button>
            <button onClick={handleMadrid}>Madrid</button>
            <button onClick={handleRome}>Rome</button>
            <div>
                {weather ? (
                    <div className='weather__container'>
                    <h1 className='timezone'>{weather.timezone}</h1>
                    <h2 className='temp'>{weather.current.temp}°C</h2>
                    <h3 className='weather'>{weather.current.weather[0].main}</h3>
                    <p className='description'>{weather.current.weather[0].description}</p>
                    </div>
                ) : <p>Cargando...</p> }
            </div> 
            </>) : (<>
            <button onClick={handleLondon}>Londres</button>
            <button onClick={handleMadrid}>Madrid</button>
            <button onClick={handleRome}>Roma</button>
            <div>
                {weather ? (
                    <div className='weather__container'>
                    <h1 className='timezone'>{weather.timezone}</h1>
                    <h2 className='temp'>{weather.current.temp}°C</h2>
                    <h3 className='weather'>{weather.current.weather[0].main}</h3>
                    <p className='description'>{weather.current.weather[0].description}</p>
                    </div>
                ) : <p>Cargando...</p> }
                </div></>)}
        </>
    )
}

