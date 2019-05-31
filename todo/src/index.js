// connect  library React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

// create another component
const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  );
};

// create another component
const SearchPanel = () => {
  return (
    <input type="text" placeholder="search"/>
  );
};

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


//const el = React.createElement('h1', null, 'Hello, World');


  // using REACTDOM for render this element
ReactDOM.render(<App/>, document.getElementById('root'));