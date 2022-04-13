import {useState} from 'react'
import './About.css';
import Project from './Project';


function About(props) {

  return (
    <div className={props.mode?"About":"AboutDark"}>
        <div className='main-about-div'>
            <h1 className='main-about' id='about'>About Me</h1>
            <p className='main-about'>Web Application Developer with experience in creating. maintaining and implementing source code that made up applications back-end functionalities and 
                also in designing and developing user interfaces, testing, and debugging. Proven ability in optimizing web functionality that improves data retrieval and 
                workflow efficiencies.
            </p>
            <p className='main-about'>Working on ReactJS and NodeJS for 1+ year now. Have worked on development projects as well as migration projects. Developed and maintained 20+ Rest 
                                        APIs. Also volunteered to tap my web development expertise to develop a portfolio dashboard for the internal team and an internal platform for generating 
                                        graphs and performance results.
                                        The corporate experience helped me better understand the need and skill of translating real-time problems into business challenges that are strongly 
                                        coupled with technology, as these applications helped decrease the total cost to the project team
            </p>
            <p className='main-about'>Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. 
                                        Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. 
                                        Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.
            </p>
            <br/>
            <br/>
            <h1 className='main-about'>Technologies and Tools</h1>
            <p className='main-about'>I'm a self-taught web developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.Currently, I'm focused on the backend development.</p>
            <br/>
            <br/>
           
            <div className='icons-center'>
            <div className='main-content-icons-div'>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Express</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" className="w-12"/>
                    <h4 className="text-md ml-4">NodeJS</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Postman</h4>
                </div>
                {/* <div className="icon-bodies"
                    >
                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Dart</h4>
                </div> */}
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-12"/>
                    <h4 className="text-md ml-4">HTML</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" className="w-12"/>
                    <h4 className="text-md ml-4">CSS</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Bootstrap</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Redux</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Sass</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Javascript</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Tailwind CSS</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" className="w-12"/>
                    <h4 className="text-md ml-4">React</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" className="w-12"/>
                    <h4 className="text-md ml-4">MySQl</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Mongo DB</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Heroku</h4>
                </div>
                <div className="icon-bodies"
                    >
                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" className="w-12"/>
                    <h4 className="text-md ml-4">Git</h4>
                </div>
            </div>      
        
        
        </div> 
            <br/>
            <br/>
            <br/>
            <h1 className='main-about'>Projects</h1>
            <p className='main-about'>I'm a self-taught web developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.Currently, I'm focused on the backend development.</p>
            <br/>
            <div className='about-project-main-div'>
                <Project url='https://i.imgur.com/NjFB7GW.jpg'/>
                <Project url='https://i.imgur.com/cOt9rRY.png'/>
                <Project url='https://i.imgur.com/cOt9rRY.png'/>
                <Project url='https://i.imgur.com/NjFB7GW.jpg'/>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    </div>
  );
}

export default About;
