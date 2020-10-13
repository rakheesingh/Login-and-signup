import React from 'react';
import { Switch, Route,BrowserRouter,Redirect } from 'react-router-dom';

import AuthPage from './pages/AuthPage';

function App() {
  console.log('rakhii');
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
      <Route
        path="/auth"
        component={AuthPage}
      />
     <Redirect to="/auth"/>
    </Switch>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
