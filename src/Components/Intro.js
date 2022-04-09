import {useState} from 'react'
import './Intro.css';
const image = { 
    0: 'https://images.unsplash.com/photo-1588417319304-8ff124d3b406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80',
    1: 'https://images.unsplash.com/photo-1639499683640-1f1cf29eb065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80'
}

function Intro() {
  const [mobileNavbarState,  setMobileNavbarState] = useState(false)

  return (
    <div className="Intro">
        <header className='main-intro'>
            <h1 className='main-intro-title'>Welcome to the page</h1>
            <p>Find the picture that best suit your home</p>
        </header>
        <div className='image-body'>
            <img src={image[0]} className='full-image-one' />
        </div>
        <div className='image-body-two'>
            <img src={image[1]} className='full-image-two' />
        </div>
    </div>
  );
}

export default Intro;
