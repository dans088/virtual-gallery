import React, {useEffect, useState} from 'react';
import '../App.css';
import {Button} from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';



function HeroSection() {

    const [video, setVideo] = useState('videos/video.mp4');

    const loadVideo = () => {
      if (window.innerWidth <= 960) {
        setVideo('videos/Movie (2).mp4');
      } else {
        setVideo('videos/Movie.mp4');
      }
    };

    useEffect(() => {
      loadVideo();
    }, []);

    window.addEventListener('resize', loadVideo);

    return (
        <div id ="home" className='hero-container'>
        
          <video playsInline loop muted autoPlay
            src =  {video}
            type = "video/mp4"
            
          />
          
          
          <div className ="hero-btns">
          <Link to='/HowItWorks' className='btn-mobile'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                What is a drawing?
            </Button>
          </Link>
          </div>
        </div>
    )
}

export default HeroSection;