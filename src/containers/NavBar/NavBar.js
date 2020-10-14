import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import Toggle from '../../components/Toggle/Toggle';
import {localeStr} from '../../utils';
import {TOTAL_FOLLOWERS} from '../../services';

const NavBar = () => {
    
    const {theme} = useContext(ThemeContext);

    const localTheme = theme.isDark ? 'dark-theme' : 'light-theme';

    return (
        <header className='navbar-container'>
            <div className='navbar-text'>
                <h2 className={`navbar-title ${localTheme}`}>Social Media Dashboard</h2>
                <p className={`navbar-subtitle ${localTheme}`}>Total Followers: {localeStr(TOTAL_FOLLOWERS)}</p>
            </div>
            <Toggle hasText={true}/>
        </header> 
     );
}
 
export default NavBar;