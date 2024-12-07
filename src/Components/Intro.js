import { useState, useEffect, useRef } from 'react';
import './Intro.css';
import github from '../Assets/github.png';
import linkedin from '../Assets/linkedin.png';
import pexels from '../Assets/pexels.png';
import resume from '../Assets/swapnil-sharma-resume.pdf';
import stackoverflow from '../Assets/stackoverflow.png';
import SocialMedia from './SocialMedia';

function Intro(props) {
  const data = [
    'Frontend Developer..',
    'Backend Developer..',
    'Fullstack Developer..',
    'Photographer....',
    'FPV Drone Pilot..',
  ];
  const [descDisplay, setDescDisplay] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingTimeout = useRef(null); // To manage typing intervals
  const rotationInterval = useRef(null); // To manage string rotation intervals

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(rotationInterval.current);
      } else {
        startRotation();
      }
    };

    startRotation();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(rotationInterval.current);
      clearTimeout(typingTimeout.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const startRotation = () => {
    // Start with typing the current string
    typeString(data[currentIndex]);

    // Rotate to the next string every 4 seconds
    rotationInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length;
        typeString(data[nextIndex]);
        return nextIndex;
      });
    }, 4000);
  };

  const typeString = (string) => {
    let currentCharIndex = 0;
    const typeNextChar = () => {
      if (currentCharIndex < string.length) {
        setDescDisplay((prev) => string.substring(0, currentCharIndex + 1) + '|');
        currentCharIndex++;
        typingTimeout.current = setTimeout(typeNextChar, 100); // Type each character with delay
      } else {
        setDescDisplay(string); // Remove the blinking cursor after typing is complete
      }
    };
    typeNextChar();
  };

  return (
    <div className={props.mode ? 'Intro' : 'IntroDark'} id="main-intro">
      <header className="main-intro">
        <div className="main-intro-child">
          <h1
            className="main-intro-title"
            id={props.mode ? '' : 'dark-mode-onlyfontcolor'}
          >
            Hi, I am Swapnil
          </h1>
          <h1
            className="main-intro-description"
            id={props.mode ? '' : 'dark-mode-onlyfontcolor'}
          >
            {'I am a ' + descDisplay}
          </h1>
        </div>
        <br />
        <p
          className="main-intro-p"
          id={props.mode ? '' : 'dark-mode-onlyfontcolor'}
        >
          Software Developement Engineer with experience in GoLang, NodeJS, ReactJS and a knack
          of turning complex problems into elegant solutions. Currently, at
          CaratLane, I am taking the software achitecture to the performance gym
          for a bit of optimization crunching.
        </p>
        <br />
        <SocialMedia />
        <br />
        <a
          href={resume}
          style={{ color: 'white' }}
          download="swapnil-resume.pdf"
        >
          <button className="button-30" role="button">
            Download Resume
          </button>
        </a>
      </header>
    </div>
  );
}

export default Intro;
