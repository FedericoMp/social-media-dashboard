import React from 'react';
import './BigNumber.css';

const BigNumber = ({number, size}) => {
    return (
        <span className={`
            big-number
            ${(size === 'lg') ? 'lg' : ''}
            ${(size === 'sm') ? 'sm' : ''}
        `}>
            {number}
        </span>
    );
}
 
export default BigNumber;