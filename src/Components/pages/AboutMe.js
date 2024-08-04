import React from 'react'
import './AboutMe.css'
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import '../Navbar'

export default function AboutMe(){

    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (

    <div id = 'aboutMe'className='about'>
        <h1>How it works</h1>
        <div className='text-container'>
            <div className= 'lang-box'>
                <Button buttonStyle="btn--outline" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("en")}>EN</Button>
                <Button buttonStyle="btn--outline" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("es")}>ES</Button>
                <Button buttonStyle="btn--outline" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("fr")}>FR</Button>
            </div>
            <div style ={{whiteSpace: "pre-wrap"}}className='text__wrapper'>
                <p>{t("aboutMe.message")}</p>
            </div>
        </div>
    </div>

    );
}