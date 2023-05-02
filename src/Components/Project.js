import axios from 'axios';
import React, { useState, useEffect } from 'react'
import equalizer from '../Assets/Equalizer.gif';
import projectimage from '../Assets/projects.png';
import './Project.scss';

function Projects(props) {

  const [mobileNavbarState, setMobileNavbarState] = useState(false)

  useEffect(() => {

  }, [mobileNavbarState])

  return (
    <div className="projects">
      <div className="project-image-div">
        <p className='underlined'>{props.description}</p>
        <h1>{props.name}</h1>
        <p className='des-para'>{props.descriptionpara}</p>
        <p className='underlined-github'><a href={props.url} target='_blank' id='git-link'>Github</a></p>
      </div>
    </div>
  );
}

export default Projects;


1