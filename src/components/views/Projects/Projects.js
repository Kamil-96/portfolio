import React from 'react';

import styles from './Projects.module.scss';

import ProjectItem from '../../features/ProjectItem/ProjectItem';

import projects from '../../../data/data';

const Projects = () => (
  <div>
    <ul>
      {projects.map(project => (
        <ProjectItem key={ project.id } { ...project } />
      ))}
    </ul>
  </div>
);

export default Projects;
