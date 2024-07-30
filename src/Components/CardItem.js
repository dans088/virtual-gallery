import { Link } from "react-router-dom";
import React from 'react';
//import {Image} from 'react-native';

/*
function resizeImg(img_src){
    <Image>
        source = {img_src}
        style = {{width: 50}}
    </Image>
};
*/   

function CardItem(props) {
    


    return (
        <>
         <li className="cards__item">
            <Link className="cards__item__link" to={props.path}>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src= {props.src} alt="drawing"
                    className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                </div>
            </Link>
         </li>
        </>
    );
}

export default CardItem;