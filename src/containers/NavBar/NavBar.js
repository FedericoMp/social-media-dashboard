import React from 'react';
import Toogle from '../../components/Toogle/Toogle';
import {localeStr} from '../../utils';
import {TOTAL_FOLLOWERS} from '../../services';
import './NavBar.css';

const NavBar = () => {
    return (
        <header className='header-container'>
            <div className='header-wrapper'>
                <div className='header-text'>
                    <h2>Social Media Dashboard</h2>
                    <p>Total Followers: {localeStr(TOTAL_FOLLOWERS)}</p>
                </div>
                <Toogle hasText={true}/>
            </div>
        </header> 
     );
}
 
export default NavBar;