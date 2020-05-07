import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Home } from './home';
import { IconContext } from 'react-icons';
import { SideMenu } from './side-menu/SideMenu';

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
        <div className="flex">
          <SideMenu />
          <Home />
        </div>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default App;
