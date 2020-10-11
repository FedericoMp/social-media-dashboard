import React from 'react';
import {ICON_UP, ICON_DOWN} from '../../constants';
import './UpDownArrow.css';

const UpDownArrow = ({text, isUp}) => {
    return ( 
        <div className='item'>
            <img 
                src={(isUp) ? ICON_UP : ICON_DOWN}
                alt={(isUp) ? 'Up' : 'Down'}
            />
            <span
                className={(isUp) ? 'to-up' : 'to-down'}
            >{text}</span>
        </div>
     );
}
 
export default UpDownArrow;