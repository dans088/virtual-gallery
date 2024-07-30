import React from 'react'



const Zoom = (props) => {


    const toggleZoom = () =>{
        props.setIsZoom(!props.isZoom);
    };



    return (
        <div
          className={props.isZoom && 'image-zoom'} 
          onClick={toggleZoom}
        >
            <img src= {props.src} alt='drawing'  className={props.alt === 'large-horizontal' ? 'image-large-horizontal' : 'image-large-vertical'}/>
            
        </div>
    )
    }



export default Zoom
