import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import './BigNumber.css';

const BigNumber = ({number, size}) => {

    const {theme} = useContext(ThemeContext);
    const localSize = (size === 'lg') ? 'lg' : (size === 'sm') ? 'sm' : '';
    const localTheme = theme.isDark ? 'dark-theme' : 'light-theme'; 

    return (
        <span className={`big-number ${localSize} ${localTheme}`}>
            {number}
        </span>
    );
}
 
export default BigNumber;