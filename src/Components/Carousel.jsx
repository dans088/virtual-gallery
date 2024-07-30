import React, {useState} from 'react';
import "./Carousel.css";
import Zoom from './Zoom';
import { Link } from 'react-router-dom';
import Description from'./Description';



const Carousel = ({ data }) => {
    
    const [current, setCurrent] = useState(0);
    //zoom hook
    const [isZoom, setIsZoom] = useState(false);
    

    const length = data.length;

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1);
    };

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1);
    };



    if (!Array.isArray(data) || length <= 0) {
        return null;
    }

   
    //location.pathname.match(/gallery/)

    return (
        <div className='slider'>
            
            {!isZoom && (
                <>
                <Link to ='/' className='back-btn'>
                    <i class="fa-solid fa-house"></i>
                </Link>

                <div className='left-arrow' onClick={prevSlide}>
                    <i class="fa fa-circle" aria-hidden="true"></i>
                </div>
                
                <div className='right-arrow' onClick={nextSlide}>
                    <i class="fa fa-circle" aria-hidden="true"></i> 
                </div>
                </>
            )}
            {data.map((slide, index) => {
                return (
                
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <>
                                <Zoom src= {slide.image} alt={slide.alt} isZoom={isZoom} setIsZoom={setIsZoom}/>
                                <Description current={current}/>
                            </>
                        )}
                    </div>

                );
            })}
            
        </div>
    );
};

export default Carousel;