import React from 'react'
import './AboutMe.css'
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import '../Navbar';

export default function AboutMe(){

    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    

    //first text column
    const myJSON = JSON.stringify(t("AboutMe.message1"));
    const stringWithoutQuotes1 = myJSON.replace(/"/g, '');
    
    //second text column
    const myJSON2 = JSON.stringify(t("AboutMe.message2"));
    const stringWithoutQuotes2 = myJSON2.replace(/"/g, '');
    //<img src="me.jpg" alt="orangerie"></img>
    return (

    <div id = 'aboutMe'className='aboutMe'>
        <h1>About Me</h1>
        
        <div className= 'lang-box-me'>
                    <Button buttonStyle="btn--outline-2" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("en")}>EN</Button>
                    <Button buttonStyle="btn--outline-2" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("es")}>ES</Button>
                    <Button buttonStyle="btn--outline-2" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("fr")}>FR</Button>
        </div>
        <div className='text-image-container'>
            <div class='first-column'> 
                <p dangerouslySetInnerHTML = {{__html: stringWithoutQuotes1}}></p>
            </div>
            <div class='second-column'>
                <p dangerouslySetInnerHTML = {{__html: stringWithoutQuotes2}}></p>
            </div>
        </div>
    </div>

    );
}