import React from 'react';
import { buyCake } from './store/cakeReducer';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {

 const {cakeReducer: {cake}} = useSelector((state) => state) 

const dispatch = useDispatch();


  const handleClick = () => dispatch(buyCake());

  return (
    <div className="App">
      <h1>{cake} Cakes left</h1>
      <button onClick={handleClick}>BuyCake</button>
    </div>
  );
}

export default App;
