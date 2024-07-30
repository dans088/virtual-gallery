import React from 'react'
import './AboutMe.css'
import '../../App.css'
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';

export default function AboutMe(){

    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (

    <div id = 'aboutMe'className='about'>
        <h1>How it works</h1>
        <div className='text-container'>
            <div className= 'language-bttns'>
                <Button onClick={()=>handleChangeLanguage("en")}>EN</Button>
                <Button onClick={()=>handleChangeLanguage("es")}>ES</Button>
                <Button onClick={()=>handleChangeLanguage("fr")}>FR</Button>
            </div>
            <div style ={{whiteSpace: "pre-wrap"}}className='text-wrapper'>
                <p>{t("aboutMe.message")}</p>
            </div>
        </div>
    </div>

    );
}