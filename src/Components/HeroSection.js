import React from 'react';
import '../App.css';
import {Button} from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';



function HeroSection() {
    return (
        <div id ="home" className='hero-container'>
          <video playsinline loop muted autoPlay
            src =  'videos/video.mp4'
            type = "video/mp4"
            controls = "false"
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