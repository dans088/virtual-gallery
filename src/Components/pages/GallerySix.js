import React from 'react'
import Grid from '../Grid'
import {slides} from '../../Data/Slides6.ts'
import './Gallery.css'



export default function GallerySix(){

    return (
    
        <div style={{border:"80px solid #fcf7f6", height:"5000px", width:"100vw", backgroundColor:"#fcf7f6"}}>
            <Grid
            slides = {slides}
            />
        </div>
    
           
    );

}