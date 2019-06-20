export default class SwapiService {

  async getResource(url) {
    // мы будем ожидать пока результат промиса не будет доступен
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Cold not fetch ${url} received ${res.status}`);

    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource(`https://swapi.co/api/people/`);
    return res.results.map(this.transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`https://swapi.co/api/people/${id}`);
    return this.transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`https://swapi.co/api/planets/`);
    return res.results.map(this.transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`https://swapi.co/api/planets/${id}`);
    return this.transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`https://swapi.co/api/starships/`);
    return res.results.map(this.transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`https://swapi.co/api/starships/${id}`);
    return this.transformStarship(starship);
  }

  extractId(item) {
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
      costInCredits: starship.costInCredits,
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
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }

}

