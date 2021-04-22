import { combineReducers } from 'redux';
import taskStatus from './TodoReducer';
import categories from './CategoryReducer';

const rootReducer = combineReducers({
  taskStatus,
  categories,
});

export default rootReducer;
