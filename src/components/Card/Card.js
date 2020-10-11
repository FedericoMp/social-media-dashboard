import React from 'react';
import './Card.css';

const Card = ({size}) => {
    return (  
        <div className={`
            card
            ${(size === 'lg') ? 'lg' : ''}
            ${(size === 'sm') ? 'sm' : ''}
        `}>
            {/* My Card content... */}
        </div>
    );
}
 
export default Card;