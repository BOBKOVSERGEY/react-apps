
class SwapiService {

  async getResource(url) {
    // мы будем ожидать пока результат промиса не будет доступен
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Cold not fetch ${url} received ${res.status}`);

    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource(`https://swapi.co/api/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`https://swapi.co/api/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`https://swapi.co/api/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`https://swapi.co/api/planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResource(`https://swapi.co/api/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`https://swapi.co/api/starships/${id}`);
  }

}

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  //console.log(people);
  people.forEach((item) => {
    console.log(item.name);
  })
});

swapi.getPerson(3).then((person) => {
  console.log('--', person.name);
});

