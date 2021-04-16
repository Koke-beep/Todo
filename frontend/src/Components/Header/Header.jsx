import React from 'react';
import './Header.scss';
import DayNightSwitch from '../DayNightSwitch/DayNightSwitch';

export default function Header() {
  return (
    <div id="header__title">
      <DayNightSwitch />
      <h2 className="title__app">Todo-beep list</h2>
    </div>
  );
}
