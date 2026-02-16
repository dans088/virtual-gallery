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
                  src= "Dibujos/sombrero.JPEG"
                  text= "Crayon"
                  path='/galleryTwo'
                />
                <CardItem 
                  src= "Dibujos/Chess.jpg"
                  text= "Noir et blanc"
                  path='/gallerySix'
                />
             </ul>
             <ul className='cards__items'>
                <CardItem 
                  src= "Dibujos/red-mask.jpg"
                  text= "Portraits"
                  path='/galleryThree'
                />

                <CardItem 
                    src= "Dibujos/frijoles.JPG"
                    text= "Pastels"
                    path='/galleryFour'
                />
              
                <CardItem 
                  src= "Dibujos/ensoi2.jpg"
                  text= "Corps"
                  path='/galleryFive'
              />
             </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
