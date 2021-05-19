import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store';
import SummaryList from './SummaryList';

jest.mock('../../../Redux/Actions/ActionCreator');

describe('Given SummaryList component, when is rendered', () => {
  let container = null;
  const mockStore = configureMockStore();

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Print an empty tag when taskStatus property is not declared', () => {
    const random = { data: { taskStatus: {} } };
    const actions = {
      loadTodo: jest.fn(),
    };

    const storage = mockStore({});
    act(() => {
      render(
        <Provider store={storage}>
          <SummaryList actions={actions} data={random} />
        </Provider>, container,
      );
    });
    const div = document.querySelector('div');

    expect(div).not.toBeTruthy();
  });
});
