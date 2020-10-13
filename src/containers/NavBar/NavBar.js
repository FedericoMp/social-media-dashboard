import React from 'react';
import Toogle from '../../components/Toogle/Toogle';
import {localeStr} from '../../utils';
import {TOTAL_FOLLOWERS} from '../../services';

const NavBar = () => {
    return (
        <header className='navbar-container'>
            <div className='navbar-text'>
                <h2 className='navbar-title'>Social Media Dashboard</h2>
                <p className='navbar-subtitle'>Total Followers: {localeStr(TOTAL_FOLLOWERS)}</p>
            </div>
            <Toogle hasText={true}/>
        </header> 
     );
}
 
export default NavBar;