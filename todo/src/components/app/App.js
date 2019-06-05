import React, { Component } from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './App.css';

// create another component
export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
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

    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);



      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      }
    });
  };

  addItem = (text) => {
    // generate id ?
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    // add element in array ?
    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      // возвращаем новое состояние
      return {
        todoData: newArr
      }

    });

  };

  onToggleImportant = (id) => {
    console.log('Toggle I', id);
  };

  onToggleDone = (id) => {
    console.log('Toggle D', id);
  };

  render() {
    return (
      <div className="col-md-6 mx-auto">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList todos={this.state.todoData}
                  onDeleted={ this.deleteItem }
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}/>
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }



};
