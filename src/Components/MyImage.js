import {useState} from 'react'
import MyImageDes from './MyImageDes';
import OrderForm from './OrderForm';
import './PopupImage.css';

function MyImage(props) {
  const [mobileNavbarState,  setMobileNavbarState] = useState(false)
  const URL = 'https://i.imgur.com/0hn59Ta.jpeg'
  return (
      <div id="popup1" className="overlay">
        <div className="popup">
            <img src={URL} className="popup-image"/>
            <a className="close" onClick={() => props.close()}>&times;</a>
            <MyImageDes close={props.close}/> 
        </div>
        </div>
  );
}

export default MyImage;


