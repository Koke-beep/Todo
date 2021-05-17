import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import TaskList from './TaskList';

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

  it('\'Acaba la APP\' is render (default)', () => {
    act(() => {
      render(<TaskList />, container);
    });
  });
});
