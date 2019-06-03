import React from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './App.css';

// create another component
const App = () => {

  const todoData = [
    {
      id: 1,
      label: 'Drink Coffee',
      important: false
    },
    {
      id: 2,
      label: 'Make Awesome App',
      important: true
    },
    {
      id: 3,
      label: 'Have a lunch',
      important: false
    },

  ];

  return (
    <div className="col-md-6 mx-auto">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};
export default App;
