import React from 'react';
import ThemeContextProvider from './context/ThemeContext';
import NavBar from './containers/NavBar/NavBar';
import SocialMain from './containers/SocialMain/SocialMain';
import Overview from './containers/Overview/Overview';

function App() {
  return (
    <div className='container-app'>
      <ThemeContextProvider>
        <NavBar/>
        <SocialMain/>
        <Overview/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
