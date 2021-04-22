import actionTypes from '../Actions/ActionTypes';

export default function loadCategoryReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CATEGORIES:
      return action.data;

    default:
      return state;
  }
}
