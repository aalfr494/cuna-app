import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CUNA Auto Loan</h1>
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
