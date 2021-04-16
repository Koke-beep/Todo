/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './DayNightSwitch.scss';

export default function switchColor() {
  const [switchColor, setSwitchColor] = useState(true);

  function hadleSwitchColor(switchStatus) {
    const appContainer = document.querySelector('.App').classList;

    if (switchStatus === true) {
      appContainer.remove('light');
      appContainer.add('dark');
    } else {
      appContainer.remove('dark');
      appContainer.add('light');
    }
    setSwitchColor(switchStatus);
  }

  return (
    <div id="switch__color">
      <label className="switch">
        <input type="checkbox" onClick={() => hadleSwitchColor(!switchColor)} />
        <span className="slider round" />
      </label>
    </div>
  );
}
