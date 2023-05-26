import React, { Component } from 'react';
import svglogo from '../Assets/Icons/logo.svg';
import menuicon from '../Assets/Icons/icon-hamburger.svg';
import './Custom.css';
import './CSS/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div>
        <header>
          <div id="navbar" className="navbar">
            <div className="navbar-wrapper">
              <img className="logo navbar-logo" src={svglogo} alt="Loopstudios logo" />

              <img
                id="menu-btn"
                className="header-menu-icon"
                src={menuicon}
                alt="Menu icon"
                onClick={this.toggleMenu}
              />

              <nav>
                <ul
                  className="header-menu"
                  style={{ display: isMenuOpen ? 'block' : 'none' }}
                >
                  <li className="header-menu-item">
                    <a className="header-menu-link" href="#" title="About">
                      About
                    </a>
                  </li>
                  <li className="header-menu-item">
                    <a className="header-menu-link" href="#" title="Careers">
                      Careers
                    </a>
                  </li>
                  <li className="header-menu-item">
                    <a className="header-menu-link" href="#" title="Events">
                      Events
                    </a>
                  </li>
                  <li className="header-menu-item">
                    <a className="header-menu-link" href="#" title="Products">
                      Products
                    </a>
                  </li>
                  <li className="header-menu-item">
                    <a className="header-menu-link" href="#" title="Support">
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="title-wrapper">
            <h1 className="title">Immersive experiences that deliver</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
