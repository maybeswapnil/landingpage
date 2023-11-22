import { useState, useRef } from 'react'
import './ImageForm.scss';
import github from '../Assets/github.png'
import linkedin from '../Assets/linkedin.png'
import pexels from '../Assets/pexels.png';
import resume from '../Assets/swapnil-sharma-resume.pdf';


import stackoverflow from '../Assets/stackoverflow.png'

function MyImageDes(props) {

    return (
        <div className="main-form" style={{  width: "100%" }}>
            <div class="achievement" id='random-sentence' style={{ color: 'black', fontSize: "1.8vh", width:"80%"}}>
                <h3>Software Engineer II</h3>
                <p><strong>CaratLane (A Titan Company), Bangalore, Karnataka</strong></p>
                <p>Aug 2022 – Current</p>
                <ul>
                    <li>Worked on @caratlane/sqc opensource package & Optimized DB queries and overall architecture to accommodate increased traffic.</li>
                    <li>Reduced the storage cost by 80% by making the product image architecture serverless with S3 and Lambda.</li>
                    <li>Wrote node packages to speed up S3 interaction. Node package performance improved by 50% compared to existing packages.</li>
                    <li>Wrote a worker pool in GoLang that reduced the cross-account SQL migration time from 40 min to 15 min.</li>
                    <li>Reduced the image upload time by 20% with the new serverless implementation.</li>
                    <li>Formalized coding styles and patterns to improve code quality, review, and performance.</li>
                    <li>Responsible for creating and maintaining flexible, accessible, and performant React components for caratlane.com.</li>
                </ul>
            </div>
            <br />
        </div>
    );
}

export default MyImageDes;


