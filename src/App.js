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
import Home from './HomeScreen/Home';
import Home2 from './HomeScreen/Home2';
import CreatePoll1 from './HomeScreen/CreatePoll1';
import CreatePoll2 from './HomeScreen/CreatePoll2';
import Upload from './HomeScreen/Upload';
import PollCreateSuccess from './HomeScreen/PollCreateSuccess';
import JoinVote from './HomeScreen/JoinVote';
import SelectedPoll from './HomeScreen/SelectedPoll';
import VoteCandidate from './votingScreen/VoteCandidate';
import CandidateInfo from './votingScreen/CandidateInfo';
import VoteSuccessful from './votingScreen/VoteSuccessful';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className=' m-auto w-[375px] font-Inter h-[100vh]'>
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
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Home2">
            <Home2 />
          </Route>
          <Route path="/CreatePoll1">
            <CreatePoll1 />
          </Route>
          <Route path="/CreatePoll2">
            <CreatePoll2 />
          </Route>
          <Route path="/Upload">
            <Upload />
          </Route>
          <Route path="/PollCreateSuccess">
            <PollCreateSuccess />
          </Route>
          <Route path="/JoinVote">
            <JoinVote />
          </Route>
          <Route path="/SelectedPoll">
            <SelectedPoll />
          </Route>
          <Route path="/VoteCandidate">
            <VoteCandidate />
          </Route>
          <Route path="/CandidateInfo">
            <CandidateInfo />
          </Route>
          <Route path="/VoteSuccessful">
            <VoteSuccessful />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;




// https://www.figma.com/file/SFCZEL7VApFAH7GpyoS9t8/High-Fidelity-Design-(Voting-System)?type=design&node-id=282%3A209&mode=design&t=uaeeuwvjaSqM1uD2-1

