import actionTypes from '../Actions/ActionTypes';

export default function loadTaskReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_TASK:
      return action.todoList;

    case actionTypes.ADD_TASK:
      return [...state, action.newTask];

    default:
      return state;
  }
}
