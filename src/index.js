import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
 
const title = 'React with Webpack and Babel';
 
ReactDOM.render(
  <div>{title}</div>,
  <App title={title} />,
  document.getElementById('app')
);
module.hot.accept();
