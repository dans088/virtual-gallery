import React from 'react'
import './HowItWorks.css'
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import '../Navbar';

export default function HowItWorks(){

    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    //convert json data into DOM object
    const myJSON = JSON.stringify(t("HowItWorks.message1"));
    const stringWithoutQuotes1 = myJSON.replace(/"/g, '');

    const myJSON2 = JSON.stringify(t("HowItWorks.message2"));
    const stringWithoutQuotes2 = myJSON2.replace(/"/g, '');

    return (

    <div id = 'aboutMe'className='about'>
        <h1>What is a drawing?</h1>
        <div className= 'lang-box-me'>
                <Button buttonStyle="btn--outline-2" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("en")}>EN</Button>
                <Button buttonStyle="btn--outline-2" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("es")}>ES</Button>
                <Button buttonStyle="btn--outline-2" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("fr")}>FR</Button>
        </div>
        <div className='text-container'>
            <div style ={{whiteSpace: "pre-wrap"}}className='text__wrapper'>
                <p dangerouslySetInnerHTML = {{__html: stringWithoutQuotes1}}></p>
                <div class = "row">
                    <div class = "column">
                        <img src="Dibujos/no-knot.jpg" alt="Knot" style={{width:"80%"}}/>
                        <figcaption class = "first-image" style={{fontSize:"15px"}}> <em>Figure 1</em> </figcaption>
                    </div>
                    <div class = "column">
                        <img src="Dibujos/knot.jpg" alt="Not" style={{width:"85%"}}/>
                        <figcaption style={{fontSize:"15px"}}> <em>Figure 2</em> </figcaption>
                    </div>
                </div>
                <p dangerouslySetInnerHTML = {{__html: stringWithoutQuotes2}}></p>
            </div>
        </div>
    </div>

    );
}