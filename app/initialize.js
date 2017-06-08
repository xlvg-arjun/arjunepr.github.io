import React from 'react';
import ReactDOM from 'react-dom';


import Nav from './components/Nav';

const render = (Component) => {
  ReactDOM.render(
      <Component/>,
    document.getElementById('header')
  );
};

render(Nav);

if(module.hot){
  module.hot.accept('./components/Nav', () => render(Nav));
}