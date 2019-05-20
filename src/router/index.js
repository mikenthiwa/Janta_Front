import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from "../components/home/App";
import React from 'react';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;