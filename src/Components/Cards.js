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
                  src= "Dibujos/Foi.jpg"
                  text= "Faith"
                  label= 'Reciprocity'
                  path='/galleryOne'
                />
                <CardItem 
                  src= "Dibujos/Un dos.jpg"
                  text= "Syncategorematics"
                  label= 'Pieces'
                  path='/galleryTwo'
                />
             </ul>
             <ul className='cards__items'>
              <CardItem 
                  src= "Dibujos/Source.jpg"
                  text= "Limits"
                  label= 'The Source'
                  path='/galleryThree'
                />
              <CardItem 
                  src= "Dibujos/En-soi.jpg"
                  text= "Body"
                  label= 'Core'
                  path='/galleryFour'
              />
             </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
