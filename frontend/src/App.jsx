import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Storage/ConfigureStore';

import './Styles/Theme.scss';
import './App.scss';

import Header from './Components/Header/Header';
import Summary from './Components/Summary/Summary';

function App() {
  const theme = 'dark';

  return (
    <div className={`App ${theme}`}>
      <Provider store={store}>
        <Header />
        <Summary />
      </Provider>
    </div>
  );
}

export default App;
