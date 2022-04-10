import {useState} from 'react'
import './Skills.css';


function Content() {
  
  const [popupiconsState,  setPopupiconsState] = useState(false);
    
  return (
    <div className="Content" id='content'>
        <div className="about-skills" id='about'>
      
        </div>
        <br/>      
        <br/>      
    </div>
  );
}

export default Content;
