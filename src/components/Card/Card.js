import React from 'react';

const Card = (props) => {

    let borderStyle = '';

    if (props) {
        if (props.data) {
            if (props.data.mainDataType) {
                const {icon} = props.data;
                switch (icon) {
                    case 'fb':
                        borderStyle = 'fb-border';
                        break;
                    case 'tw':
                        borderStyle = 'tw-border';
                        break;
                    case 'ig':
                        borderStyle = 'ig-border';
                        break;
                    case 'yt':
                        borderStyle = 'yt-border';
                        break;
                    default:
                            borderStyle = '';
                        break;
                }
            }
        }
    }

    return (  
        <div className={`card ${borderStyle}`}>
            { props.children }
        </div>
    );
}
 
export default Card;