import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';
import myLogo from '../logo_transparent.png';
import {Link} from 'react-router-dom'



function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <a href ='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={myLogo} alt ="signature" style={{position: 'sticky', maxWidth:'218px'}}/>
        </a> 
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a
                href='/'
                className='nav-links nav-btn'
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/#gallery'
                className='nav-links nav-btn'
                onClick={closeMobileMenu}
              >
                Gallery
              </a>
            </li>

            <li className='nav-item'>
              <Link
                to='/aboutMe'
                className='nav-links nav-btn'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>


            <li className='nav-item-mobile'>
              <a
                href='/#contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Follow me
              </a>
            </li>


            
            
          </ul>
          {button && <a href='/#contact'> <Button buttonStyle='btn--outline' buttonSize='btn--medium'>Follow Me</Button></a>}
        
           
        </div>
      
      </nav>
    </>
  );
}

export default Navbar;
