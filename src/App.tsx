import React from 'react';
import './App.css';

// Creating and nesting components
function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

// Writing markup with JSX
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}

function App() {
  return (
      <div className="App">
          <img className="avatar"/>
          <h1>Welcome to My App</h1>
          <MyButton/>
          <AboutPage/>
      </div>
  );
}

export default App;
