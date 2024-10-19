import React from 'react';
import './App.css';

function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

function App() {
  return (
      <div className="App">
          <h1>Welcome to My App</h1>
          <MyButton />
      </div>
  );
}

export default App;
