import React, {useState, useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import './Toogle.css';

const Toogle = ({hasText, text}) => {

    const [toogle, setToogle] = useState(false);

    const {theme, toogleTheme} = useContext(ThemeContext);

    const localTheme = theme.isDark ? 'dark-theme' : 'light-theme';

    const handleChange = (e) => {
        let toogleVal = e.target.checked;
        setToogle(toogleVal)
        toogleTheme(toogleVal)
    }

    return (
        <div className='toogle-wrapper'>
            {
                (hasText)
                ? (
                    (text)
                    ? <p className={`toogle-text ${localTheme}`}>{text}</p>
                    : <p className={`toogle-text ${localTheme}`}>{theme.isDark ? 'Dark' : 'Light'} Theme</p>
                )
                : null
            }
            <label className='toogle'>
                <input 
                    type='checkbox'
                    onChange={handleChange}
                    value={toogle}
                />
                <span className={`slider round ${localTheme}`}></span>
            </label>
        </div>
     );
}
 
export default Toogle;