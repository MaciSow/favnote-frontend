import { createStore, Reducer, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer as Reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type GetRootState = () => RootState;
