import React from 'react';

import './Styles/Theme.scss';
import './App.scss';

import Header from './Components/Header/Header';
import Summary from './Components/Summary/Summary';

function App() {
  const theme = 'dark';

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Summary />
    </div>
  );
}

export default App;
