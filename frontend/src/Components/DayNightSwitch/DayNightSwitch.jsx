/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './DayNightSwitch.scss';

export default function switchColor() {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
  );
}
