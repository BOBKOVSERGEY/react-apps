import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';


import './App.css';
import ErrorIndicator from "../error-indicator";
import Row from "../row";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components"

export default class App extends Component {



  state = {
    hasError: false
  };



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

        <PersonDetails itemId={11}/>
        <PlanetDetails itemId={4}/>
        <StarshipDetails itemId={9}/>

        <PersonList/>
        <StarshipList/>
        <PlanetList/>
      </div>
    );
  }
}