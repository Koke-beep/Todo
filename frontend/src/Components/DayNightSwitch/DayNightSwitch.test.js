/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

import DayNightSwitch from './DayNightSwitch';

let appContainer = null;

beforeEach(() => {
  appContainer = document.createElement('div');
  appContainer.classList = 'App dark';
  document.body.appendChild(appContainer);
});

afterEach(() => {
  unmountComponentAtNode(appContainer);
  appContainer.remove();
  appContainer = null;
});

it('Default text and background color(night - dark theme)', () => {
  const appFather = document.querySelector('.App');

  act(() => {
    render(<DayNightSwitch />, appContainer);
  });

  expect(appFather.classList[1]).toBe('dark');
});

it('Change text and background color on click the button (day - light theme)', () => {
  const appFather = document.querySelector('.App');

  act(() => {
    render(<DayNightSwitch />, appContainer);
  });

  const button = document.querySelector('input');
  userEvent.click(button);

  expect(appFather.classList[1]).toBe('light');

  userEvent.click(button);
  expect(appFather.classList[1]).toBe('dark');
});

it('App class is \'light\' when button is clicked 5 times', () => {
  const appFather = document.querySelector('.App');

  act(() => {
    render(<DayNightSwitch />, appContainer);
  });
  const button = document.querySelector('input');
  for (let i = 0; i < 4; i += 1) {
    return userEvent.click(button);
  }

  expect(appFather.classList[1].toBe('light'));
});
