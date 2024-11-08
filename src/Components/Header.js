import React, { useState } from 'react'
import NowPlayingPopup from './NowPlayingPopup';
import PopupImage from './PopupImage'
import MyImage from './MyImage';
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

const version = React.version;
function Header(props) {
  const [mobileNavbarState, setMobileNavbarState] = useState(false)
  const [nowPlayingView, setNowPlayingView] = useState(false)
  const [popupImageState, setPopupImageState] = useState(false);
  const [MyPictureState, setMyPictureStates] = useState(false);
  const [popupImageStateValue, setPopupImageStateValue] = useState('');

  function popupStateChangerFunction() {
    setPopupImageState(!popupImageState)
  }

  function popupStateValueChangerFunction(val) {
    setPopupImageStateValue(val);
    popupStateChangerFunction();
  }
  return (
    <div className="Header" >
      <header className="App-header" id={props.mode ? '' : 'dark-mode-full'}>
        <div className="main-header-div">
          <h1 className="main-header"><a  onClick={() => setMyPictureStates(!MyPictureState)} id={props.mode ? '' : 'dark-mode-onlyfontcolor'}>{'<[][][]:[][][`]/>'}</a></h1>
        </div>
        <div className="middle-header-div" >
          <h2 className="mobile-hamburger" id='pushbutton' onClick={() => setMobileNavbarState(!mobileNavbarState)}><a id={props.mode ? '' : 'dark-mode-onlyfontcolor'}>☰</a></h2>
          <h2 className="middle-header" id='pushbutton' onClick={() => setNowPlayingView(!nowPlayingView)} style={{ cursor: 'pointer' }}><a id={props.mode ? '' : 'dark-mode-onlyfontcolor'}>Spotify</a></h2>
          <h2 className="middle-header" id='pushbutton' style={{ cursor: 'pointer' }} onClick={(e) => popupStateValueChangerFunction(image[Math.floor(Math.random() * 10)])}><a id={props.mode ? '' : 'dark-mode-onlyfontcolor'}>Contact</a></h2>
          <h2 className="middle-header" id='pushbutton' style={{ cursor: 'pointer' }} ><a href='#about' id={props.mode ? '' : 'dark-mode-onlyfontcolor'}>About</a></h2>
          <h2 className="middle-header" id='pushbutton' style={{ cursor: 'pointer' }}><a id={props.mode ? '' : 'dark-mode-onlyfontcolor'} href='https://swapnilsharma.in/'>{'Store'}</a></h2>
        </div>
        {!mobileNavbarState ? null :
          <div className="middle-header-div-mobile">
            <h2 className="middle-header-mobile" onClick={() => setNowPlayingView(!nowPlayingView)} style={{ cursor: 'pointer' }}><a>Spotify</a></h2>
            <h2 className="middle-header-mobile" onClick={(e) => popupStateValueChangerFunction(image[Math.floor(Math.random() * 10)])}><a>Contact</a></h2>
            <h2 className="middle-header-mobile"><a href='#about'>About</a></h2>
            <h2 className="middle-header-mobile" ><a href='https://swapnilsharma.in/'>{'Store'}</a></h2>
          </div>
        }
        {!nowPlayingView ? null :
          <NowPlayingPopup close={setNowPlayingView} />
        }
        {popupImageState ?
          <PopupImage url={popupImageStateValue} close={popupStateChangerFunction} imageform={true} />
          : null}
        {MyPictureState ?
          <MyImage url={popupImageStateValue} close={setMyPictureStates} imageform={true} />
          : null}
      </header>
    </div>
  );
}

export default Header;
