import {useState} from 'react'

function Header() {
  const [mobileNavbarState,  setMobileNavbarState] = useState(false)

  return (
    <div className="Header">
      <header className="App-header">
          <div className="main-header-div">
            <h1 className="main-header">Swapnil Sharma</h1>
          </div>
          <div className="middle-header-div">
            <h2 className="mobile-hamburger" onClick={() => setMobileNavbarState(!mobileNavbarState)}>☰</h2>
            <h2 className="middle-header">Price</h2>
            <h2 className="middle-header">Contact</h2>
            <h2 className="middle-header">About</h2>
            <h2 className="middle-header">Portfolio</h2>
          </div>
          {!mobileNavbarState?null:
                <div className="middle-header-div-mobile">
                    <h2 className="middle-header-mobile">Price</h2>
                    <h2 className="middle-header-mobile">Contact</h2>
                    <h2 className="middle-header-mobile">About</h2>
                    <h2 className="middle-header-mobile">Portfolio</h2>
                </div>
          }
      </header>
    </div>
  );
}

export default Header;
