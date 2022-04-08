import './App.css';
import ReactComponent, {useState, useEffect} from 'react'
import Header from './Components/Header';
import Intro from './Components/Intro';
import Content from './Components/Content';
import {ReactComponent as Spinner} from './Assets/spinner.svg'

function App() {

  const [spinner,  setSpinner] = useState(true)

  useEffect(() => {
      setTimeout(() => setSpinner(false), 1000)
  }, [])

  return (
    <div className="App">
        {spinner?
          <div className='spinner-div'>
            <Spinner />
          </div>:
          <>
            <Header />
            <Intro />
            <Content />
          </>
        }
    </div>
  );

}

export default App;
