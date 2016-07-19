import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Root from './containers/root';
import Intro from './containers/intro';

require('./styles/index.sass');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Root}>
      <Route path="/" component={Intro} />
    </Route>
  </Router>,
  document.getElementById('root')
);
