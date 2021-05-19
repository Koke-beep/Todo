import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import storage from '../../Redux/Storage/ConfigureStore';
import TaskList from './TaskList';
import initialState from '../../Redux/Storage/InitialState';

let container = null;

describe('When TaskList component is render', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Task \'Acaba la APP\' is render (default)', () => {
    act(() => {
      render(
        <Provider store={storage}>
          <TaskList />
        </Provider>, container,
      );
    });
    const task = document.querySelectorAll('button')[3];
    expect(task.textContent).toBe(initialState.todoList[0].todo);
  });
  it('Task \'Acaba la APP\' is render (default)', () => {
    act(() => {
      render(
        <Provider store={storage}>
          <TaskList />
        </Provider>, container,
      );
    });
    const task = document.querySelectorAll('button')[3];
    expect(task.textContent).toBe(initialState.todoList[0].todo);
  });
});
