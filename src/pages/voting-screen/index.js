import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import VoteCandidate from './vote-candidate';
import CandidateInfo from './candidate-info';
import VoteSuccessful from './vote-successful';


const Voting = () => {
  return (
    <div>
      <Switch>
        <Route path="/voting/vote-candidate" component={VoteCandidate} />
        <Route path="/voting/candidate-info" component={CandidateInfo} />
        <Route path="/voting/vote-successful" component={VoteSuccessful} />
        {/* Set CreateAccount as the default component */}
        <Redirect from="/voting" to="/voting/vote-candidate" />
      </Switch>
    </div>
  );
}

export default Voting;