export default class SwapiService {

  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    // мы будем ожидать пока результат промиса не будет доступен
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Cold not fetch ${url} received ${res.status}`);

    const body = await res.json();
    return body;
  }

  getAllPeople = async () => {
    const res = await this.getResource(`https://swapi.co/api/people/`);
    return res.results.map(this.transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`https://swapi.co/api/people/${id}`);
    return this.transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`https://swapi.co/api/planets/`);
    return res.results.map(this.transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`https://swapi.co/api/planets/${id}`);
    return this.transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`https://swapi.co/api/starships/`);
    return res.results.map(this.transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`https://swapi.co/api/starships/${id}`);
    return this.transformStarship(starship);
  }

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return  item.url.match(idRegExp)[1];
  }

  transformPlanet = (planet) => {
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  transformStarship = (starship) => {
    return {
      id: this.extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  transformPerson = (person) => {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }

}

