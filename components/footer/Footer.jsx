import React from 'react';
import './footer.css';

const Footer = () => {
    return (
       <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sriram Thangavel</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
            </ul>

            <div className="footer__social">

            <a href="" className="home__social-icon" target='_blank'>
                <i class="bx bxl-linkedin"></i>
            </a>
            </div>
        </div>
       </footer>
    );
}

export default Footer;
