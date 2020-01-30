import React from 'react';
import logo from '../../images/logo.png';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Logout from './../Login/Logout';

const Header = props => {
  return (
    <header className={styles.header}>
      <h1>
        <img className={styles.img} src={logo} alt="LOGO" />
        Fakebook
      </h1>

      <div className={styles.authLogin}>
        {props.isAuth ? (
          <div>
            <div>{props.email}</div>
            <Logout />
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
