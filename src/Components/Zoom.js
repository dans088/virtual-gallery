import React from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const Zoom = (props) => {


    const toggleZoom = () =>{
        props.setIsZoom(!props.isZoom);
    };



    return (
        <div
          className={props.isZoom && 'image-zoom'} 
          onClick={toggleZoom}
        >
            {props.isZoom ? 
            <TransformWrapper>
                <TransformComponent>
                   
                        <img src= {props.src} alt='drawing'  className={props.alt === 'large-horizontal' ? 'image-large-horizontal' : 'image-large-vertical'}/>
                    
                </TransformComponent>
            </TransformWrapper>
            :
                <>
                {props.src === 'Dibujos/Sabotaje.jpg' && window.innerWidth > 1024 ? 
                    <img src= {props.src} alt='drawing' style={{transform:"scale(27%, 28%)"}}/>

                :
                    <img src= {props.src} alt='drawing'  className={props.alt === 'large-horizontal' ? 'image-large-horizontal' : 'image-large-vertical'}/>
                }
                </>
            }
        </div>
    )
    }



export default Zoom
