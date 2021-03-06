import React, { Component } from 'react';
import './PeoplePage.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/SwapiService";
import Row from "../row";
import ErrorBoundry from "../error-boundry";



export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };



  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  };
  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                >
        { (i) => `${i.name} (${i.birthYear})` }
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
        <Row left={itemList} right={personDetails}/>
    )
  }
}