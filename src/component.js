import React,{useState} from 'react';
import './App.css';
const Bulb=()=> {
    
  const [on, setOn] = useState(true);
  // const lightOn = () => setOn(true);
  // const lightOff = () => setOn(false);
  return (
    <> 
        
      <div className={on ? 'bulb-on' : 'bulb-off'}></div> 
      <div>
      <button onClick={() => setOn(!on)}>{ on ? 'ON' : 'OFF' }</button>
      </div>
    </>
  );
}
  
export default Bulb;