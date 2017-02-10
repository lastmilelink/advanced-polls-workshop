import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import rootEpics from './epics';

import createLogger from 'redux-logger';

// Our main reducer that contains all the other ones
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(
    createEpicMiddleware(combineEpics(rootEpics)),
    createLogger() // Logging
  )
);

export default store;
