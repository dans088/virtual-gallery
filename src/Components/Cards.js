import React from 'react'
import { useTranslation } from 'react-i18next'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  const { t } = useTranslation('global')

  return (
    <div id='gallery' className='cards'>
        <h1>{t('Site.gallery')}</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
             <ul className='cards__items'>
                <CardItem 
                  src= "Dibujos/libertad(1).jpg"
                  text={t('BuyingProtocol.hands')}
                  path='/galleryOne'
                />
                <CardItem 
                  src= "Dibujos/Ninfa2.jpg"
                  text={t('BuyingProtocol.body')}
                  path='/galleryFive'
                />
                <CardItem 
                    src= "Dibujos/frijoles.JPG"
                    text={t('BuyingProtocol.pastels')}
                    path='/galleryFour'
                />
             </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards