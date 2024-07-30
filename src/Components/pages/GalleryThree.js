import React from 'react'
import Carousel from '../Carousel'
import './Gallery.css';
import {SliderData} from '../../Data/SliderData_3'
import {useState, useEffect} from 'react';
import Description from '../Description';


export default function GalleryThree(){


    const [offset, setOffset] = useState(0);

    useEffect(()=> {
        window.scroll(0,0);
    }, []);
    
   
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
        if(window.innerWidth <= 500)
        {
            if(offset > 15)
            {
                elem.classList.add("active");
            }else{
                elem.classList.remove("active");
            }
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