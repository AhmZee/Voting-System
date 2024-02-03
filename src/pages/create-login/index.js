import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CreateAccount from './create-account';
import PhoneVerification from './phone-verification';
import VerificationSuccess from './verification-success';
import LoginUser from './login-user';
import LoginAdmin from './login-admin';

const Account = () => {
  return (
    <div>
      <Switch>
        <Route path="/account/create" component={CreateAccount} />
        <Route path="/account/phone-verification" component={PhoneVerification} />
        <Route path="/account/verification-success" component={VerificationSuccess} />
        <Route path="/account/login-user" component={LoginUser} />
        <Route path="/account/login-admin" component={LoginAdmin} />
        {/* Set CreateAccount as the default component */}
        <Redirect from="/account" to="/account/create" />
      </Switch>
    </div>
  );
}

export default Account;
