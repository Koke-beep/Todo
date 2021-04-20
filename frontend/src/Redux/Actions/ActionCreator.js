import actionTypes from './ActionTypes';
import todos from '../Storage/InitialState';

export default function loadTodo() {
  return {
    type: actionTypes.LOAD_DATA,
    data: todos,
  };
}
