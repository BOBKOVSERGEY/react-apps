// connect  library React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';

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
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));