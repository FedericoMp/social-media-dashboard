import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import NavBar from '../../containers/NavBar/NavBar';
import SocialMain from '../../containers/SocialMain/SocialMain';
import Overview from '../../containers/Overview/Overview';

const HomePage = () => {

    const {theme} = useContext(ThemeContext);

    const localTheme = theme.isDark ? 'dark-theme' : 'light-theme';

    return (
        <div className={`container-home ${localTheme}`}>
          <NavBar/>
          <SocialMain/>
          <Overview/>
      </div>
    );
}
 
export default HomePage;