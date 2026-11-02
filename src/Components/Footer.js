import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import myLogo from '../Firma_Blanca.png';

function Footer() {
    return (
        <footer id="contact" className="footer-container">

            <div className="footer-content">

                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img
                            src={myLogo}
                            alt="Gradivas"
                        />
                    </Link>

                    <small className="website-rights">
                        GRADIVAS | Artist © 2024
                    </small>
                </div>

                <div className="footer-contact">
                    <h2>Contact</h2>

                    <a href="tel:+330659155808">
                        +33 06 59 15 58 08
                    </a>

                    <a href="mailto:contact@gradivas.art">
                        contact@gradivas.art
                    </a>
                </div>

                <div className="footer-social">
                    <a
                        href="https://instagram.com/gradivas_art/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                </div>

            </div>

        </footer>
    );
}

export default Footer;