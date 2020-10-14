import React, {useState, useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import './Toggle.css';

const Toggle = ({hasText, text}) => {

    const [toggle, setToggle] = useState(false);

    const {theme, toggleTheme} = useContext(ThemeContext);

    const localTheme = theme.isDark ? 'dark-theme' : 'light-theme';

    const handleChange = (e) => {
        let toggleVal = e.target.checked;
        setToggle(toggleVal)
        toggleTheme(toggleVal)
    }

    return (
        <div className='toggle-wrapper'>
            {
                (hasText)
                ? (
                    (text)
                    ? <p className={`toggle-text ${localTheme}`}>{text}</p>
                    : <p className={`toggle-text ${localTheme}`}>{theme.isDark ? 'Dark' : 'Light'} Theme</p>
                )
                : null
            }
            <label className='toggle'>
                <input 
                    type='checkbox'
                    onChange={handleChange}
                    value={toggle}
                />
                <span className={`slider round ${localTheme}`}></span>
            </label>
        </div>
     );
}
 
export default Toggle;