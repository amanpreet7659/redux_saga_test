import logo from './logo.svg';
import './App.css';
import Form_page from './Components/Form_page'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStockFile } from './Redux/Action/stockFile';
import MainPage from './pages/mainPage';

function App() {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  return (
    <div className="">
      <MainPage />
    </div>
  );
}

export default App;
