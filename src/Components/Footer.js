import React from 'react';
import './CSS/Footer.css'
import svglogo from '../Assets/Icons/logo.svg'
import fbicon from '../Assets/Icons/icon-facebook.svg'
import twittericon from '../Assets/Icons/icon-twitter.svg'
import pinteresticon from '../Assets/Icons/icon-pinterest.svg'
import igicon from '../Assets/Icons/icon-instagram.svg'

class Footer extends React.Component {
    render() {
      return (
        <footer>
          <div className="footer-cover">
            <img className="logo footer-logo" src={svglogo} alt="Loopstudios logo" />
  
            <nav>
              <ul className="footer-menu">
                <li className="footer-menu-item"><a className="footer-menu-link" href="#" title="About">About</a></li>
                <li className="footer-menu-item"><a className="footer-menu-link" href="#" title="Careers">Careers</a></li>
                <li className="footer-menu-item"><a className="footer-menu-link" href="#" title="Events">Events</a></li>
                <li className="footer-menu-item"><a className="footer-menu-link" href="#" title="Products">Products</a></li>
                <li className="footer-menu-item"><a className="footer-menu-link" href="#" title="Support">Support</a></li>
              </ul>
            </nav>
  
            <div className="footer-socialIcons">
              <a className="footer-socialIcons-link" href="#" title="Facebook"><img className="footer-socialIcons-img" src={fbicon} alt="Icon facebook" /></a>
              <a className="footer-socialIcons-link" href="#" title="Twitter"><img className="footer-socialIcons-img" src={twittericon} alt="Icon twitter" /></a>
              <a className="footer-socialIcons-link" href="#" title="Pinterest"><img className="footer-socialIcons-img" src={pinteresticon} alt="Icon pinterest" /></a>
              <a className="footer-socialIcons-link" href="#" title="Instagram"><img className="footer-socialIcons-img" src={igicon} alt="Icon instagram" /></a>
            </div>
  
            <p className="copyright_text">© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </footer>
      );
    }
  }

  export default Footer;