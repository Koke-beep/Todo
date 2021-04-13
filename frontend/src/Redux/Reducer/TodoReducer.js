/* eslint-disable no-debugger */
import actionTypes from '../Actions/ActionTypes';

export default function loadTodoReducer(state = {}, action) {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_DATA:
      return action.data;

    default:
      return state;
  }
}
