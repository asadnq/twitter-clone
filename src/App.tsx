import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { IconContext } from 'react-icons';

import Routes from './routes';

import { theme } from './themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider
        value={{
          color: 'rgba(29,161,242,1.00)',
          size: '24px',
          className: 'icon-default',
        }}>
        <Routes />
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default App;
