import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Root from './containers/root/index.jsx';
import Intro from './containers/intro/index.jsx';
import Tree from './containers/tree/index.jsx';

require('./styles/index.sass');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Root}>
      <Route path="/" component={Intro} />
      <Route path="/tree" component={Tree} />
    </Route>
  </Router>,
  document.getElementById('root')
);
