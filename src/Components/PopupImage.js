import {useState} from 'react'
import ImageForm from './ImageForm';
import OrderForm from './OrderForm';
import './PopupImage.css';

function PopupImage(props) {
    console.log('asdasda', props)
  const [mobileNavbarState,  setMobileNavbarState] = useState(false)

  return (
      <div id="popup1" className="overlay">
        <div className="popup">
            <img src={props.url} className="popup-image"/>
            <a className="close" onClick={() => props.close()}>&times;</a>
            {/* <div className="content">
                Thank to pop me out of that button, but now i'm done so you can close this window.
               
            </div> */}
            {/* <MyPug /> */}
            {props.imageform?<ImageForm />:<OrderForm />}
            
        </div>
        </div>
  );
}

export default PopupImage;


