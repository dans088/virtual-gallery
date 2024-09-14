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
                  text= "Reciprocity"
                  label= 'Freedom'
                  path='/galleryOne'
                />
                <CardItem 
                  src= "Dibujos/Source.jpg"
                  text= "Limits"
                  label= 'The Source'
                  path='/galleryThree'
                />
             </ul>
             <ul className='cards__items'>
                <CardItem 
                  src= "Dibujos/Un dos.jpg"
                  text= "Syncategorematics"
                  label= 'One two'
                  path='/galleryTwo'
                />

                <CardItem 
                    src= "Dibujos/Ineinander.jpg"
                    text= "Glanz"
                    label= 'Ineinander'
                    path='/galleryFive'
                />
              
                <CardItem 
                  src= "Dibujos/En-soi.jpg"
                  text= "Core"
                  label= 'Fragmented whole'
                  path='/galleryFour'
              />
             </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
