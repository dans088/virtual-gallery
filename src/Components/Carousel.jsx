import React, {useState} from 'react';
import "./Carousel.css";
import Zoom from './Zoom';
import { Link } from 'react-router-dom';
import Description from'./Description';




const Carousel = ({ data }) => {
    
    //slider hook
    const [current, setCurrent] = useState(0);
    //zoom hook
    const [isZoom, setIsZoom] = useState(false);

    //swipe hooks
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);
    
    
    const [touchStartY, setTouchStartY] = useState(null)
    const [touchEndY, setTouchEndY] = useState(null)
    

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
        setTouchEndX(null) // otherwise the swipe is fired even with usual touch events
        setTouchStartX(e.targetTouches[0].clientX)
        setTouchEndY(null)
        setTouchStartY(e.targetTouches[0].clientY)
    }

    function onTouchMove(e) {
        setTouchEndX(e.targetTouches[0].clientX)
        setTouchEndY(e.targetTouches[0].clientY)
    }

    function onTouchEnd() {
        if (touchStartX && touchEndX) swipeHorizontal()
    }

    const swipeHorizontal = () => {
 
        const xDistance = touchStartX - touchEndX
        const yDistance = touchStartY - touchEndY
        if (Math.abs(yDistance) >= Math.abs(xDistance)) {
            return;
        }

        let isLeftSwipe = xDistance > minSwipeDistance + 30
        let isRightSwipe = xDistance < -minSwipeDistance - 30


        if (isLeftSwipe > isRightSwipe){
            console.log('swipe to go right', isLeftSwipe ? 'left' : 'right')
            nextSlide();
            
        }else if(isRightSwipe > isLeftSwipe){
    
            console.log('swipe to go left', isRightSwipe ? 'right' : 'left')
            prevSlide();
            
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