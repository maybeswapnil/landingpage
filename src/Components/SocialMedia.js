import github from '../Assets/github.png'
import linkedin from '../Assets/linkedin.png'
import pexels from '../Assets/pexels.png';
import stackoverflow from '../Assets/stackoverflow.png'
import npm from '../Assets/npm.png'

function SocialMedia() {
    return (
        <div className="social-media">
            <a id="up" href="https://github.com/maybeswapnil"><img id='github' src={github} /></a>
            <a id="up" href="https://stackoverflow.com/users/11640117/swapnil-sharma"><img id='github' src={stackoverflow} /></a>
            <a id="up" href="https://www.linkedin.com/in/swapnil5harma/"><img id='github' src={linkedin} /></a>
            <a id="up" href="https://www.pexels.com/@hellochemo"><img id='github' src={pexels} /></a>
            <a id="up" href="https://www.npmjs.com/package/@caratlane/sqc"><img id='github' src={npm} /></a>
        </div>
    );
}

export default SocialMedia;
