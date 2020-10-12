import React from 'react';
import NavBar from './containers/NavBar/NavBar';
import SocialMain from './containers/SocialMain/SocialMain';
import Overview from './containers/Overview/Overview';

function App() {
  return (
    <div>
      <NavBar/>
      <SocialMain/>
      <Overview/>
    </div>
  );
}

export default App;
