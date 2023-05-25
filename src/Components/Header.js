import React from 'react';
import svglogo from '../Assets/Icons/logo.svg'
import './Custom.css'
import './CSS/Header.css'

class Header extends React.Component {
    render() {
      return (
        <div>
        <header>
          <div id="navbar" className="navbar">
            <div className="navbar-wrapper">
              <img className="logo navbar-logo" src={svglogo} alt="Loopstudios logo" />
  
              <nav>
                <ul className="header-menu">
                  <li className="header-menu-item"><a className="header-menu-link" href="#" title="About">About</a></li>
                  <li className="header-menu-item"><a className="header-menu-link" href="#" title="Careers">Careers</a></li>
                  <li className="header-menu-item"><a className="header-menu-link" href="#" title="Events">Events</a></li>
                  <li className="header-menu-item"><a className="header-menu-link" href="#" title="Products">Products</a></li>
                  <li className="header-menu-item"><a className="header-menu-link" href="#" title="Support">Support</a></li>
                </ul>
              </nav>
            </div>
          </div>
  
          <div className="title-wrapper"><h1 className="title">Immersive experiences that deliver</h1></div>
        </header>
        </div>
      );
    }
  }

export default Header;