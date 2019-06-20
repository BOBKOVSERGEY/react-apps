import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './App.css';
import ErrorIndicator from "../error-indicator";

export default class App extends Component {

  state = {
    selectedPerson: 5,
    hasError: false
  };



  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      hasError: true
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }


    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet/>

      </div>
    );
  }
}