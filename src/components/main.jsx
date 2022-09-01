import './main.css'
//import { handleLondon, handleMadrid, handleRome } from '../eventHandler'
import { Weather } from './weather'
import {Header} from './header'
import { useState } from 'react'


export function Main() {
    let lat = 51
    let long = 7
    /*const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)

    function handleLondon() {
        setLat(51)
        setLong(7)
        console.log(lat)
        console.log(long)
        
    }
    
    function handleMadrid() {
        setLat(40)
        setLong(-3)
        console.log(lat)
        console.log(long)
    }
    
    function handleRome() {
        setLat(41)
        setLong(12)
        console.log(lat)
        console.log(long)
    }*/

    function handleLondon() {
        lat=51
        long=7
    }

    function handleMadrid() {
        lat=40
        long=-3
    }

    function handleRome() {
        lat=41
        long=12
    }

    return(
        <>
            <button onClick={handleLondon()}>London</button>
            <button onClick={handleMadrid()}>Madrid</button>
            <button onClick={handleRome()}>Rome</button>
            <Weather lat={lat} long={long}/>
        </>
    )

    /*return(
    <>
        <Header />
        {language ? (
            <>
                <button onClick={handleLondon()}>London</button>
                <button onClick={handleMadrid()}>Madrid</button>
                <button onClick={handleRome()}>Rome</button>
            </>
        ) : (
            <>
                <button onClick={handleLondon()}>Londres</button>
                <button onClick={handleMadrid()}>Madrid</button>
                <button onClick={handleRome()}>Roma</button>
            </>
        )}
    
    </>)*/
    return(
        <>
            <button onClick={handleLondon}>London</button>
            <button onClick={handleMadrid}>Madrid</button>
            <button onClick={handleRome}>Rome</button>
        </>
    )
}