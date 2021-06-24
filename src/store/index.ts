import { createStore, Reducer } from 'redux';
import notesApp from 'reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  notesApp as Reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
