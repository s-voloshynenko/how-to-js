import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from './containers/root/index.jsx';
import Intro from './containers/intro/index.jsx';
import Tree from './containers/tree/index.jsx';
import Topics from './containers/topics/index.jsx';
import Topic from './containers/topic/index.jsx';
import Error from './containers/error/index.jsx';

require('./styles/index.sass');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Intro} />
      <Route path="tree" component={Tree} />
      <Route path="topics/:theme" component={Topics} >
        <Route path=":id" component={Topic} />
      </Route>
      <Route path="error/:code" component={Error} />
    </Route>
  </Router>,
  document.getElementById('root')
);
