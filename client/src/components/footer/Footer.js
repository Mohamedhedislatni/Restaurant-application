import React from 'react';
import './Footer.css'
import {Link} from 'react-router-dom'




const Footer = () => {
    return (
      <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Contact</h1>
        
        <address>
        707 Café Resto est la référence des Coffee Lounge & Restaurant. <br />
          <Link to="/contactus">Email Us</Link>
        </address>
      </div>
      <ul className="footer__nav">
        
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Designed By</h2>
          <ul className="nav__ul nav__ul--extra">
            
            <li>
              <span>Made with  Hedi Slatni Zidi Mouadh</span>
            </li>
           
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>
          <ul className="nav__ul">
            <li>
              © 2021 GoMyCode. All rights reserved.
            </li>
           
          </ul>
        </li>
      </ul>
      
    </footer>

    );
};

export default Footer;