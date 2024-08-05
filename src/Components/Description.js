import React, {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom'
import './Description.css'
import {Button} from './Button'



const Description = (props) => {
    
    const location = useLocation();
    const [galleryName, setGalleryName] = useState("");

    useEffect(() => {
        //console.log("location: ", location)
        if(location.pathname === "/galleryOne"){
            setGalleryName("slider1image0");
        }else if(location.pathname === "/galleryTwo"){
            setGalleryName("slider2image0");
        }else if(location.pathname === "/galleryThree"){
            setGalleryName("slider3image0");
        }else{
            setGalleryName("slider4image0");
        }
      
    }, [location])

    var imageTitle = galleryName + ".title";
    var imageFormat = galleryName + ".format";
    var imageDimensions= galleryName + ".dimensions";
    var imageYear= galleryName + ".year";
    
    var imageNumber;
    
    function replaceChar(str, index, char) {
        // first, convert the string to an array
        const array = str.split('');
      
        // then, replace the character at the specified index
        array[index] = char;
      
        // finally, convert the array back to a string
        return array.join('');
      }
    

    if(props.current > 0)
    {
        imageNumber = (props.current).toString();
        imageTitle = replaceChar(imageTitle, 12, imageNumber);
        imageFormat = replaceChar(imageFormat, 12, imageNumber);
        imageDimensions= replaceChar(imageDimensions, 12, imageNumber);
        imageYear= replaceChar(imageYear, 12, imageNumber);
    }
    
    
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    
    
    //console.log("definition_hook: ",  props.current);

    return (
        <div id='imgDescription' className='child-two'>
            <div className= 'language-bttns'>
                    <Button buttonStyle="btn--outline" buttonSize="btn--small" onClick={()=>handleChangeLanguage("en")}>EN</Button>
                    <Button buttonStyle="btn--outline" buttonSize="btn--small" onClick={()=>handleChangeLanguage("es")}>ES</Button>
                    <Button buttonStyle="btn--outline" buttonSize="btn--small" onClick={()=>handleChangeLanguage("fr")}>FR</Button>    
            </div>
            <div className ='title'>
                <h1>{t(imageTitle)}</h1> 
            </div>
            <div className ='format'>
                <h1>{t(imageFormat)}</h1> 
            </div>
            <div className ='dimensions'>
                <h1>{t(imageDimensions)}</h1> 
            </div>
            <div className ='year'>
                <h1>{t(imageYear)}</h1> 
            </div>
        </div>
    )
}

export default Description
