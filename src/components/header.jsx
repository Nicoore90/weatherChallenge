import { useState } from 'react'
import './header.css'



export function Header() {
    const [ language,setLanguage ] = useState(true)
    
    if (language==true){
        return(<div className="header_esp"><button onClick={() => setLanguage(!language)}>Español</button></div>)
    } {
        return(<div className="header_esp"><button onClick={() => setLanguage(!language)}>English</button></div>)
    }
    
    /*return(
        <>
            {language ? "True" : "False"}
                <div className="header_esp"><a onClick={() => setLanguage(!language)}>Español</a></div>
                <div className="header_eng"><a>English</a></div>
                ;
        </>
    )*/
}

