
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import DisqualificationPage from './DisqualificationPage';
import NewAccountPage from './NewAccount';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/newaccount" component={NewAccountPage} />
        <Route path="/disqualified" component={DisqualificationPage} />
        <Route path="/" exact component={LandingPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
