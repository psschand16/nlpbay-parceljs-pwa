import React from 'react';
import logo from './logo.svg';
import './App.css';
console.log(process.env)
console.log(process.env.NODE_ENV)
console.log(process.env.user2)

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          user {process.env.user2}
          user 2 {`${process.env.user2}`}
        </a>
      </header>
    </div>
  );
}

export default App;
