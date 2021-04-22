/* eslint-disable no-console */
import actionTypes from './ActionTypes';
import todos from '../Storage/InitialState';

export function loadTodo() {
  return {
    type: actionTypes.LOAD_DATA,
    data: todos,
  };
}

export function loadCategories() {
  const { categories } = todos;

  return {
    type: actionTypes.LOAD_CATEGORIES,
    data: categories,
  };
}
