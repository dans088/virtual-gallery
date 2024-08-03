import React from 'react';
import '../App.css';
import {Button} from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import UserBrowserDetection from './UserBrowserDetection';


function HeroSection() {

    const browser = UserBrowserDetection();
    console.log("browser: ", browser);

    return (
        <div id ="home" className='hero-container'>
        
          <video playsInline loop muted autoPlay
            src =  'videos/video.mp4'
            type = "video/mp4"
            
          />
          
          <p> Read images as they unfold</p>
          <div className ="hero-btns">
          <Link to='/aboutMe' className='btn-mobile'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                HOW IT WORKS 
            </Button>
          </Link>
          </div>
        </div>
    )
}

export default HeroSection;