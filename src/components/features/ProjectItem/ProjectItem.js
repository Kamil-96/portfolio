import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectItem.module.scss';

const ProjectItem = ({ name, description, githubLink, herokuLink, technologies, image }) => (
  <li className={styles.component}>
    <div className={styles.imgContainer}>
      <img className={styles.image} src={image} alt='Project' />
      <div className={styles.btnContainer}>
        <a href={githubLink} target="_blank" rel="noreferrer"><button>Github</button></a>
        <a href={herokuLink} target="_blank" rel="noreferrer"><button>Heroku</button></a>
      </div>
    </div>
    <div className={styles.descriptionContainer}>
      <div>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div>
        <h3>Technologies</h3>
        <p>{technologies}</p>
      </div>
    </div>
  </li>
);

ProjectItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  herokuLink: PropTypes.string,
  technologies: PropTypes.string,
  image: PropTypes.string,
};

export default ProjectItem;
