import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../donedeal-logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-content">
          <div className="menu-bar-container">
            <div className="menu-bar-content page-row">
              <Link to={'/'} className="header-logo">
                <img src={logo} className="header-logo-image" alt="DoneDeal" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
