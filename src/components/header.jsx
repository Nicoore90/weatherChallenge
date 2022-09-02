import { useState } from 'react'
import './header.css'
import { Weather } from './weather'



export function Header() {
    const [ language,setLanguage ] = useState(true)
    
    if (language==true){
        return(<><div className="header_esp"><button onClick={() => setLanguage(!language)}>Español</button></div>
        <Weather language={language} /></>)
    } {
        return(<><div className="header_esp"><button onClick={() => setLanguage(!language)}>English</button></div><Weather language={language} /></>)
    }
    <Weather language={language} />
    
    /*return(
        <>
            {language ? "True" : "False"}
                <div className="header_esp"><a onClick={() => setLanguage(!language)}>Español</a></div>
                <div className="header_eng"><a>English</a></div>
                ;
        </>
    )*/
}

