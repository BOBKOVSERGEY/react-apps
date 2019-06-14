import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from "../spinner";

import './RandomPlanet.css';


export default class RandomPlanet extends Component {

  constructor() {
    super();
    this.updatePlanet();
  }

  // проинициализируем в теле класса
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  // попробуем обновить нашу планету и получить данные с сервера
  updatePlanet() {
    // math.random получить значение от 0 до 1
    // math.floor округлим до ближайшего целого
    const id = Math.floor(Math.random() * 20);
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {

    // Диструктурируем необходимы значения из state
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>

    );
  }
};

const PlanetView = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Some" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};



