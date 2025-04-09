import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div id='gallery' className='cards'>
        <h1>Gallery</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
             <ul className='cards__items'>
                <CardItem 
                  src= "Dibujos/libertad(1).jpg"
                  text= "Touch"
                  path='/galleryOne'
                />
                <CardItem 
                  src= "Dibujos/sombrero.JPEG"
                  text= "The Tragedy of Culture"
                  path='/galleryTwo'
                />
                <CardItem 
                  src= "Dibujos/Chess.jpg"
                  text= "Black and White"
                  path='/gallerySix'
                />
             </ul>
             <ul className='cards__items'>
                <CardItem 
                  src= "Dibujos/red-mask.jpg"
                  text= "Faces"
                  path='/galleryThree'
                />

                <CardItem 
                    src= "Dibujos/frijoles.JPG"
                    text= "Color"
                    path='/galleryFour'
                />
              
                <CardItem 
                  src= "Dibujos/En-soi.jpg"
                  text= "The Body"
                  path='/galleryFive'
              />
             </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
