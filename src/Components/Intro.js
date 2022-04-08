import {useState} from 'react'
import './Intro.css';

function Intro() {
  const [mobileNavbarState,  setMobileNavbarState] = useState(false)

  return (
    <div className="Intro">
        <header className='main-intro'>
            <h1 className='main-intro-title'>Welcome to the page</h1>
            <p>Find the picture that best suit your home</p>
        </header>
    </div>
  );
}

export default Intro;
