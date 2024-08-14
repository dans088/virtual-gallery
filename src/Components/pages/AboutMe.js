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

    return (

    <div id = 'aboutMe'className='aboutMe'>
        <h1>About Me</h1>
        <div className='image-text-container'>
            <div class='image-column'> 
                <img src= "me.jpg" alt="orangerie" />
            </div>
            <div class='text-column'>
            
                <div className= 'lang-box-me'>
                    <Button buttonStyle="btn--outline" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("en")}>EN</Button>
                    <Button buttonStyle="btn--outline" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("es")}>ES</Button>
                    <Button buttonStyle="btn--outline" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("fr")}>FR</Button>
                </div>
                <div style = {{whiteSpace: "pre-wrap"}}>
                    <p>{t("AboutMe.message")}</p>
                </div>
            </div>
            
        </div>
    </div>

    );
}