import { useState } from 'react'
import './About.css';
import Project from './Project';

import github from '../Assets/github.png'
import linkedin from '../Assets/linkedin.png'
import pexels from '../Assets/pexels.png';
import stackoverflow from '../Assets/stackoverflow.png'


function About(props) {

    return (
        <div className={props.mode ? "About" : "AboutDark"}>
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
                <br />
                <br />
                <h1 className='main-about'>Technologies and Tools</h1>
                <p className='main-about'>I'm a self-taught web developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.Currently, I'm focused on the backend development.</p>
                <br />
                <br />

                <div className='icons-center'>
                    <div className='main-content-icons-div'>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" className="w-12" />
                            <h4 className="text-md ml-4">Express</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" className="w-12" />
                            <h4 className="text-md ml-4">NodeJS</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="w-12" />
                            <h4 className="text-md ml-4">Postman</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-12" />
                            <h4 className="text-md ml-4">HTML</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" className="w-12" />
                            <h4 className="text-md ml-4">CSS</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" className="w-12" />
                            <h4 className="text-md ml-4">Bootstrap</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" className="w-12" />
                            <h4 className="text-md ml-4">Redux</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" className="w-12" />
                            <h4 className="text-md ml-4">Sass</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-12" />
                            <h4 className="text-md ml-4">Javascript</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" className="w-12" />
                            <h4 className="text-md ml-4">Tailwind CSS</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" className="w-12" />
                            <h4 className="text-md ml-4">React</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" className="w-12" />
                            <h4 className="text-md ml-4">MySQl</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" className="w-12" />
                            <h4 className="text-md ml-4">Mongo DB</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" className="w-12" />
                            <h4 className="text-md ml-4">Heroku</h4>
                        </div>
                        <div className="icon-bodies"
                        >
                            <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" className="w-12" />
                            <h4 className="text-md ml-4">Git</h4>
                        </div>
                    </div>


                </div>
                <br />
                <br />
                <br />
                <h1 className='main-about'>Projects</h1>
                <p className='main-about'>Professional FullStack Software Engineer, specialized in web applications development using JavaScript frameworks. Experienced in creating. maintaining
                    and implementing source code that made up applications back-end functionalities and also in designing and developing user interfaces, testing, and
                    debugging. Proven ability in optimizing web functionality that improves data retrieval and workflow efficiencies</p>
                <br />
                <div className='about-project-main-div'>
                    <a href="https://satellite-tracker-3d.netlify.app/"><Project url='https://github.com/maybeswapnil/Satellite-Tracker-3D' name='Satellite Tracker' description='#reactjs #express #n2yo' descriptionpara='Reference Application to connect to spotify API to request currently playing songs. Requires Client_ID and Client_Secret from Spotify. Download and change the values in ./credentials.env.' /></a>
                    <a href="https://github.com/maybeswapnil/Spotify-Playing-Now"><Project url='https://github.com/maybeswapnil/Spotify-Playing-Now' name='Spotify API' description='#spotifyapi #express #nodejs' descriptionpara='This App displays the real time information and location of the Satellites above you. We use N2YO APIs to extract data, that data is used to calculate the real x, y, z coordinates. After that the App displays the sphere around the globe rotating (distance between the Satellites and Earth is relative).' /></a>
                    <a href="https://csvtodotjson.netlify.app/"><Project url='https://github.com/maybeswapnil/CSV-Parser' name='CSVtoJSONParser' description='#reactjs #express' descriptionpara='Reference Application to connect to spotify API to request currently playing songs. Requires Client_ID and Client_Secret from Spotify. Download and change the values in ./credentials.env.' /></a>
                    <a href="https://github.com/maybeswapnil/String-Calculator-TDD-Kata"><Project url='https://github.com/maybeswapnil/String-Calculator-TDD-Kata' name='TDD Kata' description='#javascript #mocha #chai' descriptionpara='Reference Application to connect to spotify API to request currently playing songs. Requires Client_ID and Client_Secret from Spotify. Download and change the values in ./credentials.env.' /></a>
                    <a href="https://github.com/maybeswapnil/a"><Project url='https://github.com/maybeswapnil/  ' name='S3 Unzip Module' description='#javascript #nodejs #npm' descriptionpara='Node package that can unzip the zip file on S3. Create an AWS Lambda function, name it, and zip all files from this package to upload the code (including node_modules). The function defaults to deleting the zip file after its been decompressed and verbose messages logged to CloudWatch.' /></a>
                    <a href="https://github.com/maybeswapnil/a"><Project url='https://github.com/maybeswapnil/  ' name='Sequalize Comment' description='#javascript #nodejs #npm' descriptionpara='A npm package to add comment to your query in Sequalize ORM. Developer needs to import and enclose the sequalize instance by it. Later developer can add comment in the respective model or query.' /></a>
                    <a href="https://github.com/maybeswapnil/a"><Project url='https://github.com/maybeswapnil/  ' name='Mongo to MySQL Module' description='#javascript #nodejs #npm' descriptionpara='A Node.js ETL script to migrate Mongo data to MySQL, mapping MongoDB Objects to MySQL tables.' /></a>
                    <a href="https://github.com/maybeswapnil/a"><Project url='https://github.com/maybeswapnil/  ' name='Gmail to MySQL Module' description='#javascript #nodejs #npm' descriptionpara='A Node.js ETL script to migrate millions of emails to S3.' /></a>
                </div>
                <br />
                <br />
                <br />
                <h1 className='main-about end' id='about' style={{ fontSize: "230%" }}>Thanks For Visiting</h1>
                <div className="social-media">  
                    <a id="up" href="https://github.com/maybeswapnil"><img id='github' src={github} /></a>
                    <a id="up" href="https://stackoverflow.com/users/11640117/swapnil-sharma"><img id='github' src={stackoverflow} /></a>
                    <a id="up" href="https://www.linkedin.com/in/swapnil5harma/"><img id='github' src={linkedin} /></a>
                    <a id="up" href="https://www.pexels.com/@hellochemo"><img id='github' src={pexels} /></a>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

export default About;
