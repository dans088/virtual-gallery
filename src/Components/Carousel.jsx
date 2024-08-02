import React, {useState} from 'react';
import "./Carousel.css";
import Zoom from './Zoom';
import { Link } from 'react-router-dom';
import Description from'./Description';



const Carousel = ({ data }) => {
    
    const [current, setCurrent] = useState(0);
    //zoom hook
    const [isZoom, setIsZoom] = useState(false);

    //swipe hooks
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    

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


    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance + 50
    const isRightSwipe = distance < -minSwipeDistance + 50
    if (isLeftSwipe){
        console.log('swipe', isLeftSwipe ? 'left' : 'right')
        prevSlide();
    }else{
        nextSlide();
        console.log('swipe', isRightSwipe ? 'left' : 'right')
    }

    }

   
    //location.pathname.match(/gallery/)

    return (
        <div className='slider' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            
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