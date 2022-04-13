import {useState, useRef} from 'react'
import './ImageForm.scss';


function OrderForm(props) {

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

  return (
    <div id="popup1" className="main-form">
        <div className="form-group">
            <input className="form-field" type="email" placeholder="Email" ref ={l} onChange={(e) => setEmail(e.target.value)}/>
            <span>@gmail.com</span>
        </div>
        <div className="form-group">
            <span>Name</span>
            <input className="form-field" type="text" placeholder="First Name" ref ={m} onChange={(e) => setFirstName(e.target.value)}/>
            <input className="form-field" type="email" placeholder="Last Name" ref ={n} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
            <span>Mobile Number</span>
            <input className="form-field" type="text" placeholder="Mobile Number" ref ={m} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="form-group">
            <span>Address</span>
            <input className="form-field" type="text" placeholder="Address" ref ={m} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="form-group">
            <span>Pincode</span>
            <input className="form-field" type="text" placeholder="Pincode" ref ={m} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        {/* <div className="form-group">
            <span>{'Comments'}</span>
            <textarea lassName="form-field" type="text" placeholder="Write your comments here" ref ={o} onChange={(e) => setExtraInformation(e.target.value)}/>
        </div> */}
        
        <div className="content-submit">
                <button className="button-13" id='clear-button' onClick={() => clearFunction()} role="button">Clear</button>
                <button className="button-13" id='submit-button' role="button">Submit</button>
        </div>
        <div class="tacbox">
        <input id="checkbox" type="checkbox" />
        <label for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
        </div>
        <br/>
        <br/>
        <br/>
    </div>
  );
}

export default OrderForm;


