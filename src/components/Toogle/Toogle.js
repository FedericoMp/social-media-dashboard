import React, {useState} from 'react';
import './Toogle.css';

const Toogle = ({hasText, text}) => {
    const [toogle, setToogle] = useState(false);

    const handleChange = (e) => {
        let toogleVal = e.target.checked;
        setToogle(toogleVal)
    }

    return (
        <div className='toogle-wrapper'>
            {
                (hasText)
                ? (
                    (text)
                    ? <p className='toogle-text'>{text}</p>
                    : <p className='toogle-text'>Switch mode</p>
                )
                : null
            }
            <label className='toogle'>
                <input 
                    type='checkbox'
                    onChange={handleChange}
                    value={toogle}
                />
                <span className='slider round'></span>
            </label>
        </div>
     );
}
 
export default Toogle;