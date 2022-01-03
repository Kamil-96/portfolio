import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

const Home = () => (
  <div className={styles.component}>
    <div className={styles.content}>
      <h1 className={styles.firstHeading}>Hello <FontAwesomeIcon className={styles.icon} icon={faSmile} /></h1>
      <h1 className={styles.secondHeading}>I am Junior Web Developer</h1>
      <Link to='/projects'>
        <button className={styles.button}>See my projects</button>
      </Link>
    </div>
  </div>
);

export default Home;
