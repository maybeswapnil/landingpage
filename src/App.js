import './App.css';
import ReactComponent, {useState, useEffect} from 'react'
import Header from './Components/Header';
import Intro from './Components/Intro';
import Content from './Components/Content';
import {ReactComponent as Spinner} from './Assets/spinner.svg'
import Footer from './Components/Footer';
import About from './Components/About';
import Skills from './Components/Skills';

function App() {

  const [spinner,  setSpinner] = useState(true)
  const [darkMode,  setDarkMode] = useState(true)

  useEffect(() => {
      setTimeout(() => setSpinner(false), 1000)
  }, [])

  return (
    <div className={darkMode?"App":"AppDark"}>
        {spinner?
          <div className='spinner-div' style={{backgroundColor: 'white'}}>
            <Spinner />
          </div>:
          <div style={{display: 'flex', flexDirection:'column'}}>
            <Header mode={darkMode} changeMode={setDarkMode}/>
            <Intro mode={darkMode}/>
            <Content mode={darkMode}/>
            <About mode={darkMode}/>
            <Footer mode={darkMode}/>
          </div>
        }
    </div>
  );

}

export default App;
