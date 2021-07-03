import { createStore, Reducer, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

/* eslint-disable no-underscore-dangle */
const composeEnharcers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer as Reducer, composeEnharcers(applyMiddleware(thunk)));
/* eslint-enable */

export default store;
