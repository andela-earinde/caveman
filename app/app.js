import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore';


const store = configureStore(browserHistory);

class App extends React.Component {

  render() {
    return (
      <div>Arinde Eniola Opeyemi</div>
    );
  }
}


class Crap extends React.Component {

  render() {
    return (
      <div>Crap aewewet crap</div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/crap" component={Crap}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
