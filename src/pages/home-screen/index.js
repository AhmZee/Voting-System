import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './home-page';
import CreatePoll1 from './create-poll1';
import CreatePoll2 from './create-poll2';
import Upload from './upload';
import PollCreateSuccess from './poll-create-success';
import JoinVote from './join-vote';
import SelectedPoll from './selected-poll';


const Home = () => {
  return (
    <div>
      <Switch>
        <Route path="/home/home-page" component={HomePage} />
        <Route path="/home/create-poll1" component={CreatePoll1} />
        <Route path="/home/create-poll2" component={CreatePoll2} />
        <Route path="/home/upload" component={Upload} />
        <Route path="/home/poll-create-success" component={PollCreateSuccess} />
        <Route path="/home/join-vote" component={JoinVote} />
        <Route path="/home/selected-poll" component={SelectedPoll} />
        {/* Set CreateAccount as the default component */}
        <Redirect from="/home" to="/home/home-page" />
      </Switch>
    </div>
  );
}

export default Home;