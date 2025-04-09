import React from 'react'
import {useState} from 'react'
import Images from './Images.tsx'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css";
import {
    Captions, 
    Download, 
    Fullscreen,
    Zoom
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';



export default function Grid(props){


    //const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(-1)
    
    return (
    
    <>  
        

        <Images data={props.slides} onClick={(currentIndex) => setIndex(currentIndex)} />

        <Lightbox
         plugins={[Captions, Download, Fullscreen, Zoom]}
         captions={{
            showToggle: true,
            descriptionTextAlign: 'end',
         }}
         index={index}
         open={index >= 0}
         close={() => setIndex(-1)}
         slides={props.slides} 
         
         />    
    </>

       
    );

}
