import axios from 'axios';
import React, { useState, useEffect } from 'react'
import equalizer from '../Assets/Equalizer.gif';
import projectimage from '../Assets/projects.png';
import image1 from '../Assets/image (1).svg';
import image2 from '../Assets/image (2).svg';
import image3 from '../Assets/image (3).svg';
import image4 from '../Assets/image (4).svg';
import image5 from '../Assets/image (5).svg';
import image6 from '../Assets/image (6).svg';
import image7 from '../Assets/image (7).svg';
import image8 from '../Assets/image (8).svg';
import './Project.scss';

let ary = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8
]

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
        <div class="outer">
          <img src={ary[props.index]} width={'60px'} />
        </div>
      </div>
    </div>
  );
}

export default Projects;


1