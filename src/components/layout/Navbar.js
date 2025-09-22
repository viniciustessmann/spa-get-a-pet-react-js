import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li>
                <Link to="/">Adotar</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Registro</Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;