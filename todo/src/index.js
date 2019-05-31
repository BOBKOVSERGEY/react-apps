// connect  library React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';

// create react element, use JSX
const el = (
  <div>
    <h1>My Todo List</h1>
    <input type="text" placeholder="search"/>
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);
//const el = React.createElement('h1', null, 'Hello, World');
console.log(el);

  // use REACTDOM for render this element
ReactDOM.render(el, document.getElementById('root'));