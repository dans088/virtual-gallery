import React from 'react'
//import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'
import myLogo from '../Firma_Blanca.png';

function Footer() {
  return (
    <div id='contact' className='footer-container'>
      <section className='footer-subscription'>
        {/*
        <p className='footer-subscription-heading'>
            Chaque dessin naît d’un échange.
        </p>*/}
        {/*
        <div className='input-areas'>
            <form>
                <input 
                type="email" 
                name="email" 
                placeholder='Your Email' 
                className='footer-input'
                />
            <Button buttonStyle='btn--outline' buttonSize='btn--medium'>Subscribe</Button>    
            </form>
        </div>
        */}
      </section>
    <div className="footer-link-items">
        <h2>Contact</h2>

        <a
            href="tel:+330659155808"
            className="footer-phone"
        >
            +33 06 59 15 58 08
        </a>

        <a
            href="mailto:contact@gradivas.art"
            className="footer-email"
            aria-label="M'envoyer un e-mail"
        >
            <i className="fa-solid fa-envelope" />
        </a>
    </div>
    <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to = '/' className='social-logo'>
                     
                    <img 
                    src={myLogo}  
                    alt ="signature-white" 
                    className='social-logo'
                    style={{
                        position: 'relative', 
                        
                        maxWidth:'100px'}}
                    />
                </Link>
            </div>
            <small
                className='website-rights'
                style={{
                    position: 'relative',
                    left: '50px'
                }}
            >
                GRADIVAS | Artist © 2024
            </small>
            <div className='social-icons'>
             
                <Link className='social-icon-link instagram'
                to= "https://instagram.com/_gradivas_/"
                target="_blank"
                aria-label="Instagram"
                >
                    <i className='fab fa-instagram' style={{position: 'relative', right:'-110px'}}/>
                </Link>
               
               
            </div>
        </div>
    </section>
    </div>

  )
}

export default Footer
