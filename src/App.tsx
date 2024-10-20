import React from 'react';
import './App.css';
import { useState} from "react";



// Creating and nesting components
function MyButton() {
    // Updating the screen
    const [count, setCount] = useState(0);

    // Responding to events
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}


function App() {
  return (
      <div className="App">
          <img className="avatar"/>
          <h1>Counters that update separately</h1>
          <MyButton/>
          <MyButton/>
      </div>
  );
}



export default App;