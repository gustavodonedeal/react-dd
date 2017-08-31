import React from 'react';
import logo from './Logo.svg';
import styles from './Header.css';

const Header = () =>
  <div className={styles.logoContainer}>
    <img src={logo} className={styles.logo} />
  </div>;

export default Header;
