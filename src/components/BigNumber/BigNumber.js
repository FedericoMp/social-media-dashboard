import React from 'react';
import './BigNumber.css';

const BigNumber = ({number, size}) => {
    return (
        <span className={`
            number
            ${(size === 'lg') ? 'lg' : ''}
            ${(size === 'sm') ? 'sm' : ''}
        `}>
            {number}
        </span>
    );
}
 
export default BigNumber;