import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';


import './App.css';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/SwapiService";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  /*onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  };*/

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch');
    this.setState({
      hasError: true
    })
  }


  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet/>
        <PeoplePage/>
      </div>
    );
  }
}