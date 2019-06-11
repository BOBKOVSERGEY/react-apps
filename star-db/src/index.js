const getResource = async (url) => {
  // мы будем ожидать пока результат промиса не будет доступен
  const res = await fetch(url);

  if (!res.ok) throw new Error(`Cold not fetch ${url} received ${res.status}`);

  const body = await res.json();
  return body;
};

getResource('https://swapi.co/api/people/1/')
  // как только ресурс будет доступен
  // мы получаем тело
  .then((body) => {
    // и печатаем его в консоль
    console.log(body);
  })
  .catch((err) => {
    console.error('Could not fetch',err);
  });
