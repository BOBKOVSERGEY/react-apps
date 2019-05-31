// connect  library React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';

// create another component
const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));