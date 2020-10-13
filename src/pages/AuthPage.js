import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import {Welcome} from './Welcome';

 const AuthPage = () => {
  return (
      <>
      <Switch>
        <Route
          exact
          path="/auth"
        >         
         <SignIn />     
        </Route>
        <Route exact path="/auth/register"> <SignUp/> </Route>
        <Route exact path="/auth/welcome"> <Welcome/> </Route>
        </Switch>
      </>
  );
};
export default AuthPage;
