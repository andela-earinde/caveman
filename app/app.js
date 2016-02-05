import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import HomeContainer from './containers/HomeContainer';
import VenueDetailContainer from './containers/VenueDetailContainer'

import configureStore from './store/configureStore';

import '../public/css/style.css';


const store = configureStore(browserHistory);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HomeContainer}/>
      <Route path="/venue/:venueID" component={VenueDetailContainer}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
