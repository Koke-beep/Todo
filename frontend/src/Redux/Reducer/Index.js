import { combineReducers } from 'redux';
import taskStatus from './TodoReducer';
import categories from './CategoryReducer';
import todoList from './loadTaskReducer';

const rootReducer = combineReducers({
  taskStatus,
  categories,
  todoList,
});

export default rootReducer;
