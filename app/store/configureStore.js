import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { syncHistory, routeReducer } from 'react-router-redux';
import venuesReducer from '../reducers/reducer';


export default function configureStore(browserHistory) {
  const reducers = combineReducers({venues: venuesReducer, routing: routeReducer});

  const reduxRouterMiddleware = syncHistory(browserHistory);

  const store = createStore(reducers, {}, compose(
    applyMiddleware(thunkMiddleware, reduxRouterMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}