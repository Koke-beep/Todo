import { createStore } from 'redux';

import rootReducer from '../Reducer/Index';
import initialState from './InitialState';

function configureStore() {
  return createStore(
    rootReducer,
    initialState,
  );
}

export default configureStore();
