import axios from 'axios';
import React,{useState, useEffect} from 'react'
import equalizer from '../Assets/Equalizer.gif';
import projectimage from '../Assets/projects.png';
import './Project.scss';

function Projects(props) {

  const [mobileNavbarState,  setMobileNavbarState] = useState(false)

  useEffect(() => {
      
  }, [mobileNavbarState])

  return (
      <div className="projects">
        <div className="project-image-div">
          <p className='underlined'>{props.description}</p>
          <h1>{props.name}</h1>
          <p className='des-para'>{props.descriptionpara}</p>
            {/* <a href='https://satellite-tracker-3d.netlify.app/' target='_blank'>
                <button className='resume-button' value='download' style={{backgroundColor: 'black', marginTop:'3vmin', width:'10vmin', height:'5vmin'}}>Open</button>
            </a>  */}
          <p className='underlined-github'><a href={props.url} target='_blank' id='git-link'>github</a></p>

        </div>
      </div>
  );
}

export default Projects;


1