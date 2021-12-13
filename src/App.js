import logo from './logo.svg';
import './App.css';
import Form_page from './Components/Form_page'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStockFile } from './Redux/Action/stockFile';
import MainPage from './Components/mainPage';

function App() {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  
  // useEffect(() => {
  //   dispatch(getStockFile())
  // }, [])

  return (
    <div className="">
      <MainPage />
      {/*<header className="App-header">
    <Form_page />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
