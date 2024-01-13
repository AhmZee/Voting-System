import React from 'react';
import './App.css';
import Welcome from './onboarding/Welcome';
import WelcomeCast from './onboarding/WelcomeCast';
import WelcomeMake from './onboarding/WelcomeMake';
import WelcomeStay from './onboarding/WelcomeStay';
import LoginUser from './createAcc&Login/LoginUser';
import LoginAdmin from './createAcc&Login/LoginAdmin';
import CreateUser from './createAcc&Login/CreateUser';
import CreateAdmin from './createAcc&Login/CreateAdmin';
import PhoneVerification from './createAcc&Login/PhoneVerification';
import VerificationSuccess from './createAcc&Login/VerificationSuccess';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className=' m-auto w-[375px] font-Inter'>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/WelcomeCast">
            < WelcomeCast />
          </Route>
          <Route path="/WelcomeMake">
            < WelcomeMake />
          </Route>
          <Route path="/WelcomeStay">
            < WelcomeStay />
          </Route>
          <Route path="/LoginUser">
            <LoginUser />
          </Route>
          <Route path="/LoginAdmin">
            <LoginAdmin />
          </Route>
          <Route path="/CreateUser">
            <CreateUser />
          </Route>
          <Route path="/CreateAdmin">
            <CreateAdmin />
          </Route>
          <Route path="/PhoneVerification">
            <PhoneVerification />
          </Route>
          <Route path="/VerificationSuccess">
            <VerificationSuccess />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

