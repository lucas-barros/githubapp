import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Layout } from 'components';
import { Home } from 'containers';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Layout><Home/></Layout>}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
