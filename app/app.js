import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import HomeContainer from './containers/HomeContainer';

import configureStore from './store/configureStore';


const store = configureStore(browserHistory);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HomeContainer}/>
      <Route path="/venue/:venueID" component={HomeContainer}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
