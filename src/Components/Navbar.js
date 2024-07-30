import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myLogo from '../logo_transparent.png';





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
        <Link to ='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={myLogo} className ='navbar-logo' alt ="signature" style={{position: 'sticky', top:'-20px', left:'30px', maxWidth:'218px'}}/>
        </Link> 
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <a
                href='#gallery'
                className='nav-links nav-btn'
                onClick={closeMobileMenu}
              >
                Gallery
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#contact'
                className='nav-links nav-btn'
                onClick={closeMobileMenu}
                
              >
                
                Contact
              </a>
            </li>


            <li className='nav-item-mobile'>
              <Link
                to='/aboutMe'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>


            
            
          </ul>
          {button && <Link to='/aboutMe'> <Button buttonStyle='btn--outline'>SIGN UP</Button></Link>}
        
           
        </div>
      
      </nav>
    </>
  );
}

export default Navbar;
