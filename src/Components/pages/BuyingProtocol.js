import React , {useEffect} from 'react';
import './BuyingProtocol.css'
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import '../Navbar';

export default function HowItWorks(){

    const [t, i18n] = useTranslation("global");

    //Set default language to French on load
    useEffect(() => {
        i18n.changeLanguage("fr");
    }, [i18n]);

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    //convert json data into DOM object
    const myJSON = JSON.stringify(t("BuyingProtocol.message1"));
    const stringWithoutQuotes1 = myJSON.replace(/"/g, '');

    return (

    <div id = 'aboutMe'className='about'>
        <h1>Acquérir un dessin</h1>
        <div className= 'lang-box-me'>
                <Button buttonStyle="btn--outline-2" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("en")}>EN</Button>
                <Button buttonStyle="btn--outline-2" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("es")}>ES</Button>
                <Button buttonStyle="btn--outline-2" buttonSize="btn--medium" onClick={()=>handleChangeLanguage("fr")}>FR</Button>
        </div>
        <div className='text-container'>
            <div style ={{whiteSpace: "pre-wrap"}}className='text__wrapper'>
                <p dangerouslySetInnerHTML = {{__html: stringWithoutQuotes1}}></p>
            </div>
        </div>
    </div>

    );
}