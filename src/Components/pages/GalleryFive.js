/*
import React from 'react'
import Carousel from '../Carousel'
import './Gallery.css';
import {SliderData} from '../../Data/SliderData_5'
import {useState, useEffect} from 'react';
import Description from '../Description';

export default function GalleryFive(props){


    const [offset, setOffset] = useState(0);

    
   
    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);
    

    useEffect(() => {
        
        const elem = document.getElementById("imgDescription");
        if(offset > 70){
            elem.classList.add("active");
        }else {
            elem.classList.remove("active");
        }
        
    }, [offset]);





    return (
    
    <div className='gallery-container' >

        <div id= 'slider' className='child-one'>
            <Carousel data = {SliderData} />
        </div>
        
        <div id='imgDescription' className='child-two'>
            <Description/>
        </div>
        
    </div>

       
    );

}

*/

import React from 'react'
import Grid from '../Grid'
import {slides} from '../../Data/Slides5.ts'
import './Gallery.css'



export default function GalleryFive(){

    return (
    
        <div style={{border:"80px solid #fcf7f6", height:"5000px", width:"100vw", backgroundColor:"#fcf7f6"}}>
            <Grid
            slides = {slides}
            />
        </div>
    
           
    );

}