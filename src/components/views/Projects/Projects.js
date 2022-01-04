import React from 'react';

import styles from './Projects.module.scss';

import ProjectItem from '../../features/ProjectItem/ProjectItem';

import projects from '../../../data/data';

const Projects = () => (
  <div className={styles.component}>
    <ul className={styles.list}>
      {projects.map(project => (
        <ProjectItem key={ project.id } { ...project } />
      ))}
    </ul>
  </div>
);

export default Projects;
