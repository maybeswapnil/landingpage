import './About.css';

import Icons from './Icons';

import json from '../Components/Icons.json'
import ProjectList from './ProjectBox';
import projects from './Projects.json';
import SocialMedia from './SocialMedia';

function About(props) {

    return (
        <div className={props.mode ? "About main-about-div" : "AboutDark main-about-div"}>
            <div>
                <h1 className='main-about' id='about'>About Me</h1>
                <p className='main-about'>
                    I am a skilled software engineer with experience in a wide range of programming languages, frameworks, and technologies. My expertise in front-end development includes ReactJS, Redux, JS(ES6+), HTML5, CSS3, SCSS, Framer-Motion (Animation), and Recharts. I am also experienced in server-side JavaScript using Node.js and Express.
                    In addition to my technical skills, I have extensive experience with various database engine technologies, including Oracle, MySQL, and MongoDB. I am proficient in RDBMS Development and SQL, and I have experience with data structures and algorithms through platforms like HackerRank and Leetcode.
                <p className='main-about'>As a software engineer, I understand the importance of efficient workflow and version control. I am experienced with Git, npm, and GitHub for version control and package management. I have also worked with AWS (Compute, Storage, Network & Content Delivery), Netlify, Postman, SOAP UI, Dynatrace, Splunk, and Heroku for deployment and monitoring.
                        My experience with developing aesthetic wireframes, UX flows, mock-ups, and prototypes using Adobe XD allows me to work collaboratively with design teams and create visually stunning applications.
                        In summary, I am a skilled software engineer with experience in various programming languages, frameworks, and technologies. My focus on front-end development, server-side JavaScript, and database engine technologies allows me to deliver efficient and optimized software solutions. My experience with standard tooling, deployment, and monitoring tools ensures that my applications are always up to date and running smoothly. </p>
                </p>
            </div>
            <div>
                <h1 className='main-about'>Technologies and Tools</h1>
                <p className='main-about'>I'm a self-taught web developer with experience in designing new features from ideation to production,
                    implementation of wireframes and design flows into high performance software applications.
                    I take into consideration the user experience
                    while writing reusable and efficient code. I passionately combine good design, technology,
                    and innovation in all my projects, which I like
                    to accompany from the first idea to release.Currently, I'm focused on the backend development.
                </p>
                <br />
                <br />
                <Icons data={json} />
            </div>
            <div>

                <h1 className='main-about'>Projects</h1>
                <p className='main-about'>Professional FullStack Software Engineer, specialized in
                    web applications development using JavaScript frameworks. Experienced in creating. maintaining
                    and implementing source code that made up applications back-end functionalities
                    and also in designing and developing user interfaces, testing, and
                    debugging. Proven ability in optimizing web functionality that improves
                    data retrieval and workflow efficiencies</p>
                <br />
                <ProjectList data={projects} />
            </div>
            <div>
                <h1 className='main-about end' id='about' style={{ fontSize: "230%" }}>Thanks For Visiting</h1>
                <p className='main-about'> swapnil.sharma1998@gmail.com | +91 9755448822</p>
                <SocialMedia />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

export default About;
