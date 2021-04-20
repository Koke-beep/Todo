import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Storage/ConfigureStore';

import './Styles/Theme.scss';
import './App.scss';

import Header from './Components/Header/Header';
import Summary from './Components/Summary/Summary';
import TaskList from './Components/TaskList/TaskList';
import NewTaskForm from './Components/NewTaskForm/NewTaskForm';

function App() {
  return (
    <div className="App dark">
      <Provider store={store}>
        <Header />
        <Summary />
        <TaskList />
        <NewTaskForm />
      </Provider>
    </div>
  );
}

export default App;
