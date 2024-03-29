// Init
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes
import Home from '../containers/Home.jsx';

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default index;
