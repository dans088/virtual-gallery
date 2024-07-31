import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'
import myLogo from '../Firma_Blanca.png';

function Footer() {
  return (
    <div id='contact' className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Join the newsletter to receive a notification each time a new drawing is uploaded
        </p>
        
        <div className='input-areas'>
            <form>
                <input 
                type="email" 
                name="email" 
                placeholder='Your Email' 
                className='footer-input'
                />
            <Button buttonStyle='btn--outline'>Subscribe</Button>    
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Contact:</h2>
                <p>Daniel Atilano | Artist</p>
                <Link to='mailto:daniel.atilano@live.com'>
                    <i class="fa-solid fa-envelope" style={{position: 'relative', right:'-42px', color: '#ffffff'}}></i>
                </Link>
                <Link to='/'></Link>
            </div>
        </div>
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
                        top: '10px',
                        left: '-10px',
                        maxWidth:'100px'}}
                    />
                </Link>
            </div>
            <small className='website-rights'> DANIEL ATILANO © 2024</small>
            <div className='social-icons'>
                <Link className='social-icon-link facebook'
                to= "https://m.facebook.com/daniel.atilano.18/"
                target="_blank"
                aria-label="Facebook"
                >
                    <i className='fab fa-facebook'/>
                </Link>
                <Link className='social-icon-link instagram'
                to= "https://instagram.com/daniel_atilano__/"
                target="_blank"
                aria-label="Instagram"
                >
                    <i className='fab fa-instagram'/>
                </Link>
                <Link
                class='social-icon-link linkedin'
                to='https://www.linkedin.com/in/daniel-atilano-casillas'
                target='_blank'
                aria-label='LinkedIn'
                >
                    <i class='fab fa-linkedin' />
                </Link>
            </div>
        </div>
    </section>
    </div>

  )
}

export default Footer
