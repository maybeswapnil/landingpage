import {useState, useRef} from 'react'
import './ImageForm.scss';
import github from '../Assets/github.png'
import linkedin from '../Assets/linkedin.png'
import pexels from '../Assets/pexels.png';
import resume from '../Assets/swapnil-sharma-resume.pdf';


import stackoverflow from '../Assets/stackoverflow.png'
import axios from 'axios';
function ImageForm(props) {

  const [email,  setEmail] = useState('')
  const [firstName,  setFirstName] = useState('')
  const [lastName,  setLastName] = useState('')
  const [extraInformation,  setExtraInformation] = useState('')
  const l = useRef(null)
  const m = useRef(null)
  const n = useRef(null)
  const o = useRef(null)

 function clearFunction() {
     l.current.value = ''
     m.current.value = ''
     n.current.value = ''
     o.current.value = ''
 }

 function submit() {
    var data = JSON.stringify({
    "email": email,
    "message": extraInformation,
    "time": new Date().toString(),
    "userinfo": {
        "name": firstName + ' ' + lastName
    }
    });

    var config = {
        method: 'post',
        url: 'https://new-api-name.herokuapp.com/portefeuille',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            props.close()
        })
        .catch(function (error) {
            console.log(error);
        });
 }

  return (
    <div  className="main-form">
        <div className="social-media" style={{marginLeft:'-0vmin',  width: '100%'}}>
                <a id="up" href="https://github.com/maybeswapnil"><img id='github' src={github} /></a>
                <a id="up" href="https://stackoverflow.com/users/11640117/swapnil-sharma"><img id='github' src={stackoverflow} /></a>
                <a id="up" href="https://www.linkedin.com/in/swapnil5harma/"><img id='github' src={linkedin} /></a>
                <a id="up" href="https://www.pexels.com/@hellochemo"><img id='github' src={pexels} /></a>
        </div>
        <br/>
        <div className="form-group">
            <input className="form-field" type="email" placeholder="Email" ref ={l} onChange={(e) => setEmail(e.target.value)}/>
            <span>@gmail.com</span>
        </div>
        <div className="form-group">
            <input className="form-field" type="text" placeholder="First Name" ref ={m} onChange={(e) => setFirstName(e.target.value)}/>
            <input className="form-field" type="email" placeholder="Last Name" ref ={n} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
            <span>{'Comments'}</span>
            <input className="form-field" type="text" placeholder="Write your comments here" ref ={o} onChange={(e) => setExtraInformation(e.target.value)} />
        </div>
        <div className="content-submit">
                <button className="button-13" id='clear-button' onClick={() => clearFunction()} role="button">Clear</button>
                <button className="button-13" id='submit-button' role="button" onClick={() => submit()}>Submit</button>
        </div>
        <br/>
        <p id='random-sentence' style={{color:'black'}}>If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need.</p>
        <br/>
    </div>
  );
}

export default ImageForm;


