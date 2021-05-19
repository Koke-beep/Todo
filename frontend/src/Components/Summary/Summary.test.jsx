import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import Summary from './Summary';
import storage from '../../Redux/Storage/ConfigureStore';
import SummaryList from './SummaryList/SummaryList';

let container = null;
jest.mock('./SummaryList/SummaryList', () => () => <div data-testid="summaryList" />);

describe('Given Summary component', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Print title \'Summary\' when is rendered', () => {
    act(() => {
      render(
        <Provider store={storage}>
          <Summary />
        </Provider>, container,
      );
    });

    const title = document.querySelector('h6');
    expect(title.textContent).toBe('Summary');
  });

  it('Call SummaryList component when is rendered', () => {
    const mockList = jest.fn(() => <SummaryList />);
    act(() => {
      render(
        <Provider store={storage}>
          <Summary mockList={mockList} />
        </Provider>, container,
      );
    });

    expect(mockList).toHaveBeenCalled();
  });
});
