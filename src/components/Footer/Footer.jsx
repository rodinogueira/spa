import React from 'react';
import footerBG from '../../assets/footer-bg.png';
import './styles.css';

const Footer = () => (
  <footer className="footer">
    <h1 className="footer__title">Need help?</h1>
    <h2 className="footer__subtitle">coopers@coopers.pro</h2>
    <p className="footer__text">© 2021 Coopers. All rights reserved.</p>
    <img src={footerBG} alt="Footer Background" className="footer__image" />
  </footer>
);

export default Footer;
