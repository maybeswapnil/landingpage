import {useState} from 'react'
import './ImageForm.scss';

function ImageForm(props) {

  const [email,  setEmail] = useState('')
  const [firstName,  setFirstName] = useState('')
  const [lastName,  setLastName] = useState('')
  const [extraInformation,  setExtraInformation] = useState('')

  return (
    <div id="popup1" className="main-form">
        <div className="form-group">
            <input className="form-field" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <span>@gmail.com</span>
        </div>
        <div className="form-group">
            <input className="form-field" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            <input className="form-field" type="email" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
            <span>{'Extra information'}</span>
            <textarea lassName="form-field" type="text" placeholder="Address and Phone Number" onChange={(e) => setExtraInformation(e.target.value)}/>
            {/* <input className="form-field" type="text" placeholder="Query" onChange={(e) => setExtraInformation(e.target.value)} /> */}
        </div>
        <div className="content-submit">
                <button className="button-13" id='clear-button' role="button">Clear</button>
                <button className="button-13" id='submit-button' role="button">Submit</button>
            </div>
        <br/>
        <br/>
        <br/>
    </div>
  );
}

export default ImageForm;


