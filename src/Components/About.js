import {useState} from 'react'
import './About.css';


function About() {

  return (
    <div className="About" id='about'>
        <div className='main-about-div'>
            <h1 className='main-about'>About Me</h1>
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
            <br/>
        </div>
    </div>
  );
}

export default About;
