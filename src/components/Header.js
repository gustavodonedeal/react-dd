import React from 'react';
import logo from '../donedeal-logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-content">
          <div className="menu-bar-container">
            <div className="menu-bar-content page-row">
              <a href="/" className="header-logo" target="_self">
                <img src={logo}
                className="header-logo-image" alt="DoneDeal" />
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
