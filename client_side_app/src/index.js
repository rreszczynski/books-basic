import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import Info from './Info/Info.js'
import BooksList from './BooksList/BooksList.js'
import Notfound from './NotFound/NotFound.js'
import LoginPanel from './LoginPanel/LoginPanel.js'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
		<Switch>
			<Route exact path="/" component={BooksList} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/login" component={LoginPanel} />
			<Route component={Notfound} />
		</Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
