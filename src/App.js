import './App.css';
import ReactComponent, { useState, useEffect } from 'react'
import Header from './Components/Header';
import Intro from './Components/Intro';
import Content from './Components/Content';
import { ReactComponent as Spinner } from './Assets/spinner.svg'
import Footer from './Components/Footer';
import About from './Components/About';
import Skills from './Components/Skills';
import LoadingBar from "react-top-loading-bar";

function App() {

  const [spinner, setSpinner] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(50);
    }, 500);
    setTimeout(() => {
      setProgress(80);
    }, 1000);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    setTimeout(() => {
      setSpinner(false);
    }, 1500);
  }, []);

  return (
    <div className={darkMode ? "App" : "AppDark"}>
      <Header mode={darkMode} changeMode={setDarkMode} />
      {spinner ?
        <LoadingBar
          color="black"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        /> :
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Intro mode={darkMode} />
          <Content mode={darkMode} />
          <About mode={darkMode} />
          <Footer mode={darkMode} />
        </div>
      }
    </div>
  );

}

export default App;

