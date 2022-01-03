import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectItem.module.scss';

const ProjectItem = ({ name, description, githubLink, herokuLink, technologies }) => (
  <li>
    <div>
      <a href={githubLink} alt='github link'>Github</a>
      <a href={herokuLink} alt='heroku link'>Heroku</a>
    </div>
    <div>
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
};

export default ProjectItem;
