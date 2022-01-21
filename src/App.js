import React,{useState} from 'react';
import './App.css';
import Bulb from './component';

const App=()=> {
 

  
  return (
    <> 
        <div className='App'><h1>Light Switch App</h1>
    <Bulb/>
    <Bulb />
      </div>
    </>
  );
}
  
export default App;
