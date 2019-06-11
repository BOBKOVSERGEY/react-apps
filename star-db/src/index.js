const getResource = async (url) => {
  // мы будем ожидать пока результат промиса не будет доступен
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

getResource('https://swapi.co/api/people/1/')
  // как только ресурс будет доступен
  // мы получаем тело
  .then((body) => {
    // и печатаем его в консоль
    console.log(body);
  });


/*fetch('https://swapi.co/api/people/1/')
  .then((res) => {
    console.log(res);
    // что бы получить json из ответа
    return res.json();
    // формируем тело из результата
  }).then((body) => {
    console.log(body);
  });*/