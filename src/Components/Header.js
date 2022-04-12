import {useState} from 'react'
import NowPlayingPopup from './NowPlayingPopup';
import PopupImage from './PopupImage'
const image = [
	'https://images.unsplash.com/photo-1588417446723-884e75a48432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417446123-e7202e88f934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=308&q=80',
	'https://images.unsplash.com/photo-1588417446606-d0108ff1f2e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417321386-fc6426526b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417221066-8b8184004cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417220543-160f591512cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417098051-6819e0202473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417099597-fb0b248d6c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417099597-fb0b248d6c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
	'https://images.unsplash.com/photo-1588417099597-fb0b248d6c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80'
]
function Header() {
  const [mobileNavbarState,  setMobileNavbarState] = useState(false)
  const [nowPlayingView,  setNowPlayingView] = useState(false)
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
    <div className="Header">
      <header className="App-header">
          <div className="main-header-div">
            <h1 className="main-header"><a href=''>{'<[][][]:[][][`]/>'}</a></h1>
          </div>
          <div className="middle-header-div">
            <h2 className="mobile-hamburger" id='pushbutton' onClick={() => setMobileNavbarState(!mobileNavbarState)}>☰</h2>
            <h2 className="middle-header"  id='pushbutton' onClick={() => setNowPlayingView(!nowPlayingView)} style={{cursor:'pointer'}}>Now Playing</h2>
            <h2 className="middle-header"  id='pushbutton' style={{cursor:'pointer'}} onClick={(e) => popupStateValueChangerFunction(image[Math.floor(Math.random()*10)])}>Contact</h2>
            <h2 className="middle-header"  id='pushbutton' style={{cursor:'pointer'}} ><a href='#about'>About</a></h2>
            <h2 className="middle-header"  id='pushbutton' style={{cursor:'pointer'}}>Portfolio</h2>
          </div>
          {!mobileNavbarState?null:
                <div className="middle-header-div-mobile">
                    <h2 className="middle-header-mobile" onClick={() => setNowPlayingView(!nowPlayingView)} style={{cursor:'pointer'}}>Now Playing</h2>
                    <h2 className="middle-header-mobile" onClick={(e) => popupStateValueChangerFunction(image[Math.floor(Math.random()*10)])}>Contact</h2>
                    <h2 className="middle-header-mobile"><a href='#about'>About</a></h2>
                    <h2 className="middle-header-mobile">Portfolio</h2>
                </div>
          }
          {!nowPlayingView?null:
          <NowPlayingPopup close={setNowPlayingView}/>
          }
          {popupImageState?
            <PopupImage url={popupImageStateValue} close={popupStateChangerFunction} imageform={true}/>
          :null}
      </header>
    </div>
  );
}

export default Header;
