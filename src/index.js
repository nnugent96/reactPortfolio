import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from "./components/App";
import './index.css';
import Jokes from "./components/Jokes";
import Header from "./components/Header";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/jokes' component={Jokes} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </main>
  </Router>,

  document.getElementById('root'));
