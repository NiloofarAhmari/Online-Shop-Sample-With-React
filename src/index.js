import React from 'react';
import ReactDOM from 'react-dom';



import App from './App';
import GlobalState from './globalState';



ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>,
  document.getElementById('root')
);


