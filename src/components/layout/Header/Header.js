import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => (
  <nav className={styles.component}>
    <Link className={styles.link} to='/'>Home</Link>
    <Link className={styles.link} to='/projects'>Projects</Link>
  </nav>
);

export default Header;
