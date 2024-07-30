import React from 'react';
import '../App.css';
import {Button} from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';


document.addEventListener('DOMContentLoaded', function () {
  var videoElements = document.querySelectorAll('video');

  videoElements.forEach(function(videoElement) {
    videoElement.controls = false;

    videoElement.addEventListener('play', function () {
      this.controls = false;
    });

    videoElement.addEventListener('pause', function () {
      this.controls = false;
    });
  });
});


function HeroSection() {
    return (
        <div className='hero-container'>
          <video autoPlay loop muted
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