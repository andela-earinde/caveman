import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { syncHistory, routeReducer } from 'react-router-redux';
import reducer from '../reducers/reducer';


export default function configureStore(browserHistory) {
  const reducers = combineReducers({...reducer, routing: routeReducer})

  const reduxRouterMiddleware = syncHistory(browserHistory)
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,
    reduxRouterMiddleware)(createStore);

  const store = createStoreWithMiddleware(reducers);

  return store;
}