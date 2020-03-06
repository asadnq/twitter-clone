import React from 'react';
import './App.css';
import { Home } from './home';
import { IconContext } from 'react-icons';

const App = () => {
  return (
    <IconContext.Provider
      value={{ color: 'rgba(29,161,242,1.00)', size: '24px', className: 'icon-default' }}
    >
      <div className="App">
        <Home />
      </div>
    </IconContext.Provider>
  );
};

export default App;
