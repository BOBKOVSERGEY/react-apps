// connect  library React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const TodoList = () => {
  const items = ['Learn React', 'Build Awesome App'];
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
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
  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome back</span>;
  return (
    <div>
      {isLoggedIn ? welcomeBox : loginBox}
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
};


//const el = React.createElement('h1', null, 'Hello, World');


  // using REACTDOM for render this element
ReactDOM.render(<App/>, document.getElementById('root'));