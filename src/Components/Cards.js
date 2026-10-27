import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div id='gallery' className='cards'>
        <h1>Galerie</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
             <ul className='cards__items'>
                <CardItem 
                  src= "Dibujos/libertad(1).jpg"
                  text= "Mains"
                  path='/galleryOne'
                />
                <CardItem 
                  src= "Dibujos/ensoi2.jpg"
                  text= "Corps"
                  path='/galleryFive'
                />
                <CardItem 
                    src= "Dibujos/frijoles.JPG"
                    text= "Pastels"
                    path='/galleryFour'
                />
             </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
