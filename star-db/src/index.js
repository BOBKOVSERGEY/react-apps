import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />,
  document.getElementById('root'));

// Этапы
// MOUNTING - то когда компанент создается и первый раз отображается на странице
// жизненный цикл
// constructor() => render() =>  componentDidMount()
//-------------//
// UPDATES - то когда наш компанент уже отобразился и готов получать обновления
// жизненный цикл
// пришли новые свойства new props или setState() => render() => componentDidUpdate()
//-------------//
// UNMOUNTING  - то когда компанент удаляестя со страницы
// жизненный цикл
// componentWillUnmount()
//-------------//
// ERROR  - то когда компанент получает ошибку
//-------------//
// жизненный цикл
// componentDidCatch() - ошибка, которая не была поймана