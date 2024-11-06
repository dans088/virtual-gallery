import React from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {useGesture} from 'react-use-gesture';
import { useRef, useState } from 'react';



const Zoom = (props) => {


    const toggleZoom = () =>{
        props.setIsZoom(!props.isZoom);
    };

    
    let [crop, setCrop] = useState({ x: 0, y: 0, scale: 0.35 });
    let ref = useRef();
    
    useGesture(
        {
            onDrag: ({ offset: [dx, dy] }) => {
                setCrop((crop) => ({ ...crop, x: dx, y: dy }));
            },
            onPinch: ({ offset: [d] }) => {
                setCrop((crop) => ({ ...crop, scale: 1 + d / 50 }));
            },
            
        },
        {
            domTarget: ref,
            eventOptions: {passive: false}
        } 
    
    );
    
    
    



    return (
        <div
          className={props.isZoom && 'image-zoom'} 
          onClick={toggleZoom}
        >
            {props.isZoom ? 
            <TransformWrapper>
                <TransformComponent>
                   
                        <img style={{touchAction: "none"}} src= {props.src} alt='drawing' className={props.alt}/>
                    
                </TransformComponent>
            </TransformWrapper>
            :
                
                        <img src= {props.src}  ref={ref} style={{left: crop.x, right: crop.y}} alt='drawing'  className={props.alt}/>
                
                
            }
        </div>
    )
    }



export default Zoom
