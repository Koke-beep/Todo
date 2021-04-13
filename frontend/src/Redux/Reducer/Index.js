import { combineReducers } from 'redux';
import taskStatus from './TodoReducer';

const rootReducer = combineReducers({
  taskStatus,
});

export default rootReducer;
