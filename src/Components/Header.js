import {useState} from 'react'
import NowPlayingPopup from './NowPlayingPopup';

function Header() {
  const [mobileNavbarState,  setMobileNavbarState] = useState(false)
  const [nowPlayingView,  setNowPlayingView] = useState(false)

  return (
    <div className="Header">
      <header className="App-header">
          <div className="main-header-div">
            <h1 className="main-header">Swapnil Sharma</h1>
          </div>
          <div className="middle-header-div">
            <h2 className="mobile-hamburger" onClick={() => setMobileNavbarState(!mobileNavbarState)}>☰</h2>
            <h2 className="middle-header" onClick={() => setNowPlayingView(!nowPlayingView)} style={{cursor:'pointer'}}>Now Playing</h2>
            <h2 className="middle-header" style={{cursor:'pointer'}}>Contact</h2>
            <h2 className="middle-header" style={{cursor:'pointer'}}>About</h2>
            <h2 className="middle-header" style={{cursor:'pointer'}}>Portfolio</h2>
          </div>
          {!mobileNavbarState?null:
                <div className="middle-header-div-mobile">
                    <h2 className="middle-header-mobile" onClick={() => setNowPlayingView(!nowPlayingView)} style={{cursor:'pointer'}}>Now Playing</h2>
                    <h2 className="middle-header-mobile">Contact</h2>
                    <h2 className="middle-header-mobile">About</h2>
                    <h2 className="middle-header-mobile">Portfolio</h2>
                </div>
          }
          {!nowPlayingView?null:
          <NowPlayingPopup close={setNowPlayingView}/>
          }
      </header>
    </div>
  );
}

export default Header;
