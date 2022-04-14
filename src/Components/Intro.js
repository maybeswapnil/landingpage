import {useState} from 'react'
import './Intro.css';
import github from '../Assets/github.png'
import linkedin from '../Assets/linkedin.png'
import pexels from '../Assets/pexels.png';
import resume from '../Assets/swapnil-sharma-resume.pdf';


import stackoverflow from '../Assets/stackoverflow.png'
const image = { 
    0: 'https://images.unsplash.com/photo-1588417319304-8ff124d3b406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80',
    1: 'https://images.unsplash.com/photo-1639499683640-1f1cf29eb065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80',
    2:'https://images.unsplash.com/photo-1642449026894-883687c4d727?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80'
}

function Intro(props) {
 const data = ['Frontend Developer..', 'Backend Developer..', 'Fullstack Developer..']
  const [descDisplay,  setDescDisplay] = useState('')

  useState(() => {
    var j = 1;
    addString(data[0])

    setInterval(() => {
       addString(data[j])
       j++;
       if(j>2) j=0;
    },4000)
  }, [])

  function addString(datastring, m='') {
      if(datastring.length===0) return;
        var ary = datastring.split('')
        var n = m + ary.shift()
        setDescDisplay(n + '|')
        setTimeout(() =>
            addString(ary.join(''), n)
        , 100);
  }

  return (
    <div className={props.mode?"Intro":"IntroDark"} id='main-intro'>
        <header className='main-intro'>
            <div className='main-intro-child'>
                <h1 className='main-intro-title' id={props.mode?'':'dark-mode-onlyfontcolor'}>Hi, I am Swapnil</h1>
                <h1 className='main-intro-description' id={props.mode?'':'dark-mode-onlyfontcolor'}>{'I am a ' + descDisplay}</h1>
            </div>
            <br/>
            <p className='main-intro-p' id={props.mode?'':'dark-mode-onlyfontcolor'}>Web Application Developer with experience in creating. maintaining and implementing source code that made up applications back-end functionalities.</p>
            <div className="social-media">
                <a id="up" href="https://github.com/maybeswapnil"><img id='github' src={github} /></a>
                <a id="up" href="https://stackoverflow.com/users/11640117/swapnil-sharma"><img id='github' src={stackoverflow} /></a>
                <a id="up" href="https://www.linkedin.com/in/swapnil5harma/"><img id='github' src={linkedin} /></a>
                <a id="up" href="https://www.pexels.com/@eyeswithmyopia"><img id='github' src={pexels} /></a>
            </div>
            <br/>
            <a href={resume} style={{color: 'white'}} download="swapnil-resume.pdf"><button class="button-30" role="button">Resume</button></a>
        </header>
        {/* <div className='image-body' id='home'>
            <img src={'https://i.imgur.com/NIKjQYj.png'} className='full-image-two' />
        </div> */}
        {/* <div className='image-body-two'>
            <img src={image[1]} className='full-image-two' />
        </div>
        <div className='image-body-three'>
            <img src={image[2]} className='full-image-three' />
        </div> */}
    </div>
  );
}

export default Intro;


