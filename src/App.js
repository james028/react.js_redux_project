import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './containers/login'
import Layout from './containers/layout'

import * as api from './api'
import * as urls from './urls';


window.zepp = api;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={urls.LOGIN} component={Login} />
            <Route path={urls.ROOT} component={Layout} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
