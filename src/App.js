import React from 'react';
import { buyCake } from './store/cakeReducer';
import './App.css';


function App() {
const handleClick = () => dispatch(buyCake());


  return (
    <div className="App">
      <h1>{} Cakes left</h1>
      <button onClick={handleClick}>Buy Cake</button>
    </div>
  );
}

export default App;
