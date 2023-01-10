import {useState} from 'react'
import './Content.css';
import PopupImage from './PopupImage'
const image = [
	'https://images.unsplash.com/photo-1588417446723-884e75a48432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417446123-e7202e88f934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=308&q=80',
	'https://images.unsplash.com/photo-1588417446606-d0108ff1f2e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417321386-fc6426526b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417221066-8b8184004cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417220543-160f591512cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417098051-6819e0202473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417099597-fb0b248d6c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80'
]
import config from '../Config/variables.json'

function Content(props) {
  
  const [popupImageState,  setPopupImageState] = useState(false);
  const [popupImageStateValue,  setPopupImageStateValue] = useState('');

  function popupStateChangerFunction() {
        setPopupImageState(!popupImageState)
  }

  function popupStateValueChangerFunction(val) {
    setPopupImageStateValue(val);
    popupStateChangerFunction();
  }
  return (
    <div id='content' className={props.mode?"Content":"Content"}>
        <header className='main-content' id={props.mode?"Content":"ContentDark"} style={{color:'black'}}>
            <h1 className='main-content-title'>Query about available prints?</h1>
            <p>Find the picture that best suits your home</p>
            <br/>
            {/* <button class="button-52" role="button" onClick={(e) => popupStateValueChangerFunction(image[Math.floor(Math.random()*10)])}>Order Prints</button> */}
            <a href={config.SHOP_URL}><button class="button-52" role="button" >Order Prints</button></a>
        </header>
        <div className='image-center'>
            <div className='main-content-images-div'>
                {image.map((r) => {
                    return(
                        <a href={r} target='_blank'><img src={r} className='main-content-images'/></a>
                    )
                })}
            </div>  
        </div> 
    
        {popupImageState?
            <PopupImage url={popupImageStateValue} close={popupStateChangerFunction} imageform={false} />
        :null}
        <br/>      
        <br/>      
    </div>
  );
}

export default Content;
