import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from './pages/onboarding/index';
import Welcome from './pages/onboarding/welcome';
import Account from './pages/create-login/index';
import Home from './pages/home-screen/index';
import Voting from './pages/voting-screen/index';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Onboarding />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/voting">
            <Voting />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
