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

export function loadListOfTask() {
  const { todoList } = todos;
  return {
    type: actionTypes.LOAD_TASK,
    todoList,
  };
}

export function addNewTask(newTask) {
  return {
    type: actionTypes.ADD_TASK,
    newTask,
  };
}
