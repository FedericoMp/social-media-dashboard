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

    const showChart = () => {
        if (props.data.mainDataType) {
            props.setShowModal(true)
            props.setmodalData(props.data);
        }
    }

    return ( 
        <div className={`card ${borderStyle}`}
            onClick={() => showChart()}>
            { props.children }
        </div>
    );
}
 
export default Card;