/* eslint-disable no-debugger */
import actionTypes from './ActionTypes';
import todos from '../Storage/InitialState';

export default function loadTodo() {
  debugger;
  return {
    type: actionTypes.LOAD_DATA,
    data: todos,
  };
}
