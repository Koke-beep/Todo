import React from 'react';

import './Styles/Theme.scss';
import './App.scss';

import Header from './Components/Header/Header';

function App() {
  const theme = 'dark';

  return (
    <div className={`App ${theme}`}>
      <Header />
    </div>
  );
}

export default App;
